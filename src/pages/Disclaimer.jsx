const Disclaimer = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200")',
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
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Disclaimer</h1>
        <p style={{ fontSize: '1.2rem' }}>Important information regarding our services and website</p>
      </div>

      {/* Content Section */}
      <div style={{ maxWidth: '1000px', margin: '3rem auto', padding: '0 2rem 3rem' }} className="disclaimer-content">
        <div style={{ 
          background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)', 
          padding: '3rem', 
          borderRadius: '12px', 
          boxShadow: '0 6px 30px rgba(0,0,0,0.1)',
          border: '2px solid #e0e0e0'
        }}>
          
          <div style={{ 
            background: '#fff3cd', 
            border: '2px solid #ffc107', 
            borderRadius: '8px', 
            padding: '1.5rem', 
            marginBottom: '2rem' 
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#856404', marginBottom: '0.5rem' }}>⚠️ Important Notice</h3>
            <p style={{ color: '#856404', lineHeight: '1.6', margin: 0 }}>
              Please read this disclaimer carefully before using our services or relying on any information provided on this website.
            </p>
          </div>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0066cc', marginBottom: '1.5rem' }}>Investment Disclaimer</h2>
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Nothing on this Site constitutes an invitation or offer to invest or deal in Startech Networks shares. In particular, actual results and developments may be materially different from any forecast, opinion or expectation expressed on this Site and the past performance of the price of securities must not be relied on as a guide to their future performance.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0066cc', marginBottom: '1.5rem' }}>General Information</h2>
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0066cc', marginBottom: '1.5rem' }}>No Professional Advice</h2>
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              The content on this website is not intended to be a substitute for professional advice. Always seek the advice of qualified professionals with any questions you may have regarding business, legal, financial, or technical matters.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0066cc', marginBottom: '1.5rem' }}>Limitation of Liability</h2>
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              In no event will Startech Networks be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0066cc', marginBottom: '1.5rem' }}>External Links</h2>
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Through this website you may be able to link to other websites which are not under the control of Startech Networks. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0066cc', marginBottom: '1.5rem' }}>Changes to Disclaimer</h2>
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '1.05rem' }}>
              Startech Networks reserves the right to modify this disclaimer at any time without prior notice. By using this website, you agree to be bound by the current version of this disclaimer.
            </p>
          </section>

          <div style={{ 
            marginTop: '3rem', 
            padding: '1.5rem', 
            background: '#e7f3ff', 
            borderLeft: '4px solid #0066cc', 
            borderRadius: '4px' 
          }}>
            <p style={{ color: '#0066cc', fontWeight: 600, margin: 0, lineHeight: '1.6' }}>
              If you have any questions about this disclaimer, please contact us at info@startechnetworks.com
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .disclaimer-content > div {
            padding: 2rem 1.5rem !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.4rem !important;
          }
          h3 {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Disclaimer;
