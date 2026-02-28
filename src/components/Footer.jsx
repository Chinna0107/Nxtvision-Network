import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{ background: '#1a1a1a', color: '#fff', padding: '3rem 2rem 1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div>
          <img src={logo} alt="Nxtvision Networks" style={{ height: '60px', width: 'auto', transform: 'scaleX(1.3)', marginBottom: '1.5rem' }} />
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            Address: 5830 E 2nd St, Ste 7000 #32653, Casper, Wyoming - 82609 US<br/>
            Email: info@nxtvisionnetworks.com<br/>
            Phone: +1 512-575-3440
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.8rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.8rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem' }}>About Us</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/company-profile" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Company Profile</Link>
            <Link to="/mission-values" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Our Vision, Mission & Values</Link>
            <Link to="/customers" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Our Customer</Link>
            <Link to="/accomplishments" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Our Accomplishments</Link>
            <Link to="/leadership" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Our Team</Link>
            <Link to="/locations" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Locations of Service</Link>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem' }}>Our Services</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/services" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>All Services</Link>
            <Link to="/network-planning" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Network Planning and Design</Link>
            <Link to="/network-integration" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Network Integration</Link>
            <Link to="/osp-fiber" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>OSP Fiber Services</Link>
            <Link to="/data-center" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Data Center Services</Link>
            <Link to="/staffing" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Professional Staffing Services</Link>
          </div>
          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Careers</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/hr-philosophy" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>HR Philosophy</Link>
            <Link to="/life-at-nxtvision" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Life at Startech Networks</Link>
            <Link to="/talent-development" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Talent Development</Link>
            <Link to="/openings" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Current Openings</Link>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem' }}>Quick links</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/blog" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Blog</Link>
            <Link to="/why-startech" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Why Startech</Link>
            <Link to="/contact" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
            <Link to="/terms" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Terms & Conditions</Link>
            <Link to="/disclaimer" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Disclaimer</Link>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #333', marginTop: '2rem', paddingTop: '1rem', textAlign: 'center', fontSize: '0.85rem', color: '#999' }}>
        <p>Copyright © 2025 Startech Networks. All Rights Reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>Developed By: Aspiring Media Tech Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
