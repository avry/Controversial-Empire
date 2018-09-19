import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
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
			<div>
				<div className="App">
					<Header />
					<Main projects={this.state.projects}/>
				</div>
				<Footer />
			</div>
		)
	}
}

export default App;