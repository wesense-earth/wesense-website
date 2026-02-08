import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  {
    icon: '📍',
    title: 'Hyper-Local Air Quality',
    text: 'What is the real difference in air quality from one end of your street to the other? We enable street-by-street resolution that official monitoring misses.',
  },
  {
    icon: '🏠',
    title: 'Indoor Environments at Scale',
    text: 'How healthy is the air inside our homes, offices, and schools, where we spend 90% of our time? This is data only a community can collect.',
  },
  {
    icon: '🏙️',
    title: '3D Urban Profiles',
    text: 'How do pollutants stratify and move between high-rise buildings? We can build a 3D picture of pollution in our cities from the ground up.',
  },
  {
    icon: '🔥',
    title: 'Real-Time Event Tracking',
    text: 'When a wildfire or chemical spill occurs, a dense network of sensors can track the impact on the ground, neighborhood by neighborhood, as it unfolds.',
  },
];

const Why = () => {
  return (
    <section id="why" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <h2 className="section-title">Measuring the Unmeasurable</h2>
        <p className="section-subtitle">
          Traditional monitoring is too sparse to answer the questions that matter most. WeSense.earth is designed to fill the crucial gaps.
        </p>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="d-flex align-items-stretch mb-4">
              <Card className="text-center w-100">
                <Card.Body>
                  <div style={{ fontSize: '2.5rem' }}>{feature.icon}</div>
                  <Card.Title as="h4" className="my-3">{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Why;
