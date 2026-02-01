'use client';

import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import '../../styles/navigation.scss';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);

  return (
    <Navbar expand="lg" className="navigation" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} href="/" className="brand">
          <span className="brand-text">Summit Row Global</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navigation"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="main-navigation">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/about"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Nav.Link>
            <NavDropdown
              title="Our Business"
              id="business-dropdown"
              show={showBusiness}
              onMouseEnter={() => setShowBusiness(true)}
              onMouseLeave={() => setShowBusiness(false)}
            >
              <NavDropdown.Item
                as={Link}
                href="/commodities"
                onClick={() => setExpanded(false)}
              >
                Commodities
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/trading-capabilities"
                onClick={() => setExpanded(false)}
              >
                Trading & Capabilities
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/logistics-operations"
                onClick={() => setExpanded(false)}
              >
                Logistics & Operations
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/markets-regions"
                onClick={() => setExpanded(false)}
              >
                Markets & Regions
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              href="/compliance"
              onClick={() => setExpanded(false)}
            >
              Compliance
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/insights"
              onClick={() => setExpanded(false)}
            >
              Insights
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/careers"
              onClick={() => setExpanded(false)}
            >
              Careers
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/contact"
              onClick={() => setExpanded(false)}
              className="contact-link"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
