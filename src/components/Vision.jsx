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
                True open source means open hardware. We're developing custom PCB designs that you can build yourself or purchase ready-made. With modular sensor support, 3D printable cases, and designs for both indoor and outdoor deployment, you'll have the freedom to manufacture, modify, and deploy sensors exactly how you need them—without vendor lock-in. Already have a sensor? We're also building integrations for existing platforms like Meshtastic and Home Assistant, so you can contribute data from hardware you already own.
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
