import Viagem from "./viagem";


export default interface viagem {
    descricao: ReactNode;
    id: number;
    viagem?: Viagem | null;
}
