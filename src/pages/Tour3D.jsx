import React from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';

const Tour3D = () => {
  return (
    <div className="wrapper">
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      <section className="hero-section">
        <div 
          className="hero-video"
          style={{
            backgroundImage: `linear-gradient(rgba(22, 33, 62, 0.7), rgba(15, 76, 117, 0.5)), url('https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="hero-content">
          <h1>3D Virtual Tour</h1>
          <p>Experience our apartments in immersive 3D technology</p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Virtual Experience Coming Soon</h2>
          <p>Our 3D virtual tour technology is being developed to provide you with the most realistic apartment viewing experience</p>
        </div>
      </section>
    </div>
  );
};

export default Tour3D;