import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/authcontext';

function Perfil() {
    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado');
            navigate("/login");
        }
    }, [
    ]);

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden'>
            <img 
                className='w-full h-72 object-cover border-b-8 border-white' 
                style={{ height: "300px" }} 
                src="https://imgur.com/yJpjaeL.png" 
                alt="Capa do Perfil" 
            />

            <img 
                className='rounded-full w-56 mx-auto mt-[-2rem] top-14 border-8 border-white relative z-10' 
                src={usuario.foto} 
                alt={`Foto de perfil de ${usuario.nome}`} 
            />

            <div 
                className="relative mt-[-1rem] h-62 flex flex-col 
                    bg-[#003f5c] text-white text-2xl items-center justify-center"
            >
                <p>Nome: {usuario.nome}</p>
                <p>Email: {usuario.usuario}</p>
            </div>
        </div>
    );
}

export default Perfil;