import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: '40px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 5rem',
        background: 'transparent',
        zIndex: 1000
      }}>
        <div>
          <img src={logo} alt="Nxtvision Networks" style={{ height: '80px', width: 'auto', transform: 'scaleX(1.8)' }} />
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
            transition: 'transform 0.3s ease'
          }}
        >
          {mobileMenuOpen ? (
            <div style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 700 }}>✕</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '24px' }}>
              <span style={{ display: 'block', height: '3px', background: '#fff', borderRadius: '2px' }}></span>
              <span style={{ display: 'block', height: '3px', background: '#fff', borderRadius: '2px' }}></span>
              <span style={{ display: 'block', height: '3px', background: '#fff', borderRadius: '2px' }}></span>
            </div>
          )}
        </button>

        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 700 }}>Home</Link>
          
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="dropdown-wrapper"
          >
            <span style={{ cursor: 'pointer', color: '#333', fontWeight: 700, padding: '1rem 0', display: 'inline-block' }}>About ▾</span>
            {activeDropdown === 'about' && (
              <div className="dropdown-menu" style={{
                position: 'absolute',
                top: 'calc(100% - 0.5rem)',
                left: 0,
                background: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                minWidth: '220px',
                padding: '0.5rem 0',
                paddingTop: '1rem',
                borderRadius: '4px',
                zIndex: 1001
              }}>
                <Link to="/company-profile" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Company Profile</Link>
                <Link to="/mission-values" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Our Mission & Values</Link>
                <Link to="/customers" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Our Customers</Link>
                <Link to="/accomplishments" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Our Accomplishments</Link>
                <Link to="/leadership" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Our Leadership</Link>
                <Link to="/locations" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Location of Services</Link>
                <Link to="/certification" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Certification</Link>
              </div>
            )}
          </div>

          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="dropdown-wrapper"
          >
            <span style={{ cursor: 'pointer', color: '#333', fontWeight: 700, padding: '1rem 0', display: 'inline-block' }}>
            <Link to="/services" style={{ textDecoration: 'none', color: '#333' }}>Services</Link> ▾
          </span>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu" style={{
                position: 'absolute',
                top: 'calc(100% - 0.5rem)',
                left: 0,
                background: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                minWidth: '250px',
                padding: '0.5rem 0',
                paddingTop: '1rem',
                borderRadius: '4px',
                zIndex: 1001
              }}>
                <Link to="/services" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>All Services</Link>
                <Link to="/network-planning" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Network Planning and Designing</Link>
                <Link to="/network-integration" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Network Integration</Link>
                <Link to="/osp-fiber" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>OSP Fiber</Link>
                <Link to="/data-center" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Data Center Services</Link>
                <Link to="/staffing" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Professional Staffing Services</Link>
              </div>
            )}
          </div>

          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('careers')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="dropdown-wrapper"
          >
            <span style={{ cursor: 'pointer', color: '#333', fontWeight: 700, padding: '1rem 0', display: 'inline-block' }}>Careers ▾</span>
            {activeDropdown === 'careers' && (
              <div className="dropdown-menu" style={{
                position: 'absolute',
                top: 'calc(100% - 0.5rem)',
                left: 0,
                background: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                minWidth: '220px',
                padding: '0.5rem 0',
                paddingTop: '1rem',
                borderRadius: '4px',
                zIndex: 1001
              }}>
                <Link to="/hr-philosophy" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>HR Philosophy</Link>
                <Link to="/life-at-nxtvision" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Life at Nxtvision Networks</Link>
                <Link to="/talent-development" style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#333', textDecoration: 'none', fontWeight: 700 }}>Talent Development</Link>
              </div>
            )}
          </div>

          <Link to="/blog" style={{ textDecoration: 'none', color: '#333', fontWeight: 700 }}>Blog</Link>
          <Link to="/why-startech" style={{ textDecoration: 'none', color: '#333', fontWeight: 700 }}>Why Startech</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 700 }}>Contact Us</Link>
        </nav>
      </header>

      {mobileMenuOpen && (
        <nav 
          ref={mobileMenuRef}
          className="mobile-nav" 
          style={{ 
            position: 'fixed',
            top: '160px',
            left: 0,
            right: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.98) 100%)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem 2rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            maxHeight: 'calc(100vh - 180px)',
            overflowY: 'auto',
            zIndex: 999,
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ padding: '1rem 0', borderBottom: '2px solid #e0e0e0', textDecoration: 'none', color: '#333', fontWeight: 700, fontSize: '1.1rem', display: 'block' }}>Home</Link>
          
          <div style={{ borderBottom: '2px solid #e0e0e0', paddingTop: '1rem' }}>
            <div style={{ padding: '0.5rem 0', color: '#0066cc', fontWeight: 700, fontSize: '1.1rem' }}>About</div>
            <Link to="/company-profile" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Company Profile</Link>
            <Link to="/mission-values" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Our Mission & Values</Link>
            <Link to="/customers" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Our Customers</Link>
            <Link to="/accomplishments" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Our Accomplishments</Link>
            <Link to="/leadership" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Our Leadership</Link>
            <Link to="/locations" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Location of Services</Link>
            <Link to="/certification" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem', paddingBottom: '1rem' }}>Certification</Link>
          </div>

          <div style={{ borderBottom: '2px solid #e0e0e0', paddingTop: '1rem' }}>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.5rem 0', color: '#0066cc', fontWeight: 700, fontSize: '1.1rem', display: 'block', textDecoration: 'none' }}>Services</Link>
            <Link to="/network-planning" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Network Planning and Designing</Link>
            <Link to="/network-integration" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Network Integration</Link>
            <Link to="/osp-fiber" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>OSP Fiber</Link>
            <Link to="/data-center" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Data Center Services</Link>
            <Link to="/staffing" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem', paddingBottom: '1rem' }}>Professional Staffing Services</Link>
          </div>

          <div style={{ borderBottom: '2px solid #e0e0e0', paddingTop: '1rem' }}>
            <div style={{ padding: '0.5rem 0', color: '#0066cc', fontWeight: 700, fontSize: '1.1rem' }}>Careers</div>
            <Link to="/hr-philosophy" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>HR Philosophy</Link>
            <Link to="/life-at-nxtvision" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem' }}>Life at Nxtvision Networks</Link>
            <Link to="/talent-development" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.75rem 0 0.75rem 1.5rem', display: 'block', textDecoration: 'none', color: '#555', fontSize: '1rem', paddingBottom: '1rem' }}>Talent Development</Link>
          </div>

          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} style={{ padding: '1rem 0', borderBottom: '2px solid #e0e0e0', textDecoration: 'none', color: '#333', fontWeight: 700, fontSize: '1.1rem', display: 'block' }}>Blog</Link>
          <Link to="/why-startech" onClick={() => setMobileMenuOpen(false)} style={{ padding: '1rem 0', borderBottom: '2px solid #e0e0e0', textDecoration: 'none', color: '#333', fontWeight: 700, fontSize: '1.1rem', display: 'block' }}>Why Startech</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ padding: '1rem 0', textDecoration: 'none', color: '#333', fontWeight: 700, fontSize: '1.1rem', display: 'block' }}>Contact Us</Link>
        </nav>
      )}

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-menu a:hover { background: #f5f5f5; }
        .mobile-menu-btn:hover { transform: scale(1.05); }
        @media (max-width: 1024px) {
          header { padding: 1rem 2rem !important; }
          .desktop-nav { gap: 1.5rem !important; font-size: 0.9rem; }
        }
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          .desktop-nav { display: none !important; }
          header img { height: 60px !important; }
        }
        a:hover, span:hover { color: #0066cc !important; }
      `}</style>
    </>
  );
};

export default Header;
