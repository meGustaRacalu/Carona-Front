import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { AuthProvider } from './contexts/authcontext';
import Cadastro from './pages/cadastro/cadastro';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import FormVeiculo from './components/veiculos/formveiculo/formveiculo';
import DeletarVeiculo from './components/veiculos/deletarveiculo/deletarveiculo';
import FormViagem from './components/viagens/formviagem/formviagem';
import DeletarViagem from './components/viagens/deletarviagem/deletarviagem';
import Perfil from './pages/perfil/perfil';
import ModalViagem from './components/viagens/modalviagem/modalviagem';
import ModalVeiculo from './components/veiculos/modalveiculos/ModalVeiculo';
import Sobre from './pages/sobre/sobre';

function App() {
    return (
        <>
            <AuthProvider>
                <ToastContainer />
                <BrowserRouter>
                    <Navbar />
                    <div className="h-screen flex-col flex justify-between">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/veiculos" element={<ModalVeiculo />} />
                            <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
                            <Route path="/editarveiculo/:id" element={<FormVeiculo />} />
                            <Route path="/deletarveiculo/:id" element={<DeletarVeiculo />} />
                            <Route path="/viagens" element={<ModalViagem />} />
                            <Route path="/cadastrarviagem" element={<FormViagem />} />
                            <Route path="/editarviagem/:id" element={<FormViagem />} />
                            <Route path="/deletarviagem/:id" element={<DeletarViagem />} />
                            <Route path="/perfil" element={<Perfil />} />
                            <Route path="/sobre" element={<Sobre />} />

                        </Routes>
                    <Footer />
                    </div>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;