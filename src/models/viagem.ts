import Veiculo from './veiculo';
import Usuario from './usuario';

export default interface viagem {
  id: number;
  dataHoraPartida: string | number | Date;
  origem: string;
  destino: string;
  distancia: number;
  veiculo?: Veiculo;
  preco: number;
  usuario?: Usuario | null;
}