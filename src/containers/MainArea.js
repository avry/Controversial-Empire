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
			people: [
				{
					imagesrc: pinkskies,
					name: "Mooder and the infinite possibilities",
					company: "Theresa Lo",
					description: "An intensive review in the field"
				},
				{
					imagesrc: bridge,
					name: "5 tips for using Mooder",
					company: "Aaron Tan",
					description: "An in-depth exploration of best practises "
				},
				{
					imagesrc: universe,
					name: "Year end sale!",
					company: "Witness Me",
					description: "Special promotion runs until end of August"
				},
				{
					imagesrc: bigrock,
					name: "What a new wave in black label society means",
					company: "WSir Dingaling-ling",
					description: "Making the little things matter"
				},
				{
					imagesrc: cinema,
					name: "What a new wave in black label society means",
					company: "WSir Dingaling-ling",
					description: "Making the little things matter"
				}
			],
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
		console.log(this.state.data)
		let peopleCards = this.state.data.map(person => {
			return (
				<Col sm="4" className="individual-cards">
					<PeopleCard person={person} />
				</Col>
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