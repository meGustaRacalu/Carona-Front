import Viagem from "./viagem";


export default interface veiculo {
    id: number;
    modelo: string;
    marca: string;
    placa: string;
    velocidadeMedia: number;
    viagem?: Viagem | null;
}
