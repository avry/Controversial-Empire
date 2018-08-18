import React from 'react';
import walterdale from '../images/article1.jpg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Card style={{ backgroundColor: '#2ECC40' }}>
        <CardImg src={walterdale} />
        <CardBody>
          <CardTitle>Edmonton on Quest to Become Real City</CardTitle>
          <CardSubtitle>An analysis of the artificial process of Edmonton's continuing growth</CardSubtitle>
          <CardText>So much is unknown these days. Even from those who knowingly know things. Let us explore some of these nuances through
          the use of scientific discourse, BBCs and neo-colonial feminist theory</CardText>
          <Button>Random Button 2</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;