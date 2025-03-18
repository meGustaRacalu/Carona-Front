import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext";
import { ToastAlerta } from "../../utils/toastalerta";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

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

    function handleScrollTo(sectionId: string) {
        if (!usuario.token) {
            navigate(`/home#${sectionId}`);
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        } else {
            navigate(`/${sectionId.toLowerCase()}`);
        }
        closeMenu();
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
                    <>
                    <button onClick={() => {document.getElementById('transicao viagem/motorista')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Viagens</button>
                    <button onClick={() => {document.getElementById('transicao viagem/motorista')?.scrollIntoView({ behavior: 'smooth' }); closeMenu();}} className="text-white hover:text-yellow-300 px-1 py-5 rounded-md text-xl font-medium transition duration-300">Motorista</button>
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
                    <Link to="/sobre" className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300" onClick={closeMenu}>SOBRE</Link>
                    <button onClick={() => handleScrollTo("quero-uma-viagem")} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">VIAGENS</button>
                    <button onClick={() => handleScrollTo("quero-ser-motorista")} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">MOTORISTA</button>
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
                        <button onClick={() => handleScrollTo("quero-uma-viagem")} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">VIAGENS</button>
                        <button onClick={() => handleScrollTo("quero-ser-motorista")} className="text-white hover:text-yellow-300 text-lg font-medium transition duration-300">MOTORISTA</button>
                        <button onClick={() => navigate("/veiculos")} className="py-2 hover:text-yellow-300 text-lg font-medium">VEÍCULOS</button>

                        {!usuario.token ? (
                            <>
                                <Link to="/login" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>ENTRAR</Link>
                                <Link to="/cadastro" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>CRIAR CONTA</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/perfil" className="py-2 hover:text-yellow-300 text-lg font-medium" onClick={closeMenu}>PERFIL</Link>
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
