import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';
import './ProjectsList.css';
import * as api from '../api';

import universe from '../images/universe.jpg';
import cinema from '../images/cinema.jpg';
import bigrock from '../images/bigrock.jpg';
import bridge from '../images/bridge.jpg';
import pinkskies from '../images/pinkskies.jpg';


class ProjectsList extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount() {
      fetch(this.props.endpoint)
       .then(response => {
         if (response.status !== 200) {
           return this.setState({ placeholder: "Something went wrong" });
         }
         return response.json();
       })
       .then(data => this.setState({ data: data }));
    }
	render () {
		console.log("so far at least this is working ")
		let ProjectCards = this.state.data.map(person => {
			return (
				<div>
					<h5>Previous Coursework and Personal Projects </h5>
					<Col sm="4" className="individual-cards">
						<PeopleCard person={person} />
					</Col>
				</div>
			)
		})
		return (
			<Container fluid>
				<Row>
					<div className="about-text">
						
					</div>
				</Row>
				<div className="cards-list">
					<Row>
						{ProjectCards}
					</Row>
				</div>
			</Container>
		)
	}
}
export default ProjectsList;