import { Motorcycle } from "../../pages/Motorcycles/Motorcycles.types";
export interface ListMotorcyclesProps {
    state: [Motorcycle[], React.Dispatch<React.SetStateAction<Motorcycle[]>>];
}