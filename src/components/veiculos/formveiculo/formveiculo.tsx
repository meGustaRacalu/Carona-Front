import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext";
import Veiculo from "../../../models/veiculo";
import { atualizar, buscar, cadastrar } from "../../../services/service";

function FormVeiculo() {

    const navigate = useNavigate();

    const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
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

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setVeiculo({
            ...veiculo,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/veiculos")
    }

    async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/veiculos`, veiculo, setVeiculo, {
                    headers: { 'Authorization': token }
                })
                alert('O Veiculo foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o veiculo.')
                }
            }
        } else {
            try {
                await cadastrar(`/veiculos`, veiculo, setVeiculo, {
                    headers: { 'Authorization': token }
                })
                alert('O Veiculo foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o veiculo.')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Veiculo' : 'Editar Veiculo'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoVeiculo}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="modelo">Modelo do Veiculo</label>
                    <input
                        type="text"
                        placeholder="Diga o modelo do seu veiculo"
                        name='modelo'
                        className="border-2 border-slate-700 rounded p-2"
                        value={veiculo.modelo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="marca">Marca do Veiculo</label>
                    <input
                        type="text"
                        placeholder="Diga a marca do seu veiculo"
                        name='marca'
                        className="border-2 border-slate-700 rounded p-2"
                        value={veiculo.marca}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="placa">Placa do Veiculo</label>
                    <input
                        type="text"
                        placeholder="Diga a placa do seu veiculo"
                        name='placa'
                        className="border-2 border-slate-700 rounded p-2"
                        value={veiculo.placa}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormVeiculo;