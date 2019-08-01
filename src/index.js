//react
import React from 'react';
import ReactDOM from 'react-dom';
//3rd party
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//app
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

//js
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
