import { EyeIcon, TrashIcon } from 'lucide-react';
import Button from '../Button';
import styles from './CardMotorcycle.module.css';
import { CardMotorcycleProps } from './CardMotorcycle.types';

const CardMotorcycle: React.FC<CardMotorcycleProps> = ({ data }) => {
    return (
        <div className={styles.CardMotorcycle}>
            <p className={styles.moto_code}>{data.code}</p>
            <article className={styles.moto_info}>
                <h1>{data.model} <span>{data.status}</span></h1>
                <p>Valor: R$ {data.value}</p>
                <p>Cor: {data.color}</p>
            </article>
            <div className={styles.group_buttons}>
                <Button icon={<TrashIcon color='#FF4C51' size="1.5rem" />} theme='transparent' />
                <Button icon={<EyeIcon color='white' size="1.5rem" />} theme='transparent' />
            </div>
        </div>
    );
}

export default CardMotorcycle;