import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GenericCard from './Card';
import './ProjectsList.css';
import * as api from '../api';

import universe from '../images/universe.jpg';
import cinema from '../images/cinema.jpg';
import bigrock from '../images/bigrock.jpg';
import bridge from '../images/bridge.jpg';
import pinkskies from '../images/pinkskies.jpg';


//the Project list must be accesed from the main home page. could be something we can fix 
class ProjectsList extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {

    }
	render () {
		console.log(this.props.projects);
		let  ProjectCards = "";
		if (this.props.projects) {
			ProjectCards = this.props.projects.map(proj => {
				return (
					<Row>
						<div className="card-row">
							<div className="individual-cards">
								<GenericCard
									key={proj.slug} 
									onClick={this.props.onProjectClick}
									project={proj} />
							</div>
						</div>
					</Row>
				)
			})
		}

		return (
			<Container fluid>
				<Row>
					<div className="about-text">
						<h5>Previous Coursework and Personal Projects </h5>
					</div>
				</Row>
				<div className="cards-list">

					{ProjectCards}
					
				</div>
			</Container>
		)
	}
}
export default ProjectsList;