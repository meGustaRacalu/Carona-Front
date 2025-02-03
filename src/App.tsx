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
import ListaVeiculos from './components/veiculos/listaveiculos/listaveiculos';
import 'react-toastify/dist/ReactToastify.css';
import FormVeiculo from './components/veiculos/formveiculo/formveiculo';
import DeletarVeiculo from './components/veiculos/deletarveiculo/deletarveiculo';
import ListaViagens from './components/viagens/listaviagens/listaviagens';
import FormViagem from './components/viagens/formviagem/formviagem';
import DeletarViagem from './components/viagens/deletarviagem/deletarviagem';
import Perfil from './pages/perfil/perfil';

function App() {
    return (
        <>
            <AuthProvider>
                <ToastContainer />
                <BrowserRouter>
                    <Navbar />
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/veiculos" element={<ListaVeiculos />} />
                            <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
                            <Route path="/editarveiculo/:id" element={<FormVeiculo />} />
                            <Route path="/deletarveiculo/:id" element={<DeletarVeiculo />} />
                            <Route path="/viagens" element={<ListaViagens />} />
                            <Route path="/cadastrarviagem" element={<FormViagem />} />
                            <Route path="/editarviagem/:id" element={<FormViagem />} />
                            <Route path="/deletarpostagem/:id" element={<DeletarViagem />} />
                            <Route path="/perfil" element={<Perfil />} />

                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;