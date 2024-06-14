import { Motorcycle } from "../../App.types";
export interface ListMotorcyclesProps {
    state: [Motorcycle[], React.Dispatch<React.SetStateAction<Motorcycle[]>>];
}