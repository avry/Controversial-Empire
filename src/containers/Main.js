import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import MainArea from './MainArea';
import Home from './Home';



class Main extends Component {
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
			<div className="Main">
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/projects' render={() => <MainArea endpoint='api/projectslist/'/>} />
					<Route path='/projects/:projId' render={() => <p>this is a detail</p>} />
				</Switch>
			</div>
		)
	}
}

export default Main;