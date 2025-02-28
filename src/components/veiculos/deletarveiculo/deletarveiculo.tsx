import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTrash, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../contexts/authcontext";
import Veiculo from "../../../models/veiculo";
import { buscar, deletar } from "../../../services/service";
import { ToastAlerta } from "../../../utils/toastalerta";

function DeletarVeiculo() {
    const navigate = useNavigate();
    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo);
    const [, setIsLoading] = useState<boolean>(false);
    const [isHoveredDeletar, setIsHoveredDeletar] = useState(false);
    const [isHoveredCancelar, setIsHoveredCancelar] = useState(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
                headers: {
                    'Authorization': token
                }
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
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarVeiculo() {
        setIsLoading(true);

        try {
            await deletar(`/veiculos/${id}`, {
                headers: {
                    'Authorization': token
                }
            });

            ToastAlerta('Veículo removido com sucesso!', 'sucesso');
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao remover o veículo.', 'erro');
            }
        }

        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/veiculos");
    }

    return (
        <div
        className="flex flex-col items-center justify-start w-full font-bold relative"
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
                    button {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .btn-cancelar {
                        background-color: #b1bf63;
                        color: white;
                    }
                    .btn-cancelar:hover {
                        background-color: #00557f;
                        color: white;
                    }
                    .btn-deletar {
                        background-color: #d9534f;
                        color: white;
                    }
                    .btn-deletar:hover {
                        background-color: #c9302c;
                        color: white;
                    }
                `}
            </style>
            <h1 className="text-4xl text-black-semibold mb-6">Remover Veículo</h1>
            <p className="text-center text-black font-semibold mb-6">
                Deseja realmente remover o veículo abaixo?
            </p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-lg w-1/3">
                <header
                    className="py-4 px-6 bg-[#003f5c] text-white font-bold text-2xl"
                >
                    Detalhes do Veículo
                </header>
                <div className="flex flex-col bg-gray-100 p-4 gap-2">
                    <p className="text-xl border-b border-[#b1bf63] pb-2">Modelo: {veiculo.modelo}</p>
                    <p className="text-xl border-b border-[#b1bf63] pb-2">Marca: {veiculo.marca}</p>
                    <p className="text-xl">Placa: {veiculo.placa}</p>
                </div>
                <div className="flex justify-around p-4">
                    <button
                        className="rounded-3xl py-3 px-8 btn-cancelar"
                        onMouseEnter={() => setIsHoveredCancelar(true)}
                        onMouseLeave={() => setIsHoveredCancelar(false)}
                        onClick={retornar}
                    >
                        {isHoveredCancelar ? <FaTimes size={24} /> : "Cancelar"}
                    </button>
                    <button
                        className="rounded-3xl py-3 px-8 btn-deletar"
                        onMouseEnter={() => setIsHoveredDeletar(true)}
                        onMouseLeave={() => setIsHoveredDeletar(false)}
                        onClick={deletarVeiculo}
                    >
                        {isHoveredDeletar ? <FaTrash size={24} /> : "Deletar"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarVeiculo;
