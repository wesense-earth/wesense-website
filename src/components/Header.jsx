import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = ({ theme, toggleTheme }) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <span style={{ color: '#198754' }}>We</span><span style={{ color: '#0d6efd' }}>Sense</span>.earth
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#mission">Mission</Nav.Link>
            <Nav.Link href="#why">The Why</Nav.Link>
            <Nav.Link href="#how">How It Works</Nav.Link>
            <Nav.Link href="#vision">Vision</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#contribute">Join Us</Nav.Link>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={toggleTheme}
              className="ms-2"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
