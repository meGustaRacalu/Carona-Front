import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext";
import Viagem from "../../../models/viagem";
import Veiculo from "../../../models/veiculo";
import { buscar, atualizar, cadastrar } from "../../../services/service";
import { RotatingLines } from "react-loader-spinner";

function FormViagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [veiculos, setVeiculos] = useState<Veiculo[]>([])

    const [veiculo, setVeiculo] = useState<Veiculo>({ id: 0, descricao: '', })
    const [viagem, setViagem] = useState<Viagem>({} as Viagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

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

    async function buscarVeiculoPorId(id: string) {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
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
            alert('Você precisa estar logado');
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
        })
    }, [veiculo])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setViagem({
            ...viagem,
            [e.target.name]: e.target.value,
            veiculo: veiculo,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/viagens');
    }

    async function gerarNovaViagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/viagens`, viagem, setViagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Viagem atualizada com sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Viagem')
                }
            }

        } else {
            try {
                await cadastrar(`/viagens`, viagem, setViagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                alert('Viagem cadastrada com sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Viagem');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoVeiculo = veiculo.descricao === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Viagem' : 'Cadastrar Viagem'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaViagem}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título da Viagem</label>
                    <input
                        type="text"
                        placeholder="Titulo"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                       
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Texto da Viagem</label>
                    <input
                        type="text"
                        placeholder="Texto"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Veículo da Viagem</p>
                    <select name="veiculo" id="veiculo" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarVeiculoPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Veículo</option>

                        {veiculos.map((veiculo) => (
                            <>
                                <option value={veiculo.id} >{veiculo.descricao}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                    disabled={carregandoVeiculo}
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormViagem;
