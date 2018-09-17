import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Main from './Main';
import * as api from '../api';



class App extends Component {
	constructor(props){
		super(props);
		this.state = {

		};
		api.fetchProjList().then(projects => {
			this.setState({
				projects: projects,
			});
		});
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
				<Main projects={this.state.projects}/>
			</div>
		)
	}
}

export default App;