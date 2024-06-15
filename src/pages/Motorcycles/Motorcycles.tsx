import { useEffect, useState } from 'react';
import styles from './Motorcycles.module.css';
import { Motorcycle } from './Motorcycles.types';
import { PlusIcon } from 'lucide-react';
import axios from '../../config/axios';
import Button from '../../components/Button';
import Search from '../../components/Search';
import ListMotorcycles from '../../components/ListMotorcycles';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

function Motorcycles() {
	const navigate = useNavigate()
	const [motorcyles, setMotorcycles] = useState<Motorcycle[]>([]);

	useEffect(() => {
		axios.get("/motorcycles").then((resp) => setMotorcycles([...resp.data]))
	}, [])

	return (
		<div className={styles.Motorcycles}>
			<Header
				contentHeaderTitle="Tabela de Motos"
				contentHeaderAdditional={<>
					<Search state={[motorcyles, setMotorcycles]} isQueryTheAPI={false} querySelector='.App .ListMotorcycles .CardMotorcycle' />
					<Button icon={<PlusIcon size="1.3rem" />} onClick={() => navigate("/motorcycles/form")} children={"NOVO REGISTRO"} hideLabelInMobile />
				</>}
			/>
			<ListMotorcycles state={[motorcyles, setMotorcycles]} />
		</div>
	);
}

export default Motorcycles;
