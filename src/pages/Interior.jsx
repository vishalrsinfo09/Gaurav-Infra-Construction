import React from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';

const Interior = () => {
  return (
    <div className="wrapper">
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      <section className="hero-section">
        <div 
          className="hero-video"
          style={{
            backgroundImage: `linear-gradient(rgba(22, 33, 62, 0.7), rgba(15, 76, 117, 0.5)), url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="hero-content">
          <h1>Interior Walkthrough</h1>
          <p>Take a virtual tour of our luxury apartment interiors</p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Coming Soon</h2>
          <p>Our interactive interior walkthrough experience is under development</p>
        </div>
      </section>
    </div>
  );
};

export default Interior;