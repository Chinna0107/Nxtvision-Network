import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUsers, FaLightbulb, FaChartLine, FaBriefcase } from 'react-icons/fa';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('approach');
  const location = useLocation();
  
  const hrPhilosophyRef = useRef(null);
  const lifeAtStartechRef = useRef(null);
  const talentDevRef = useRef(null);
  const openingsRef = useRef(null);

  useEffect(() => {
    const sectionMap = {
      '/hr-philosophy': hrPhilosophyRef,
      '/life-at-nxtvision': lifeAtStartechRef,
      '/talent-development': talentDevRef,
      '/current-openings': openingsRef
    };

    const ref = sectionMap[location.pathname];
    if (ref && ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <>
      <div style={{
        height: '50vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Careers</h1>
          <p style={{ fontSize: '1.2rem' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link> / Careers
          </p>
        </div>
      </div>

      <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0066cc', marginBottom: '1rem' }}>5m+ Trusted Our Clients</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
            People have always been the strength of Startech Networks, and the reason for its success. In Startech Networks Inc., the Human Resources function shoulders this responsibility perfectly and plays a critical role in realizing business objectives by leading organizational change, fostering innovation.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '1rem auto 0' }}>
            Imagine delivering services that has the potential to change the world. Working with us, you will have a positive impact on people's lives and help to overcome some of the world's most pressing challenges.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {[
            { icon: <FaUsers size={50} />, title: 'HR Philosophy', desc: 'Today, Human Resources are a strategic business partner supporting business objectives.', link: '/hr-philosophy' },
            { icon: <FaLightbulb size={50} />, title: 'Life at Startech Networks', desc: 'We here at Startech Networks work with an aim to create a better today, a better tomorrow for our society', link: '/life-at-nxtvision' },
            { icon: <FaChartLine size={50} />, title: 'Talent Development', desc: 'The broad objective of Talent Development at Startech Networks is to develop and enhance the organization\'s self-renewing ability.', link: '/talent-development' },
            { icon: <FaBriefcase size={50} />, title: 'Current Openings', desc: 'Could you be our next Startech member?', link: '/current-openings' }
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              style={{
                textDecoration: 'none',
                padding: '2rem',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'all 0.3s',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = '#0066cc'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'transparent'; }}
            >
              <div style={{ color: '#0066cc', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333' }}>{item.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
            </Link>
          ))}
        </div>

        <div ref={hrPhilosophyRef} style={{ marginBottom: '6rem', scrollMarginTop: '150px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0066cc', marginBottom: '0.5rem' }}>HR Philosophy</h2>
              <div style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, #0066cc, #00ccff)', marginBottom: '1rem' }}></div>
              <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic', marginBottom: '2rem' }}>The best way to predict the future is to create it – Peter Drucker</p>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab('approach')}
                  className="btn-animate"
                  style={{
                    padding: '1rem 2rem',
                    background: activeTab === 'approach' ? '#0066cc' : '#fff',
                    color: activeTab === 'approach' ? '#fff' : '#333',
                    border: '2px solid #0066cc',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  Our Approach
                </button>
                <button
                  onClick={() => setActiveTab('goals')}
                  className="btn-animate"
                  style={{
                    padding: '1rem 2rem',
                    background: activeTab === 'goals' ? '#0066cc' : '#fff',
                    color: activeTab === 'goals' ? '#fff' : '#333',
                    border: '2px solid #0066cc',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  Project Goals
                </button>
              </div>

              <div style={{ padding: '3rem', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
              {activeTab === 'approach' ? (
                <div>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                    HR Philosophy Today, Human Resources are a strategic business partner supporting business objectives. We work with the Senior Management team to help set the business direction, performance expectations and contribute to decide the strategy and tactics required to achieve business goals.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                    In Startech Networks, the Human Resources function plays a critical role in realizing business objectives by leading organizational change and mobilizing talent to improve the business' competitive edge.
                  </p>
                </div>
              ) : (
                <div>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                    In response to the rapid changes in the business environment and to get the best out of our people, Human Resources has defined the following strategies:
                  </p>
                  <ul style={{ fontSize: '1rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '2rem' }}>
                    <li>Recruiting, developing, and retaining a Talent pipeline</li>
                    <li>Identify and fast track future business leaders</li>
                    <li>Plan individual performance improvement</li>
                    <li>Identify and implement performance measures</li>
                    <li>Develop a competitive reward package</li>
                    <li>Develop a best practice Human Resources function</li>
                    <li>Focus on continual process improvement</li>
                  </ul>
                  <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0066cc', marginBottom: '1rem' }}>We continually strive to:</p>
                  <ul style={{ fontSize: '1rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                    <li>Help people realize their potential</li>
                    <li>Create a work life balance</li>
                    <li>Recognize and reward individual and team achievement</li>
                    <li>Develop entrepreneurs</li>
                    <li>Be a learning organization</li>
                    <li>Build a high-performance culture</li>
                    <li>Deliver high quality services</li>
                    <li>Drive passion for quality</li>
                  </ul>
                </div>
              )}
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600" alt="HR Philosophy" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </div>

        <div ref={lifeAtStartechRef} style={{ marginBottom: '6rem', scrollMarginTop: '150px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0066cc', marginBottom: '0.5rem' }}>Life at Startech Networks</h2>
            <div style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, #0066cc, #00ccff)', margin: '0 auto 1rem' }}></div>
            <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>The best way to predict the future is to create it – Peter Drucker</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', padding: '2rem', background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Life at Startech" style={{ width: '100%', borderRadius: '8px' }} />
            <div>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                We here at Startech Networks work with an aim to create a better today, a better tomorrow for our society. Working on some of the most advanced wireless networks in the world has never been so exciting and inspirational before.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                Our employees work around the clock testing new sites, optimizing network performance, ensuring public safety, and helping our customers improve end user experience.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                Quality of delivery and safety of our employees is something that we place first and focus our operations on. Being a services company, employees are our biggest asset, and we strive to provide them with a conducive working environment.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
                We embrace diversity and encourage everyone to challenge their caliber, to help Startech Networks meet or exceed its customer expectations.
              </p>
            </div>
          </div>
        </div>

        <div ref={talentDevRef} style={{ marginBottom: '6rem', scrollMarginTop: '150px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0066cc', marginBottom: '0.5rem' }}>Nurturing a talent within</h2>
            <div style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, #0066cc, #00ccff)', margin: '0 auto 1rem' }}></div>
            <h3 style={{ fontSize: '2rem', color: '#333', marginBottom: '0.5rem' }}>Talent Development</h3>
            <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>Everyone has potential; you just have to discover it.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', padding: '2rem', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
            <div>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                The broad objective of Talent Development at Startech Networks is to develop and enhance the organization's self-renewing ability.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                The Talent management system aims at identifying people with potential; developing their talent through a structured program of professional and personal growth; and thereby attaining the objective of retaining the high-potential performers/leaders.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                The employee development process is in line with business strategy and caters to the Succession Planning objective of the organization.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
                The Learning & Development initiatives at Startech Networks are committed to deliver benefits to the employees by ensuring complete satisfaction with need based, timely and high-quality training solutions.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" alt="Talent Development" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </div>

        <div ref={openingsRef} style={{ marginBottom: '4rem', scrollMarginTop: '150px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0066cc', marginBottom: '0.5rem' }}>Current Openings</h2>
            <div style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, #0066cc, #00ccff)', margin: '0 auto 1rem' }}></div>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>We don't offer a job, we offer a career.</p>
            <p style={{ fontSize: '1rem', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
              People have always been the strength of Startech Networks, and the reason for its success. Recognizing this, the company gives great importance to recruiting the right people and providing them with the support to reach their own goals as well as those of Startech Networks.
            </p>
          </div>

          <div style={{ padding: '3rem', background: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
            <FaBriefcase size={80} style={{ color: '#0066cc', marginBottom: '2rem' }} />
            <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>No Current Openings</h3>
            <p style={{ fontSize: '1rem', color: '#666' }}>Please check back later for new opportunities</p>
          </div>
        </div>
      </div>

      <style>{`
        .btn-animate:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
};

export default Careers;
