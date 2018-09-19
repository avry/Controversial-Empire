import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ProjectDetail.css'



class ProjectDetail extends Component {
  constructor(props) {
  	super(props);
  }
  componentDidMount() {

  }
  
  render () {
    if (this.props.currentProject) {
    	return (
          <Row>
            <div className="project-details">
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