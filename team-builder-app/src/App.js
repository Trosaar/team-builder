import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Dash from './components/dash'
import { Container } from 'reactstrap';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Header</p>
			</header>
			
			<Container className="main">
				<Dash />
			</Container>

			<footer className="App-footer">
				<p>footer</p>
			</footer>
		</div>
	);
}

export default App;
