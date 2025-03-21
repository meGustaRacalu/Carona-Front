import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext";
import Viagem from "../../../models/viagem";
import Veiculo from "../../../models/veiculo";
import { buscar, atualizar, cadastrar } from "../../../services/service";
import { ToastAlerta } from "../../../utils/toastalerta";

function FormViagem() {


    const navigate = useNavigate();

    const [veiculos, setVeiculos] = useState<Veiculo[]>([])
    const currentYear = new Date().getFullYear();
    const [veiculo, setVeiculo] = useState<Veiculo>()
    const [viagem, setViagem] = useState<Viagem>({} as Viagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    function redirectViagens(){
        navigate("/redirect" + "/viagens");
    }

    async function buscarViagemPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }


    async function buscarVeiculos() {
        try {
            await buscar('/veiculos', setVeiculos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'erro');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarVeiculos()
        if (id !== undefined) {
            buscarViagemPorId(id)

        }
    }, [id])

    useEffect(() => {
        setViagem({
            ...viagem,
            veiculo: veiculo,
            usuario: usuario
        })
    }, [veiculo])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
 
        if (name === 'veiculo') {
            setViagem({
                ...viagem,
                veiculo: {
                    id: parseInt(value),
                    modelo: "",
                    marca: "",
                    placa: "",
                    velocidadeMedia: 0,
                },
            });
            setVeiculo({...veiculo,
                id: parseInt(value),
                modelo: "",
                marca: "",
                placa: "",
                velocidadeMedia: 0,
            });
        } else {
            setViagem({
                ...viagem,
                [name]: value,
            });
        }
    }

    function retornar() {
        navigate('/viagens');
    }

    async function gerarNovaViagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()


        setViagem({
            ...viagem, 
            usuario: {
            id: usuario.id,
            nome: "",
            usuario: "",
            foto: "",
            senha: ""
            }
        })

        if (id !== undefined) {
            try {
                await atualizar(`/viagens`, viagem, setViagem, {
                    headers: {
                        Authorization: token,
                    },
                });
                ToastAlerta('Viagem atualizada com sucesso', 'sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar a Viagem', 'erro')
                }
            }

        } else {
            try {
                await cadastrar(`/viagens`, viagem, setViagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                ToastAlerta('Viagem cadastrada com sucesso', 'sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar a Viagem', 'erro');
                }
            }
        }
        retornar()
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-gray-100" >
                <div className="border-slate-900 border rounded-lg overflow-hidden shadow-lg bg-white w-screen max-w-2xl h-80vh">
                    <div className="flex items-center justify-between bg-[#00557f] py-4 px-6">
                        <h3 className="text-xl font-bold text-white uppercase">
                            {id ? 'Editar Viagem' : 'Cadastrar Viagem'}
                        </h3>
                    </div>
                    <form className="p-6 flex flex-col gap-4 h-80vh" onSubmit={gerarNovaViagem}>
                        <div className="w-100%">
                            <label className="block text-gray-700 font-semibold mb-2">Ponto de partida da viagem</label>
                            <input
                                type="text"
                                name="origem"
                                placeholder="Digite o ponto de partida da viagem"
                                value={viagem.origem || ''}
                                onChange={atualizarEstado}
                                className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />

                            <label className="block text-gray-700 font-semibold mb-2">Destino da viagem</label>
                            <input
                                type="text"
                                name="destino"
                                placeholder="Digite o destino da viagem"
                                value={viagem.destino || ''}
                                onChange={atualizarEstado}
                                className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                            <label className="block text-gray-700 font-semibold mb-2">Distancia da viagem</label>
                            <input
                                type="text"
                                name="distancia"
                                placeholder="Digite a distancia da viagem"
                                value={viagem.distancia || ''}
                                onChange={atualizarEstado}
                                className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                            <label className="block text-gray-700 font-semibold mb-2">Data e Hora de Partida</label>
                            <input
                                type="datetime-local"
                                name="dataHoraPartida"
                                placeholder="Digite a Data"
                                maxLength={2020}
                                value={viagem.dataHoraPartida?.toString() || ''}
                                onChange={
                                    atualizarEstado
                                }
                                max={currentYear + 2 + "-12-31T23:59"}
                                className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />

                            <label className="block text-gray-700 font-semibold mb-2">Foto: </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Link da Foto"
                                value={viagem.image || ''}
                                onChange={(e) =>
                                    setViagem({ ...viagem, image:e.target.value })
                                }
                                className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Veiculo</label>
                            <select
                                name="veiculo"
                                value={viagem.veiculo?.id.toString() || ''}
                                onChange={atualizarEstado}
                                className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            >
                                <option value="" disabled>Selecione um Veiculo</option>
                                {veiculos.map((veiculo) => (
                                    <option key={veiculo.id} value={veiculo.id.toString()}>
                                        {veiculo.modelo}  |   {veiculo.placa}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button
                                type="button"
                                onClick={redirectViagens}
                                className="w-1/2 bg-red-500 hover:bg-red-700 text-white py-2 rounded font-bold transition duration-300"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="w-1/2 bg-[#007399] hover:bg-[#00557f] text-white py-2 rounded font-bold transition duration-300"
                            >
                                {id ? 'Atualizar' : 'Cadastrar'}
                            </button>
                        </div>
                    </form>
                   

                </div>
            </div>
        </>
    );
}

export default FormViagem;