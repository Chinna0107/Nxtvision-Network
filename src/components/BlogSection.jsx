import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Connected for Tomorrow, Powered by Startech Networks',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400'
    },
    {
      title: 'Startech Networks: A People-First HR Philosophy',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400'
    },
    {
      title: 'Our Vision to Lead. Our Mission to Connect',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400'
    }
  ];

  return (
    <div style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#0066cc', fontWeight: 'bold' }}>Latest News & Blog</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Get Every Consulting News Read Article & Blog</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {blogs.map((blog, idx) => (
            <div key={idx} style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333', lineHeight: '1.5' }}>{blog.title}</h3>
                <Link 
                  to="/blog" 
                  className="btn-animate"
                  style={{ 
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem', 
                    background: '#0066cc', 
                    color: '#fff', 
                    textDecoration: 'none', 
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s'
                  }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            className="btn-animate"
            style={{ 
              padding: '1rem 2.5rem', 
              background: '#0066cc', 
              color: '#fff', 
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
