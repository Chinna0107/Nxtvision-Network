const WhyStartech = () => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .why-container { flex-direction: column !important; }
          .why-left, .why-right { width: 100% !important; position: relative !important; }
          .why-left { top: 0 !important; margin-bottom: 2rem; }
          .why-title { font-size: 2rem !important; }
          .why-subtitle { font-size: 1rem !important; }
          .why-section-title { font-size: 1.5rem !important; }
          .why-card { padding: 1.25rem !important; }
          .why-card-title { font-size: 1.1rem !important; }
          .why-card-desc { font-size: 0.95rem !important; padding-left: 0 !important; }
          .why-image { height: 400px !important; }
        }
      `}</style>
      <div style={{ paddingTop: '140px', minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="why-title" style={{ 
              fontSize: '3.5rem', 
              fontWeight: '800', 
              marginBottom: '1rem',
              color: '#1a1a1a',
              letterSpacing: '-1px'
            }}>
              Why Startech Networks?
            </h1>
            <p className="why-subtitle" style={{ 
              fontSize: '1.3rem', 
              color: '#0066cc',
              fontWeight: '600',
              fontStyle: 'italic'
            }}>
              A unique value proposition that is unmatched, unattainable
            </p>
          </div>

          <div className="why-container" style={{ display: 'flex', gap: '3rem', minHeight: '70vh' }}>
            <div className="why-left" style={{ 
              width: '45%', 
              position: 'sticky',
              top: '160px',
              height: 'fit-content'
            }}>
              <div style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <img 
                  className="why-image"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=800&fit=crop" 
                  alt="Why Startech Networks"
                  style={{ 
                    width: '100%', 
                    height: '550px', 
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '12px',
                  color: '#fff',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Ready to Partner?</h3>
                  <p style={{ fontSize: '1rem', opacity: 0.9 }}>Let's build the future together</p>
                </div>
              </div>
            </div>

            <div className="why-right" style={{ 
              width: '55%', 
              paddingBottom: '3rem'
            }}>
              <div style={{
                background: '#fff',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                marginBottom: '2rem'
              }}>
                <h2 className="why-section-title" style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1.5rem',
                  color: '#1a1a1a',
                  borderBottom: '3px solid #0066cc',
                  paddingBottom: '1rem'
                }}>
                  Why work with Startech Networks Inc.?
                </h2>
                <p style={{ 
                  fontSize: '1.15rem', 
                  lineHeight: '1.9', 
                  color: '#444',
                  marginBottom: '1.5rem'
                }}>
                  We understand with so many choices available, it is imperative you make the right one.
                </p>
                <p style={{ 
                  fontSize: '1.15rem', 
                  lineHeight: '1.9', 
                  color: '#444',
                  fontWeight: '500'
                }}>
                  We at Startech Networks make that decision easy for you, by assuring you that with Startech Networks you are in safe hands:
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'One Stop Shop', desc: 'Our wide service offerings ease the pain to find the right partner to do it all' },
                  { title: 'Nationwide Presence', desc: 'East to West, North to South, yes we cover it all.' },
                  { title: '24*7 Support', desc: 'Making sure our live customers get the support they need' },
                  { title: 'Tools Proficiency', desc: 'Trained and certified professionals on industry leading tools' },
                  { title: 'Multi-Vendor, Multi-Technology Expertise', desc: 'We understand it\'s not just us, but different technologies and equipment also need to collaborate and coexist' },
                  { title: 'Swift Ramp Up, Ramp Down Capability', desc: 'We can arrange just the right number of resources and equipment based on your project requirements' },
                  { title: 'Cost Effective', desc: 'We understand when we are cost effective it helps you do the same' },
                  { title: 'Global Reach', desc: 'Our birth parents have executed projects in more than 45 countries globally and still counting' }
                ].map((item, index) => (
                  <div key={index} className="why-card" style={{
                    background: '#fff',
                    padding: '1.75rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    borderLeft: '4px solid #0066cc',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,102,204,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <h3 className="why-card-title" style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: 'bold', 
                        color: '#1a1a1a',
                        margin: 0
                      }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="why-card-desc" style={{ 
                      fontSize: '1.05rem', 
                      lineHeight: '1.7', 
                      color: '#555',
                      margin: 0,
                      paddingLeft: '56px'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyStartech;
