import { useEffect, useState } from 'react';
import styles from './Motorcycles.module.css';
import { Motorcycle } from '../../pages/Motocycles/Motocycles.types';
import { PlusIcon } from 'lucide-react';
import axios from '../../config/axios';
import Button from '../../components/Button';
import Search from '../../components/Search';
import ListMotorcycles from '../../components/ListMotorcycles';
import Header from '../../components/Header';

function Motorcycles() {
	const [motorcyles, setMotorcycles] = useState<Motorcycle[]>([]);

	useEffect(() => {
		axios.get("/motorcycles").then((resp) => setMotorcycles([...resp.data]))
	}, [])

	return (
		<div className={styles.Motorcycles}>
			<Header
				contentHeaderTitle="Tabela de Motos"
				contentHeaderAdditional={<>
					<Search />
					<Button icon={<PlusIcon />} children="NOVO REGISTRO" />
				</>}
			/>
			<ListMotorcycles state={[motorcyles, setMotorcycles]} />
		</div>
	);
}

export default Motorcycles;
