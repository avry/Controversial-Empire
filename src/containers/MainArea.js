import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {
	constructor() {
		super();
		this.state = {
			people: [
				{
					name: "David Davidson",
					company: "Some Company, Inc",
					description: "Met at a party"
				},
				{
					name: "Marki Markipliers",
					company: "Some Company, Inc",
					description: "Met at a party"
				},
				{
					name: "Jehovah Witness",
					company: "Some Company, Inc",
					description: "Met at a party"
				}
			]
		}
	}
	render () {
		let peopleCards = this.state.people.map(person => {
			return (
				<Col sm="4">
					<PeopleCard person={person} />
				</Col>
			)
		})
		return (
			<Container fluid>
				<Row>
					{peopleCards}
				</Row>
			</Container>
		)
	}
}


export default MainArea;