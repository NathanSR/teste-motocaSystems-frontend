import './App.css';
import Button from './components/Button';
import { HomeIcon, PlusIcon } from 'lucide-react';
import Search from './components/Search';

function App() {
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
					<Button icon={<PlusIcon/>} children="NOVO REGISTRO" />
				</div>
			</header>
			<section className='tableHeader'>

			</section>


		</div>
	);
}

export default App;
