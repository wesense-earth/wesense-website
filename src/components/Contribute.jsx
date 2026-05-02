import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const sensorContributions = [
  {
    title: 'Run a Meshtastic Node',
    text: 'Add environmental sensors to a Meshtastic device and contribute data through the mesh network. Your readings travel across the mesh and into the WeSense network automatically.',
    buttonText: 'Read the Docs',
    buttonClass: 'btn-brand-outline',
    href: 'https://docs.wesense.earth/getting-started/meshtastic-node',
  },
  {
    title: 'Build a Meshtastic Gateway',
    text: "Share your neighbourhood's environmental telemetry with the world. A gateway bridges your local mesh to the internet, contributing data from nearby nodes that aren't connected themselves.",
    buttonText: 'Read the Docs',
    buttonClass: 'btn-brand-outline',
    href: 'https://docs.wesense.earth/getting-started/meshtastic-gateway',
  },
  {
    title: 'Build a WeSense Node',
    text: 'Deploy a dedicated ESP32 sensor for high-frequency environmental monitoring. Reports every 5 minutes over WiFi or LoRaWAN with temperature, humidity, pressure, CO2, PM2.5, and more. Step-by-step guide covers hardware, firmware setup, configuration, management, and updates.',
    buttonText: 'Read the Docs',
    buttonClass: 'btn-brand-outline',
    href: 'https://docs.wesense.earth/getting-started/build-wesense-node',
  },
  {
    title: 'Home Assistant / Ecowitt',
    text: 'Already running Home Assistant or Ecowitt devices? Connect your existing environmental sensors to the WeSense network with our ingester plugin and contribute data from hardware you already own.',
    buttonText: 'Read the Docs',
    buttonClass: 'btn-brand-outline',
    href: 'https://docs.wesense.earth/getting-started/home-assistant',
  },
];

const networkContributions = [
  {
    title: 'Run a Regional Node',
    text: 'Replicate data for a single region or city — for example, Wellington or Auckland. Smallest scope, easiest to host on a Raspberry Pi or small VPS, and ideal for community groups focused on their own area.',
    buttonText: 'Station Guide',
    buttonClass: 'btn-brand',
    href: 'https://docs.wesense.earth/station-operators/operate-a-station',
  },
  {
    title: 'Run a Country Node',
    text: 'Replicate every reading from your country. The most common scope for serious operators — broad enough to be useful as a national mirror, modest enough to run on a single mid-tier server.',
    buttonText: 'Station Guide',
    buttonClass: 'btn-brand-outline',
    href: 'https://docs.wesense.earth/station-operators/operate-a-station',
  },
  {
    title: 'Run a World Node',
    text: 'Store the entire network\'s data. The ultimate backup — a world node replicates every archive from every region, keeping the full dataset resilient and available.',
    buttonText: 'Station Guide',
    buttonClass: 'btn-brand-outline',
    href: 'https://docs.wesense.earth/station-operators/operate-a-station',
  },
  {
    title: 'Run a Meshtastic Gateway',
    text: 'Bridge your local Meshtastic mesh to the internet. Environmental telemetry from nearby mesh nodes flows into WeSense automatically through your gateway.',
    buttonText: 'Gateway Guide',
    buttonClass: 'btn-brand-outline',
    href: 'https://docs.wesense.earth/getting-started/meshtastic-gateway',
  },
];

const otherContributions = [
  {
    title: 'Contribute Code',
    text: 'Are you a developer? We need expertise across the stack — firmware for new sensors, Python ingesters for new data sources, backend services, and frontend visualisations. The contributor guide maps every repo and the areas that most need help.',
    buttonText: 'Contributor Guide',
    buttonClass: 'btn-brand',
    href: 'https://docs.wesense.earth/developers/contributing-code',
  },
  {
    title: 'Contribute Data Science',
    text: 'Help us build the models that will achieve emergent accuracy, uncover hidden environmental trends, and turn raw data into profound insights.',
    buttonText: 'Get Involved',
    buttonClass: 'btn-brand-outline',
    href: 'https://github.com/wesense-earth/wesense/discussions',
  },
  {
    title: 'Build Visualisations',
    text: 'All WeSense data is open and queryable. Build your own dashboards, analysis tools, or integrate WeSense data into existing platforms. We\'ll link to and promote third-party tools.',
    buttonText: 'Data Access',
    buttonClass: 'btn-brand-outline',
    href: 'https://docs.wesense.earth/data/accessing-data',
  },
];

const Contribute = () => {
  return (
    <section id="contribute">
      <Container>
        <h2 className="section-title">How to Contribute</h2>
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
        <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Reference: <a href="https://docs.wesense.earth/getting-started/recommended-sensors" target="_blank" rel="noopener noreferrer" className="link-brand">Recommended Sensors</a> &middot; <a href="https://docs.wesense.earth/hardware/board-configurations" target="_blank" rel="noopener noreferrer" className="link-brand">Hardware &amp; Boards</a>
        </p>
        <h3 className="mb-3 mt-4" style={{ color: 'var(--text-primary)' }}>Strengthen the Network</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Sensors collect the data, but nodes are the infrastructure that stores, replicates, and serves it. Running a node is one of the most impactful ways to contribute.
        </p>
        <Row>
          {networkContributions.map((item, index) => (
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
