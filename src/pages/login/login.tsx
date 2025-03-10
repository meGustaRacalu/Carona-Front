import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { AuthContext } from '../../contexts/authcontext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/usuariologin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario.token !== '') {
            navigate('/home');
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <>
            <div
                className="flex flex-col items-center justify-center h-screen font-bold relative overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #00557f, #003f5c, #007399)",
                    backgroundSize: "400% 400%",
                    animation: "gradientBG 15s ease infinite"
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
                <div className="hidden md:block" 
     style={{
         position: "absolute",
         top: "10%",
         left: "10%",
         width: "250px",
         height: "250px",
         borderRadius: "50%",
         background: "rgba(255, 255, 255, 0.1)"
     }}>
    <img
        src="https://imgur.com/cHIAgds.png"
        alt="Decorative"
        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-64 h-auto decorative-img"
    />
</div>

<div className="hidden md:block"
     style={{
         position: "absolute",
         bottom: "15%",
         right: "5%",
         width: "300px",
         height: "300px",
         borderRadius: "50%",
         background: "rgba(255, 255, 255, 0.05)"
     }}>
    <img
        src="https://imgur.com/cHIAgds.png"
        alt="Decorative"
        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-64 h-auto decorative-img"
    />
</div>
               
                <form
    className="flex justify-center items-center flex-col w-full max-w-md gap-4 
               bg-white p-8 rounded-lg shadow-lg mt-36 md:w-1/3"
    onSubmit={login}
>
                    <h2 className="text-[#00557f] text-4xl font-semibold">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="text-[#00557f]">
                            Usuário (e-mail)
                        </label>
                        <input
                            type="email"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite seu e-mail"
                            className="border-2 border-[#b1bf63] rounded-2xl p-2"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className="text-[#00557f]">
                            Senha (mínimo 8 caracteres)
                        </label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            className="border-2 border-[#b1bf63] rounded-2xl p-2"
                            minLength={8}
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-3xl bg-[#00557f] text-white py-2 px-6 mt-4
                                   hover:bg-[#b1bf63] hover:shadow-[0_0_15px_1px] hover:shadow-[#00557f]
                                   transition-transform transform active:scale-105 duration-300"
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>
                    <hr className="border-[#b1bf63] w-full" />
                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link
                            to="/cadastro"
                            className="text-[#00557f] hover:underline"
                        >
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login;
