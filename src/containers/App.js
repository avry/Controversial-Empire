import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Main from './Main';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {

		};
	}
	componentDidMount() {

	}
	componentWillUnmount() {

	}
	render() {
		return (
			//some JSX expressions
			<div className="App">
				<Header />
				<Main />
			</div>
		)
	}
}

export default App;