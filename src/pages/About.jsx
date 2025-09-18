import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
import { Award, Users, Building, Heart, Target, Eye, Home, TrendingUp, Star, ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Enhanced CSS without stats section
  const styles = `
    .about-wrapper {
      overflow-x: hidden;
      width: 100%;
    }
    
    /* Mobile-First Hero Section */
    .hero-about {
      height: 70vh;
      // min-height: 500px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      // background: linear-gradient(135deg, #16213e 0%, #0f4c75 50%, #3282b8 100%);
      background: linear-gradient(135deg, #0ebe7f 0%, #3282b8 100%);
    }
    
    .hero-about::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      // background: url('/Logo3.png') center/cover;
      // opacity: 0.9;
      animation: parallaxMove 20s ease-in-out infinite;
    }
    
    .hero-about::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient( rgba(0, 0, 0, 0.28));
    }
    
    .hero-content-about {
      text-align: center;
      color: white;
      z-index: 2;
      padding: 2rem 1rem;
      max-width: 90%;
      animation: heroSlideUp 1s ease-out;
    }
    
    .hero-title-about {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #22d3ee, #ffffff, #facc15);
      background-size: 300% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientFlow 4s ease-in-out infinite;
      line-height: 1.2;
      text-shadow: 0 0 30px rgba(50, 130, 184, 0.3);
    }
    
    .hero-subtitle-about {
      font-size: 1.1rem;
      font-weight: 400;
      opacity: 0.95;
      line-height: 1.6;
      margin: 0;
    }
    
    /* Floating Elements */
    .floating-elements-about {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .floating-shape {
      position: absolute;
      background: rgba(50, 130, 184, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      animation: floatUpDown 6s ease-in-out infinite;
    }
    
    .floating-shape:nth-child(1) {
      width: 80px;
      height: 80px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }
    
    .floating-shape:nth-child(2) {
      width: 60px;
      height: 60px;
      top: 70%;
      right: 15%;
      animation-delay: 2s;
    }
    
    .floating-shape:nth-child(3) {
      width: 40px;
      height: 40px;
      bottom: 30%;
      left: 80%;
      animation-delay: 4s;
    }
    
    /* Section Styling */
    .about-section {
      padding: 2rem 1rem;
      position: relative;
      overflow: hidden;
    }
    
    .about-section.bg-light {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }
    
    .about-section.bg-dark {
      background: linear-gradient(135deg, #16213e 0%, #0f4c75 100%);
      color: white;
    }
    
    .section-title-about {
      text-align: center;
      margin-bottom: 3rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease;
    }
    
    .section-title-about.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .section-title-about h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #16213e;
      margin-bottom: 1rem;
      line-height: 1.3;
      position: relative;
    }
    
    .about-section.bg-dark .section-title-about h2 {
      color: white;
    }
    
    .section-title-about h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #3282b8, #0ebe7f);
      border-radius: 2px;
    }
    
    .section-title-about p {
      font-size: 1.1rem;
      color: #64748b;
      font-weight: 400;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .about-section.bg-dark .section-title-about p {
      color: rgba(255, 255, 255, 0.8);
    }
    
    /* Content Layout */
    .content-layout {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .content-text {
      opacity: 0;
      transform: translateX(-30px);
      transition: all 0.8s ease;
    }
    
    .content-text.visible {
      opacity: 1;
      transform: translateX(0);
    }
    
    .content-text h3 {
      font-size: 1.8rem;
      font-weight: 600;
      color: #16213e;
      margin-bottom: 1.5rem;
      line-height: 1.4;
    }
    
    .about-section.bg-dark .content-text h3 {
      color: white;
    }
    
    .content-text p {
      font-size: 1rem;
      line-height: 1.8;
      color: #64748b;
      margin-bottom: 1.5rem;
    }
    
    .about-section.bg-dark .content-text p {
      color: rgba(255, 255, 255, 0.85);
    }
    
    .content-image {
      opacity: 0;
      transform: translateX(30px);
      transition: all 0.8s ease;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
      
    }
    
    .content-image.visible {
      opacity: 1;
      transform: translateX(0);
    }
    
    .content-image img {
      width: 100%;
      height: 500px;
      display: block;
      transition: transform 0.5s ease;
    }
    
    .content-image:hover img {
      transform: scale(1.05);
    }
    
    /* Cards Grid */
    .cards-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .feature-card {
      background: white;
      padding: 2.5rem 2rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(22, 33, 62, 0.08);
      text-align: center;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
      opacity: 0;
      transform: translateY(30px);
    }
    
    .feature-card.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #3282b8, #0ebe7f);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }
    
    .feature-card:hover::before {
      transform: scaleX(1);
    }
    
    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(22, 33, 62, 0.15);
    }
    
    .about-section.bg-dark .feature-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .card-icon {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #3282b8, #0ebe7f);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      transition: transform 0.4s ease;
      box-shadow: 0 8px 25px rgba(50, 130, 184, 0.3);
    }
    
    .feature-card:hover .card-icon {
      transform: scale(1.1) rotate(5deg);
    }
    
    .feature-card h4 {
      font-size: 1.3rem;
      font-weight: 600;
      color: #16213e;
      margin-bottom: 1rem;
      line-height: 1.4;
    }
    
    .about-section.bg-dark .feature-card h4 {
      color: white;
    }
    
    .feature-card p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #64748b;
      margin: 0;
    }
    
    .about-section.bg-dark .feature-card p {
      color: rgba(255, 255, 255, 0.8);
    }
    
    /* Timeline Section */
    .timeline-container {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }
    
    .timeline-item {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      opacity: 0;
      transform: translateX(-30px);
      transition: all 0.8s ease;
    }
    
    .timeline-item.visible {
      opacity: 1;
      transform: translateX(0);
    }
    
    .timeline-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #3282b8, #0ebe7f);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.5rem;
      flex-shrink: 0;
      box-shadow: 0 8px 25px rgba(50, 130, 184, 0.3);
    }
    
    .timeline-content {
      flex: 1;
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(22, 33, 62, 0.08);
      border-left: 4px solid #3282b8;
    }
    
    .timeline-content h4 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #16213e;
      margin-bottom: 0.5rem;
    }
    
    .timeline-content p {
      font-size: 0.95rem;
      color: #64748b;
      margin: 0;
      line-height: 1.6;
    }
    
    /* CTA Section */
    .cta-section {
      padding: 4rem 1rem;
      background: linear-gradient(135deg, #0ebe7f 0%, #3282b8 100%);
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .cta-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    }
    
    .cta-content {
      max-width: 600px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    
    .cta-content h3 {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    
    .cta-content p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.95;
      line-height: 1.6;
    }
    
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      padding: 1rem 2rem;
      background: white;
      color: #16213e;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.4s ease;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
    
    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
      color: #16213e;
      text-decoration: none;
    }
    
    /* Animations */
    @keyframes heroSlideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes gradientFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes parallaxMove {
      0%, 100% { transform: translateY(0px) scale(1.1); }
      50% { transform: translateY(-10px) scale(1.15); }
    }
    
    @keyframes floatUpDown {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
      }
    }
    
    /* Mobile Responsive */
    @media (min-width: 768px) {
      .hero-title-about {
        font-size: 3.5rem;
      }
      
      .hero-subtitle-about {
        font-size: 1.3rem;
      }
      
      .about-section {
        padding: 2rem 1rem;
      }
      
      .section-title-about h2 {
        font-size: 3rem;
      }
      
      .content-layout {
        flex-direction: row;
        align-items: center;
      
      }
      
      .content-text, .content-image {
        flex: 1;
      }
      
      .cards-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
      }
      
      .cta-content h3 {
        font-size: 2.8rem;
      }
    }
    
    @media (min-width: 1024px) {
      .hero-title-about {
        font-size: 4.5rem;
      }
      
      .about-section {
        padding: 2rem 1rem;
      }
      
      .section-title-about h2 {
        font-size: 3.5rem;
      }
      
      .cards-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
      }
      
      .feature-card {
        padding: 3rem 2.5rem;
      }
    }
  `;

  return (
    <div className="about-wrapper">
      <style>{styles}</style>
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      {/* Enhanced Hero Section */}
      <section className="hero-about">
        <div className="floating-elements-about">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
        <div className="hero-content-about">
          <h1 className="hero-title-about">About Us</h1>
          <p className="hero-subtitle-about">
            Building dreams, creating homes, transforming lives with luxury and uncompromising quality
          </p>
        </div>
      </section>

      {/* Leadership Excellence */}
      <section className="about-section" data-section="leadership">
        <div className={`section-title-about ${isVisible.leadership ? 'visible' : ''}`}>
          <h2>Leadership Excellence</h2>
          <p>Meet the visionaries behind Gaurav Infra's success</p>
        </div>
        <div className="content-layout">
          <div className={`content-text ${isVisible.leadership ? 'visible' : ''}`}>
            <h3>KRISHNAKANT GIRI</h3>
            <p>
              At Gaurav Infra, leadership is not just about building structures, it is about building trust. With a vision to transform the real estate landscape of Nagpur, our leaders focus on creating projects that reflect innovation, quality, and timeless value. Every milestone we achieve is driven by a commitment to deliver beyond expectations.
            </p>
            <p>
              Our leadership team combines deep industry expertise with a modern outlook, ensuring that each project is planned with precision and executed with responsibility. By emphasizing sustainable construction practices, timely delivery, and uncompromised quality, we continue to set benchmarks in the real estate sector.  We strongly believe that true leadership lies in putting customers first. 
            </p>
            {/* <p>
              We strongly believe that true leadership lies in putting customers first. 
            </p> */}
          </div>
          <div className={`content-image ${isVisible.leadership ? 'visible' : ''}`} style={{ border: '2px solid',width:'400px',height:'500px' }}>
            <img
              src="/Giri_Sir.jpg"
              alt="Professional team meeting in modern office environment"
              loading="lazy" draggable="false"
            />
          </div>

        </div>
      </section>


      {/* Mission Vision Values */}
      <section className="about-section bg-light" data-section="foundation">
        <div className={`section-title-about ${isVisible.foundation ? 'visible' : ''}`}>
          <h2>Our Foundation</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="cards-grid">
          <div className={`feature-card ${isVisible.foundation ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="card-icon">
              <Target color="white" size={28} />
            </div>
            <h4>Our Mission</h4>
            <p>To create exceptional residential experiences by delivering luxury apartments that exceed expectations in quality, design, and service while maintaining affordability and sustainability.</p>
          </div>
          <div className={`feature-card ${isVisible.foundation ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="card-icon">
              <Eye color="white" size={28} />
            </div>
            <h4>Our Vision</h4>
            <p>To be the most trusted and respected real estate developer in Nagpur, known for innovative design, superior quality, and customer-centric approach in luxury residential projects.</p>
          </div>
          <div className={`feature-card ${isVisible.foundation ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="card-icon">
              <Heart color="white" size={28} />
            </div>
            <h4>Our Values</h4>
            <p>Integrity, excellence, innovation, and customer satisfaction form the core of our business philosophy. We believe in building long-term relationships based on trust and quality.</p>
          </div>
        </div>
      </section>


      {/* Company Story */}
      <section className="about-section" data-section="story">
        <div className={`section-title-about ${isVisible.story ? 'visible' : ''}`}>
          <h2>Our Story</h2>
          <p>A legacy of excellence in real estate development</p>
        </div>
        <div className="content-layout">
          <div className={`content-text ${isVisible.story ? 'visible' : ''}`}>
            <h3>Building Trust Since Inception</h3>
            <p>
              Gaurav Infra was founded with a simple yet powerful vision: to create residential spaces that combine luxury with comfort, modernity with tradition, and quality with affordability. Over the years, we have established ourselves as a trusted name in Nagpur's real estate sector.
            </p>
            <p>
              Our journey began with a commitment to understand the evolving needs of modern families. We recognized that today's homebuyers seek more than just a place to live - they want a lifestyle that reflects their aspirations and values.
            </p>
            <p>
              Every project we undertake is a testament to our dedication to excellence. From architectural design to interior finishing, from amenities planning to customer service, we maintain the highest standards at every step.
            </p>
          </div>
          <div className={`content-image ${isVisible.story ? 'visible' : ''}`}>
            <img
              src="/carousal-build.jpeg"
              alt="Modern office building representing Gaurav Infra headquarters"
              loading="lazy" draggable="false"
            />
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="about-section bg-dark" data-section="achievements">
        <div className={`section-title-about ${isVisible.achievements ? 'visible' : ''}`}>
          <h2>Our Achievements</h2>
          <p>Recognition and milestones that define our success</p>
        </div>
        <div className="cards-grid">
          <div className={`feature-card ${isVisible.achievements ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="card-icon">
              <Building color="white" size={28} />
            </div>
            <h4>Premium Projects</h4>
            <p>Successfully completed multiple residential projects with 100% customer satisfaction and timely delivery record, setting new benchmarks in luxury living.</p>
          </div>
          <div className={`feature-card ${isVisible.achievements ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="card-icon">
              <Users color="white" size={28} />
            </div>
            <h4>Happy Community</h4>
            <p>Over 500 families have made our residential projects their home, creating a strong community of satisfied residents who recommend us to others.</p>
          </div>
          <div className={`feature-card ${isVisible.achievements ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="card-icon">
              <Award color="white" size={28} />
            </div>
            <h4>Industry Recognition</h4>
            <p>Recognized for exceptional construction quality, innovative design, and customer-centric approach in the competitive real estate sector.</p>
          </div>
        </div>
      </section>

      {/* Timeline/Journey */}
      <section className="about-section bg-light" data-section="journey">
        <div className={`section-title-about ${isVisible.journey ? 'visible' : ''}`}>
          <h2>Our Journey</h2>
          <p>Key milestones that shaped our success story</p>
        </div>
        <div className="timeline-container">
          <div className={`timeline-item ${isVisible.journey ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="timeline-icon">
              <Home color="white" size={24} />
            </div>
            <div className="timeline-content">
              <h4>Foundation & Vision</h4>
              <p>Established Gaurav Infra with a vision to transform Nagpur's residential landscape through innovative design and superior quality construction.</p>
            </div>
          </div>
          <div className={`timeline-item ${isVisible.journey ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="timeline-icon">
              <TrendingUp color="white" size={24} />
            </div>
            <div className="timeline-content">
              <h4>Rapid Growth</h4>
              <p>Expanded our portfolio with successful completion of multiple residential projects, establishing a strong reputation for quality and timely delivery.</p>
            </div>
          </div>
          <div className={`timeline-item ${isVisible.journey ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="timeline-icon">
              <Star color="white" size={24} />
            </div>
            <div className="timeline-content">
              <h4>Market Leadership</h4>
              <p>Achieved recognition as one of Nagpur's premier real estate developers, known for luxury residential projects and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      {/* <section className="about-section" data-section="quality">
        <div className={`section-title-about ${isVisible.quality ? 'visible' : ''}`}>
          <h2>Quality Commitment</h2>
          <p>Excellence in every detail, from foundation to finish</p>
        </div>
        <div className="content-layout">
          <div className={`content-text ${isVisible.quality ? 'visible' : ''}`}>
            <h3>Uncompromising Standards</h3>
            <p>
              Quality is not just a promise at Gaurav Infra - it's our fundamental commitment to every homebuyer. We believe that a home is the most important investment in a person's life, and we take this responsibility seriously.
            </p>
            <p>
              Our quality assurance process begins at the design stage and continues through construction, finishing, and post-delivery service. We use only premium materials, employ skilled craftsmen, and maintain strict quality control at every phase.
            </p>
            <p>
              From foundation to finishing, every aspect of construction is supervised by experienced engineers and architects who ensure compliance with the highest industry standards and building codes.
            </p>
          </div>
          <div className={`content-image ${isVisible.quality ? 'visible' : ''}`}>
            <img
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Construction site showing quality building work in progress"
              loading="lazy"
            />
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h3>Ready to Build Your Dream Home?</h3>
          <p>
            Join hundreds of satisfied families who have trusted Gaurav Infra with their most important investment.
            Let's create something extraordinary together.
          </p>
          <a href="/contact" className="cta-button">
            <span>Start Your Journey</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
