import React from 'react';
import './css/index.css';
import { Route } from 'react-router-dom';
import Dash from './components/dash'
import Signup from './components/Signup'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Header</p>
			</header>

			<Route exact path="/Signup" component={Signup} />

			<footer className="App-footer">
				<p>footer</p>
			</footer>
		</div>
	);
}

export default App;
