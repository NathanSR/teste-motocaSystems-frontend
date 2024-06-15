export interface SearchProps {
    state: [any[], React.Dispatch<React.SetStateAction<any[]>>];
    placeholder?: string;
    querySelector?: string; //É a query CSS para chegar do body até o item a ser filtrado
    APIRoute?: string; // Rota de consulta API caso o isQueryTheAPI seja true
    APIField?: string; // Campo de consulta API caso o isQueryTheAPI seja true, ex: model, color, etc
    isQueryTheAPI: boolean;
}