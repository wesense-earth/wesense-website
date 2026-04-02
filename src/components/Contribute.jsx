import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const sensorContributions = [
  {
    title: 'Run a Meshtastic Node',
    text: 'Add environmental sensors to a Meshtastic device and contribute data through the mesh network. Your readings travel across the mesh and into the WeSense network automatically.',
    buttonText: 'View on Wiki',
    buttonClass: 'btn-brand-outline',
    href: 'https://github.com/wesense-earth/wesense/wiki/Meshtastic-Node',
  },
  {
    title: 'Build a Meshtastic Gateway',
    text: "Share your neighbourhood's environmental telemetry with the world. A gateway bridges your local mesh to the internet, contributing data from nearby nodes that aren't connected themselves.",
    buttonText: 'View on Wiki',
    buttonClass: 'btn-brand-outline',
    href: 'https://github.com/wesense-earth/wesense/wiki/Meshtastic-Gateway',
  },
  {
    title: 'Build a WeSense Node',
    text: 'Deploy a dedicated ESP32 sensor for high-frequency environmental monitoring. Reports every 5 minutes over WiFi or LoRaWAN with temperature, humidity, pressure, CO2, PM2.5, and more.',
    buttonText: 'View on Wiki',
    buttonClass: 'btn-brand-outline',
    href: 'https://github.com/wesense-earth/wesense/wiki/WeSense-Node',
  },
  {
    title: 'Home Assistant / Ecowitt',
    text: 'Already running Home Assistant or Ecowitt devices? Connect your existing environmental sensors to the WeSense network with our ingester plugin and contribute data from hardware you already own.',
    buttonText: 'View on Wiki',
    buttonClass: 'btn-brand-outline',
    href: 'https://github.com/wesense-earth/wesense/wiki/Home-Assistant',
  },
];

const otherContributions = [
  {
    title: 'Contribute Code',
    text: 'Are you a developer? We need expertise across the stack, from firmware for new sensors, to backend services, to beautiful frontend visualizations.',
    buttonText: 'View on GitHub',
    buttonClass: 'btn-brand',
    href: 'https://github.com/wesense-earth',
  },
  {
    title: 'Contribute Data Science',
    text: 'Help us build the models that will achieve emergent accuracy, uncover hidden environmental trends, and turn raw data into profound insights.',
    buttonText: 'Get Involved',
    buttonClass: 'btn-brand-outline',
    href: 'https://github.com/wesense-earth/wesense/discussions',
  },
  {
    title: 'Operate a Station',
    text: 'Help strengthen the decentralized network by running a WeSense station on a Raspberry Pi or home server. Your station automatically replicates and serves archives for your region via Iroh P2P, keeping the data resilient and permanent.',
    buttonText: 'View on Wiki',
    buttonClass: 'btn-brand-outline',
    href: 'https://github.com/wesense-earth/wesense/wiki/Operate-a-Station',
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
        <h3 className="mb-3" style={{ color: 'var(--text-primary)' }}>Contribute Data</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          The most valuable role. By placing a sensor in your unique environment, you help build the hyper-local, ground-truth data that no one else can provide.
        </p>
        <Row>
          {sensorContributions.map((item, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h4">{item.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{item.text}</Card.Text>
                  {item.href ? (
                    <Button href={item.href} target="_blank" rel="noopener noreferrer" className={`${item.buttonClass} mt-auto align-self-start`}>{item.buttonText}</Button>
                  ) : (
                    <Button className={`${item.buttonClass} mt-auto align-self-start`} disabled>{item.buttonText}</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h3 className="mb-3 mt-4" style={{ color: 'var(--text-primary)' }}>Contribute Skills</h3>
        <Row>
          {otherContributions.map((item, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h4">{item.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{item.text}</Card.Text>
                  {item.href ? (
                    <Button href={item.href} target="_blank" rel="noopener noreferrer" className={`${item.buttonClass} mt-auto align-self-start`}>{item.buttonText}</Button>
                  ) : (
                    <Button className={`${item.buttonClass} mt-auto align-self-start`} disabled>{item.buttonText}</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
              This project is in active development. Documentation, guides, and community channels are being set up &mdash; check back soon.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contribute;
