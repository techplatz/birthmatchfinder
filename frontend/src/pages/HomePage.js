import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col, Row, Carousel, Image } from 'react-bootstrap';
import imgbg1 from '../images/bd.jpeg';
import imgbg2 from '../images/bd2.jpeg';

const HomePage = (props) => {
  return (
    <section>
      <Card className="text-center">
        <Card.Header>BMF</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Link className="btn" to="/login">Click here to connect</Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          Let's have fun together
        </Card.Footer>
      </Card>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card className="my-3 p-3 rounded">
            <Card.Img className="main-img" src={imgbg2} variant="top" />
            <Card.Body>
              <Card.Title as="div">
                <strong>Birthday mate</strong>
              </Card.Title>
              <Card.Text as="div">Find your birthday mate</Card.Text>
              <Button className="btn">Click here </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card className="my-3 p-3 rounded">
            <Card.Img className="main-img" src={imgbg1} variant="top" />
            <Card.Body>
              <Card.Title as="div">
                <strong>Connect</strong>
              </Card.Title>
              <Card.Text as="div">
                {' '}
                Connect with people 
              </Card.Text>
              <Button className="btn">Click here</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card className="my-3 p-3 rounded">
            <Card.Img className="main-img" src={imgbg2} variant="top" />

            <Card.Body>
              <Card.Title as="div">
                <strong>Party</strong>
              </Card.Title>

              <Card.Text as="div">
                Part with friends
              </Card.Text>

              <Button className="btn">Click here</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card className="my-3 p-3 rounded">
            <Card.Img className="main-img" src={imgbg2} variant="top" />
            <Card.Body>
              <Card.Title as="div">
                <strong>Socialize</strong>
              </Card.Title>
              <Card.Text as="div">Meet your new friends</Card.Text>
              <Button className="btn">Click here </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default HomePage;
