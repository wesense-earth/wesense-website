import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">&copy; {currentYear} WeSense.earth Community</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/wesense-earth" target="_blank" rel="noopener noreferrer" className="me-3">GitHub</a>
            <a href="https://www.reddit.com/r/wesense/" target="_blank" rel="noopener noreferrer" className="me-3">Reddit</a>
            <a href="https://mastodon.wesense.earth/@wesense" target="_blank" rel="me noopener noreferrer" className="me-3">Mastodon</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
