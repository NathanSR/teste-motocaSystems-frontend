import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Motorcycles from './pages/Motorcycles';
import Initial from './pages/Initial';
import MotorcyclesForm from './pages/MotorcyclesForm';

function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/' element={<Initial />} />
					<Route path='/motorcycles' element={<Motorcycles />} />
					<Route path='/motorcycles/form' element={<MotorcyclesForm />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
