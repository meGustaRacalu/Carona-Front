import './Home.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [slideIndex, setSlideIndex] = useState(0);
    const navigate = useNavigate();

    const slides = [
        { text: '"Adorei a experiência! Meu pet foi tratado com muito carinho pelo motorista!"', author: '- Maria Souza' },
        { text: '"Agora posso viajar tranquilo sabendo que meu cachorro está seguro!"', author: '- João Ferreira' },
        { text: '"Ótimo atendimento! Recomendo para todos que precisam viajar com seus pets."', author: '- Ana Clara' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <section
                className="relative flex flex-col items-center justify-center text-center h-[60vh] sm:h-[90vh] bg-center w-full px-6 md:px-12"
                style={{
                    backgroundImage: "url('https://imgur.com/vTZZMmt.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
            </section>

            <section id="transicao" className="flex flex-col items-center justify-center text-center py-16 px-6 md:px-12 lg:max-w-7xl mx-auto bg-white text-gray-900">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">O que é a PetRide?</h2>
                <div className="text-lg max-w-5xl mx-auto leading-relaxed text-justify">
                    <p>
                        A PetRide é um aplicativo feito para <strong>tutores de pets</strong> e também para <strong>motoristas</strong> que desejam ter uma renda extra, oferecendo viagens seguras e confortáveis para os animais.
                    </p>
                    <p id="transicao-viagem-motorista">
                        Nosso serviço conecta passageiros a motoristas preparados para transportar pets com carinho e responsabilidade. Se você precisa de uma carona com o seu pet ou quer se tornar um motorista parceiro, a <strong>PetRide</strong> é a escolha ideal para você!
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full max-w-6xl">
                    {[
                        { 
                            icon: "🚗", 
                            title: "Quero uma viagem", 
                            description: "Cadastre-se e agende viagens seguras com o seu pet. Escolha horários, motoristas e destinos personalizados.", 
                            link: "/cadastro",
                            loginText: "Já tem conta?",
                            loginLink: "/login"
                        },
                        { 
                            icon: "👨‍✈️", 
                            title: "Quero ser motorista", 
                            description: "Seja um motorista parceiro, transforme cada viagem em um ato de amor e garanta sua renda extra!", 
                            link: "/cadastro",
                            loginText: "Já é motorista?",
                            loginLink: "/login"
                        }
                    ].map((item, index) => (
                        <div key={index} className="p-8 border rounded-lg shadow-md flex flex-col items-center text-center w-full">
                            <div className="text-5xl">{item.icon}</div>
                            <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                            <p className="text-gray-700 mt-2">
                                <span className="cursor-pointer text-[#003f5c] font-bold" onClick={() => navigate(item.link)}>Cadastre-se</span> e {item.description}
                            </p>
                            <div className="mt-2 text-gray-700">
                                {item.loginText} <span className="cursor-pointer text-[#003f5c] font-bold" onClick={() => navigate(item.loginLink)}>Faça login</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#f8f9fa] py-16 text-center px-6 md:px-12 lg:max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-[#003f5c]">Como Funciona?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-8">
                    {[
                        {
                            title: "🐾 Para Passageiro",
                            description: "Você e seu pet viajando com conforto e segurança!",
                            items: ["Cadastre-se e crie seu perfil.", "Escolha um motorista parceiro.", "Agende sua viagem com o seu pet.", "Viaje com tranquilidade!"]
                        },
                        {
                            title: "🚖 Para Motoristas",
                            description: "Transforme cada viagem em um ato de amor e renda extra!",
                            items: ["Cadastre-se como motorista parceiro.", "Informe sua disponibilidade e localização.", "Receba solicitações de viagens.", "Transporte pets com segurança e cuidado!"]
                        }
                    ].map((item, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <ul className="text-gray-600 mt-4 text-left list-disc list-inside">
                                {item.items.map((i, idx) => (
                                    <li key={idx} className="text-gray-700">{i}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 text-center">
                <h2 className="text-3xl font-bold text-[#003f5c]">O que dizem sobre nós?</h2>
                <div className="relative w-full max-w-3xl mx-auto mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-opacity duration-500">
                        <p className="text-gray-700 italic">{slides[slideIndex].text}</p>
                        <h4 className="mt-4 font-semibold">{slides[slideIndex].author}</h4>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
