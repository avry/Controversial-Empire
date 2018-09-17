import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import ProjectsList from './ProjectsList';
import Home from './Home';
import * as api from '../api';



class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			projects: {}
		};
	}
	componentDidMount() {

	}
	componentWillUnmount() {

	}
	fetchProj = (projId) => {
		// pushState(
		// 	{ currentContestId: contestId },
		// 	`/contest/${contestId}`
		// );
		api.fetchProj(projId).then(proj => {
			this.setState({
				currentProjId: projId,
				projects: proj	
			});
			console.log('Main.js state.currentProjId: ' + this.state.currentProjId);
			console.log('Main.js state.projects: ' + this.state.projects);
		});
	};
	render() {
		return (
			//some JSX expressions
			<div className="Main">
				<Switch>
					<Route exact path='/' component={Home} />

					<Route exact path='/projects' render={() => <ProjectsList 
																	onProjectClick={this.fetchProj}
																	projects={this.state.projects}
																	endpoint='api/projectslist/'
																/>
															} 
					/>



					<Route path='/projects/:projId' render={() => <p>this is a detail</p>} />
					
				</Switch>
			</div>
		)
	}
}
						// Route
					 //  path='/dashboard'
					 //  render={(props) => <Dashboard {...props} isAuthed={true} />}


export default Main;