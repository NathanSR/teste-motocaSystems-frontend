import { useEffect, useState } from 'react';
import './App.css';
import { Motorcycle } from './App.types';
import { HomeIcon, PlusIcon } from 'lucide-react';
import axios from './config/axios';
import Button from './components/Button';
import Search from './components/Search';
import ListMotorcycles from './components/ListMotorcycles';

function App() {
	const [motorcyles, setMotorcycles] = useState<Motorcycle[]>([]);

	useEffect(() => {
		axios.get("/motorcycles").then((resp) => setMotorcycles([...resp.data]))
	}, [])

	return (
		<div className="App">
			{/* Depois transformar em component Header */}
			<header>
				<div className='initialHeader'>
					<nav>
						<Button icon={<HomeIcon />} theme='transparent' />
						<div className='userProfilePicture active' />
					</nav>
				</div>
				<div className='contentHeader'>
					<h1>Tabela de Motos</h1>
					<Search />
					<Button icon={<PlusIcon />} children="NOVO REGISTRO" />
				</div>
			</header>
			<ListMotorcycles array={motorcyles} />
		</div>
	);
}

export default App;
