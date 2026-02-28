import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDatabase, FaNetworkWired, FaBuilding, FaUsers, FaTrophy } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const location = useLocation();
  
  const companyProfileRef = useRef(null);
  const missionValuesRef = useRef(null);
  const customersRef = useRef(null);
  const accomplishmentsRef = useRef(null);
  const leadershipRef = useRef(null);
  const locationsRef = useRef(null);
  const certificationRef = useRef(null);

  useEffect(() => {
    const sectionMap = {
      '/company-profile': companyProfileRef,
      '/mission-values': missionValuesRef,
      '/customers': customersRef,
      '/accomplishments': accomplishmentsRef,
      '/leadership': leadershipRef,
      '/locations': locationsRef,
      '/certification': certificationRef
    };

    const ref = sectionMap[location.pathname];
    if (ref && ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.pathname]);

  const content = {
    vision: {
      title: 'Our Vision',
      text: 'To be #1 telecom engineering service provider in North America'
    },
    mission: {
      title: 'Our Mission',
      text: 'To help our customers in design, deployment and maintenance of advanced wireless networks so that they can provide seamless wireless connectivity, so that each individual can get access to public safety networks, high speed internet and quality voice and data experience.'
    },
    values: {
      title: 'Our Values',
      items: [
        'Ethics & transparency',
        'Proactively manage change',
        'Build a sustainable global organization',
        'Delight customers through superior services',
        'Develop entrepreneurs through an achievement-oriented culture',
        'Share knowledge and focus on end-result',
        'Embrace diversity as an essential component and promote a fair environment for each member of our community'
      ]
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
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Company Profile</h1>
          <p style={{ fontSize: '1.2rem' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link> / Company Profile
          </p>
        </div>
      </div>

      <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={companyProfileRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem', scrollMarginTop: '150px' }}>
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600" alt="Startech Networks" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#0066cc' }}>Startech Networks – Your Partner in Next-Gen Wireless Infrastructure</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
              Startech Networks., was incorporated in 2008. For several years, Startech has been partnering with leading Tier 1 OEMs and Implementation Partners, offering its expertise in wireless communications. From 2G Networks to 3G, 4G and 5G NR, from GSM to VONR, Startech provides complete life-cycle solutions around Network Services.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
              These services include Network Design, Network Implementation/ Deployment, Network Optimization, Network Operations and Maintenance, Infrastructure Management, In-Building Solutions, OSP Fiber Engineering and Professional Staffing Services.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
              Startech Networks has service relationships with several Telecom Operators, OEMs, Application Service Providers and Network Integrators. Delivering world-class service excellence is Startech core mission.
            </p>
          </div>
        </div>

        <div ref={missionValuesRef} style={{ textAlign: 'center', marginBottom: '3rem', scrollMarginTop: '150px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>How to Manage</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Our Managed IT Services let you Concentrate on What Matters</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <div className="vision-buttons" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveTab('vision')}
                onMouseEnter={() => setHoveredBtn('vision')}
                onMouseLeave={() => setHoveredBtn(null)}
                className="btn-animate"
                style={{
                  padding: '1rem 2rem',
                  background: activeTab === 'vision' ? '#0066cc' : (hoveredBtn === 'vision' ? '#f0f0f0' : '#fff'),
                  color: activeTab === 'vision' ? '#fff' : '#333',
                  border: '2px solid #0066cc',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                onMouseEnter={() => setHoveredBtn('mission')}
                onMouseLeave={() => setHoveredBtn(null)}
                className="btn-animate"
                style={{
                  padding: '1rem 2rem',
                  background: activeTab === 'mission' ? '#0066cc' : (hoveredBtn === 'mission' ? '#f0f0f0' : '#fff'),
                  color: activeTab === 'mission' ? '#fff' : '#333',
                  border: '2px solid #0066cc',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('values')}
                onMouseEnter={() => setHoveredBtn('values')}
                onMouseLeave={() => setHoveredBtn(null)}
                className="btn-animate"
                style={{
                  padding: '1rem 2rem',
                  background: activeTab === 'values' ? '#FFD700' : (hoveredBtn === 'values' ? '#FFF4B0' : '#fff'),
                  color: '#333',
                  border: '2px solid #FFD700',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                Our Values
              </button>
            </div>

            <div style={{ padding: '2rem', background: '#f5f5f5', borderRadius: '8px', minHeight: '250px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0066cc' }}>
                {content[activeTab].title}
              </h3>
              {activeTab === 'values' ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {content[activeTab].items.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#333', paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.5rem' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#0066cc', fontWeight: 'bold' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
                  {content[activeTab].text}
                </p>
              )}
            </div>
          </div>
          
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" alt="Vision Mission Values" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
        </div>

        <div ref={customersRef} style={{ marginBottom: '4rem', scrollMarginTop: '150px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', color: '#0066cc' }}>Our Customers</h2>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            StarTech continues to strive for Best Possible Customer Satisfaction and Loyalty. In a survey in recent years 100% of participating customers stated that "they will recommend Startech to their peers and associates".
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {[
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bell_logo.svg/200px-Bell_logo.svg.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AT%26T_logo_2016.svg/200px-AT%26T_logo_2016.svg.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Verizon_2015_logo_-vector.svg/200px-Verizon_2015_logo_-vector.svg.png'
            ].map((logo, idx) => (
              <div key={idx} style={{ padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img src={logo} alt={`Customer ${idx + 1}`} style={{ width: '100%', height: '60px', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1rem', textAlign: 'center', color: '#666' }}>
            In US, Startech directly or indirectly provides services for all major Cellular Operators that together serve over 99% of US population.
          </p>
        </div>

        <div ref={accomplishmentsRef} style={{ marginBottom: '4rem', scrollMarginTop: '150px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', color: '#0066cc' }}>Our Accomplishments</h2>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem', color: '#666' }}>Well, let just the numbers speak for themselves</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {[
              { icon: <FaDatabase size={50} />, number: '250k+', label: 'Data Collection Drives' },
              { icon: <FaNetworkWired size={50} />, number: '10k+', label: 'Design/ Optimization Sites' },
              { icon: <FaBuilding size={50} />, number: '15k+', label: 'Installation, Integration & Commissioning' },
              { icon: <FaBuilding size={50} />, number: '1000+', label: 'In-Building Venues' },
              { icon: <FaUsers size={50} />, number: '100+', label: 'Crews' }
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '2rem', background: '#f9f9f9', borderRadius: '8px', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#0066cc'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#f9f9f9'; e.currentTarget.style.color = '#333'; }}
              >
                <div style={{ marginBottom: '1rem', color: '#0066cc' }}>{item.icon}</div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.number}</h3>
                <p style={{ fontSize: '1rem' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', color: '#999', fontStyle: 'italic', textAlign: 'center' }}>
            *To get exact scope of services for above listed numbers please contact Startech at contact information provided in "Contact Us" section.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {[
            { img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600', text: 'Startech Networks through it\'s partners provides services for all major Cellular Operators that together serve over 99% of US population' },
            { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600', text: 'Pioneers in North America for App based testing on widescale use and network Rollout' },
            { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600', text: 'For multiple Superbowl events, StarTech was the partner of choice for wireless engineering solutions.' }
          ].map((item, idx) => (
            <div key={idx} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={item.img} alt={`Achievement ${idx + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', background: '#fff' }}>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={leadershipRef} className="leadership-grid" style={{ display: 'grid', gridTemplateColumns: '35% 65%', gap: '3rem', alignItems: 'center', marginBottom: '4rem', scrollMarginTop: '150px' }}>
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600" alt="Leadership" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#0066cc' }}>Leadership Announcement</h2>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Tushar Jain Joins Startech Networks as Chief Operations Officer</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
              Startech Networks is proud to welcome Tushar Jain as our new Chief Operations Officer (COO).
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
              With over 25 years of global leadership experience, Tushar brings deep expertise in driving product, engineering, and operational excellence across the telecom, cloud infrastructure, optical, data center, AI-enabled networking, cybersecurity, and enterprise technology sectors.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
              We're excited to have Tushar onboard as we continue shaping the future of connectivity.
            </p>
          </div>
        </div>

        <div ref={locationsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem', scrollMarginTop: '150px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>5m+ Trusted Our Clients</h2>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Locations of Service</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#666' }}>Expanding our wings to ensure you are connected anywhere and everywhere</p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
              Startech Networks North America Business Unit expands its wings and reaches all parts of:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '2', color: '#333', paddingLeft: '1.5rem' }}>
              <li>United States of America</li>
              <li>Canada</li>
              <li>The Caribbean Islands</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
              We have local entities in many of above locations to facilitate ease of doing business for our customers.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600" alt="Locations" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
        </div>

        <div ref={certificationRef} style={{ marginBottom: '4rem', scrollMarginTop: '150px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#0066cc' }}>Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[1, 2, 3, 4].map((cert, idx) => (
              <div key={idx} style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <FaTrophy size={60} style={{ color: '#FFD700', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.2rem', color: '#333' }}>Certification {cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .btn-animate:active {
          transform: scale(0.95);
        }
        @media (max-width: 768px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .vision-buttons {
            flex-wrap: nowrap !important;
            overflow-x: auto;
          }
          .vision-buttons button {
            flex-shrink: 0;
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default About;
