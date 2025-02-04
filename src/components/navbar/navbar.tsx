import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authcontext";
import { ToastAlerta } from "../../utils/toastalerta";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    let component: ReactNode

    component = (

        <div className='w-full bg-[#003f5c] text-white
            flex justify-center py-4 text-white h-25'>

            <div className="container flex justify-between text-lg">
                <Link to='/home'>
                    <img
                        src="https://imgur.com/9jhdRAB.png"
                        alt="Logo pet ride"
                        width="100px"
                        className="flex-shrink-0 mt-[-30px]" // Adicione uma margem direita para separar a imagem dos links
                    />
                </Link>
                <div className='flex gap-4'>
                    <Link to='/viagens' className='hover:underline'>Viagens</Link>
                    <Link to='/veiculos' className='hover:underline'>Veiculos</Link>
                    <Link to='/cadastrarveiculo' className='hover:underline'>Motorista</Link>
                    <Link to='/perfil' className='hover:underline'>Perfil</Link>
                    <Link to='/login' className='hover:underline'>Login</Link>
                    <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                </div>
            </div>
        </div>
        )
    return (
        <>
            {component}
        </>
    )
}

export default Navbar