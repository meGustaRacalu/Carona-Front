import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaTimes, FaSave } from "react-icons/fa";
import { AuthContext } from "../../../contexts/authcontext";
import Viagem from "../../../models/viagem";
import Veiculo from "../../../models/veiculo";
import { buscar, atualizar, cadastrar } from "../../../services/service";
import { ToastAlerta } from "../../../utils/toastalerta";
import { RotatingLines } from "react-loader-spinner";

function FormViagem() {
    const navigate = useNavigate();
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const currentYear = new Date().getFullYear();
    const [veiculo, setVeiculo] = useState<Veiculo | undefined>();
    const [viagem, setViagem] = useState<Viagem>({} as Viagem);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isHoveredCancelar, setIsHoveredCancelar] = useState(false);
    const [isHoveredSubmeter, setIsHoveredSubmeter] = useState(false);
    
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    function retornar() {
        navigate("/viagens");
    }

    async function buscarViagemPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: { Authorization: token }
            });
            setVeiculo(viagem.veiculo);
        } catch (error: any) {
            if (error.toString().includes('403')) handleLogout();
        }
    }

    async function buscarVeiculos() {
        try {
            await buscar('/veiculos', setVeiculos, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) handleLogout();
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'erro');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarVeiculos();
        if (id) buscarViagemPorId(id);
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        if (name === "veiculo") {
            setVeiculo(veiculos.find(v => v.id.toString() === value));
        }
        setViagem({ ...viagem, [name]: value });
    }

    async function gerarNovaViagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            if (id) {
                await atualizar('/viagens', viagem, setViagem, {
                    headers: { Authorization: token }
                });
                ToastAlerta('Viagem atualizada com sucesso!', 'sucesso');
            } else {
                await cadastrar('/viagens', viagem, setViagem, {
                    headers: { Authorization: token }
                });
                ToastAlerta('Viagem cadastrada com sucesso!', 'sucesso');
            }
        } catch (error: any) {
            if (error.toString().includes('403')) handleLogout();
            else ToastAlerta('Erro ao processar a viagem.', 'erro');
        } finally {
            setIsLoading(false);
            retornar();
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full font-bold relative h-screen mt-10 bg-gray-100">
            <h1 className="text-4xl text-[#00557f] font-semibold mb-6">
                {id ? 'Editar Viagem' : 'Cadastrar Viagem'}
            </h1>
            <form className="flex flex-col gap-4 w-1/3 bg-white p-6 rounded-lg shadow-lg h-auto" onSubmit={gerarNovaViagem}>
                <label className="text-[#00557f]">Ponto de Partida</label>
                <input type="text" name="origem" placeholder="Digite o ponto de partida" value={viagem.origem || ''} onChange={atualizarEstado} className="input" required/>
                
                <label className="text-[#00557f]">Destino</label>
                <input type="text" name="destino" placeholder="Digite o destino" value={viagem.destino || ''} onChange={atualizarEstado} className="input" required/>
                
                <label className="text-[#00557f]">Distância (km)</label>
                <input type="text" name="distancia" placeholder="Digite a distância" value={viagem.distancia || ''} onChange={atualizarEstado} className="input" required/>
                
                <label className="text-[#00557f]">Data e Hora de Partida</label>
                <input type="datetime-local" name="dataHoraPartida" value={viagem.dataHoraPartida?.toString() || ''} onChange={atualizarEstado} className="input" max={`${currentYear + 2}-12-31T23:59`} required/>
                
                <label className="text-[#00557f]">Foto</label>
                <input type="text" name="image" placeholder="Link da foto" value={viagem.image || ''} onChange={atualizarEstado} className="input" required/>
                
                <label className="text-[#00557f]">Veículo</label>
                <select name="veiculo" value={veiculo?.id.toString() || ''} onChange={atualizarEstado} className="input" required>
                    <option value="" disabled>Selecione um veículo</option>
                    {veiculos.map((v) => (
                        <option key={v.id} value={v.id.toString()}>{v.modelo} | {v.placa}</option>
                    ))}
                </select>
                
                <div className="flex justify-around mt-4 text-center">
                    <button type="button" className="btn-cancelar w-2/5" onMouseEnter={() => setIsHoveredCancelar(true)} onMouseLeave={() => setIsHoveredCancelar(false)} onClick={retornar}>
                        {isHoveredCancelar ? <FaTimes size={24} /> : "Cancelar"}
                    </button>
                    <button type="submit" className="btn-submeter w-2/5" onMouseEnter={() => setIsHoveredSubmeter(true)} onMouseLeave={() => setIsHoveredSubmeter(false)}>
                        {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : (isHoveredSubmeter ? <FaSave size={24} /> : (id ? "Atualizar" : "Cadastrar"))}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormViagem;