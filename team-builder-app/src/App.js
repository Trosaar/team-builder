import React from 'react';
import './css/index.css';
import { Route, NavLink } from 'react-router-dom';
import Dash from './components/dash'
import Signup from './components/Signup'
import AddItem from  './components/AddItemForm.js'


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavLink exact to={'/'} activeClassName="selected" className='navLink'>
					Home
				</NavLink>

				<NavLink exact to={'/add'} activeClassName="selected" className='addItem'>
					Add Item
				</NavLink>

				<NavLink exact to={'/Signup'} activeClassName="selected" className='navLink'>
					Sign Up
				</NavLink>
			</header>

			<Route exact path="/Signup" component={Signup} />
			<Route exact path="/" component={Dash} />
			<Route exact path="/add" component={AddItem} />

			<footer className="App-footer">
				<p>footer</p>
			</footer>
		</div>
	);
}

export default App;
