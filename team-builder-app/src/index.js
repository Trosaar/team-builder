import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk),
	)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);


// add store?