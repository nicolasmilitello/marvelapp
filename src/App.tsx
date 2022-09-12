import React from 'react';
import './App.css';
import { NavBar } from './components';
import { AppProvider } from './context/context';

//* routes component
import Routing from './routes/routes';

function App() {
	return (
		<div className='App'>
			<AppProvider>
				<NavBar />
				<Routing />
			</AppProvider>
		</div>
	);
}

export default App;
