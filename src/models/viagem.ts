import Veiculo from './veiculo';
import Usuario from './usuario';

export default interface Postagem {
    id: number;
    tema: Veiculo | null;
    usuario: Usuario | null;
  }