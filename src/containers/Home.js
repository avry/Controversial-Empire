import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SillyHat from '../images/SillyHat.jpg';
import './Home.css';



const Home = () => (
  <div>
  	<Container fluid>
	  	<Row>
	  		<div className="col-lg-5 offset-lg-4 home-page">
	  			<img src={SillyHat} alt="Profile Pict" style={{ height: "300px", width:"200px" , paddingTop: "20px", paddingRight:"10px" , paddingBottom: "10px", float:"left" }} />
	  			<p style={{ marginTop: "20px" }}> </p>
	  			<p>A responsible individual with an ability to solve hard and complex problems.
	  			Understands that behind every complex system is a pattern or method to it.
	  			Recent graduate from the University of Alberta with an Honors Degree in Computer Science.</p>
	  		</div>
	  	</Row>	
    </Container>
  </div>
)

export default Home;