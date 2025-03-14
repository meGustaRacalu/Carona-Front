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
        <div className="min-h-screen w-full overflow-y-auto">
            <section
                className="relative flex flex-col items-center justify-center text-center h-[60vh] sm:h-[70vh] bg-center px-6"
                style={{
                    backgroundImage: "url('https://imgur.com/43vYaNA.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 max-w-md sm:max-w-lg text-white">
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white text-gray-900">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">O que é a PetRide?</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                    A <span className="font-semibold text-[#003f5c]">PetRide</span> é um aplicativo feito <strong>tanto para tutores de pets quanto para motoristas</strong> que desejam oferecer viagens seguras e confortáveis para os animais.  
                    Nosso serviço conecta usuários a motoristas preparados para transportar pets com carinho e responsabilidade.  
                    Se você precisa de uma carona para seu pet ou quer se tornar um motorista parceiro, a <strong>PetRide</strong> é a escolha ideal para você!
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
                    <div className="p-8 border rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105">
                        <div className="text-5xl">🚗</div>
                        <h3 className="text-2xl font-semibold mt-4">Para Usuários</h3>
                        <p className="text-gray-700 mt-2">
                            <span className="cursor-pointer text-[#b1bf63] underline" onClick={() => navigate('/cadastro')}>Cadastre</span> e agende viagens seguras para o seu pet. Escolha horários, motoristas e destinos personalizados.
                        </p>
                        <p className="mt-2 text-gray-700">
                            Já tem conta? <span className="cursor-pointer text-[#003f5c] underline" onClick={() => navigate('/login')}>Faça login</span>
                        </p>
                    </div>
                    <div className="p-8 border rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105">
                        <div className="text-5xl">👨‍✈️</div>
                        <h3 className="text-2xl font-semibold mt-4">Para Motoristas</h3>
                        <p className="text-gray-700 mt-2">
                            <span className="cursor-pointer text-[#b1bf63] underline" onClick={() => navigate('/cadastro')}>Torne-se um motorista parceiro</span> e garanta viagens seguras para os pets!
                        </p>
                        <p className="mt-2 text-gray-700">
                            Já é motorista? <span className="cursor-pointer text-[#003f5c] underline" onClick={() => navigate('/login')}>Faça login</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f9fa] py-16 text-center">
                <h2 className="text-3xl font-bold text-[#003f5c]">Como Funciona?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">🐾 Para Usuários</h3>
                        <p className="text-gray-600 mt-2">Viaje com seu pet com conforto e segurança.</p>
                        <ul className="text-gray-600 mt-4 text-left list-disc list-inside">
                            <li><span className="cursor-pointer text-[#003f5c] underline" onClick={() => navigate('/cadastro')}>Cadastre-se</span> e crie seu perfil.</li>
                            <li>Escolha um motorista parceiro.</li>
                            <li>Agende a viagem para o seu pet.</li>
                            <li>Viaje com tranquilidade!</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            Já tem conta? <span className="cursor-pointer text-[#003f5c] underline" onClick={() => navigate('/login')}>Faça login</span>
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">🚖 Para Motoristas</h3>
                        <p className="text-gray-600 mt-2">Ajude no transporte de animais e gere renda extra.</p>
                        <ul className="text-gray-600 mt-4 text-left list-disc list-inside">
                            <li><span className="cursor-pointer text-[#003f5c] underline" onClick={() => navigate('/cadastro')}>Cadastre-se</span> como motorista parceiro.</li>
                            <li>Informe sua disponibilidade e localização.</li>
                            <li>Receba solicitações de viagens.</li>
                            <li>Transporte pets com segurança e cuidado!</li>
                        </ul>
                        <p className="mt-2 text-gray-600">
                            Já é motorista? <span className="cursor-pointer text-[#003f5c] underline" onClick={() => navigate('/login')}>Faça login</span>
                        </p>
                    </div>
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
