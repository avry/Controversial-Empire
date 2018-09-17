import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import ProjectsList from './ProjectsList';
import ProjectDetail from './ProjectDetail';
import Home from './Home';
import * as api from '../api';

//Proptypes needed: projects which is an array
const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}
const onPopState = handler => {
	window.onpopstate = handler;
}
class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentProjId: null
		};
	}
	componentDidMount() {
	}
	componentWillUnmount() {
		onPopState(null);
	}

	fetchProj = (projId) => {
		// pushState(
		// 	{ currentContestId: contestId },
		// 	`/contest/${contestId}`
		// );
		pushState(
			{ currentProjId: projId },
			`/projects/${projId}`
		);
		api.fetchProj(projId).then(proj => {
			this.setState({
				currentProjId: projId,
				currProject: proj	
			});

		});
	};

	render() {
		return (
			//some JSX expressions
			<div className="Main">
				<Switch>
					<Route exact path='/' component={Home} />

					<Route exact path='/projects/' render={() => <ProjectsList 
																	onProjectClick={this.fetchProj}
																	projects={this.props.projects}
																/>
															} 
					/>



					<Route path='/projects/:projId/' render={() => <ProjectDetail 
																		currentProjId={this.state.currentProjId} 
																		currentProject={this.state.currProject} 
																	/>
															}
					/>
				</Switch>
			</div>
		)
	}
}
						// Route
					 //  path='/dashboard'
					 //  render={(props) => <Dashboard {...props} isAuthed={true} />}


export default Main;