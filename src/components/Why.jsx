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
        <p className="section-subtitle" style={{ fontWeight: 'bold', fontSize: '1.15rem' }}>
          The world's only free, near-real-time environmental data from actual sensors — not models, not estimates, not paywalled.
        </p>
        <p className="section-subtitle">
          Government networks provide ~10,000 monitoring stations worldwide, but publish with 1–2 hour delays via 50+ separate APIs. Commercial services charge for access to the same delayed data, or fill gaps with physics models that calculate what the air quality <em>should be</em> rather than measuring it. No existing service — free or paid — provides dense, live, global coverage from real sensors.
        </p>
        <p className="section-subtitle">
          That's what we're building — and we need your help to make it real. WeSense is an early-stage open-source project building the infrastructure for community-deployed sensors reporting every 5 minutes, with all data free and open forever. The core platform is working, but a global sensor network only exists when people like you place sensors in their homes, streets, and communities. <a href="#contribute">See how you can help</a>, or check out the <a href="#roadmap">roadmap</a> to see where we're headed.
        </p>
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
