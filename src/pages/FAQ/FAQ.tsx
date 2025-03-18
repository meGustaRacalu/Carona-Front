import React from "react";

const FAQ: React.FC = () => {
    const faqPassageiros = [
        {
            question: "O que é a PetRide?",
            answer: "A PetRide é um serviço de transporte especializado para tutores que desejam viajar com seus pets de maneira segura e confortável, conectando passageiros a motoristas treinados."
        },
        {
            question: "Como posso agendar uma viagem?",
            answer: "Você precisa criar uma conta na plataforma, selecionar um motorista parceiro, definir o local de embarque e destino e confirmar o agendamento pelo sistema."
        },
        {
            question: "Quais tipos de animais podem ser transportados?",
            answer: "Atualmente, a PetRide permite o transporte de cães e gatos. Para outras espécies, entre em contato com nossa equipe para verificar a disponibilidade."
        },
        {
            question: "Meu pet precisa estar em uma caixa de transporte?",
            answer: "Sim, para garantir a segurança, cães de pequeno porte devem estar em caixas de transporte. Para cães médios e grandes, o uso de cinto de segurança especial para pets é obrigatório."
        },
        {
            question: "Os motoristas podem recusar transportar um pet?",
            answer: "Sim, motoristas podem recusar a corrida caso o pet apresente comportamento agressivo ou esteja fora das diretrizes da PetRide."
        },
        {
            question: "Quanto custa uma viagem com a PetRide?",
            answer: "O valor da viagem varia conforme a distância, horário e demanda. Você pode consultar o preço antes de confirmar a viagem."
        },
        {
            question: "Posso cancelar minha viagem? Há alguma taxa de cancelamento?",
            answer: "Sim, é possível cancelar a viagem pelo sistema. Se o cancelamento ocorrer próximo ao horário da viagem, pode haver cobrança de uma taxa."
        }
    ];

    const faqMotoristas = [
        {
            question: "Como me tornar um motorista parceiro da PetRide?",
            answer: "Para se tornar um motorista, basta se cadastrar na plataforma, enviar os documentos solicitados e aguardar a análise e aprovação do seu perfil."
        },
        {
            question: "Quais são os requisitos para ser motorista?",
            answer: "Você precisa ter um veículo adequado, carteira de motorista válida e passar pelo treinamento obrigatório para transporte de animais."
        },
        {
            question: "Posso definir meus horários de trabalho?",
            answer: "Sim! Os motoristas têm total liberdade para definir sua disponibilidade e escolher quando desejam aceitar viagens."
        },
        {
            question: "Como recebo o pagamento das viagens?",
            answer: "Os pagamentos são processados semanalmente e transferidos diretamente para a conta bancária cadastrada pelo motorista."
        },
        {
            question: "Preciso ter experiência com animais?",
            answer: "Não é obrigatório ter experiência, mas é recomendável que o motorista goste de animais e siga todas as orientações para garantir um transporte seguro e confortável."
        },
        {
            question: "Posso recusar corridas?",
            answer: "Sim, os motoristas podem recusar viagens caso sintam que não podem garantir um transporte seguro para o pet ou se a solicitação estiver fora da sua disponibilidade."
        },
            ];

    return (
        <div className="bg-[#f8f9fa] text-gray-900 py-16 px-6 md:px-12 lg:max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-[#003f5c] text-center mb-10">Perguntas Frequentes (FAQ)</h1>
            
            <h2 className="text-3xl font-semibold text-[#003f5c] mb-6 text-center">Para Passageiros</h2>
            <div className="space-y-8 mb-12">
                {faqPassageiros.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-[#003f5c]">{item.question}</h2>
                        <p className="text-gray-700 mt-2">{item.answer}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-[#003f5c] mb-6 text-center">Para Motoristas</h2>
            <div className="space-y-8">
                {faqMotoristas.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-[#003f5c]">{item.question}</h2>
                        <p className="text-gray-700 mt-2">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
