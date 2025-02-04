import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import Veiculo from '../../../models/veiculo';

interface CardVeiculosProps {
    veiculo: Veiculo;
}

function CardVeiculos({ veiculo }: CardVeiculosProps) {
    const [isHoveredEditar, setIsHoveredEditar] = useState(false);
    const [isHoveredDeletar, setIsHoveredDeletar] = useState(false);

    return (
        <div
            className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg"
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
                    background-color: #b1bf63;
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
            <header
                className="py-2 px-6 text-white font-bold text-2xl"
                style={{
                    background: "#003f5c",
                }}
            >
                Veículo {veiculo.id}
            </header>
            <div className="flex flex-col bg-white p-4 gap-2">
                <p className="text-xl border-b border-[#b1bf63] pb-2">Modelo: {veiculo.modelo}</p>
                <p className="text-xl border-b border-[#b1bf63] pb-2">Marca: {veiculo.marca}</p>
                <p className="text-xl">Placa: {veiculo.placa}</p>
            </div>
            <div className="flex justify-around w-full gap-2 p-4">
                <Link
                    to={`/editarveiculo/${veiculo.id}`}
                    className="w-1/2 text-center py-3 rounded-3xl text-white btn-card btn-editar"
                    onMouseEnter={() => setIsHoveredEditar(true)}
                    onMouseLeave={() => setIsHoveredEditar(false)}
                >
                    {isHoveredEditar ? <FaPencilAlt /> : "Editar"}
                </Link>
                <Link
                    to={`/deletarveiculo/${veiculo.id}`}
                    className="w-1/2 text-center py-3 rounded-3xl text-white btn-card btn-deletar"
                    onMouseEnter={() => setIsHoveredDeletar(true)}
                    onMouseLeave={() => setIsHoveredDeletar(false)}
                >
                    {isHoveredDeletar ? <FaTrash /> : "Deletar"}
                </Link>
            </div>
        </div>
    );
}

export default CardVeiculos;