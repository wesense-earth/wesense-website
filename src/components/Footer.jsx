import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4" style={{ backgroundColor: 'var(--deep-forest)', color: 'var(--light-stone, #E8E4DD)' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0" style={{ color: '#E8E4DD' }}>&copy; {currentYear} WeSense.earth Community</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/wesense-earth" target="_blank" rel="noopener noreferrer" className="me-3" style={{ color: '#B7E4C7' }}>GitHub</a>
            <a href="#" className="me-3" style={{ color: '#B7E4C7' }}>Discord</a>
            <a href="#" style={{ color: '#B7E4C7' }}>Twitter</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
