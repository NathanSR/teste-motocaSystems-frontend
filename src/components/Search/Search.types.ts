import { Motorcycle } from "../../pages/Motocycles/Motocycles.types";

export interface SearchProps {
    state: [Motorcycle[], React.Dispatch<React.SetStateAction<Motorcycle[]>>];
    placeholder?: string;
}