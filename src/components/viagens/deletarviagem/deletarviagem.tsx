import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/authcontext"
import Viagem from "../../../models/viagem"
import { buscar, deletar } from "../../../services/service"
import { RotatingLines } from "react-loader-spinner"

function DeletarViagem() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [viagem, setViagem] = useState<Viagem>({} as Viagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarViagem() {
        setIsLoading(true)

        try {
            await deletar(`/viagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Viagem apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                alert('Erro ao deletar a viagem.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/viagens")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Viagem</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a viagem a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Viagem
                </header>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{viagem.destino}</h4>
                    <p>Preço: {viagem.preco}</p>
                    <p>Veiculo: {viagem.veiculo?.modelo} {viagem.veiculo?.marca}</p>
                    <p>Partida em: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium', 
                    }).format(new Date(viagem.dataHoraPartida))}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarViagem}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarViagem
