import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SillyHat from '../images/SillyHat.jpg';


const Home = () => (
  <div>
  	<Container fluid>
	  	<Row>
	  		<Col></Col>
	  		<Col>
	  			<img src={SillyHat} alt="Profile Pict" style={{ height: "300px", width:"200px" }} />
	  		</Col>
	  		<Col>
	  		</Col>
	  	</Row>
    	<h2>Build home page here</h2>
    </Container>
  </div>
)

export default Home;