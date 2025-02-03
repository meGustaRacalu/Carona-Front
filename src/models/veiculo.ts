import Viagem from "./viagem";


export default interface veiculo {
    id: number;
    modelo: string;
    marca: string;
    placa: string;
    viagem?: Viagem | null;
}
