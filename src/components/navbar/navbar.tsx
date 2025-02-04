import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authcontext";
import { ToastAlerta } from "../../utils/toastalerta";
 
function Navbar() {
 
    const navigate = useNavigate();
 
    const { usuario, handleLogout } = useContext(AuthContext)
 
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
                        className="flex-shrink-0 mt-[-30px]"
                    />
                </Link>
                <div className='flex gap-4'>
                    <Link to='/viagens'  className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Viagens</Link>
                    <Link to='/veiculos' className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Veículos</Link>
                    <Link to='/cadastrarveiculo' className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Motorista</Link>
                    <Link to='/perfil' className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Perfil</Link>
                    <Link to='/login' className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Login</Link>
                    <Link to='' onClick={logout} className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Sair</Link>
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
