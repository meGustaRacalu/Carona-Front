import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext";
import Veiculo from "../../../models/veiculo";
import CardVeiculos from "../cardveiculos/cardveiculos";
import { buscar } from "../../../services/service";

function ListaVeiculos() {

    const navigate = useNavigate();

    const [veiculos, setVeiculos] = useState<Veiculo[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

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
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarVeiculos()    
    }, [veiculos.length])
    
    return (
        <>
        {veiculos.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {veiculos.map((veiculo) => (
                            <CardVeiculos key={veiculo.id} veiculo={veiculo} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaVeiculos;