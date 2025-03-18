import React from "react";

const Privacidade: React.FC = () => {
    return (
        <div className="bg-[#f8f9fa] text-gray-900 py-16 px-6 md:px-12 lg:max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-[#003f5c] text-center mb-10">Política de Privacidade</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md leading-relaxed space-y-6">
                
                <p>
                    A <strong>PetRide</strong> respeita sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nossos serviços.
                </p>

                <h2 className="text-2xl font-semibold text-[#003f5c]">1. Informações que Coletamos</h2>
                <p>Coletamos diferentes tipos de informações para fornecer e aprimorar nossos serviços:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li><strong>Informações fornecidas por você:</strong> Nome, e-mail e endereço.</li>
                    <li><strong>Dados de uso:</strong> Informações sobre sua interação com o aplicativo, como histórico de viagens e avaliações.</li>
                    <li><strong>Dados técnicos:</strong> Endereço IP, tipo de dispositivo, sistema operacional e informações de conexão.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">2. Como Utilizamos Seus Dados</h2>
                <p>Os dados coletados são utilizados para:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Facilitar e gerenciar suas solicitações de viagens com motoristas parceiros.</li>
                    <li>Garantir a segurança e qualidade do serviço.</li>
                    <li>Melhorar a experiência do usuário e otimizar o funcionamento da plataforma.</li>
                    <li>Entrar em contato com você para suporte, notificações e informações relevantes.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">3. Compartilhamento de Informações</h2>
                <p>Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto nos seguintes casos:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Quando necessário para a execução do serviço (por exemplo, compartilhar seu nome e localização com motoristas parceiros).</li>
                    <li>Para cumprimento de obrigações legais ou solicitações de autoridades competentes.</li>
                    <li>Com provedores de tecnologia e serviços que ajudam na operação da plataforma, sob contrato de confidencialidade.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">4. Segurança das Informações</h2>
                <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perdas e vazamentos, incluindo:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Criptografia de dados sensíveis.</li>
                    <li>Autenticação e controle de acessos para evitar acessos indevidos.</li>
                    <li>Monitoramento contínuo para prevenir atividades suspeitas.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">5. Seus Direitos</h2>
                <p>Você tem direitos sobre seus dados pessoais, incluindo:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li><strong>Acesso:</strong> Você pode solicitar uma cópia dos seus dados armazenados.</li>
                    <li><strong>Correção:</strong> Caso encontre erros, pode solicitar a atualização de suas informações.</li>
                    <li><strong>Exclusão:</strong> Você pode pedir a remoção dos seus dados, salvo obrigações legais.</li>
                    <li><strong>Revogação de consentimento:</strong> Caso tenha dado permissão para coleta de dados opcionais, pode revogar a qualquer momento.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#003f5c]">6. Retenção de Dados</h2>
                <p>Armazenamos suas informações apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.</p>

                <h2 className="text-2xl font-semibold text-[#003f5c]">7. Alterações nesta Política</h2>
                <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos os usuários caso haja mudanças significativas.</p>

                <h2 className="text-2xl font-semibold text-[#003f5c]">8. Contato</h2>
                <p>Se tiver dúvidas sobre nossa Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco pelo suporte da PetRide.</p>
            </div>
        </div>
    );
};

export default Privacidade;
