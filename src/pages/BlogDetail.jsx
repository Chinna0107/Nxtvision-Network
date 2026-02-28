import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  const blogContent = {
    '1': {
      title: "Our Vision to Lead. Our Mission to Connect",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      content: (
        <>
          <p>Startech Networks is driven by a clear vision to become North America's most trusted telecom and data/AI network infrastructure partner, recognized for engineering excellence, scalable execution, and the reliability that powers the world's most critical connections.</p>
          
          <p>We deliver exceptional outcomes by enabling a seamlessly connected world where wireless, fiber, and data center networks support public safety, digital business, and high-quality voice and data experiences, built on a commitment to quality, speed, and integrity.</p>
          
          <h2>Our Mission</h2>
          <p>Startech Networks designs, builds, optimizes, and sustains the network and technology infrastructure that keeps businesses and communities connected.</p>
          
          <p>Across wireless, fiber, data center infrastructure, DAS, and small cells, we support the full network lifecycle – from planning and deployment to testing, optimization, and ongoing operations. With nationwide reach, global delivery capabilities, and deep industry expertise, we deliver solutions that are:</p>
          
          <ul>
            <li><strong>Reliable</strong> – built, tested, and maintained for performance</li>
            <li><strong>Scalable</strong> – designed to grow with customer demands</li>
            <li><strong>Secure</strong> – engineered for mission-critical environments</li>
          </ul>
          
          <p>Our mission goes beyond connectivity, we strengthen the businesses and communities that depend on our networks.</p>
          
          <h2>Our Values</h2>
          <p>Our values guide how we operate and serve:</p>
          
          <ul>
            <li>Integrity & Accountability</li>
            <li>Customer Success First</li>
            <li>Speed & Scale</li>
            <li>Operational Excellence</li>
            <li>Agility & Innovation</li>
            <li>People & Partnership</li>
          </ul>
          
          <p>These principles shape our culture and drive sustainable growth for our customers, partners, and communities.</p>
        </>
      )
    }
  };

  const post = blogContent[id] || blogContent['1'];

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .blog-detail-title { font-size: 1.8rem !important; }
          .blog-detail-image { height: 250px !important; }
          .blog-detail-content { font-size: 1rem !important; }
          .blog-detail-content h2 { font-size: 1.5rem !important; }
        }
      `}</style>
      <div style={{ paddingTop: '180px', minHeight: '100vh', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem 4rem' }}>
          <img 
            className="blog-detail-image"
            src={post.image} 
            alt={post.title}
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '2rem'
            }}
          />
          
          <h1 className="blog-detail-title" style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '2rem',
            color: '#333',
            lineHeight: '1.3'
          }}>
            {post.title}
          </h1>

          <div className="blog-detail-content" style={{ 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#444'
          }}>
            <style>{`
              h2 {
                font-size: 1.8rem;
                font-weight: bold;
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: #333;
              }
              p {
                margin-bottom: 1.5rem;
              }
              ul {
                margin-bottom: 1.5rem;
                padding-left: 2rem;
              }
              li {
                margin-bottom: 0.75rem;
              }
              strong {
                color: #0066cc;
                font-weight: 600;
              }
            `}</style>
            {post.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
