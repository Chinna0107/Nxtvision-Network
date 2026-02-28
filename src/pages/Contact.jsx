import { useState } from 'react';
import logo from '../assets/logo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0APhone: ${formData.number}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/+15125753440?text=${message}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 2rem',
        textAlign: 'center',
        color: '#fff',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>Nxtvision Networks</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Contact</p>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="contact-grid">
          
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0066cc', fontWeight: 700 }}>GET IN TOUCH</h2>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Contact Us</h3>
            <p style={{ marginBottom: '2rem', color: '#555', lineHeight: '1.6' }}>
              Schedule a free consultation and discuss your requirements with our experts!
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>Phone</h4>
                <p style={{ color: '#555' }}>+1 512-575-3440</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>Email</h4>
                <p style={{ color: '#555' }}>info@nxtvisionnetworks.com</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>Address</h4>
                <p style={{ color: '#555' }}>5830 E 2nd St, Ste 7000 #32653,<br />Casper, Wyoming - 82609 US</p>
              </div>

              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>Business Hours</h4>
                <p style={{ color: '#555' }}>Monday to Friday: 9am to 5pm (PST)</p>
                <p style={{ color: '#555' }}>Saturday & Sunday: Closed</p>
              </div>
            </div>

            <img src={logo} alt="Nxtvision Networks" style={{ width: '200px', marginTop: '2rem' }} />
          </div>

          {/* Right Side - Contact Form */}
          <div style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 6px 30px rgba(0,0,0,0.1)' }} className="contact-form">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 700, color: '#0066cc' }}>Fill Up The Form</h3>
            <p style={{ marginBottom: '2rem', color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Let's build something great, together. Contact our team of helpful experts today to talk about how we can help you with your telecommunication needs.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.9rem' }}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0066cc'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.9rem' }}>Your Number *</label>
                <input
                  type="tel"
                  name="number"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0066cc'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.9rem' }}>Your Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0066cc'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.9rem' }}>Your Message *</label>
                <textarea
                  name="message"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'border-color 0.3s',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0066cc'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
                  color: '#fff',
                  padding: '1rem 2.5rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 4px 15px rgba(0,102,204,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,102,204,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,102,204,0.3)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div style={{ marginTop: '3rem' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5!2d-106.3!3d42.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUxJzAwLjAiTiAxMDbCsDE4JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-info {
            order: 1;
          }
          .contact-form {
            order: 2;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
