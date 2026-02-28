const ScrollingBanner = () => {
  const text = "Seamless integration with FTTx, 5G, and broadband expansions. Startech is at the forefront of building the next generation of fiber infrastructure. Startech Networks Inc is an IT audit compliance with ISO 27001 certifications that demonstrate compliance with recognized standards. We ensure that ";

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: '#0066cc',
      color: '#fff',
      padding: '0.5rem 0',
      overflow: 'hidden',
      zIndex: 1001
    }}>
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'scroll 30s linear infinite'
      }}>
        <span style={{ paddingRight: '100%' }}>{text}</span>
        <span>{text}</span>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;
