import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const steps = [
  {
    icon: '📚',
    title: 'Data is a Public Library',
    text: 'All sensor data is bundled into "digital books." Instead of one company holding all the books, they are distributed across a global network of computers run by the community.',
  },
  {
    icon: '📇',
    title: 'A Decentralized "Card Catalog"',
    text: 'A peer-to-peer database, like a shared card catalog, helps everyone find the exact "book" of data they need without having to ask a central librarian or company.',
  },
  {
    icon: '🌍',
    title: 'Permanent & Uncensorable',
    text: 'Because many people hold copies, the library can never be shut down, censored, or lost. As long as one copy exists, the data is safe forever. Anyone can download the entire library for their own use.',
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
              Browse the live archive at{' '}
              <a href="https://ipfs.io/ipns/archive.wesense.earth/" target="_blank" rel="noopener noreferrer" className="link-brand">
                archive.wesense.earth
              </a>
              {' '}&mdash; sensor readings stored permanently on IPFS, free for anyone to access, download, and host.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
