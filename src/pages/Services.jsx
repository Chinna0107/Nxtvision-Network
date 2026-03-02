import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaNetworkWired, FaCheckCircle, FaChartLine, FaPhone, FaSignal, FaClipboardCheck } from 'react-icons/fa';

const Services = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const getPageTitle = () => {
    const titles = {
      '/services': 'Our Services',
      '/network-planning': 'Network Planning',
      '/network-integration': 'Network Integration',
      '/osp-fiber': 'OSP Fiber',
      '/data-center': 'Data Center Services',
      '/staffing': 'Professional Staffing'
    };
    return titles[location.pathname] || 'Our Services';
  };

  const allServices = [
    {
      path: '/network-planning',
      icon: <FaNetworkWired size={60} />,
      title: 'LTE & 5G Drive Testing',
      description: 'NXT VISION Networks conducts real-world drive testing across commercial environments to evaluate coverage, mobility, throughput, latency, and overall user experience. We provide cluster and market-level testing to identify performance gaps and optimization opportunities.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600'
    },
    {
      path: '/network-integration',
      icon: <FaCheckCircle size={60} />,
      title: 'Single Site Verification (SSV)',
      description: 'We validate newly integrated or modified sites before commercial acceptance. Our verification process evaluates coverage footprint, neighbor relations, handovers, and call stability to ensure compliance with design standards.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600'
    },
    {
      path: '/osp-fiber',
      icon: <FaChartLine size={60} />,
      title: 'RF Performance Analysis & Optimization',
      description: 'Through detailed drive test log analysis and KPI evaluation, we identify call drops, call blocks, handover failures, interference issues, and coverage inconsistencies. Our reports provide clear, actionable recommendations for RF optimization teams.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600'
    },
    {
      path: '/data-center',
      icon: <FaPhone size={60} />,
      title: '911 & VoLTE Call Testing',
      description: 'We perform E911 and VoLTE testing to verify call origination, completion, and location accuracy under live network conditions. This ensures regulatory compliance and public safety readiness.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600'
    },
    {
      path: '/staffing',
      icon: <FaSignal size={60} />,
      title: 'Network Benchmarking & Competitive Analysis',
      description: 'We compare network performance across operators and markets using standardized methodologies. Our benchmarking reports support strategic planning and competitive positioning.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600'
    },
    {
      path: '/services',
      icon: <FaClipboardCheck size={60} />,
      title: 'Post-Integration & Pre-Launch Validation',
      description: 'We validate new deployments, upgrades, and feature rollouts through structured testing and performance assessment to reduce rollout risk before commercial launch.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600'
    }
  ];

  const renderContent = () => {
    if (location.pathname === '/services') {
      return (
        <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Comprehensive Network Testing Solutions</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              We provide end-to-end network validation services to ensure your LTE and 5G networks meet quality, compliance, and performance standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {allServices.map((service, idx) => (
              <Link key={idx} to={service.path} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s', height: '100%' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '2rem' }}>
                    <div style={{ color: '#0066cc', marginBottom: '1rem' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>{service.title}</h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#666' }}>{service.description.substring(0, 120)}...</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    const currentService = allServices.find(s => s.path === location.pathname);
    if (currentService) {
      return (
        <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <img src={currentService.image} alt={currentService.title} style={{ width: '100%', maxWidth: '600px', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'block', margin: '0 auto' }} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#0066cc', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{currentService.icon}</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#333' }}>{currentService.title}</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', maxWidth: '800px', margin: '0 auto' }}>{currentService.description}</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/services" style={{ display: 'inline-block', padding: '1rem 2rem', background: '#0066cc', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontSize: '1rem', fontWeight: 'bold' }}>
              View All Services
            </Link>
          </div>
        </div>
      );
    }

    return null;
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

      <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '5rem 3rem',
          borderRadius: '12px',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0,102,204,0.9), rgba(0,51,102,0.9))', borderRadius: '12px' }}></div>
          <div style={{ position: 'relative', color: '#fff', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Ready to Improve Your Network Performance?</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Contact us to discuss your project scope, market coverage needs, and performance objectives.
            </p>
            <Link to="/contact" style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: '#fff',
              color: '#0066cc',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

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

export default Services;
