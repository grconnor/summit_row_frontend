'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import '../../styles/footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-main">
          <Col lg={4} md={6} className="mb-4 mb-lg-6">
            <h5 className="footer-title">Summit Row Global</h5>
            <p className="footer-description">
              Global physical commodities trading, logistics and risk management
              across energy, metals and agricultural markets.
            </p>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h6 className="footer-subtitle">Company</h6>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/insights">Insights</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h6 className="footer-subtitle">Our Business</h6>
            <ul className="footer-links">
              <li>
                <Link href="/contact">Commodities</Link>
              </li>
              <li>
                <Link href="/trading-capabilities">Trading & Capabilities</Link>
              </li>
              <li>
                <Link href="/logistics-operations">Logistics & Operations</Link>
              </li>
              <li>
                <Link href="/markets-regions">Markets & Regions</Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h6 className="footer-subtitle">Compliance</h6>
            <ul className="footer-links">
              <li>
                <Link href="/compliance">Compliance & Governance</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link href="/risk-disclosures">Risk Disclosures</Link>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="footer-copyright">
              © {currentYear} Summit Row Global. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="footer-disclaimer">
              Regulated entity. Professional counterparties only.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
