import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { AuthProvider } from './contexts/authcontext';
import Cadastro from './pages/cadastro/cadastro';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import { ToastContainer } from 'react-toastify';
import FormVeiculo from './components/veiculos/formveiculo/formveiculo';
import DeletarVeiculo from './components/veiculos/deletarveiculo/deletarveiculo';
import FormViagem from './components/viagens/formviagem/formviagem';
import DeletarViagem from './components/viagens/deletarviagem/deletarviagem';
import Perfil from './pages/perfil/perfil';
import ModalViagem from './components/viagens/modalviagem/modalviagem';
import ModalVeiculo from './components/veiculos/modalveiculos/ModalVeiculo';
import Sobre from './pages/sobre/sobre';
import FAQ from './pages/FAQ/FAQ';
import TermosDeUso from './pages/termos/termos';
import Privacidade from './pages/privacidade/privacidade';
import Redirect from './components/redirect/redirect';

function App() {
    return (
        <AuthProvider>
            <ToastContainer />
            <BrowserRouter>
                <Navbar />
                <div className="min-h-screen flex flex-col">
                    <div className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/veiculos" element={<FormVeiculo />} />
                            <Route path="/cadastrarveiculo" element={<ModalVeiculo />} />
                            <Route path="/editarveiculo/:id" element={<FormVeiculo />} />
                            <Route path="/deletarveiculo/:id" element={<DeletarVeiculo />} />
                            <Route path="/viagens" element={<ModalViagem />} />
                            <Route path="/cadastrarviagem" element={<FormViagem />} />
                            <Route path="/editarviagem/:id" element={<FormViagem />} />
                            <Route path="/deletarviagem/:id" element={<DeletarViagem />} />
                            <Route path="/perfil" element={<Perfil />} />
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/termos" element={<TermosDeUso />} />
                            <Route path="/privacidade" element={<Privacidade />} />
                            <Route path="/redirect/:link" element={<Redirect />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
