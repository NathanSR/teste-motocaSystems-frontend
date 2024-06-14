export interface Motorcycle {
    code: string;
    model: string;
    color: string;
    value: number;
    status: "Em estoque" | "Sem estoque" | "Em trânsito";
}