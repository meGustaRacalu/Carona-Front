import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/authcontext"
import Viagem from "../../../models/viagem"
import { buscar, deletar } from "../../../services/service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/toastalerta"

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
            ToastAlerta('Você precisa estar logado', 'erro')
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

            ToastAlerta('Viagem apagada com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao deletar a viagem.', 'erro')
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
                    className='py-2 px-6 bg-[#00557f] text-white font-bold text-2xl'>
                    Viagem
                </header>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{viagem.destino}</h4>
                    <p>Preço: {viagem.preco}</p>
                    <p>Veiculo: {viagem.veiculo?.modelo} {viagem.veiculo?.marca}</p>
                    <p>Partida em: {viagem.dataHoraPartida?.toString()}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-[#007399] hover:bg-[#00557f] flex items-center justify-center'
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