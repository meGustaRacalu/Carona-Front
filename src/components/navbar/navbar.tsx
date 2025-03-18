import { useContext, useState, useEffect, useRef, ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";
import { ToastAlerta } from "../../utils/toastalerta";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [menuAberto, setMenuAberto] = useState(false);
    const [menuPerfil, setMenuPerfilAberto] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    function toggleMenuPerfil(){
        setMenuPerfilAberto(!menuPerfil);
    }

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }

    function logout() {
        closeMenu();
        handleLogout();
        ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
        navigate("/");
    }

    function closeMenu() {
        setMenuAberto(false);
    }

    function handleLogoClick(event: any) {
        event.preventDefault();
        if (location.pathname === "/home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/home");
        }
    }

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    }, [location]);

    useEffect(() => {
        function handleClickFora(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuAberto(false);
            }
        }

        if (menuAberto) {
            document.addEventListener("mousedown", handleClickFora);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickFora);
        };
    }, [menuAberto]);

    let menu : ReactNode = 
        <>
                    {
                        usuario.token && 
                    <>
                    <Link to="/viagens" className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300" onClick={closeMenu}>Viagens</Link>
                    <Link to='/veiculos' className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300"onClick={closeMenu}>Motorista</Link>
                    </>
                    ||
                    (location.pathname != "/home" && location.pathname != "/")
                    &&
                    <>
                    <Link to="/viagens" className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300" onClick={closeMenu}>Viagens</Link>
                    <Link to='/veiculos' className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300"onClick={closeMenu}>Motorista</Link>
                    </>
                    }
                    {
                    (location.pathname === "/home" || location.pathname === "/") 
                    && !usuario.token &&
                    !menuAberto &&
                    <>
                    <button onClick={() => {document.getElementById('transicao desktop')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Viagens</button>
                    <button onClick={() => {document.getElementById('transicao desktop')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Motorista</button>
                    </>
                    ||
                    (location.pathname === "/home" || location.pathname === "/") 
                    && !usuario.token &&
                    menuAberto &&
                    <>
                    <button onClick={() => {document.getElementById('transicao mobile')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Viagens</button>
                    <button onClick={() => {document.getElementById('transicao mobile')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Motorista</button>
                    </>
                    }
                    <Link to="/sobre" className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300" onClick={closeMenu}>Sobre</Link>
                    
            </>
        
    
    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-[#003f5c] text-white py-3 z-50">
            <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-10">
                <a href="/home" onClick={handleLogoClick} className="flex items-center">
                    <img
                        src="https://imgur.com/9jhdRAB.png"
                        alt="Logo PetRide"
                        className="w-auto h-30"
                    />
                </a>

                <div className="hidden md:flex gap-6 items-center">
                   { menu }
                </div>

          
                {!usuario.token &&
                    <div className="hidden md:flex gap-4 items-center">
                        <Link to="/login" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300" onClick={closeMenu}>Entrar</Link>
                        <Link to="/cadastro" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300" onClick={closeMenu}>Criar Conta</Link>
                    </div>
                        ||
                        usuario.token &&
                        menuPerfil &&
                        <div className="hidden md:flex gap-4 items-center">
                        <Link to="/perfil" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300" onClick={closeMenu}>Perfil</Link>
                        <button onClick={logout} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">Sair</button>
                        <img
                        onClick={toggleMenuPerfil}
                        src={usuario.foto}
                        alt="Foto do usuário"
                        className="hidden md:block w-10 h-10 rounded-full cursor-pointer"
                        />
                        </div>
                        ||
                        usuario.token &&
                        <img
                        onClick={toggleMenuPerfil}
                        src={usuario.foto}
                        alt="Foto do usuário"
                        className="hidden md:block w-10 h-10 rounded-full cursor-pointer"
                        />
                }

                <button onClick={toggleMenu} className="md:hidden text-white text-3xl">
                    {menuAberto ? <HiX /> : <HiMenu />}
                </button>

                {menuAberto && (
                    <div ref={menuRef} className="absolute top-16 left-0 w-full bg-[#003f5cd2] bg-opacity-95 flex flex-col items-center py-4 md:hidden z-50">

                        { menu }

                        {!usuario.token ? (
                            <>
                                <Link to="/login" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>Entrar</Link>
                                <Link to="/cadastro" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>Criar Conta</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/perfil" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>Perfil</Link>
                                <button onClick={logout} className="py-2 hover:text-yellow-300 text-lg font-medium">Sair</button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;