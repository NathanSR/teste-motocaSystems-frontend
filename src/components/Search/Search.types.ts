import { Motorcycle } from "../../pages/Motorcycles/Motorcycles.types";

export interface SearchProps {
    state: [Motorcycle[], React.Dispatch<React.SetStateAction<Motorcycle[]>>];
    placeholder?: string;
    querySelector?: string; //É a query CSS para chegar do body até o item a ser filtrado
    APIRoute?: string; // Rota de consulta API caso o isQueryTheAPI seja true
    APIField?: string; // Campo de consulta API caso o isQueryTheAPI seja true, ex: model, color, etc
    isQueryTheAPI: boolean;
}