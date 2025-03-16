import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";
import { ToastAlerta } from "../../utils/toastalerta";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef(null); 

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }

    function logout() {
        handleLogout();
        ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
        navigate("/");
    }

    function handleNavigation(route: string) {
        if (!usuario.token) {
            navigate("/login");
        } else {
            navigate(route);
        }
        setMenuAberto(false);  
    }

    function closeMenu() {
        setMenuAberto(false); 
    }

    useEffect(() => {
        function handleClickFora(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuAberto(false);
            }
        }

        if (menuAberto) {
            document.addEventListener("mousedown", handleClickFora);
        } else {
            document.removeEventListener("mousedown", handleClickFora);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickFora);
        };
    }, [menuAberto]);

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-[#003f5c] text-white py-3 z-50">
            <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-10">
                <Link to="/home" className="flex items-center">
                    <img
                        src="https://imgur.com/9jhdRAB.png"
                        alt="Logo PetRide"
                        className="w-auto h-30"
                    />
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/sobre" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300" onClick={closeMenu}>SOBRE</Link>
                    <button onClick={() => {document.getElementById('transicao')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">VIAGENS</button>
                   {/* <button onClick={() => {handleNavigation("/veiculos");}} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">VEÍCULOS</button>*/}
                    <button onClick={() => {document.getElementById('transicao')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">MOTORISTA</button>
                </div>

                {!usuario.token ? (
                    <div className="hidden md:flex gap-4 items-center">
                        <Link to="/login" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300" onClick={closeMenu}>ENTRAR</Link>
                        <Link to="/cadastro" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300" onClick={closeMenu}>CRIAR CONTA</Link>
                    </div>
                ) : (
                    <div className="hidden md:flex gap-4 items-center">
                        <Link to="/perfil" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300" onClick={closeMenu}>PERFIL</Link>
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
                    <div ref={menuRef} className="absolute top-16 left-0 w-full bg-[#003f5cd2] bg-opacity-95 flex flex-col items-center py-4 md:hidden z-50">
                        <Link to="/sobre" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>SOBRE</Link>
                        <button onClick={() => {document.getElementById('transicao viagem/motorista')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">VIAGENS</button>
                        <button onClick={() => {handleNavigation("/veiculos");}} className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>VEÍCULOS</button>
                        <button onClick={() => {document.getElementById('transicao viagem/motorista')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">MOTORISTA</button>
                        
                        {!usuario.token ? (
                            <>
                                <Link to="/login" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>ENTRAR</Link>
                                <Link to="/cadastro" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>CRIAR CONTA</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/perfil" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>PERFIL</Link>
                                <button onClick={logout} className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>SAIR</button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
