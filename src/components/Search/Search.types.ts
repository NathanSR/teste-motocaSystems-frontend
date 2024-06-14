import { Motorcycle } from "../../pages/Motorcycles/Motorcycles.types";

export interface SearchProps {
    state: [Motorcycle[], React.Dispatch<React.SetStateAction<Motorcycle[]>>];
    placeholder?: string;
}