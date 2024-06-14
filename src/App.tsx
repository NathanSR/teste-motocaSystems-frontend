import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Motorcycles from './pages/Motocycles';
import Initial from './pages/Initial';

function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/' element={<Initial />} />
					<Route path='/motorcycles' element={<Motorcycles />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
