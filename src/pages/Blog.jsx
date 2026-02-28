import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(8);

  const blogPosts = [
    {
      id: 1,
      title: "Our Vision to Lead. Our Mission to Connect",
      excerpt: "Startech Networks is driven by a clear vision to become North America's most trusted telecom and data/AI network infrastructure partner,...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Powering Connectivity with Reliable OSP Fiber Engineering",
      excerpt: "How Startech Networks Builds the Backbone of Digital Infrastructure As demand for high-speed broadband, 5G backhaul, cloud services, and smart...",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Seamless Network Integration for Reliable Connectivity",
      excerpt: "Startech Networks provides comprehensive network integration services designed to create efficient, scalable, and high-performance communication systems. By combining technical expertise...",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "Building the Backbone of Tomorrow's Connectivity.",
      excerpt: "We lead the planning, engineering, and execution of large-scale Outside Plant (OSP) programs, delivering precise, reliable, and future-ready telecom infrastructure....",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop"
    },
    {
      id: 5,
      title: "Seamless Network Integration for Reliable Connectivity",
      excerpt: "Startech Networks provides comprehensive network integration services designed to create efficient, scalable, and high-performance communication systems. By combining technical expertise...",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    {
      id: 6,
      title: "Building the Backbone of Tomorrow's Connectivity.",
      excerpt: "We lead the planning, engineering, and execution of large-scale Outside Plant (OSP) programs, delivering precise, reliable, and future-ready telecom infrastructure....",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop"
    },
    {
      id: 7,
      title: "Why choose Startech Networks for your end-to-end Network Integration Services?",
      excerpt: "Startech Networks Inc delivers comprehensive Network Integration Services designed to support fast, efficient, and scalable telecom deployments. With deep engineering...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      id: 8,
      title: "Work-Life Balance at Startech Networks Inc.",
      excerpt: "In the fast-paced world of telecom engineering, where teams manage 5G rollouts, deployments, and network operations, maintaining balance isn't easy....",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
    }
  ];

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 4, blogPosts.length));
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .blog-title { font-size: 2rem !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ paddingTop: '180px', minHeight: '100vh', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 4rem' }}>
          <h1 className="blog-title" style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '3rem',
            color: '#333'
          }}>
            Blog
          </h1>

          <div className="blog-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {blogPosts.slice(0, visiblePosts).map((post) => (
              <div key={post.id} style={{
                background: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover' 
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    color: '#333',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} style={{ 
                    color: '#0066cc', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {visiblePosts < blogPosts.length && (
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={loadMore}
                style={{
                  padding: '1rem 3rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#fff',
                  background: '#0066cc',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.background = '#0052a3'}
                onMouseLeave={(e) => e.target.style.background = '#0066cc'}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
