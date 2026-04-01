import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const steps = [
  {
    icon: '📚',
    title: 'Data is a Public Library',
    text: 'All sensor data is bundled into content-addressed archives, distributed across a global network of stations run by the community. Every archive is identified by its content hash — tamper-proof by design.',
  },
  {
    icon: '📇',
    title: 'A Decentralized "Card Catalog"',
    text: 'A peer-to-peer database helps every station find the data it needs without asking a central server. Stations discover each other, exchange indexes, and automatically replicate archives for their region.',
  },
  {
    icon: '🌍',
    title: 'Permanent & Uncensorable',
    text: 'Because many stations hold copies, the library can never be shut down, censored, or lost. As long as one copy exists, the data is safe forever. Anyone can download the entire library for their own use.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how">
      <Container>
        <h2 className="section-title">How It's Truly Open</h2>
        <p className="section-subtitle">
          Our technology is designed to prevent any single person or company from controlling the data.
        </p>
        <Row>
          {steps.map((step, index) => (
            <Col key={index} md={4} className="d-flex align-items-stretch mb-4">
              <Card className="text-center w-100">
                <Card.Body>
                  <div style={{ fontSize: '2.5rem' }}>{step.icon}</div>
                  <Card.Title as="h4" className="my-3">{step.title}</Card.Title>
                  <Card.Text>{step.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p style={{ fontSize: '1.1rem' }}>
              This is working today. Two stations are already replicating 91,000+ archives via{' '}
              <a href="https://www.iroh.computer/" target="_blank" rel="noopener noreferrer" className="link-brand">
                Iroh
              </a>
              {' '}peer-to-peer with zero failures. Every station that joins the network automatically receives and serves archives for its region &mdash; become a contributor by running a sensor or hosting a station, and help us grow this into a permanent, global environmental record that belongs to everyone.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
