import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const getPageTitle = () => {
    const titles = {
      '/about': 'About Us',
      '/company-profile': 'Company Profile',
      '/mission-values': 'Mission & Values',
      '/customers': 'Our Customers',
      '/accomplishments': 'Our Accomplishments',
      '/leadership': 'Our Leadership',
      '/locations': 'Locations',
      '/certification': 'Certifications'
    };
    return titles[location.pathname] || 'About Us';
  };

  const renderContent = () => {
    switch(location.pathname) {
      case '/company-profile':
        return (
          <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600" alt="NXT VISION Networks" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0066cc' }}>About NXT VISION Networks</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  NXT VISION Networks is a telecommunications engineering company specializing in LTE and 5G network testing and performance optimization.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  We work closely with wireless carriers and vendors to ensure networks perform reliably under real-world conditions.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', fontWeight: '600' }}>
                  Our mission is simple: deliver accurate performance data, reduce deployment risk, and support measurable network improvement.
                </p>
              </div>
            </div>
          </div>
        );

      case '/mission-values':
        return (
          <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Our Mission & Values</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
              <div style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0066cc' }}>Our Mission</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                  To deliver accurate performance data, reduce deployment risk, and support measurable network improvement through precise LTE and 5G testing services.
                </p>
              </div>
              <div style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0066cc' }}>Our Values</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#333', paddingLeft: '1.5rem' }}>
                  <li>Accuracy & Precision</li>
                  <li>Regulatory Compliance</li>
                  <li>Technical Excellence</li>
                  <li>Client Partnership</li>
                  <li>Continuous Improvement</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case '/customers':
        return (
          <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Our Customers</h2>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>Trusted by leading wireless carriers and telecom vendors</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {['Wireless Carriers', 'Network OEMs', 'Telecom Vendors', 'Infrastructure Partners'].map((customer, idx) => (
                <div key={idx} style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>{customer}</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>Professional network testing services</p>
                </div>
              ))}
            </div>
          </div>
        );

      case '/accomplishments':
        return (
          <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Our Accomplishments</h2>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>Delivering excellence in network testing</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {[
                { number: '1000+', label: 'Sites Tested' },
                { number: '50+', label: 'Markets Covered' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '3rem', color: '#0066cc', marginBottom: '1rem', fontWeight: 'bold' }}>{item.number}</h3>
                  <p style={{ fontSize: '1.2rem', color: '#333' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case '/leadership':
        return (
          <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Our Leadership</h2>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>Experienced professionals driving network excellence</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
              {[
                { name: 'Leadership Team', role: 'Executive Management' },
                { name: 'Engineering Team', role: 'Technical Experts' },
                { name: 'Operations Team', role: 'Field Operations' }
              ].map((member, idx) => (
                <div key={idx} style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#0066cc', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>{member.name}</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case '/locations':
        return (
          <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Service Locations</h2>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>Nationwide coverage across North America</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600" alt="Locations" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Coverage Areas</h3>
                <ul style={{ fontSize: '1.2rem', lineHeight: '2', color: '#333', paddingLeft: '1.5rem' }}>
                  <li>United States - All major markets</li>
                  <li>Canada - Coast to coast</li>
                  <li>Remote and rural areas</li>
                  <li>Urban and suburban markets</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case '/certification':
        return (
          <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Certifications & Tools</h2>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>Industry-standard platforms and certified professionals</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {[
                'Rohde & Schwarz ROMES Certified',
                'Infovista TEMS Certified',
                'LTE Testing Expertise',
                '5G NR Testing Expertise'
              ].map((cert, idx) => (
                <div key={idx} style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ fontSize: '1.3rem', color: '#333' }}>{cert}</h3>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600" alt="NXT VISION Networks" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0066cc' }}>About NXT VISION Networks</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  NXT VISION Networks is a telecommunications engineering company specializing in LTE and 5G network testing and performance optimization.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', fontWeight: '600' }}>
                  Our mission is simple: deliver accurate performance data, reduce deployment risk, and support measurable network improvement.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#0066cc' }}>Company Overview</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <Link to="/company-profile" style={{ textDecoration: 'none', padding: '2rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#0066cc', marginBottom: '1rem' }}>Company Profile</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>Learn about our company and expertise</p>
                </Link>
                <Link to="/mission-values" style={{ textDecoration: 'none', padding: '2rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#0066cc', marginBottom: '1rem' }}>Mission & Values</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>Our mission and core values</p>
                </Link>
                <Link to="/customers" style={{ textDecoration: 'none', padding: '2rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#0066cc', marginBottom: '1rem' }}>Our Customers</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>Who we serve</p>
                </Link>
                <Link to="/accomplishments" style={{ textDecoration: 'none', padding: '2rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#0066cc', marginBottom: '1rem' }}>Accomplishments</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>Our achievements and milestones</p>
                </Link>
                <Link to="/leadership" style={{ textDecoration: 'none', padding: '2rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#0066cc', marginBottom: '1rem' }}>Leadership</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>Meet our leadership team</p>
                </Link>
                <Link to="/locations" style={{ textDecoration: 'none', padding: '2rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#0066cc', marginBottom: '1rem' }}>Locations</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>Where we operate</p>
                </Link>
                <Link to="/certification" style={{ textDecoration: 'none', padding: '2rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#0066cc', marginBottom: '1rem' }}>Certifications</h3>
                  <p style={{ fontSize: '1rem', color: '#666' }}>Our certifications and tools</p>
                </Link>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div style={{
        height: '50vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>{getPageTitle()}</h1>
          <p style={{ fontSize: '1.2rem' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link> / {getPageTitle()}
          </p>
        </div>
      </div>

      {renderContent()}

      <style>{`
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2rem !important; }
          h3 { font-size: 1.5rem !important; }
        }
      `}</style>
    </>
  );
};

export default About;
