import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, CheckCircle, ArrowRight, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    apartmentType: '3bhk',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeField, setActiveField] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        apartmentType: '3bhk',
        message: ''
      });
      setShowSuccess(false);
    }, 3000);
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField('');
  };

  // Enhanced CSS for professional and responsive design
  const styles = `
    
    .contact-wrapper {
      overflow-x: hidden;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      min-height: 100vh;
    }
    
    /* Professional Hero Section */
    .hero-professional {
      height: 60vh;
      min-height: 450px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #4f46e5 100%);
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(rgba(22, 33, 62, 0.8), rgba(15, 76, 117, 0.7)), url('https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-size: cover;
      background-position: center;
      animation: ${isVisible ? 'parallaxMove' : 'none'} 20s ease-in-out infinite;
    }
    
    .hero-content-pro {
      text-align: center;
      color: white;
      z-index: 2;
      max-width: 800px;
      padding: 2rem 1rem;
      animation: ${isVisible ? 'heroFadeIn' : 'none'} 1.2s ease-out;
    }
    
    .hero-title-pro {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      font-family: 'Playfair Display', serif;
      line-height: 1.2;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .hero-subtitle-pro {
      font-size: 1.2rem;
      opacity: 0.95;
      line-height: 1.6;
      font-weight: 400;
      max-width: 600px;
      margin: 0 auto;
    }
    
    /* Main Section */
    .main-section {
      padding: 6rem 1rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
      opacity: 0;
      animation: ${isVisible ? 'fadeInUp' : 'none'} 1s ease-out 0.3s both;
    }
    
    .section-title-pro {
      font-size: 2.8rem;
      font-weight: 700;
      color: #1e3a8a;
      margin-bottom: 1rem;
      font-family: 'Playfair Display', serif;
      line-height: 1.3;
    }
    
    .section-subtitle-pro {
      font-size: 1.1rem;
      color: #64748b;
      line-height: 1.6;
      max-width: 700px;
      margin: 0 auto;
    }
    
    /* Grid Layout */
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }
    
    /* Contact Information */
    .contact-info-section {
      opacity: 0;
      animation: ${isVisible ? 'slideInLeft' : 'none'} 1s ease-out 0.6s both;
    }
    
    .info-header {
      font-size: 2rem;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 2.5rem;
      font-family: 'Playfair Display', serif;
      position: relative;
    }
    
    .info-header::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #10b981);
      border-radius: 2px;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      padding: 1.5rem;
      background: white;
      border-radius: 16px;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 20px rgba(30, 58, 138, 0.08);
      border: 1px solid rgba(59, 130, 246, 0.1);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    
    .contact-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.05), transparent);
      transition: left 0.6s ease;
    }
    
    .contact-item:hover::before {
      left: 100%;
    }
    
    .contact-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(30, 58, 138, 0.15);
      border-color: rgba(59, 130, 246, 0.2);
    }
    
    .contact-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #3b82f6, #10b981);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.2rem;
      flex-shrink: 0;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
      transition: transform 0.3s ease;
    }
    
    .contact-item:hover .contact-icon {
      transform: scale(1.1) rotate(5deg);
    }
    
    .contact-details h4 {
      color: #1e3a8a;
      font-weight: 600;
      margin-bottom: 0.3rem;
      font-size: 1.1rem;
    }
    
    .contact-details p {
      color: #64748b;
      margin: 0;
      font-size: 0.95rem;
    }
    
    .contact-details small {
      color: #10b981;
      font-size: 0.85rem;
      font-weight: 500;
      display: block;
      margin-top: 0.25rem;
    }
    
    /* Trust Indicators */
    .trust-section {
      margin-top: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05));
      border-radius: 20px;
      border: 1px solid rgba(59, 130, 246, 0.1);
    }
    
    .trust-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      color: #1e3a8a;
    }
    
    .trust-header h5 {
      margin: 0 0 0 0.8rem;
      font-size: 1.2rem;
      font-weight: 600;
    }
    
    .trust-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
    }
    
    .trust-list li {
      display: flex;
      align-items: center;
      color: #64748b;
      font-size: 0.95rem;
    }
    
    .trust-list li::before {
      content: '✓';
      color: #10b981;
      font-weight: bold;
      margin-right: 0.8rem;
      font-size: 1.1rem;
    }
    
    /* Professional Form */
    .form-section {
      background: white;
      padding: 3rem;
      border-radius: 24px;
      box-shadow: 0 10px 40px rgba(30, 58, 138, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.08);
      position: relative;
      overflow: hidden;
      opacity: 0;
      animation: ${isVisible ? 'slideInRight' : 'none'} 1s ease-out 0.6s both;
    }
    
    .form-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #10b981);
      border-radius: 4px 4px 0 0;
    }
    
    .form-title {
      font-size: 2rem;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 2.5rem;
      text-align: center;
      font-family: 'Playfair Display', serif;
    }
    
    .form-group {
      margin-bottom: 2rem;
      position: relative;
    }
    
    .form-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.8rem;
      font-weight: 600;
      color: #1e3a8a;
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }
    
    .form-label.active {
      color: #3b82f6;
      transform: scale(1.02);
    }
    
    .form-input {
      width: 100%;
      padding: 1.2rem 1.5rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      font-family: inherit;
      background: #f8fafc;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }
    
    .form-input:focus {
      outline: none;
      border-color: #3b82f6;
      background: white;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 4px 20px rgba(59, 130, 246, 0.15);
      transform: translateY(-2px);
    }
    
    .form-input.active {
      border-color: #3b82f6;
      background: white;
      transform: translateY(-1px);
    }
    
    .form-textarea {
      min-height: 120px;
      resize: vertical;
      font-family: inherit;
    }
    
    .form-select {
      cursor: pointer;
    }
    
    /* Submit Button */
    .submit-button {
      width: 100%;
      padding: 1.3rem 2rem;
      background: linear-gradient(135deg, #3b82f6, #10b981);
      border: none;
      border-radius: 12px;
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .submit-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }
    
    .submit-button:hover::before {
      left: 100%;
    }
    
    .submit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
    }
    
    .submit-button:active {
      transform: translateY(0);
    }
    
    .submit-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
    
    /* Success Message */
    .success-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
      z-index: 1000;
      text-align: center;
      animation: ${showSuccess ? 'successPop 0.5s ease-out both' : 'none'};
      backdrop-filter: blur(10px);
    }
    
    /* Map Section */
    .map-section {
      padding: 6rem 1rem;
      background: linear-gradient(135deg, #1e3a8a, #3730a3);
      margin-top: 6rem;
    }
    
    .map-header {
      text-align: center;
      margin-bottom: 4rem;
      color: white;
    }
    
    .map-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      font-family: 'Playfair Display', serif;
    }
    
    .map-subtitle {
      font-size: 1.1rem;
      opacity: 0.9;
      line-height: 1.6;
    }
    
    .map-container {
      max-width: 1200px;
      margin: 0 auto;
      height: 450px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      transform: perspective(1000px) rotateX(2deg);
      transition: all 0.6s ease;
    }
    
    .map-container:hover {
      transform: perspective(1000px) rotateX(0deg) scale(1.02);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    }
    
    /* Animations */
    @keyframes parallaxMove {
      0%, 100% { transform: translateY(0px) scale(1.05); }
      50% { transform: translateY(-10px) scale(1.08); }
    }
    
    @keyframes heroFadeIn {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes successPop {
      0% {
        transform: translate(-50%, -50%) scale(0);
      }
      80% {
        transform: translate(-50%, -50%) scale(1.1);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    
    /* Scroll Animation Class */
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .fade-in-up {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Mobile Responsive Design */
    @media (max-width: 768px) {
      .hero-title-pro {
        font-size: 2.5rem;
      }
      
      .hero-subtitle-pro {
        font-size: 1.1rem;
      }
      
      .hero-professional {
        height: 50vh;
        min-height: 400px;
      }
      
      .main-section {
        padding: 4rem 1rem;
      }
      
      .section-title-pro {
        font-size: 2.2rem;
      }
      
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      
      .form-section,
      .contact-info-section {
        opacity: 1;
        animation: none;
      }
      
      .form-section {
        padding: 2rem 1.5rem;
      }
      
      .trust-list {
        grid-template-columns: 1fr;
      }
      
      .contact-item {
        padding: 1.2rem;
        margin-bottom: 1rem;
      }
      
      .contact-icon {
        width: 45px;
        height: 45px;
        margin-right: 1rem;
      }
      
      .map-container {
        height: 350px;
        transform: none;
      }
      
      .map-container:hover {
        transform: scale(1.02);
      }
      
      .submit-button {
        padding: 1.1rem 1.5rem;
        font-size: 1rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title-pro {
        font-size: 2rem;
      }
      
      .section-title-pro {
        font-size: 1.8rem;
      }
      
      .form-section {
        padding: 1.5rem 1rem;
      }
      
      .contact-item {
        flex-direction: column;
        text-align: center;
        padding: 1.5rem 1rem;
      }
      
      .contact-icon {
        margin-right: 0;
        margin-bottom: 1rem;
      }
      
      .trust-section {
        padding: 1.5rem;
      }
      
      .main-section {
        padding: 3rem 0.5rem;
      }
    }
    
    @media (min-width: 1200px) {
      .hero-title-pro {
        font-size: 4rem;
      }
      
      .section-title-pro {
        font-size: 3.2rem;
      }
      
      .contact-grid {
        gap: 5rem;
      }
    }
  `;

  return (
    <div className="contact-wrapper">
      <style>{styles}</style>
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      {/* Success Message */}
      {showSuccess && (
        <div className="success-popup">
          <CheckCircle size={48} style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Message Sent Successfully!</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>Thank you for contacting us. We'll get back to you within 24 hours.</p>
        </div>
      )}

      {/* Professional Hero Section */}
      <section className="hero-professional">
        <div className="hero-bg" />
        <div className="hero-content-pro">
          <h1 className="hero-title-pro">Contact Us</h1>
          <p className="hero-subtitle-pro">
            Ready to turn your construction dreams into reality? Get in touch with our expert team for professional consultation and premium services.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-section">
        <div className="section-header">
          <h2 className="section-title-pro">Let's Build Something Amazing Together</h2>
          <p className="section-subtitle-pro">
            We're here to help you every step of the way. From initial consultation to project completion, 
            our experienced team is committed to delivering excellence in every detail.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h3 className="info-header">Get in Touch</h3>
            
            <div className="contact-item animate-on-scroll">
              <div className="contact-icon">
                <Phone size={20} color="white" />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 99804 14166</p>
                <small>Available 24/7 for emergencies</small>
              </div>
            </div>

            <div className="contact-item animate-on-scroll">
              <div className="contact-icon">
                <Mail size={20} color="white" />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@gaurainfra.com</p>
                <small>Response within 2-4 hours</small>
              </div>
            </div>

            <div className="contact-item animate-on-scroll">
              <div className="contact-icon">
                <MapPin size={20} color="white" />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Nagpur, Maharashtra, India</p>
                <small>Serving entire Maharashtra region</small>
              </div>
            </div>

            <div className="contact-item animate-on-scroll">
              <div className="contact-icon">
                <Clock size={20} color="white" />
              </div>
              <div className="contact-details">
                <h4>Office Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                <small>Sunday consultations by appointment</small>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="trust-section animate-on-scroll">
              <div className="trust-header">
                <Shield size={24} color="#3b82f6" />
                <h5>Why Choose Gaurav Infra?</h5>
              </div>
              <ul className="trust-list">
                <li>15+ Years of Excellence</li>
                <li>500+ Happy Families</li>
                <li>Licensed & Fully Insured</li>
                <li>Quality Guarantee</li>
                <li>On-Time Project Delivery</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </div>

          {/* Professional Contact Form */}
          <div className="form-section">
            <h3 className="form-title">Send us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className={`form-label ${activeField === 'fullName' ? 'active' : ''}`}>
                  <User size={16} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('fullName')}
                  onBlur={handleBlur}
                  required
                  className={`form-input ${activeField === 'fullName' ? 'active' : ''}`}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label className={`form-label ${activeField === 'email' ? 'active' : ''}`}>
                  <Mail size={16} />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className={`form-input ${activeField === 'email' ? 'active' : ''}`}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label className={`form-label ${activeField === 'phone' ? 'active' : ''}`}>
                  <Phone size={16} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  required
                  className={`form-input ${activeField === 'phone' ? 'active' : ''}`}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Project Type
                </label>
                <select
                  name="apartmentType"
                  value={formData.apartmentType}
                  onChange={handleInputChange}
                  className="form-input form-select"
                >
                  <option value="3bhk">🏠 3BHK Residential</option>
                  <option value="4bhk">🏡 4BHK Luxury Home</option>
                  <option value="5bhk">🏘️ 5BHK Premium Villa</option>
                  <option value="penthouse">🏢 Penthouse Suite</option>
                  <option value="commercial">🏢 Commercial Project</option>
                  <option value="renovation">🔨 Renovation & Remodeling</option>
                  <option value="other"> Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className={`form-label ${activeField === 'message' ? 'active' : ''}`}>
                  <MessageSquare size={16} />
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className={`form-input form-textarea ${activeField === 'message' ? 'active' : ''}`}
                  placeholder="Tell us about your project requirements, timeline, and any specific preferences..."
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div style={{ 
                      width: '18px', 
                      height: '18px', 
                      border: '2px solid transparent',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="map-section">
        <div className="map-header animate-on-scroll">
          <h2 className="map-title">Find Us</h2>
          <p className="map-subtitle">Visit our office or project sites across Nagpur</p>
        </div>
        
        <div className="map-container animate-on-scroll">
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

      {/* Add spinning animation for loading button */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
