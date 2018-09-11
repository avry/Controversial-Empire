import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SillyHat from '../images/SillyHat.jpg';


const Home = () => (
  <div>
  	<Container fluid>
	  	<Row>
	  		<img src={SillyHat} alt="Profile Pict" style={{ height: "40px", width:"20px" }} />
	  	</Row>
    	<h2>Home</h2>
    </Container>
  </div>
)

export default Home;