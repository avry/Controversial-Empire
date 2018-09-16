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


class ProjectsList extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
				]
		};
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
		console.log("r3endering ProjectList!");
		console.log(this.state.data);
		console.log("data arrived");

		let ProjectCards = this.state.data.map(proj => {
			return (
				<div key={"..."}>
					<Col md="4" className="individual-cards">
						<GenericCard person={proj} />
					</Col>
				</div>
			)
		})
		return (
			<Container fluid>
				<Row>
					<div className="about-text">
						<h5>Previous Coursework and Personal Projects </h5>
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