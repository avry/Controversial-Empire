import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SillyHat from '../images/SillyHat.jpg';
import './Home.css';



const Home = () => (
  <div>
  	<Container fluid>
	  	<Row>
	  		<div className="home-page">
	  			<img src={SillyHat} alt="Profile Pict" style={{ height: "300px", width:"200px" , paddingLeft:"20px" , paddingTop: "20px", paddingRight:"10px" , paddingBottom: "10px", float:"left" }} />
	  			<p style={{ marginTop: "20px" }}> </p>
	  			<h3>I have a word</h3>
	  			<p>A responsible individual with an ability to solve hard problems and make things work.
	  			Understands that behind every complex system is a pattern or method to it.
	  			Is constantly learning and fiddling with new technologies and frameworks.
	  			Recent graduate from the University of Alberta with an Honors Degree in Computer Science.</p>
	  		</div>
	  	</Row>	
    </Container>
  </div>
)

export default Home;