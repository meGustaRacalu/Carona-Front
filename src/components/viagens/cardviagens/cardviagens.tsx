import { Link } from 'react-router-dom'
import Viagem from '../../../models/viagem'
import { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

interface CardViagensProps {
    viagem: Viagem
}

function CardViagem({ viagem }: CardViagensProps) {
    const [isHoveredEditar, setIsHoveredEditar] = useState(false);
    const [isHoveredDeletar, setIsHoveredDeletar] = useState(false);

    return (
        <div  className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg"
        style={{
            background: "linear-gradient(135deg, #f7fafc, #edf2f7, #e2e8f0, #cbd5e0)",
            backgroundSize: "200% 200%",
            animation: "gradientBG 10s ease infinite"
        }}
    >
        <style>
            {
            `@keyframes gradientBG {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .btn-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .btn-card:hover {
                transform: scale(1.05);
                box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.2);
            }
            .btn-editar {
                background-color: #007399;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            .btn-editar:hover {
                background-color: #00557f;
            }
            .btn-deletar {
                background-color: #d9534f;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            .btn-deletar:hover {
                background-color: #c9302c;
            }`
            }
        </style>
        
            <div >
                <img
                    className="w-200 h-70"
                    src={viagem.image}
                    alt={viagem?.destino} />
                <div className="flex w-full bg-[#003f5c] py-2 px-4 items-center gap-4">
                    <h3 className='text-lg text-white font-bold text-center uppercase'>
                        {viagem?.destino}   
                    </h3>
                </div>
                <div className='flex flex-col bg-white p-4 gap-2 '>
                    <h4 className='text-lg font-semibold uppercase'>Motorista: {viagem.usuario?.nome}</h4>
                    <p className="text-xl border-b border-[#b1bf63] pb-2">Preço: {viagem.preco}</p>
                    <p className="text-xl border-b border-[#b1bf63] pb-2">Veiculo: {viagem.veiculo?.modelo} {viagem.veiculo?.marca}</p>
                    <p className="text-xl border-b border-[#b1bf63] pb-2">Partida em: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(viagem.dataHoraPartida))}</p>
                </div>
            </div>
            <div className="flex justify-around">
                <Link to={`/editarviagem/${viagem.id}`}
                     className="w-1/3 text-center py-3 rounded-3xl text-white btn-card btn-editar hover:bg-[#00557f]"
                     onMouseEnter={() => setIsHoveredEditar(true)}
                     onMouseLeave={() => setIsHoveredEditar(false)}
                     >
                    {isHoveredEditar ? <FaPencilAlt /> : "Editar"}
                </Link>

                <Link to={`/deletarviagem/${viagem.id}`}
                    className="w-1/3 text-center py-3 rounded-3xl text-white btn-card btn-deletar"
                    onMouseEnter={() => setIsHoveredDeletar(true)}
                    onMouseLeave={() => setIsHoveredDeletar(false)}
                    >
                    {isHoveredDeletar ? <FaTrash /> : "Deletar"}
                </Link>

            </div>
        </div>
    )
}

export default CardViagem
