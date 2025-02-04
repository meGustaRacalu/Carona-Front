import Popup from 'reactjs-popup';
import FormViagem from '../formviagem/formviagem';

import 'reactjs-popup/dist/index.css';
import './ModalViagem.css'
import ListaViagens from '../listaviagens/listaviagens';
import { Link } from 'react-router-dom';

function ModalViagem() {
    return (
        <>
        <div className="container mx-auto p-4">
            <div className="flex justify-end items-center mb-4">
            <Popup
                trigger={
                    <Link to="/cadastrarviagem">
                        <button 
                            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800 right'>
                            Nova Viagem
                        </button>
                    </Link>
                }
                modal
            >
                <FormViagem />
            </Popup>
            </div>
            <ListaViagens></ListaViagens>
        </div>
        </>
    );
}

export default ModalViagem;
