'use client';

import Navigation from './Navigation';
import Footer from './Footer';
import CookieConsent from 'react-cookie-consent';
import { Container } from 'react-bootstrap';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="main-layout">
          <Navigation />
          <main className="main-content">{children}</main>
          <Footer />

          <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="summitRowGlobalCookie"
            style={{ background: '#1a1a1a', padding: '1rem 0' }}
            buttonStyle={{
              background: '#2c5f8d',
              color: '#ffffff',
              fontSize: '14px',
              borderRadius: '4px',
              padding: '10px 30px',
            }}
            expires={150}
          >
            <div className="text-center">
              This website uses cookies to enhance the user experience and
              analyze site traffic.{' '}
              <a className='cookie-learn-more' href="/privacy-policy" style={{ color: '#b8914d' }}>
                Learn more
              </a>
            </div>
          </CookieConsent>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
