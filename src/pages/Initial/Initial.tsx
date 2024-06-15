import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import styles from './Initial.module.css'
import { SendIcon } from "lucide-react";

function Initial() {
    const navigate = useNavigate()
    return (
        <div className={styles.Initial}>
            <h1>MOTOCA SYSTEMS</h1>
            <h2>Gerenciamento de Motos</h2>
            <p>Faça o gerenciamento de motos de forma rápida e eficiente aqui!</p>
            <Button icon={<SendIcon size="1.3rem" />} onClick={() => navigate("/motorcycles")}>Entrar</Button>
            <img src="/moto_viagem.svg" />
        </div>
    )
}

export default Initial
