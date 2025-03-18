import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../models/usuario';
import { cadastrarUsuario } from '../../services/service';
import './cadastro.css';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/toastalerta';

function Cadastro() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuario.id !== 0){
      navigate('/login');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
      setIsLoading(true);
    
      try{
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
      }catch(error){
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
      }
    }else{
      ToastAlerta('Dados do usuário inconsistentes! Verifique as informações do cadastro.', 'info');
      setUsuario({...usuario, senha: ''});
      setConfirmaSenha('');
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold relative" style={{
          background: "linear-gradient(135deg, #00557f, #003f5c, #007399)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 15s ease infinite"
      }}>
        <style>
          {`
            @keyframes gradientBG {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .fundoCadastro {
              opacity: 0.5;
              transition: opacity 0.3s ease;
            }
            .fundoCadastro:hover {
              opacity: 1;
            }
            input {
              height: 48px;
            }
          `}
        </style>
        <div className="fundoCadastro hidden lg:block transform -scale-x-100" style={{ backgroundImage: "url('https://imgur.com/HVRad2C.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3 bg-white p-8 rounded-lg shadow-lg' 
          onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-[#00557f] text-4xl font-semibold'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className='text-[#00557f]'>Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo aqui"
              className="border-2 border-[#b1bf63] rounded-2xl p-2"
             value = {usuario.nome}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className='text-[#00557f]'>Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Exemplo: usuario@usuario.com"
              className="border-2 border-[#b1bf63] rounded-2xl p-2"
              value = {usuario.usuario}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className='text-[#00557f]'>Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Adicione o link para sua foto de perfil"
              className="border-2 border-[#b1bf63] rounded-2xl p-2"
              value = {usuario.foto}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className='text-[#00557f]'>Senha</label>
            <input
              type="password"
              id="senha "
              name="senha"
              placeholder="Crie uma senha segura (mínimo 8 caracteres)"
              className="border-2 border-[#b1bf63] rounded-2xl p-2"
              autoComplete='true'
              value = {usuario.senha}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className='text-[#00557f]'>Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirme sua senha"
              className="border-2 border-[#b1bf63] rounded-2xl p-2"
              value={confirmaSenha}
              autoComplete='true'
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-6 mt-4 text-center">
            <Link to="/login" className='w-2/5 text-center  rounded-3xl text-white bg-red-400 hover:bg-red-700 py-3 px-8 flex justify-center'>
              Cancelar
            </Link>
            <button 
                type='submit'
                className='w-2/5 rounded-3xl text-center text-white bg-[#00557f] hover:bg-[#b1bf63] py-3 px-8 flex justify-center' 
                >
                  {isLoading ? <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  /> :
                    <span>Cadastrar</span>
                  }
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
