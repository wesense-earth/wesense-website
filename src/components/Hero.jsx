import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="py-5 text-center bg-light" id="home">
      <Row className="py-lg-5">
        <Col lg={6} md={8} className="mx-auto">
          <h1 className="fw-bold">Sense Your World.</h1>
          <h1 className="fw-bold mb-4">Share Our Planet.</h1>
          <p className="lead text-muted">
            Join the community-owned environmental network. WeSense.earth empowers everyone to monitor their local environment and contribute to a global, transparent, and permanent record of our planet's health.
          </p>
          <p>
            <Button href="#mission" variant="primary" className="my-2 mx-1">Our Mission</Button>
            <Button href="#contribute" variant="secondary" className="my-2 mx-1">Get Involved</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
