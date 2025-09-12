import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    apartmentType: '3bhk',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      apartmentType: '3bhk',
      message: ''
    });
  };

  return (
    <div className="wrapper">
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      {/* Hero Section */}
      <section className="hero-section" style={{ height: '50vh' }}>
        <div 
          className="hero-video"
          style={{
            backgroundImage: ` url('https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team to find your perfect luxury home</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section">
        <div className="section-title">
          <h2>Let's Connect</h2>
          <p>Ready to experience luxury living? We're here to help you every step of the way</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Contact Information */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--primary-navy)' }}>
              Get in Touch
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(22, 33, 62, 0.1)',
                border: '1px solid rgba(50, 130, 184, 0.1)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--primary-blue))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Phone color="white" size={20} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Phone</h4>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>+91 99701 41477</p>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(22, 33, 62, 0.1)',
                border: '1px solid rgba(50, 130, 184, 0.1)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--primary-blue))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Mail color="white" size={20} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>info@gaurainfra.com</p>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(22, 33, 62, 0.1)',
                border: '1px solid rgba(50, 130, 184, 0.1)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--primary-blue))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <MapPin color="white" size={20} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>Nagpur, Maharashtra, India</p>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 25px rgba(22, 33, 62, 0.1)',
                border: '1px solid rgba(50, 130, 184, 0.1)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--primary-blue))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Clock color="white" size={20} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Office Hours</h4>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 25px 50px rgba(22, 33, 62, 0.15)',
            border: '1px solid rgba(50, 130, 184, 0.1)'
          }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--primary-navy)' }}>
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600',
                  color: 'var(--primary-navy)'
                }}>
                  <User size={16} style={{ marginRight: '0.5rem' }} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid rgba(50, 130, 184, 0.2)',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(50, 130, 184, 0.2)'}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600',
                  color: 'var(--primary-navy)'
                }}>
                  <Mail size={16} style={{ marginRight: '0.5rem' }} />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid rgba(50, 130, 184, 0.2)',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(50, 130, 184, 0.2)'}
                  placeholder="Enter your email address"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600',
                  color: 'var(--primary-navy)'
                }}>
                  <Phone size={16} style={{ marginRight: '0.5rem' }} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid rgba(50, 130, 184, 0.2)',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(50, 130, 184, 0.2)'}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600',
                  color: 'var(--primary-navy)'
                }}>
                  Apartment Type
                </label>
                <select
                  name="apartmentType"
                  value={formData.apartmentType}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid rgba(50, 130, 184, 0.2)',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    background: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(50, 130, 184, 0.2)'}
                >
                  <option value="3bhk">3BHK Apartment</option>
                  <option value="4bhk">4BHK Apartment</option>
                  <option value="5bhk">5BHK Luxury Unit</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600',
                  color: 'var(--primary-navy)'
                }}>
                  <MessageSquare size={16} style={{ marginRight: '0.5rem' }} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid rgba(50, 130, 184, 0.2)',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(50, 130, 184, 0.2)'}
                  placeholder="Tell us about your requirements or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="cta-button"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-premium-light">
        <div className="section-title">
          <h2>Find Us</h2>
          <p>Visit our office or project site in Nagpur</p>
        </div>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '400px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(22, 33, 62, 0.15)'
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14898.366842830703!2d79.08862!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635750000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gaurav Infra Location"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;