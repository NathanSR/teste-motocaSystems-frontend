import { EyeIcon, TrashIcon } from 'lucide-react';
import Button from '../Button';
import styles from './ListMotorcycles.module.css';
import { ListMotorcyclesProps } from './ListMotorcycles.types';
import axios from '../../config/axios';
import Swal from 'sweetalert2';

const ListMotorcycles: React.FC<ListMotorcyclesProps> = ({ state }) => {
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
        <div className={styles.ListMotorcycles}>
            {motorcycles.map(data =>
                <div className={styles.CardMotorcycle}>
                    <p className={styles.moto_code}>{data.id}</p>
                    <article className={styles.moto_info}>
                        <h1>
                            <span className={styles.moto_model}>{data.model}</span>
                            <span className={styles[`moto_status_${data.status.replace(" ", "_")}`]}>{data.status}</span>
                        </h1>
                        <p>Valor: {data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <p>Cor: {data.color}</p>
                    </article>
                    <div className={styles.group_buttons}>
                        <Button
                            icon={<TrashIcon color='#FF4C51' size="1.5rem" />}
                            theme='transparent'
                            onClick={() => onDelete(data.id)}
                        />
                        <Button
                            icon={<EyeIcon color='white' size="1.5rem" />}
                            theme='transparent'
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListMotorcycles;