import Veiculo from './veiculo';
import Usuario from './usuario';
import { ReactNode } from 'react';

export default interface viagem {
    tema: any;
    titulo: ReactNode;
    texto: ReactNode;
    data: string | number | Date;
    id: number;
    veiculo: Veiculo | null;
    usuario: Usuario | null;
  }