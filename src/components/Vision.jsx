import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Vision = () => {
  return (
    <section id="vision" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <h2 className="section-title">The Vision</h2>
        <p className="section-subtitle">
          WeSense.earth aims to be more than a data source; it's a hub that integrates and contextualizes all relevant environmental data.
        </p>
        <Row className="align-items-start">
          <Col md={4}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Open Hardware</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">New Sensing Frontiers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">A Plugin Ecosystem</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Emergent Accuracy</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={8}>
            <div>
              <h4>Open Hardware</h4>
              <p>
                True open source means open hardware. All you need is a cheap ESP32 board and a sensor to get started — our firmware handles the rest. We're also developing custom PCB designs with modular sensor support and 3D printable cases for both indoor and outdoor deployment.
              </p>
              <h5>Build Your Own</h5>
              <p>
                Our open-source firmware runs on a wide range of ESP32 boards (T-Beam, C3, C6, S3) and auto-detects connected sensors. Flash, configure WiFi, and your device starts reporting to the network. See the{' '}
                <a href="https://github.com/wesense-earth/wesense/wiki/Recommended-Sensors" target="_blank" rel="noopener noreferrer" className="link-brand">
                  recommended sensor list
                </a>
                {' '}for tested hardware combinations.
              </p>
              <h5>3rd Party Hardware</h5>
              <p>
                Already have sensors? We support Meshtastic, Home Assistant, and Ecowitt devices out of the box. Our simple ingester plugin system means anyone can write an adapter for their own hardware — if it produces sensor data, it can join the network.
              </p>
            </div>
            <hr/>
            <div>
              <h4>New Sensing Frontiers</h4>
              <p>
                Beyond common air quality metrics, the architecture is designed to support any type of sensor, with a focus on data that is hard for professionals to collect at scale, including noise pollution, light pollution (sky quality), UV index variation, and soil moisture.
              </p>
            </div>
            <hr/>
            <div>
              <h4>A Plugin Ecosystem</h4>
              <p>
                A project becomes indispensable by integrating data from many sources. The architecture is designed to unify data from Home Assistant, official government networks, satellite overlays, and weather APIs into one resilient, open repository.
              </p>
            </div>
            <hr/>
            <div>
              <h4>Emergent Accuracy</h4>
              <p>
                The network doesn't just collect data; it learns from it. WeSense is designed to work with both precision instruments and affordable off-the-shelf sensors alike, by using statistical swarm correction to cross-calibrate the entire network, we automatically detect and compensate for drifting sensors, and transform the collective power of thousands of devices into a uniquely robust and trustworthy picture of our world.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Vision;
