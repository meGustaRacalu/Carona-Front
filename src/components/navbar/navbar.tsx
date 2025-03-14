import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";
import { ToastAlerta } from "../../utils/toastalerta";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [menuAberto, setMenuAberto] = useState(false);

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }

    function logout() {
        handleLogout();
        ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
        navigate("/");
    }

    return (
        <nav className="w-full bg-[#003f5c] text-white py-3 relative z-50">
            <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-20">
                
                <Link to="/home" className="flex items-center">
                    <img
                        src="https://imgur.com/9jhdRAB.png"
                        alt="Logo PetRide"
                        className="w-auto h-30"
                    />
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/sobre" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">SOBRE</Link>
                    <Link to="/viagens" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">VIAGENS</Link>
                    <Link to="/veiculos" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">VEÍCULOS</Link>
                    <Link to="/cadastrarveiculo" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">MOTORISTA</Link>
                </div>

                {!usuario.token ? (
                    <div className="hidden md:flex gap-4 items-center">
                        <Link to="/login" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">ENTRAR</Link>
                        <Link to="/cadastro" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">CRIAR CONTA</Link>
                    </div>
                ) : (
                    <div className="hidden md:flex gap-4 items-center">
                        <Link to="/perfil" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">PERFIL</Link>
                        <button onClick={logout} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">SAIR</button>
                        <img
                            src={usuario.foto}
                            alt="Foto do usuário"
                            className="w-10 h-10 rounded-full cursor-pointer"
                        />
                    </div>
                )}

                <button onClick={toggleMenu} className="md:hidden text-white text-3xl">
                    {menuAberto ? <HiX /> : <HiMenu />}
                </button>

                {menuAberto && (
                    <div className="absolute top-16 left-0 w-full bg-[#003f5c] bg-opacity-95 flex flex-col items-center py-4 md:hidden z-50">
                        <Link to="/sobre" className="py-2 hover:text-yellow-300 text-lg font-medium">SOBRE</Link>
                        <Link to="/viagens" className="py-2 hover:text-yellow-300 text-lg font-medium">VIAGENS</Link>
                        <Link to="/veiculos" className="py-2 hover:text-yellow-300 text-lg font-medium">VEÍCULOS</Link>
                        <Link to="/cadastrarveiculo" className="py-2 hover:text-yellow-300 text-lg font-medium">MOTORISTA</Link>
                        {!usuario.token ? (
                            <>
                                <Link to="/login" className="py-2 hover:text-yellow-300 text-lg font-medium">ENTRAR</Link>
                                <Link to="/cadastro" className="py-2 hover:text-yellow-300 text-lg font-medium">CRIAR CONTA</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/perfil" className="py-2 hover:text-yellow-300 text-lg font-medium">PERFIL</Link>
                                <button onClick={logout} className="py-2 hover:text-yellow-300 text-lg font-medium">SAIR</button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
