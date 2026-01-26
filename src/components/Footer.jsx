import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">&copy; {currentYear} WeSense.earth Community</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/wesense-earth" target="_blank" rel="noopener noreferrer" className="text-white me-3">GitHub</a>
            <a href="#" className="text-white me-3">Discord</a>
            <a href="#" className="text-white">Twitter</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
