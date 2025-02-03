import Popup from 'reactjs-popup';
import FormViagem from '../formviagem/formviagem';

import 'reactjs-popup/dist/index.css';
import './ModalViagem.css'

function ModalViagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Viagem
                    </button>
                }
                modal
            >
                <FormViagem />
            </Popup>
        </>
    );
}

export default ModalViagem;
