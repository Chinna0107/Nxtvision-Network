import { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Our Services</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '900px', lineHeight: '1.6' }}>
          The experience and expertise gained by executing various projects across several networks gives our customers an unbeatable advantage of Reach, Scale, Efficiency, Cost and Time to market.
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Explore our service offerings to have a better insight into our capabilities.</p>
      </div>

      {/* Services Grid */}
      <div style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem', color: '#0066cc' }}>Our Services</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <Link to="/network-planning" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }} className="service-card">
              <div style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }} />
              <div style={{ padding: '1.5rem', background: '#fff' }}>
                <p style={{ fontSize: '0.9rem', color: '#0066cc', fontWeight: 600, marginBottom: '0.5rem' }}>Our Services</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>Network Planning and Design</h3>
              </div>
            </div>
          </Link>

          <Link to="/network-integration" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }} className="service-card">
              <div style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }} />
              <div style={{ padding: '1.5rem', background: '#fff' }}>
                <p style={{ fontSize: '0.9rem', color: '#0066cc', fontWeight: 600, marginBottom: '0.5rem' }}>Our Services</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>Network Infrastructure</h3>
              </div>
            </div>
          </Link>

          <Link to="/network-integration" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }} className="service-card">
              <div style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }} />
              <div style={{ padding: '1.5rem', background: '#fff' }}>
                <p style={{ fontSize: '0.9rem', color: '#0066cc', fontWeight: 600, marginBottom: '0.5rem' }}>Our Services</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>Network Deployment Services</h3>
              </div>
            </div>
          </Link>

          <Link to="/osp-fiber" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }} className="service-card">
              <div style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }} />
              <div style={{ padding: '1.5rem', background: '#fff' }}>
                <p style={{ fontSize: '0.9rem', color: '#0066cc', fontWeight: 600, marginBottom: '0.5rem' }}>Our Services</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>OSP Fiber Services</h3>
              </div>
            </div>
          </Link>

          <Link to="/data-center" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }} className="service-card">
              <div style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }} />
              <div style={{ padding: '1.5rem', background: '#fff' }}>
                <p style={{ fontSize: '0.9rem', color: '#0066cc', fontWeight: 600, marginBottom: '0.5rem' }}>Our Services</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>Data Center Services</h3>
              </div>
            </div>
          </Link>

          <Link to="/staffing" style={{ textDecoration: 'none' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }} className="service-card">
              <div style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }} />
              <div style={{ padding: '1.5rem', background: '#fff' }}>
                <p style={{ fontSize: '0.9rem', color: '#0066cc', fontWeight: 600, marginBottom: '0.5rem' }}>Our Services</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>Professional Staffing Services</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Consultation Section */}
      <div style={{ background: '#0066cc', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>5M+ TRUSTED OUR CLIENTS</h2>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '1rem' }}>Get Consultations</h3>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Geared to serve all your network lifecycle needs</p>
        <a href="tel:+19724640562" style={{ fontSize: '1.5rem', color: '#fff', textDecoration: 'none', fontWeight: 700 }}>
          Please Call: +1-972-4640-562
        </a>
      </div>

      {/* About Section */}
      <div style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#0066cc' }}>5m+ Trusted Our Clients</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: '#555', fontSize: '1.05rem' }}>
          We aim to Create Unique Value for customers by leveraging our core service offerings revolve around Networks and Network enabled services – for Wireless Service Providers, OEMs, Infrastructure Providers and Enterprise Customers. For more than a decade, our customers have trusted our experienced and trained engineering professionals to Design, Deploy, Optimize, Maintain and Secure their Critical Networks and Applications. Our skilled manpower of over 200 associates offers assured quality to our customers through our integrated end-to-end Network Services.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0066cc', marginBottom: '1rem' }}>Expert Knowledge</h4>
            <p style={{ color: '#555', lineHeight: '1.6' }}>Expert knowledge of business and technology issues in the wireless industry</p>
          </div>
          <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0066cc', marginBottom: '1rem' }}>Full Capability</h4>
            <p style={{ color: '#555', lineHeight: '1.6' }}>Capability to Advice, Plan, Deploy and Manage Networks</p>
          </div>
          <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0066cc', marginBottom: '1rem' }}>System Integration</h4>
            <p style={{ color: '#555', lineHeight: '1.6' }}>System Integration through Multi-Platform and Technologies</p>
          </div>
          <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0066cc', marginBottom: '1rem' }}>Global Presence</h4>
            <p style={{ color: '#555', lineHeight: '1.6' }}>Global customer relationships, Delivery capabilities and market presence</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="contact-grid">
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0066cc' }}>LET'S WORK TOGETHER</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>Call For Inquiry</h4>
              <a href="tel:+19724640562" style={{ color: '#0066cc', textDecoration: 'none', fontSize: '1.2rem' }}>+1-972-4640-562</a>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>Send Us Email</h4>
              <a href="mailto:info@startechnetworks.com" style={{ color: '#0066cc', textDecoration: 'none' }}>info@startechnetworks.com</a>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>Location</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>
                <strong>USA:</strong> 5200 Tennyson Pkwy, Ste. 200 Plano TX 75024<br /><br />
                <strong>Canada:</strong> 5484 Tomken Road, Ste. 14 Mississauga ON, L4W 2Z6
              </p>
            </div>
          </div>

          <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#333' }}>CONTACT US</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  color: formData.service ? '#333' : '#999'
                }}
              >
                <option value="">Choose Services</option>
                <option value="network-planning">Network Planning and Design</option>
                <option value="network-integration">Network Integration</option>
                <option value="osp-fiber">OSP Fiber Services</option>
                <option value="data-center">Data Center Services</option>
                <option value="staffing">Professional Staffing Services</option>
              </select>

              <textarea
                name="message"
                placeholder="Enter Your Message Here"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />

              <button
                type="submit"
                style={{
                  background: '#0066cc',
                  color: '#fff',
                  padding: '0.75rem 2rem',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15) !important;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesOverview;
