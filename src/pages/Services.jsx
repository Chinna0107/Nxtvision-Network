import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const Services = () => {
  const { service } = useParams();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const sectionMap = {
      '/network-planning': 'network-planning',
      '/network-integration': 'network-integration',
      '/osp-fiber': 'osp-fiber',
      '/data-center': 'data-center',
      '/staffing': 'staffing'
    };

    const sectionId = sectionMap[path];
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -200;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Our Services</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px' }}>Excellence in Network Design and Optimization</p>
      </div>

      {/* Intro Section */}
      <div style={{ maxWidth: '1400px', margin: '3rem auto', padding: '0 4rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          padding: '3rem',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '3rem',
          display: 'grid',
          gridTemplateColumns: '60% 40%',
          gap: '3rem',
          alignItems: 'center'
        }} className="intro-section">
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0066cc', marginBottom: '2rem' }}>Excellence in Network Design & Optimization</h2>
            
            <p style={{ lineHeight: '1.9', marginBottom: '1.8rem', color: '#444', fontSize: '1.1rem', textAlign: 'justify' }}>
              At Startech Networks Inc., our dedication to excellence in network design and optimization is unwavering. We leverage strategic investments in advanced data collection and analysis tools, expert post-processing capabilities, a deep understanding of performance metrics, and comprehensive planning and design services.
            </p>
            
            <p style={{ lineHeight: '1.9', marginBottom: '1.8rem', color: '#444', fontSize: '1.1rem', textAlign: 'justify' }}>
              We offer services across all major wireless technologies, encompassing <strong>5G NR/VONR, LTE/VOLTE, HSPA+, UMTS/WCDMA, GSM, CDMA, EV-DO</strong>, and broadband networks. Startech Networks Inc.'s design and optimization expertise spans from greenfield macro networks to advance in-building solutions such as DAS, small cells, and Wi-Fi connectivity.
            </p>
            
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.1rem', textAlign: 'justify' }}>
              We deliver comprehensive end-to-end, multi-vendor design and optimization solutions that not only meet but exceed customer expectations, ensuring robust and efficient network performance across diverse operational environments.
            </p>
          </div>
          <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '12px',
            minHeight: '350px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }} />
        </div>

        {/* Services Navigation Box */}
        <div style={{
          background: '#fff',
          border: '1px solid #e8e8e8',
          borderRadius: '16px',
          padding: '3rem',
          boxShadow: '0 6px 30px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '2rem', color: '#0066cc', textAlign: 'center', letterSpacing: '-0.5px' }}>Our Services</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="#network-planning" style={{
              padding: '1.5rem 2rem',
              color: '#333',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fff',
              borderRadius: '8px',
              marginBottom: '0.5rem'
            }} className="service-link">
              <span>Network Planning and Design</span>
              <span style={{ color: '#0066cc', fontSize: '1.2rem' }}>→</span>
            </a>
            <a href="#network-integration" style={{
              padding: '1.5rem 2rem',
              color: '#333',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fff',
              borderRadius: '8px',
              marginBottom: '0.5rem'
            }} className="service-link">
              <span>Network Integration</span>
              <span style={{ color: '#0066cc', fontSize: '1.2rem' }}>→</span>
            </a>
            <a href="#osp-fiber" style={{
              padding: '1.5rem 2rem',
              color: '#333',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fff',
              borderRadius: '8px',
              marginBottom: '0.5rem'
            }} className="service-link">
              <span>OSP Fiber Services</span>
              <span style={{ color: '#0066cc', fontSize: '1.2rem' }}>→</span>
            </a>
            <a href="#data-center" style={{
              padding: '1.5rem 2rem',
              color: '#333',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fff',
              borderRadius: '8px',
              marginBottom: '0.5rem'
            }} className="service-link">
              <span>Data Center Services</span>
              <span style={{ color: '#0066cc', fontSize: '1.2rem' }}>→</span>
            </a>
            <a href="#staffing" style={{
              padding: '1.5rem 2rem',
              color: '#333',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fff',
              borderRadius: '8px'
            }} className="service-link">
              <span>Professional Staffing Services</span>
              <span style={{ color: '#0066cc', fontSize: '1.2rem' }}>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Network Planning Section */}
      <div id="network-planning" style={{ maxWidth: '1400px', margin: '0 auto 4rem', padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '45% 55%', gap: '3rem', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 30px rgba(0,0,0,0.1)' }} className="service-section">
          <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }} />
          <div style={{ padding: '3rem 3rem 3rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0066cc' }}>Network Planning & Design</h2>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• CW Testing & Model Tuning</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• RF Network Design- Greenfield and Capacity</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• EME Studies</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Microwave Path Design</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• RF Benchmark and Drive Test</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Single Site Verification (SSV) & Site Shake down (SSD)</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Automated Post Processing and Report Generation</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Post Launch Optimization</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• RFDS and Data Build Creations</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Performance Monitoring & Analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Network Integration Section */}
      <div id="network-integration" style={{ maxWidth: '1400px', margin: '0 auto 4rem', padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '3rem', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 30px rgba(0,0,0,0.1)' }} className="service-section">
          <div style={{ padding: '3rem 0 3rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0066cc' }}>Network Integration</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
              In today's interconnected world, reliable and robust wireless networks are indispensable for both businesses and individuals. Startech Network Inc. leads at the forefront of this technological landscape, providing cutting-edge wireless network deployment services that cater to a diverse range of needs.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
              Startech Network Inc. is widely recognized for its comprehensive suite of wireless network solutions, spanning 2G, 3G, 4G, and 5G technologies, tailored to meet the unique requirements of various industries.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• BTS Equipment Installation – New Builds & Swaps</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• CIQ and SCF File Creation</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Integration & Commissioning</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• DC Power Plant Installation</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Site Audit & Survey</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Acceptance Testing</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Alarm Monitoring and Testing</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• DAS/ Small Cell Installation</li>
            </ul>
          </div>
          <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }} />
        </div>
      </div>

      {/* OSP Fiber Section */}
      <div id="osp-fiber" style={{ maxWidth: '1400px', margin: '0 auto 4rem', padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '45% 55%', gap: '3rem', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 30px rgba(0,0,0,0.1)' }} className="service-section">
          <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }} />
          <div style={{ padding: '3rem 3rem 3rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0066cc' }}>OSP Fiber Services</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
              In the telecommunications sector, Outside Plant (OSP) Fiber services are indispensable for establishing dependable, high-speed connectivity over extensive distances and diverse environments.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
              As a leader in OSP Fiber services, Startech Network Inc. offers a comprehensive array of solutions designed to ensure reliable, high-speed connectivity across varied environments.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Network Planning and Design</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• OSP Field Surveys</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Underground and Aerials</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Fiber to Home and Business</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Make Ready Engineering</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Pole Wind Loading- OCALC</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Permitting and Regulatory Compliance</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Fiber Splicing and Testing</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Maintenance and Repair</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Network Upgrades and Expansions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data Center Section */}
      <div id="data-center" style={{ maxWidth: '1400px', margin: '0 auto 4rem', padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '3rem', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 30px rgba(0,0,0,0.1)' }} className="service-section">
          <div style={{ padding: '3rem 0 3rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0066cc' }}>Data Center Services</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
              In the telecommunications sector, data center services are critical for maintaining robust infrastructure and ensuring seamless operations. Startech Network Inc. excels in delivering comprehensive data center solutions.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
              Our blend of expertise, advanced technology, and unwavering commitment to quality positions us as the preferred partner for organizations seeking reliable data center services.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Infrastructure Planning and Design</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Server Installation and Configuration</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Network Architecture</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Cooling and Power Management</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Security Implementation</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Disaster Recovery Planning</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Monitoring and Maintenance</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Capacity Planning</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Migration Services</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Compliance and Auditing</li>
            </ul>
          </div>
          <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }} />
        </div>
      </div>

      {/* Professional Staffing Section */}
      <div id="staffing" style={{ maxWidth: '1400px', margin: '0 auto 4rem', padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '45% 55%', gap: '3rem', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 30px rgba(0,0,0,0.1)' }} className="service-section">
          <div style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px'
          }} />
          <div style={{ padding: '3rem 3rem 3rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0066cc' }}>Professional Staffing Services</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
              In today's competitive landscape, the growth and success of businesses hinge on deploying the right talent. At Startech, we specialize in connecting companies with experienced professionals who possess the specialized skills necessary to navigate industry challenges.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
              We understand the unique challenges faced by businesses across various sectors, particularly in the Telecom, Healthcare and IT industry.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Specialized Recruitments (Telecom, Healthcare and IT)</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Flexible Staffing Solutions</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Consultative Approach</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Retention Strategies</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• Screening and Assessment</li>
              <li style={{ marginBottom: '0.5rem', color: '#555' }}>• SME Staffing</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .service-link:hover {
          background: linear-gradient(135deg, #e6f2ff 0%, #f0f7ff 100%) !important;
          transform: translateX(8px);
          box-shadow: 0 4px 12px rgba(0,102,204,0.15);
        }
        @media (max-width: 768px) {
          .intro-section {
            grid-template-columns: 1fr !important;
          }
          .service-section {
            grid-template-columns: 1fr !important;
          }
          .service-section > div {
            min-height: 300px !important;
          }
          .service-section > div:first-child {
            order: 1;
          }
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
