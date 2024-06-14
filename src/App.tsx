import { useEffect, useState } from 'react';
import './App.css';
import { Motorcycle } from './App.types';
import { PlusIcon } from 'lucide-react';
import axios from './config/axios';
import Button from './components/Button';
import Search from './components/Search';
import ListMotorcycles from './components/ListMotorcycles';
import Header from './components/Header';

function App() {
	const [motorcyles, setMotorcycles] = useState<Motorcycle[]>([]);

	useEffect(() => {
		axios.get("/motorcycles").then((resp) => setMotorcycles([...resp.data]))
	}, [])

	return (
		<div className="App">
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

export default App;
