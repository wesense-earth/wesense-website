import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

// Same menu as map.wesense.earth: the app's views first, then this site's
// sections, so the two read as one product.
const APP_LINKS = [
  { label: 'Dashboard', href: 'https://map.wesense.earth/#dashboard' },
  { label: 'Map', href: 'https://map.wesense.earth/#map' },
  { label: 'Stats', href: 'https://map.wesense.earth/#stats' },
];

const SITE_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Mission', href: '#mission' },
  { label: 'The Why', href: '#why' },
  { label: 'How It Works', href: '#how' },
  { label: 'Vision', href: '#vision' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contribute', href: '#contribute' },
  { label: 'Docs', href: 'https://docs.wesense.earth' },
];

const Header = ({ theme, toggleTheme }) => {
  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm">
      <Container fluid className="px-4">
        <Navbar.Brand href="/" title="WeSense.earth home">
          <img
            src="/logos/logo-mark.png"
            alt=""
            width="32"
            height="32"
            className="d-inline-block align-middle"
          />
          <span className="navbar-brand-name align-middle">WeSense</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-lg-center nav-app-links">
            {APP_LINKS.map(link => (
              <Nav.Link key={link.label} href={link.href} className="nav-app-link">{link.label}</Nav.Link>
            ))}
          </Nav>
          <span className="nav-site-separator d-none d-lg-inline" aria-hidden="true">|</span>
          <Nav className="align-items-lg-center nav-site-links">
            {SITE_LINKS.map(link => (
              <Nav.Link key={link.label} href={link.href}>{link.label}</Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto align-items-lg-center">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={toggleTheme}
              className="align-self-start align-self-lg-center"
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
