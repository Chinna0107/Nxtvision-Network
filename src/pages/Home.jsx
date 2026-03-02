import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaNetworkWired, FaCheckCircle, FaChartLine, FaPhone, FaSignal, FaClipboardCheck } from 'react-icons/fa';
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
          background: 'rgba(0,0,0,0.6)'
        }}></div>
        <div style={{
          position: 'relative',
          textAlign: 'center',
          color: '#fff',
          maxWidth: '900px',
          padding: '2rem'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            NXT VISION Networks
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', lineHeight: '1.8' }}>
            NXT VISION Networks delivers reliable LTE and 5G drive testing, RF performance analysis, and network validation services to support wireless operators, OEMs, and telecom vendors.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            We help improve real-world network performance through accurate testing, detailed KPI evaluation, and actionable reporting.
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
            Learn More
          </Link>
        </div>
      </div>

      <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Our Expertise</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Field-focused engineering for real-world network performance</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600" alt="Network Testing" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          <div style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '8px', border: '2px solid #e0e0e0' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
              Our field-focused engineering team conducts cluster and market-level drive testing, single site verification, benchmarking, and pre-launch validation to ensure networks meet quality, compliance, and performance standards.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
              Using industry-standard tools and structured methodologies, we provide data you can trust and insights you can act on.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Our Services</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Comprehensive network testing and validation solutions</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { icon: <FaNetworkWired size={40} />, title: 'LTE & 5G Drive Testing', desc: 'Real-world drive testing to evaluate coverage, mobility, throughput, and user experience' },
            { icon: <FaCheckCircle size={40} />, title: 'Single Site Verification', desc: 'Validate newly integrated sites before commercial acceptance' },
            { icon: <FaChartLine size={40} />, title: 'RF Performance Analysis', desc: 'Detailed KPI evaluation and actionable optimization recommendations' },
            { icon: <FaPhone size={40} />, title: '911 & VoLTE Testing', desc: 'Verify call origination, completion, and location accuracy' },
            { icon: <FaSignal size={40} />, title: 'Network Benchmarking', desc: 'Compare performance across operators using standardized methodologies' },
            { icon: <FaClipboardCheck size={40} />, title: 'Pre-Launch Validation', desc: 'Structured testing to reduce rollout risk before commercial launch' }
          ].map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(`service-${idx}`)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: hoveredCard === `service-${idx}` ? '#0066cc' : '#fff',
                color: hoveredCard === `service-${idx}` ? '#fff' : '#333',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' }}>{item.title}</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
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
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Why Choose NXT VISION Networks?</h3>
            <div style={{ width: '80px', height: '4px', background: '#fff', margin: '0 auto 2rem' }}></div>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.9', marginBottom: '1.5rem', fontWeight: '500' }}>
              We are committed to accuracy, compliance, and measurable performance improvement.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9' }}>
              Our engineers focus on consistency, detailed reporting, and fast execution. We provide engineering insight that supports informed decision-making and improves network quality and reliability.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Tools & Technology</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>Industry-standard platforms for accurate data collection</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { name: 'Rohde & Schwarz ROMES', desc: 'Advanced drive testing and network analysis' },
            { name: 'Infovista TEMS Investigation', desc: 'Comprehensive network performance validation' }
          ].map((tool, idx) => (
            <div key={idx} style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <FaNetworkWired size={60} style={{ color: '#0066cc', marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>{tool.name}</h4>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>{tool.desc}</p>
            </div>
          ))}
        </div>

        <TestimonialsSlider />
      </div>

      <BlogSection />
      <BrandsSlider />
      <CTASection />

      <style>{`
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2rem !important; }
          h3 { font-size: 1.8rem !important; }
        }
      `}</style>
    </>
  );
};

export default Home;
