function Sobre() {
    return (
        <div className="bg-[#f8f9fa] text-gray-900">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
                <img 
                    src="https://imgur.com/F7toTMl.png" 
                    alt="Gatinho" 
                    className="w-full h-full object-cover object-center md:object-top lg:object-[center_top]"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="text-center mt-6 px-6">
                <h1 className="text-5xl font-bold text-[#003f5c] px-8 py-4 inline-block w-full max-w-4xl mx-auto">
                🐾 Sobre a PetRide 🐾
                </h1>
            </div>

            <section className="py-16 px-6 bg-white text-gray-900 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6 text-[#003f5c]">Nossa Missão</h2>
                <p className="text-lg leading-relaxed text-justify">
                    A <strong>PetRide</strong> nasceu para facilitar a vida dos tutores de pets, garantindo que eles possam se locomover com segurança e conforto.  
                    Nosso compromisso é oferecer um serviço confiável, onde motoristas parceiros estão preparados para transportar animais com carinho e responsabilidade.
                </p>
            </section>

            <section className="py-16 px-6 bg-white text-gray-900 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6 text-[#003f5c]">Nosso Compromisso</h2>
                <p className="text-lg leading-relaxed text-justify">
                    Selecionamos motoristas treinados para garantir a melhor experiência tanto para os tutores quanto para os animais. 
                    Nosso sistema é pensado para criar um ambiente seguro e confortável, proporcionando mais mobilidade e qualidade de vida para você e seu pet.
                </p>
            </section>

            <section className="py-16 text-center bg-[#f8f9fa] max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-[#003f5c]">Por que escolher a PetRide?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
                    {[
                        { title: "🐾 Motoristas Treinados", text: "Todos os motoristas passam por treinamentos específicos para transportar pets com segurança e cuidado." },
                        { title: "🤝 Parceria Confiável", text: "Nossos motoristas são selecionados para garantir conforto e bem-estar para seu pet." },
                        { title: "🌍 Mobilidade sem Fronteiras", text: "Acesse um transporte exclusivo para seu pet de forma prática e segura." },
                        { title: "💰 Benefícios para Motoristas", text: "Ganhe dinheiro extra transportando passageiros que valorizam o seu trabalho." }
                    ].map((item, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-center items-center text-center border border-gray-200">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-700 mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 text-center bg-[#f8f9fa] max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-[#003f5c]">Nosso Time</h2>
                <p className="text-lg mt-4 max-w-4xl mx-auto">
                    A <strong>PetRide</strong> foi criada por um time apaixonado por inovação e pets.  
                    Conheça os desenvolvedores responsáveis por este projeto:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {[
                        {
                            nome: "Raquel Morabito",
                            github: "https://github.com/raquelmorabito",
                            linkedin: "https://www.linkedin.com/in/raquelmorabito/",
                            foto: "https://avatars.githubusercontent.com/u/178940032?v=4",
                        },
                        {
                            nome: "Gustavo Felipe",
                            github: "https://github.com/Gustav0Felipe",
                            linkedin: "https://www.linkedin.com/in/gustavofelipecustodio/",
                            foto: "https://avatars.githubusercontent.com/u/121760776?v=4",
                        },
                        {
                            nome: "Carla Jemaitis",
                            github: "https://github.com/carlajemaitis",
                            linkedin: "https://www.linkedin.com/in/carlajemaitis/",
                            foto: "https://avatars.githubusercontent.com/u/170134839?v=4",
                        },
                        {
                            nome: "Lucas Unzaga",
                            github: "https://github.com/lucasunzaga",
                            linkedin: null,
                            foto: "https://avatars.githubusercontent.com/u/148667879?v=4",
                        },
                    ].map((dev, index) => (
                        <a href={dev.github} key={index} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
                            <img 
                                src={dev.foto} 
                                alt={dev.nome} 
                                className="w-36 h-36 rounded-full border-4 border-[#003f5c] shadow-lg mb-4"
                            />
                            <p className="text-xl font-semibold text-[#003f5c]">{dev.nome}</p>
                            <div className="mt-2 space-x-3">
                                <a href={dev.github} className="text-[#003f5c] hover:underline">GitHub</a>
                                {dev.linkedin && (
                                    <a href={dev.linkedin} className="text-[#003f5c] hover:underline">LinkedIn</a>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <footer className="text-center mt-14 pb-6 bg-white">
                <p className="text-xl font-semibold text-[#003f5c] mx-auto w-fit">
                    🐾 <strong>PetRide</strong> - Seu pet merece estar do seu lado aonde você for.
                </p>
            </footer>
        </div>
    );
}

export default Sobre;
