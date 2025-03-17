import React from "react";

const TermosDeUso: React.FC = () => {
    return (
        <div className="bg-[#f8f9fa] text-gray-900 py-16 px-6 md:px-12 lg:max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-[#003f5c] text-center mb-10">Termos de Uso</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md leading-relaxed space-y-6">
                
                <p>
                    Bem-vindo à <strong>PetRide</strong>. Ao utilizar nossa plataforma, você concorda com os seguintes Termos de Uso. Leia atentamente as informações abaixo antes de prosseguir.
                </p>

                <h2 className="text-2xl font-semibold text-[#003f5c]">1. Definições</h2>
                <p>Os seguintes termos são utilizados neste documento:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li><strong>Usuário:</strong> Pessoa que utiliza a plataforma para solicitar ou oferecer transporte de pets.</li>
                    <li><strong>Motorista Parceiro:</strong> Condutor cadastrado na PetRide, responsável pelo transporte de pets e passageiros.</li>
                    <li><strong>Plataforma:</strong> O aplicativo e site da PetRide.</li>
                    <li><strong>Pet:</strong> Animal de estimação transportado pelo motorista parceiro.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">2. Cadastro e Conta do Usuário</h2>
                <p>Para utilizar os serviços da PetRide, o usuário deve:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Ser maior de 18 anos.</li>
                    <li>Fornecer informações verdadeiras e completas no cadastro.</li>
                    <li>Manter a segurança das credenciais de login.</li>
                    <li>Notificar imediatamente a PetRide sobre qualquer uso não autorizado da conta.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">3. Regras para Motoristas Parceiros</h2>
                <p>Os motoristas cadastrados na plataforma devem seguir as diretrizes abaixo:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Ter carteira de habilitação válida.</li>
                    <li>Possuir veículo adequado para transporte de pets.</li>
                    <li>Tratar os passageiros e pets com respeito e segurança.</li>
                    <li>Seguir todas as normas de trânsito e regulamentos locais.</li>
                    <li>Manter o veículo limpo e seguro para os pets.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">4. Responsabilidades dos Usuários</h2>
                <p>Ao utilizar a PetRide, os usuários devem:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Fornecer informações corretas ao agendar uma viagem.</li>
                    <li>Garantir que o pet esteja em condições adequadas para o transporte.</li>
                    <li>Utilizar caixas de transporte ou cintos de segurança quando necessário.</li>
                    <li>Respeitar os motoristas e as diretrizes da plataforma.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">5. Pagamentos e Tarifas</h2>
                <p>Os valores das viagens são definidos com base em critérios como distância, horário e demanda. As regras incluem:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Os pagamentos devem ser realizados antes do início da viagem.</li>
                    <li>Reembolsos são analisados caso a caso.</li>
                    <li>Cancelamentos podem estar sujeitos a taxas.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">6. Cancelamento e Penalidades</h2>
                <p>Os usuários podem cancelar viagens, porém, algumas condições se aplicam:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Cancelamentos próximos ao horário da viagem podem gerar taxa de cancelamento.</li>
                    <li>Motoristas que cancelam frequentemente podem ser removidos da plataforma.</li>
                    <li>Condutas inadequadas podem levar à suspensão ou bloqueio da conta.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">7. Privacidade e Segurança</h2>
                <p>A PetRide adota medidas para proteger os dados dos usuários. Para mais detalhes, consulte nossa <a href="/privacidade" className="text-[#003f5c] font-semibold hover:underline">Política de Privacidade</a>.</p>

                <h2 className="text-2xl font-semibold text-[#003f5c]">8. Modificações nos Termos</h2>
                <p>A PetRide pode modificar os Termos de Uso a qualquer momento. Os usuários serão notificados sobre mudanças significativas.</p>

                <h2 className="text-2xl font-semibold text-[#003f5c]">9. Contato</h2>
                <p>Se tiver dúvidas ou precisar de suporte, entre em contato com nossa equipe.</p>
            </div>
        </div>
    );
};

export default TermosDeUso;
