import './App.css';
import Button from './components/Button';
import { HomeIcon, PlusIcon } from 'lucide-react';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import axios from './config/axios';
import CardMotorcycle from './components/CardMotorcycle';
import { Motorcycle } from './App.types';

function App() {
	const [motorcyles, setMotorcycles] = useState<Motorcycle[]>([]);

	useEffect(() => {
		axios.get("/motorcycles").then((resp) => setMotorcycles([...resp.data]))
	}, [])


	return (
		<div className="App">
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
			{/* Depois transformar em ListMotocycles */}
			<section>
				{motorcyles.map(moto => <CardMotorcycle data={moto} />)}
			</section>
		</div>
	);
}

export default App;
