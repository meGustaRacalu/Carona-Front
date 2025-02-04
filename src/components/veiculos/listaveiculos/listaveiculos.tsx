import { useContext, useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext";
import Veiculo from "../../../models/veiculo";
import CardVeiculos from "../cardveiculos/cardveiculos";
import { buscar } from "../../../services/service";
import { ToastAlerta } from "../../../utils/toastalerta";

function ListaVeiculos() {
    const navigate = useNavigate();
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarVeiculos() {
        if(token === ''){
            return null;
        }
        try {
            await buscar('/veiculos', setVeiculos, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao carregar veículos.', 'erro');
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'erro');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarVeiculos();
    }, [veiculos.length]);

    return (
        <div
        className="flex flex-col items-center justify-start w-full font-bold relative"
        style={{
            background: "linear-gradient(135deg, #f7fafc, #edf2f7, #e2e8f0, #cbd5e0)",
            backgroundSize: "200% 200%",
            animation: "gradientBG 10s ease infinite",
            minHeight: "100vh",
            }}
        >
            <style>
                {`
                    @keyframes gradientBG {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>
            {veiculos.length === 0 ? (
                <DotLottieReact
                    src="/path/to/car-animation.lottie" // Substitua pelo caminho correto
                    loop
                    autoplay
                    style={{ height: 200, width: 200, marginTop: "2rem" }}
                />
            ) : (
                <div className="container my-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {veiculos.map((veiculo) => (
                            <CardVeiculos key={veiculo.id} veiculo={veiculo} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListaVeiculos;
