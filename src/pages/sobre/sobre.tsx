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
<<<<<<< HEAD
                            foto: "https://imgur.com/pJt7XEV.png",
=======
                            foto: "https://avatars.githubusercontent.com/u/170134839?v=4",
>>>>>>> footer
                        },
                        {
                            nome: "Lucas Unzaga",
                            github: "https://github.com/lucasunzaga",
                            linkedin: null,
                            foto: "https://avatars.githubusercontent.com/u/148667879?v=4",
                        },
                    ].map((dev, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
                            <img 
                                src={dev.foto} 
                                alt={dev.nome} 
                                className="w-36 h-36 rounded-full border-4 border-[#003f5c] shadow-lg mb-4"
                            />
                            <p className="text-xl font-semibold text-[#003f5c]">{dev.nome}</p>
                            <div className="mt-2 space-x-3">
                                <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-[#003f5c] hover:underline">GitHub</a>
                                {dev.linkedin && (
                                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#003f5c] hover:underline">LinkedIn</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sobre;
