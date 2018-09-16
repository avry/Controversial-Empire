import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SillyHat from '../images/SillyHat.jpg';


const Home = () => (
  <div>
  	<Container fluid>
	  	<Row>
	  		<div className="col-md-4 offset-md-3">
	  			<img src={SillyHat} alt="Profile Pict" style={{ height: "300px", width:"200px" , paddingTop: "20px" , paddingBottom: "10px" }} />
	  			<p>A responsible individual with an ability to solve hard and complex problems.
	  			Understands that behind every complex system is a pattern or method to it.
	  			Recent graduate from the University of Alberta with an Honors Degree in Computer Science.</p>
	  		</div>
	  	</Row>	
    </Container>
  </div>
)

export default Home;