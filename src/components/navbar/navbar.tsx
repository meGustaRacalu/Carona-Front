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

    if (usuario.token !== "") {

        component = (

            <div className='w-full bg-blue-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Pet Ride</Link>

                    <div className='flex gap-4'>
                        <Link to='/viagens' className='hover:underline'>Viagens</Link>
                        <Link to='/veiculos' className='hover:underline'>Veiculos</Link>
                        <Link to='/cadastrarveiculo' className='hover:underline'>Motorista parceiro</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to='/login' className='hover:underline'>Login</Link>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>

        )

    }

    return (
        <>
            { component }
        </>
    )
}

export default Navbar