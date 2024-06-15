import { EyeIcon, TrashIcon } from 'lucide-react';
import Button from '../Button';
import './ListMotorcycles.css';
import { ListMotorcyclesProps } from './ListMotorcycles.types';
import axios from '../../config/axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { delay } from '../../utils/delay.util';

const ListMotorcycles: React.FC<ListMotorcyclesProps> = ({ state }) => {
    const navigate = useNavigate();
    const [motorcycles, setMotorcycles] = state;
    const onDelete = async (id: string) => {
        try {
            const confirm = await Swal.fire({
                title: 'Tem certeza?',
                text: 'Você realmente quer deletar este item?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, deletar!',
                cancelButtonText: 'Cancelar'
            })
            if (confirm.isDismissed) return;

            await axios.delete(`/motorcycles/${id}`);
            const resp = await axios.get("/motorcycles");
            await delay();
            setMotorcycles([...resp.data]);
            Swal.fire({
                icon: 'success',
                title: 'Moto deletada com sucesso!',
            });
        } catch (error: any) {
            Swal.fire({
                icon: 'error',
                title: 'Um Erro Aconteceu...',
                text: error.message,
            });
        }
    }

    return (
        <div className={"ListMotorcycles"}>
            {motorcycles.map(data =>
                <div key={data.id} className={"CardMotorcycle"}>
                    <p className={"moto_code"}>#{data.id}</p>
                    <article className={"moto_info"}>
                        <h1>
                            <span className={"moto_model"}>{data.model}</span>
                            <span className={`moto_status_${data.status.replace(" ", "_")}`}>{data.status}</span>
                        </h1>
                        <p>Valor: {data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <p>Cor: {data.color}</p>
                    </article>
                    <div className={"group_buttons"}>
                        <Button
                            icon={<TrashIcon color='#FF4C51' size="1.5rem" />}
                            theme='transparent'
                            onClick={() => onDelete(data.id)}
                        />
                        <Button
                            icon={<EyeIcon color='white' size="1.5rem" />}
                            theme='transparent'
                            onClick={() => navigate(`/motorcycles/form?motorcycleId=${data.id}`)}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListMotorcycles;