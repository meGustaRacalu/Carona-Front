import { useNavigate } from "react-router-dom";
import CardViagens from "../cardviagens/cardviagens";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/authcontext";
import Viagem from "../../../models/viagem";
import { buscar } from "../../../services/service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/toastalerta";

function ListaViagens() {

    const navigate = useNavigate();

    const [viagens, setViagens] = useState<Viagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarViagens() {
        if(token){

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
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'erro')
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarViagens()
    }, [viagens.length])

    return (
        <>
        
            {viagens.length === 0 && (
                 <RotatingLines
                 strokeColor="white"
                 strokeWidth="5"
                 animationDuration="0.75"
                 width="24"
                 visible={true}
                />
            )}
            
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
            {
                viagens.length != 0 &&
                <>
                
                {viagens?.map(viagem => (
                    <CardViagens key={viagem.id} viagem={viagem} />
                ))}
                </>
            }
            </div>
        </>
    );
}

export default ListaViagens;