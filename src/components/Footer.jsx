import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{ background: '#1a1a1a', color: '#fff', padding: '3rem 2rem 1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div>
          <img src={logo} alt="Nxtvision Networks" style={{ height: '60px', width: 'auto', transform: 'scaleX(1.3)', marginBottom: '1.5rem' }} />
          <h3 style={{ marginBottom: '1rem' }}>USA</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            Address: 5200 Tennyson Pkwy, Ste. 200 Plano TX 75024<br/>
            Email: info@startechnetworks.com<br/>
            Contact No: +1-972-4640-562<br/>
            Fax: +1-972(464)-0600
          </p>
          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Canada</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            Address: 5484 Tomken Road, Ste. 14 Mississauga ON, L4W 2Z6<br/>
            Email: info@startechcanada.com<br/>
            Contact No: +1-972-4640-562<br/>
            Fax: +1-972(464)-0600
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: '#fff' }}>Linkedin</a>
            <a href="#" style={{ color: '#fff' }}>Instagram</a>
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
