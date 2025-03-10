import './Home.css';

function Home() {
    return (
        <div className="min-h-screen w-full overflow-y-auto">
            <section
                className="relative flex items-center justify-center h-[60vh] sm:h-[70vh] bg-center"
                style={{
                    backgroundImage: "url('https://imgur.com/43vYaNA.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute top-1/3 right-16 sm:right-20 lg:right-24 text-white text-right max-w-xs sm:max-w-md">
                    <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-snug drop-shadow-lg">
                        Seu pet merece estar ao seu lado aonde você for
                    </h1>
                </div>

                <div className="absolute top-[45%] left-[55%] sm:top-[48%] sm:left-[53%] md:top-[50%] md:left-[52%] transform -translate-x-1/2 -translate-y-1/2">
                     <img
                     src="https://imgur.com/OiHVAke.png"
                     alt="Logo PetRide"
                    className="w-16 sm:w-24 md:w-28 lg:w-32"
                      />
                </div>

            </section>

            <section className="bg-white text-gray-900 py-16 px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">O que é a PetRide?</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                    PetRide é o aplicativo ideal para quem ama seus pets e quer levá-los com segurança para qualquer lugar. 
                    Nosso serviço conecta você a motoristas preparados para transportar animais com carinho e responsabilidade.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                    <div className="p-8 border rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">🚗 Viagens</h3>
                        <p className="text-base leading-relaxed">
                            Cadastre e agende suas viagens facilmente pelo nosso app. Escolha horários, motoristas e destinos personalizados.
                        </p>
                    </div>

                    <div className="p-8 border rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">🚙 Veículos</h3>
                        <p className="text-base leading-relaxed">
                            Todos os motoristas cadastrados possuem veículos adaptados e confortáveis para o transporte seguro do seu pet.
                        </p>
                    </div>

                    <div className="p-8 border rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">👨‍✈️ Motoristas</h3>
                        <p className="text-base leading-relaxed">
                            Motoristas treinados para garantir o melhor trajeto para você e seu pet. Torne-se um motorista parceiro e ajude mais tutores!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
