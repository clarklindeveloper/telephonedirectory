import React, { Component } from 'react';
import './App.scss';
import Phonebook from './containers/Phonebook/Phonebook';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Phonebook />
			</div>
		);
	}
}

export default App;
