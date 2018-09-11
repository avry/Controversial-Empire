import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';
import './MainArea.css';
import * as api from '../api';

import universe from '../images/universe.jpg';
import cinema from '../images/cinema.jpg';
import bigrock from '../images/bigrock.jpg';
import bridge from '../images/bridge.jpg';
import pinkskies from '../images/pinkskies.jpg';


class MainArea extends Component {
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
		let peopleCards = this.state.data.map(person => {
			return (
				<div>
					<h2>Projects Pages!</h2>
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
						<h2>What is Mooder?</h2>
						<p>Mooder can be whatever you want it to be.
						It is a dream of life, the essence of meaning, it gives
						what nothing else can give, life itself. Long live the hand.
						Hands are good for you, they can hold stuff. Really good at grabbing stuff.Mooder can be whatever you want it to be.
						It is a dream of life, the essence of meaning, it gives
						what nothing else can give, life itself. Long live the hand.
						Hands are good for you, they can hold stuff. Really good at grabbing stuff.Mooder can be whatever you want it to be.
						It is a dream of life, the essence of meaning, it gives
						what nothing else can give, life itself. Long live the hand.
						Hands are good for you, they can hold stuff. Really good at grabbing stuff.
						</p>
						<p>
							Our history begins in 1887, when the two parties were at war. War engulfed
							all of the lands, but within the war, beauty was also created.
							Mooder was created to provide a service to something.
						</p>
					</div>
				</Row>
				<div className="cards-list">

					<Row>
						{peopleCards}
					</Row>
				</div>
			</Container>
		)
	}
}
export default MainArea;