import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const useCases = [
  {
    icon: '🏠',
    title: 'Monitor Your Home',
    text: 'Track temperature, humidity, CO2, and air quality in every room. Understand your indoor environment, spot ventilation issues, and make informed decisions about your living space. All from the same dashboard.',
    cta: 'View Dashboard',
    href: 'https://map.wesense.earth',
  },
  {
    icon: '🌏',
    title: 'See the Big Picture',
    text: 'Your sensor joins a global map of environmental data. Explore real-time conditions across neighbourhoods, cities, and countries. Zoom from your backyard to the entire planet on a single interactive map.',
    cta: 'View Dashboard',
    href: 'https://map.wesense.earth',
  },
  {
    icon: '📊',
    title: 'Own Your Data',
    text: "Every reading you contribute is permanently archived and freely accessible. No subscription, no lock-in. Download the raw data, run your own analysis, or just check in on your neighbourhood's air quality.",
    cta: null,
    href: null,
  },
];

const WhatYouCanDo = () => {
  return (
    <section id="whatyoucando" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <h2 className="section-title">What You Can Do With It</h2>
        <p className="section-subtitle">
          Whether you want to monitor a single room or explore global environmental trends, the same platform and dashboard does both.
        </p>
        <Row>
          {useCases.map((item, index) => (
            <Col key={index} md={4} className="d-flex align-items-stretch mb-4">
              <Card className="text-center w-100">
                <Card.Body className="d-flex flex-column">
                  <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                  <Card.Title as="h4" className="my-3">{item.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{item.text}</Card.Text>
                  {item.href && (
                    <Button href={item.href} target="_blank" rel="noopener noreferrer" className="btn-brand-outline mt-auto align-self-center">{item.cta}</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhatYouCanDo;
