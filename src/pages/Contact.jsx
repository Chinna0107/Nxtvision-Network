import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
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
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link> / Contact
          </p>
        </div>
      </div>

      <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0066cc' }}>Get in Touch</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            If you are planning a new deployment, upgrade, or network validation project, NXT VISION Networks is ready to support your requirements.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <FaPhone size={50} style={{ color: '#0066cc', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Phone</h3>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>+1 (555) 123-4567</p>
          </div>
          <div style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <FaEnvelope size={50} style={{ color: '#0066cc', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Email</h3>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>info@nxtvisionnetworks.com</p>
          </div>
          <div style={{ padding: '2.5rem', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <FaMapMarkerAlt size={50} style={{ color: '#0066cc', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Location</h3>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>North America</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0066cc' }}>Contact us to discuss:</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#333', paddingLeft: '1.5rem' }}>
              <li>Your project scope and requirements</li>
              <li>Market coverage needs</li>
              <li>Performance objectives</li>
              <li>Testing methodologies</li>
              <li>Reporting requirements</li>
            </ul>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '2rem' }}>
              Our team will provide a structured testing approach tailored to your operational goals.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '1rem', fontWeight: '600' }}>
              We look forward to supporting your network performance initiatives.
            </p>
          </div>
          
          <div style={{ padding: '3rem', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>Send us a message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '1rem', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: '1rem' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '1rem', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: '1rem' }} />
              <input type="text" placeholder="Subject" style={{ padding: '1rem', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: '1rem' }} />
              <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', border: '2px solid #e0e0e0', borderRadius: '5px', fontSize: '1rem', resize: 'vertical' }}></textarea>
              <button type="submit" style={{ padding: '1rem 2rem', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={(e) => e.target.style.background = '#0052a3'}
                onMouseLeave={(e) => e.target.style.background = '#0066cc'}
              >
                Send Message
              </button>
            </form>
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

export default Contact;
