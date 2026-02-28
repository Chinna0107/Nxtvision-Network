import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandsSlider = () => {
  const brands = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bell_logo.svg/200px-Bell_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AT%26T_logo_2016.svg/200px-AT%26T_logo_2016.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Verizon_2015_logo_-vector.svg/200px-Verizon_2015_logo_-vector.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bell_logo.svg/200px-Bell_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div style={{ padding: '4rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#0066cc', fontWeight: 'bold' }}>
          1K+ BRANDS TRUST US
        </h2>
        <Slider {...settings}>
          {brands.map((brand, idx) => (
            <div key={idx} style={{ padding: '0 2rem' }}>
              <img 
                src={brand} 
                alt={`Brand ${idx + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '80px', 
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
                onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandsSlider;
