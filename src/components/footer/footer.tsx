import { GithubLogo } from '@phosphor-icons/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        if (location.pathname !== path) {
            navigate(path);
        }
    };

    const handleScrollToSection = () => {
        if (location.pathname === "/home") {
            scrollToSection();
        } else {
            navigate("/home");
            setTimeout(scrollToSection, 500);
        }
    };

    const scrollToSection = () => {
        const section = document.getElementById("como-funciona");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (location.hash === "#como-funciona") {
            scrollToSection();
        }
    }, [location]);

    return (
        <div className="bg-[#003f5c] text-white py-4">
            <div className="container mx-auto flex flex-col items-center text-center space-y-3">
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <span onClick={() => handleNavigation("/sobre")} className="hover:underline cursor-pointer">Sobre</span>
                    <span onClick={handleScrollToSection} className="hover:underline cursor-pointer">Como Funciona</span>
                    <span onClick={() => handleNavigation("/faq")} className="hover:underline cursor-pointer">FAQ</span>
                    <span onClick={() => handleNavigation("/termos")} className="hover:underline cursor-pointer">Termos de Uso</span>
                    <span onClick={() => handleNavigation("/privacidade")} className="hover:underline cursor-pointer">Privacidade</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                    <a href="https://github.com/meGustaRacalu" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                        <GithubLogo size={20} weight="bold" />
                        <span className="ml-1">GitHub</span>
                    </a>
                    <span>•</span>
                    <p>© {new Date().getFullYear()} PetRide</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
