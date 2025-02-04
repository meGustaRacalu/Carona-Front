import React from 'react';

function Sobre() {
    return (
        <div className="container mx-auto my-8 px-4 rounded-2xl bg-[#003f5c] text-white">
            <div 
                className="w-full h-72 bg-cover bg-center rounded-t-2xl" 
                style={{ backgroundImage: "url('https://cczconchal.wordpress.com/wp-content/uploads/2015/05/cropped-cc3a3o-e-gato.jpg')" }}>
            </div>

            <div className="p-8">
                <h1 className="text-4xl font-bold mb-6 text-center">
                    PetRide – Porque seu pet merece estar ao seu lado em todos os momentos
                </h1>

                <section className="mb-6">
                    <h2 className="text-3xl font-semibold mb-4">Emoções e Necessidades</h2>
                    <p className="leading-7">
                        Você já sentiu a alegria de ver seu pet correndo no parque, explorando o mundo ao seu lado? Ou a preocupação de levá-lo ao veterinário às pressas quando ele mais precisava? 
                        Ter um pet é viver momentos incríveis e, às vezes, enfrentar desafios. Mas o que nunca deveria ser difícil é transportá-lo com segurança, conforto e amor. É por isso que criamos a 
                        <strong> PetRide</strong> – o app de caronas feito para quem ama seus animais.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-semibold mb-4">Transportar Pets Ainda é um Obstáculo?</h2>
                    <p className="leading-7">
                        Seja para um passeio no parque, uma ida ao veterinário ou até mesmo uma viagem curta, transportar pets é uma dor constante para muitos tutores:
                    </p>
                    <ul className="list-disc list-inside mt-4 leading-7">
                        <li>Os apps de transporte tradicionais rejeitam ou dificultam corridas com animais.</li>
                        <li>O transporte público é complicado, barulhento e pode ser estressante para você e seu pet.</li>
                        <li>Motoristas não preparados podem tornar até um simples deslocamento desconfortável e inseguro.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-semibold mb-4">A Solução – PetRide ao Seu Lado</h2>
                    <p className="leading-7">
                        Com a <strong>PetRide</strong>, tudo isso fica para trás. Somos mais que um app de caronas – somos uma ponte entre você, seu pet e os momentos que importam.
                    </p>
                </section>

                <footer className="text-center mt-8">
                    <p className="text-lg">🐾 <strong>PetRide</strong> – Porque os momentos com seu pet merecem ser vividos plenamente.</p>
                </footer>
            </div>
        </div>
    );
}

export default Sobre;
