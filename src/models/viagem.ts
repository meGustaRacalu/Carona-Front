import Veiculo from './veiculo';
import Usuario from './usuario';
import { ReactNode } from 'react';

export default interface viagem {
  id: number;
  dataHoraPartida: string | number | Date;
  origem: string;
  destino: string;
  veiculo: Veiculo;
  usuario?: Usuario | null;
}