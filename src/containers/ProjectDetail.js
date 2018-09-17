import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



class ProjectDetail extends Component {
  constructor(props) {
  	super(props);
  }
  
  render () {
    if (this.props.currentProject) {
    	return (
          <Row>
            <div className="col-lg-5 offset-lg-4 home-page">
              <h5>{this.props.currentProject[0].name}</h5>
              <p>{this.props.currentProject[0].github}</p>
              <p>{this.props.currentProject[0].description}</p>
            </div>
          </Row>  
      );
    }
    return null;

  }
}

export default ProjectDetail;