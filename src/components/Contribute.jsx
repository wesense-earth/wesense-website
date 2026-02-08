import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const waysToContribute = [
  {
    title: 'Contribute a Sensor',
    text: 'The most valuable role. By placing a sensor in your unique environment, you help build the hyper-local, ground-truth data that no one else can provide.',
    buttonText: 'Learn More',
    buttonClass: 'btn-brand',
  },
  {
    title: 'Contribute Code',
    text: 'Are you a developer? We need expertise across the stack, from firmware for new sensors, to backend services, to beautiful frontend visualizations.',
    buttonText: 'View on GitHub',
    buttonClass: 'btn-brand',
  },
  {
    title: 'Contribute Data Science',
    text: 'Help us build the models that will achieve emergent accuracy, uncover hidden environmental trends, and turn raw data into profound insights.',
    buttonText: 'Get in Touch',
    buttonClass: 'btn-brand',
  },
  {
    title: 'Operate a Node',
    text: 'Help strengthen the decentralized IPFS backend by running a node on a Raspberry Pi or home server, ensuring the data remains resilient and permanent.',
    buttonText: 'Read the Docs',
    buttonClass: 'btn-brand',
  },
];

const Contribute = () => {
  return (
    <section id="contribute">
      <Container>
        <h2 className="section-title">Join Us</h2>
        <p className="section-subtitle">
          WeSense.earth is a community movement. Whether you are a developer, a scientist, or a curious individual, there is a vital role for you.
        </p>
        <Row>
          {waysToContribute.map((item, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h4">{item.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{item.text}</Card.Text>
                  <Button className={`${item.buttonClass} mt-auto align-self-start`}>{item.buttonText}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contribute;
