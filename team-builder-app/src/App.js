import React from 'react';
import './css/index.css';
import { Route, NavLink } from 'react-router-dom';
import Dash from './components/dash'
import Signup from './components/Signup'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavLink exact to={'/'} activeClassName="selected">
					Home
				</NavLink>

				<NavLink exact to={'/Signup'} activeClassName="selected">
					Sign Up
				</NavLink>
			</header>

			<Route exact path="/Signup" component={Signup} />
			<Route exact path="/" component={Dash} />

			<footer className="App-footer">
				<p>footer</p>
			</footer>
		</div>
	);
}

export default App;
