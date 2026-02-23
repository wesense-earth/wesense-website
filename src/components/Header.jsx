import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = ({ theme, toggleTheme }) => {
  const logoSrc = theme === 'dark'
    ? '/logos/logo-solid-dark.png'
    : '/logos/logo-solid-light.png';

  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoSrc}
            alt="WeSense.earth"
            height="44"
            className="d-inline-block align-middle"
          />
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
            <Nav.Link href="https://map.wesense.earth" target="_blank" rel="noopener noreferrer">Live Dashboard</Nav.Link>
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
