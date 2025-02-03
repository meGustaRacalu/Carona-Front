import { useNavigate } from "react-router-dom";
import CardViagens from "../cardviagens/cardviagens";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/authcontext";
import Viagem from "../../../models/viagem";
import { buscar } from "../../../services/service";
import { DNA } from "react-loader-spinner";

function ListaViagens() {

    const navigate = useNavigate();

    const [viagens, setViagens] = useState<Viagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarViagens() {
        try {
            await buscar('/viagens', setViagens, {
                headers: {
                    Authorization: token,
                },
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
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarViagens()
    }, [viagens.length])

    return (
        <>
            {viagens.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {viagens.map(viagem => (
                    <CardViagens key={viagem.id} viagem={viagem} />
                ))}

            </div>
        </>
    );
}

export default ListaViagens;
