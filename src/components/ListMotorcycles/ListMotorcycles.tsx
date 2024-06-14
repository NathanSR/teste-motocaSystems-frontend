import { EyeIcon, TrashIcon } from 'lucide-react';
import Button from '../Button';
import styles from './ListMotorcycles.module.css';
import { ListMotorcyclesProps } from './ListMotorcycles.types';

const ListMotorcycles: React.FC<ListMotorcyclesProps> = ({ array }) => {
    return (
        <div className={styles.ListMotorcycles}>
            {array.map(data =>
                <div className={styles.CardMotorcycle}>
                    <p className={styles.moto_code}>{data.code}</p>
                    <article className={styles.moto_info}>
                        <h1>
                            <span className={styles.moto_model}>{data.model}</span>
                            <span className={styles[`moto_status_${data.status.replace(" ", "_")}`]}>{data.status}</span>
                        </h1>
                        <p>Valor: {data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <p>Cor: {data.color}</p>
                    </article>
                    <div className={styles.group_buttons}>
                        <Button icon={<TrashIcon color='#FF4C51' size="1.5rem" />} theme='transparent' />
                        <Button icon={<EyeIcon color='white' size="1.5rem" />} theme='transparent' />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListMotorcycles;