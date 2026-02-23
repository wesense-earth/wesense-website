import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="py-5 text-center" id="home" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Row className="py-lg-5">
        <Col lg={6} md={8} className="mx-auto">
          <h1 className="fw-bold">
            Sense Your World.
          </h1>
          <h1 className="fw-bold mb-4">
            Share Our Planet.
          </h1>
          <p className="lead" style={{ color: 'var(--text-muted)' }}>
            Join the community-owned environmental network. WeSense.earth empowers everyone to monitor their local environment and contribute to a global, transparent, and permanent record of our planet's health.
          </p>
          <p>
            <Button href="https://map.wesense.earth" target="_blank" rel="noopener noreferrer" className="btn-brand-outline my-2 mx-1">Live Dashboard<br /><small style={{ fontSize: '0.7em', opacity: 0.8 }}>(alpha)</small></Button>
            <Button href="#mission" className="btn-brand-outline my-2 mx-1">Our Mission</Button>
            <Button href="https://github.com/wesense-earth" target="_blank" rel="noopener noreferrer" className="btn-brand-outline my-2 mx-1">Get Involved</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
