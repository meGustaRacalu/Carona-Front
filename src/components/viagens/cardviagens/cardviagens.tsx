import { Link } from 'react-router-dom'
import Viagem from '../../../models/viagem'

interface CardViagensProps {
    viagem: Viagem
}

function CardViagem({ viagem }: CardViagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <img
                    className="w-200 h-70"
                    src={viagem.image}
                    alt={viagem?.destino} />
                <div className="flex w-full bg-[#003f5c] py-2 px-4 items-center gap-4">
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {viagem?.destino}   
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>Motorista: {viagem.usuario?.nome}</h4>
                    <p>Preço: {viagem.preco}</p>
                    <p>Veiculo: {viagem.veiculo?.modelo} {viagem.veiculo?.marca}</p>
                    <p>Partida em: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(viagem.dataHoraPartida))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarviagem/${viagem.id}`}
                    className='w-full text-slate-100 bg-[#003f5c] hover:bg-backdrop-blur-[12.5px]  
    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarviagem/${viagem.id}`}
                    className='text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>

            </div>
        </div>
    )
}

export default CardViagem
