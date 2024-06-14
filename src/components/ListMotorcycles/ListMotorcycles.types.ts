import { Motorcycle } from "../../pages/Motocycles/Motocycles.types";
export interface ListMotorcyclesProps {
    state: [Motorcycle[], React.Dispatch<React.SetStateAction<Motorcycle[]>>];
}