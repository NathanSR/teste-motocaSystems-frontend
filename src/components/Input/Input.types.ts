export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
    label: string;
    name: string;
    value?: string | number;
    options?: string[]; // Opções para select
    prefix?: string;
}