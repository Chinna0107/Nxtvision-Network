import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStore, FaGlobe, FaHeadset, FaDollarSign, FaNetworkWired, FaServer, FaUsers } from 'react-icons/fa';
import TestimonialsSlider from '../components/TestimonialsSlider';
import BlogSection from '../components/BlogSection';
import BrandsSlider from '../components/BrandsSlider';
import CTASection from '../components/CTASection';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <div style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        margin: 0,
        padding: 0
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)'
        }}></div>
        <div style={{
          position: 'relative',
          textAlign: 'center',
          color: '#fff',
          maxWidth: '800px',
          padding: '2rem'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            We're 100% Trusted Network Service Provider
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Providing seamless network coverage solutions
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Making sure your network is in safe hands, and up and running, always
          </p>
          <Link to="/about" style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            background: '#0066cc',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            Explore Us
          </Link>
        </div>
      </div>

      <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Link to="/about" style={{ fontSize: '0.9rem', color: '#0066cc', textDecoration: 'none', display: 'inline-block' }}>← WHO WE ARE</Link>
          <p style={{ fontSize: '1rem', marginTop: '0.5rem', color: '#666' }}>Geared to serve all your network lifecycle needs</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600" alt="Team" style={{ width: '100%', borderRadius: '8px' }} />
          <div style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '8px', border: '2px solid #e0e0e0' }}>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
              From 2G Networks to 3G and 4G, from GSM to VOLTE, StarTech provides complete life-cycle solutions around Network Services.
            </p>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#0066cc', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <FaGlobe /> Connecting the World
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
              Startech Networks has provided wireless engineering services directly or with its partners to Top 5 Major US carriers that connect over 99% US Population.
            </p>
          </div>
        </div>

        <div style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '5rem 3rem',
          borderRadius: '12px',
          marginBottom: '4rem',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0,102,204,0.9), rgba(0,51,102,0.9))', borderRadius: '12px' }}></div>
          <div style={{ position: 'relative', color: '#fff', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Why Get Our Services?</h3>
            <div style={{ width: '80px', height: '4px', background: '#fff', margin: '0 auto 2rem' }}></div>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.9', marginBottom: '1.5rem', fontWeight: '500' }}>
              Delivering world-class service excellence is StarTech's core mission.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', fontStyle: 'italic' }}>
              It is StarTech's belief that in service, quality is the key and utilizes strong engagement models that result in customer delight and productivity backed by stringent Service Level Agreements (SLA's).
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link to="/why-startech" style={{ fontSize: '0.9rem', color: '#0066cc', textDecoration: 'none', display: 'inline-block' }}>← Why Startech Networks?</Link>
          <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', color: '#666' }}>A unique value proposition that is unmatched, unattainable</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {[
            { icon: <FaStore size={40} />, title: 'One Stop Shop', desc: 'Our wide service offerings ease the pain to find the right partner to do it all' },
            { icon: <FaGlobe size={40} />, title: 'Nationwide Presence', desc: 'East to West, North to South, yes we cover it all.' },
            { icon: <FaHeadset size={40} />, title: '24*7 Support', desc: 'Making sure our live customers get the support they need' },
            { icon: <FaDollarSign size={40} />, title: 'Cost Effective', desc: 'We understand when we are cost effective it helps you do the same' }
          ].map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(`why-${idx}`)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: hoveredCard === `why-${idx}` ? '#0066cc' : '#fff',
                color: hoveredCard === `why-${idx}` ? '#fff' : '#333',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Link to="/why-startech" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#0066cc',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>
            Read More
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { icon: <FaNetworkWired size={50} />, title: 'Network Planning and Design', link: '/network-planning', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400' },
            { icon: <FaNetworkWired size={50} />, title: 'Network Integration', link: '/network-integration', img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400' },
            { icon: <FaNetworkWired size={50} />, title: 'OSP Fiber Services', link: '/osp-fiber', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400' },
            { icon: <FaServer size={50} />, title: 'Data Center Services', link: '/data-center', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400' },
            { icon: <FaUsers size={50} />, title: 'Professional Staffing Services', link: '/staffing', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400' }
          ].map((service, idx) => (
            <Link
              key={idx}
              to={service.link}
              onMouseEnter={() => setHoveredCard(`service-${idx}`)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                textDecoration: 'none',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                transform: hoveredCard === `service-${idx}` ? 'translateY(-10px)' : 'translateY(0)'
              }}
            >
              <div style={{ height: '200px', backgroundImage: `url(${service.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '1.5rem', background: hoveredCard === `service-${idx}` ? '#0066cc' : '#fff', color: hoveredCard === `service-${idx}` ? '#fff' : '#333', transition: 'all 0.3s' }}>
                <div style={{ marginBottom: '1rem' }}>{service.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{service.title}</h4>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>TEAM MEMBERS</h2>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Our Leadership</h3>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666', marginBottom: '3rem' }}>
            "Unity is strength.. when there is teamwork and collaboration, wonderful things can be achieved – Mattie Stepanek"
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {[
            { name: 'Tushar Jain', role: 'COO' },
            { name: 'Rohit Chaudhry', role: 'President, Sales' },
            { name: 'Rachit Mahajan', role: 'Head of Delivery' },
            { name: 'Pinakin Gandhi', role: 'CFO' },
            { name: 'Orral Sezer', role: 'Vice President Sales' }
          ].map((member, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#0066cc', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>{member.name}</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{member.role}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#0066cc' }}>We are a team of Networking Geniuses who strive to get you the best.</h3>
            <h4 style={{ fontSize: '1.5rem', color: '#333' }}>Our Leadership</h4>
          </div>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Leadership" style={{ width: '100%', borderRadius: '8px' }} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Link to="/mission-values" style={{ fontSize: '0.9rem', color: '#0066cc', textDecoration: 'none', display: 'inline-block' }}>← Our Vision, Mission & Values</Link>
          <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1rem', color: '#333' }}>Excellence In Solutions</h1>
          <p style={{ fontSize: '1rem', color: '#666' }}>Pioneers in North America for App based testing on widescale use and network Rollout</p>
        </div>

        <VisionMissionValues />

        <TestimonialsSlider />
      </div>

      <BlogSection />
      <BrandsSlider />
      <CTASection />

      <style>{`
        .btn-animate:active {
          transform: scale(0.95);
          background: #004d99 !important;
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

const VisionMissionValues = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [hoveredBtn, setHoveredBtn] = useState(null);

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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
      <div>
        <div className="vision-buttons" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('vision')}
            onMouseEnter={() => setHoveredBtn('vision')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              padding: '1rem 2rem',
              background: activeTab === 'vision' ? '#fff' : (hoveredBtn === 'vision' ? '#f0f0f0' : '#fff'),
              color: '#333',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: activeTab === 'vision' ? '0 4px 8px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            Our Vision
          </button>
          <button
            onClick={() => setActiveTab('mission')}
            onMouseEnter={() => setHoveredBtn('mission')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              padding: '1rem 2rem',
              background: activeTab === 'mission' ? '#fff' : (hoveredBtn === 'mission' ? '#f0f0f0' : '#fff'),
              color: '#333',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: activeTab === 'mission' ? '0 4px 8px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('values')}
            onMouseEnter={() => setHoveredBtn('values')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              padding: '1rem 2rem',
              background: activeTab === 'values' ? '#FFD700' : (hoveredBtn === 'values' ? '#FFF4B0' : '#fff'),
              color: '#333',
              border: '2px solid #FFD700',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: activeTab === 'values' ? '0 4px 8px rgba(255,215,0,0.4)' : 'none'
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
      
      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" alt="Vision Mission Values" style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  );
};

export default Home;
