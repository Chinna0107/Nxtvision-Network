import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '6rem 2rem',
      position: 'relative'
    }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'linear-gradient(135deg, rgba(0,102,204,0.85), rgba(0,51,102,0.85))' 
      }}></div>
      <div style={{ 
        position: 'relative', 
        maxWidth: '800px', 
        margin: '0 auto', 
        textAlign: 'center', 
        color: '#fff' 
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          Get Started with StarTech Networks
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
          Geared to serve all your network lifecycle needs
        </p>
        <Link 
          to="/contact" 
          className="btn-animate"
          style={{ 
            display: 'inline-block',
            padding: '1.2rem 3rem', 
            background: '#fff', 
            color: '#0066cc', 
            textDecoration: 'none', 
            borderRadius: '5px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
