import { useState } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSlider = () => {
  const testimonials = [
    { text: 'Thanks for all your support and accommodating last minutes requests to help our project meet the targets!', company: 'Videotron' },
    { text: 'Thanks to you and your team for all the work you do. Startech Team members are doing EXCELLENT work for us in the Minneapolis market.', company: 'Ericsson Inc.' },
    { text: 'I would like to thank you and your entire organization for supporting us in different projects, throughout this year....', company: 'Manenir', readMore: true },
    { text: 'Please pass my thanks to Startech Team for driving the target for completion. I do appreciate your efforts.', company: 'Ericsson Inc.' },
    { text: 'After you finish these clusters, please add another feather to your cap. Thanks for your team\'s support!', company: 'Dish' },
    { text: 'Thanks for all your support and accommodating last minutes requests to help our project meet the targets!', company: 'Videotron' },
    { text: 'Thanks to you and your team for all the work you do. Startech Team members are doing EXCELLENT work for us in the Minneapolis market.', company: 'Ericsson Inc.' },
    { text: 'I would like to thank you and your entire organization for supporting us in different projects, throughout this year....', company: 'Manenir', readMore: true },
    { text: 'Please pass my thanks to Startech Team for driving the target for completion. I do appreciate your efforts.', company: 'Ericsson Inc.' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ marginTop: '5rem', padding: '0 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#0066cc', fontWeight: 'bold' }}>CLIENTS TESTIMONIALS</h2>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>The Heart Warming Testimonies of Excellence</p>
      </div>
      
      <Slider {...settings}>
        {testimonials.map((testimonial, idx) => (
          <div key={idx} style={{ padding: '0 1rem' }}>
            <div style={{ 
              padding: '2rem', 
              background: '#fff', 
              borderRadius: '8px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
              textAlign: 'left',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} style={{ color: '#FFD700', fontSize: '1.2rem' }} />
                ))}
              </div>
              <div style={{ fontSize: '3rem', color: '#0066cc', lineHeight: '1', marginBottom: '0.5rem' }}>"</div>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#555', marginBottom: '1rem', fontStyle: 'italic', flex: 1 }}>
                {testimonial.text}
              </p>
              {testimonial.readMore && (
                <a href="#" style={{ color: '#0066cc', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold', marginBottom: '1rem' }}>Read More</a>
              )}
              <div style={{ borderTop: '2px solid #0066cc', paddingTop: '1rem', marginTop: 'auto' }}>
                <p style={{ fontSize: '0.85rem', color: '#999' }}>Overall, very good experience</p>
                <p style={{ fontSize: '1rem', color: '#0066cc', fontWeight: 'bold', marginTop: '0.5rem' }}>{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: #0066cc;
        }
        .slick-dots li.slick-active button:before {
          color: #0066cc;
        }
        .slick-prev:before, .slick-next:before {
          color: #0066cc;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSlider;
