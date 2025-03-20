import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTimes, FaSave } from "react-icons/fa";
import { AuthContext } from "../../../contexts/authcontext";
import Veiculo from "../../../models/veiculo";
import { atualizar, buscar, cadastrar } from "../../../services/service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/toastalerta";

function FormVeiculo() {
    const navigate = useNavigate();
    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isHoveredCancelar, setIsHoveredCancelar] = useState(false);
    const [isHoveredSubmeter, setIsHoveredSubmeter] = useState(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'erro');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setVeiculo({
            ...veiculo,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/veiculos");
    }

    async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/veiculos`, veiculo, setVeiculo, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('O Veículo foi atualizado com sucesso!', 'sucesso');
            } else {
                await cadastrar(`/veiculos`, veiculo, setVeiculo, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('O Veículo foi cadastrado com sucesso!', 'sucesso');
            }
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao processar o veículo.', 'erro');
            }
        } finally {
            setIsLoading(false);
            retornar();
        }
    }

    return (
        <div
        className="flex flex-col items-center justify-center w-full font-bold relative h-screen mt-10"
        style={{
            background: "linear-gradient(135deg, #f7fafc, #edf2f7, #e2e8f0, #cbd5e0)",
            backgroundSize: "200% 200%",
            animation: "gradientBG 10s ease infinite",
            minHeight: "100vh",
            }}
        >
            <style>
                {`
                    @keyframes gradientBG {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    input {
                        height: 48px;
                        border: 2px solid #007399;
                        border-radius: 12px;
                        padding: 0 10px;
                    }
                    .btn-cancelar {
                        background-color: #d9534f;
                        color: white;
                    }
                    .btn-cancelar:hover {
                        background-color: #c9302c;
                        color: white;
                    }
                    .btn-submeter {
                        background-color: #007399;
                        color: white;
                    }
                    .btn-submeter:hover {
                        background-color: #00557f;
                        color: white;
                    }
                    button {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    button:hover {
                        transform: scale(1.05);
                        box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.2);
                    }
                `}
            </style>
            <h1 className="text-4xl text-[#00557f] font-semibold mb-6">
                {id === undefined ? 'Cadastrar Veículo' : 'Editar Veículo'}
            </h1>
            <form
                className="flex flex-col gap-4 w-1/3 bg-white p-6 rounded-lg shadow-lg h-90vh"
                onSubmit={gerarNovoVeiculo}
            >
                <div className="flex flex-col gap-4">
                    <label htmlFor="modelo" className="text-[#00557f]">Modelo do Veículo</label>
                    <input
                        type="text"
                        id="modelo"
                        name="modelo"
                        placeholder="Digite o modelo do seu veículo"
                        value={veiculo.modelo}
                        onChange={(e) => atualizarEstado(e)}
                    />
                    <label htmlFor="marca" className="text-[#00557f]">Marca do Veículo</label>
                    <input
                        type="text"
                        id="marca"
                        name="marca"
                        placeholder="Digite a marca do seu veículo"
                        value={veiculo.marca}
                        onChange={(e) => atualizarEstado(e)}
                    />
                    <label htmlFor="placa" className="text-[#00557f]">Placa do Veículo</label>
                    <input
                        type="text"
                        id="placa"
                        name="placa"
                        placeholder="Digite a placa do seu veículo (7 Digitos Ex: HWE7748)"
                        value={veiculo.placa}
                        onChange={(e) => atualizarEstado(e)}
                    />
                    <label htmlFor="velocidadeMedia" className="text-[#00557f]">Velocidade Média do Veículo (km/h)</label>
                    <input
                        type="text"
                        id="velocidadeMedia"
                        name="velocidadeMedia"
                        placeholder="Especifique a Velocidade Média do seu veículo"
                        value={veiculo.velocidadeMedia}
                        onChange={(e) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex justify-around mt-4 text-center">
                    <button
                        type="button"
                        className="rounded-3xl py-3 px-4 btn-cancelar w-2/5"
                        onMouseEnter={() => setIsHoveredCancelar(true)}
                        onMouseLeave={() => setIsHoveredCancelar(false)}
                        onClick={retornar}
                    >
                        {isHoveredCancelar ? <FaTimes size={24} /> : "Cancelar"}
                    </button>
                    <button
                        type="submit"
                        className="rounded-3xl py-3 px-4 btn-submeter w-2/5"
                        onMouseEnter={() => setIsHoveredSubmeter(true)}
                        onMouseLeave={() => setIsHoveredSubmeter(false)}
                    >
                        {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : (isHoveredSubmeter ? <FaSave size={24} /> : (id === undefined ? "Cadastrar" : "Atualizar"))}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormVeiculo;
