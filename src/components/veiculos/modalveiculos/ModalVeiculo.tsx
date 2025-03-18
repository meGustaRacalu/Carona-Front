import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import FormVeiculo from '../formveiculo/formveiculo';
import ListaVeiculos from '../listaveiculos/listaveiculos';

function ModalVeiculo() {
    return (
        <>
        <div className="container w-full mx-auto p-4" style={
            {
                background: "linear-gradient(135deg, #f7fafc, #edf2f7, #e2e8f0, #cbd5e0)",
            }
        }>
            <div className="flex justify-end items-center mb-4 h-40">
            <Popup
                trigger={
                    <Link to="/cadastrarveiculo" >
                        <button 
                            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800 right'>
                            Novo Veiculo
                        </button>
                    </Link>
                }
                modal
            >
                <FormVeiculo />
            </Popup>
            </div>
            <ListaVeiculos></ListaVeiculos>
        </div>
        </>
    );
}

export default ModalVeiculo;
