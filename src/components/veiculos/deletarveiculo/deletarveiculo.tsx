import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/authcontext"
import Veiculo from "../../../models/veiculo"
import { buscar, deletar } from "../../../services/service"
import { RotatingLines } from "react-loader-spinner"

function DeletarVeiculo() {

    const navigate = useNavigate()

    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/veiculos/${id}`, setVeiculo, {
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

    async function deletarVeiculo() {
        setIsLoading(true)

        try {
            await deletar(`/veiculos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Veículo apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                alert('Erro ao deletar o veículo.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/veiculos")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar veículo</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o veículo a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Veículo
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.modelo}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.marca}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculo.placa}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarVeiculo}>
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
export default DeletarVeiculo
