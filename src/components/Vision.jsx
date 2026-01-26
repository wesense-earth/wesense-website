import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Vision = () => {
  return (
    <section id="vision" className="bg-light">
      <Container>
        <h2 className="section-title">The Vision</h2>
        <p className="section-subtitle">
          WeSense.earth aims to be more than a data source; it's a hub that integrates and contextualizes all relevant environmental data.
        </p>
        <Row className="align-items-center">
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
                True open source means open hardware. We're developing custom PCB designs that you can build yourself or purchase ready-made. With modular sensor support, 3D printable cases, and designs for both indoor and outdoor deployment, you'll have the freedom to manufacture, modify, and deploy sensors exactly how you need them—without vendor lock-in.
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
                The network doesn't just collect data; it learns from it. By capturing rich metadata, we can use data science to cross-calibrate the entire swarm of sensors, correct for drift, and transform the statistical power of thousands of sensors into a uniquely robust and trustworthy picture of our world.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Vision;
