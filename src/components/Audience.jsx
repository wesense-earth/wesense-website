import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const audienceItems = [
  "Individuals & Families wanting to understand their immediate environment.",
  "Community Groups & Schools driving local educational and environmental projects.",
  "Scientists & Researchers seeking access to unprecedented hyper-local datasets.",
  "Cities & Governments needing granular data to inform public policy and planning.",
  "Corporations & Businesses committed to transparent environmental reporting."
];

const Audience = () => {
  return (
    <section id="audience">
      <Container>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="section-title text-start">A Platform for All...</h2>
            <ul className="list-unstyled" style={{ fontSize: '1.1rem' }}>
              {audienceItems.map((item, index) => (
                <li key={index} className="d-flex mb-3">
                  <span className="me-2">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={6} className="d-flex flex-column justify-content-center bg-light p-5 rounded">
            <h2 className="text-start fw-bold">...Powered by Individuals.</h2>
            <p className="lead">
              While the data is for everyone, the network's unique power comes from you. A research institution can't place a sensor in your bedroom. A city can't map every backyard.
            </p>
            <p className="lead fw-bold text-primary">
              It is the collective action of individuals that solves the hyper-local data problem and creates the ground-truth reality that makes this network invaluable to all.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Audience;
