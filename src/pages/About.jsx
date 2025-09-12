import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
import { Award, Users, Building, Heart, Target, Eye, TrendingUp, Star, ArrowRight, Home } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ projects: 0, families: 0, experience: 0 });

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

    // Counter animations
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      const targets = { projects: 25, families: 500, experience: 15 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          projects: Math.floor(targets.projects * progress),
          families: Math.floor(targets.families * progress),
          experience: Math.floor(targets.experience * progress)
        });

        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };

    const timeout = setTimeout(animateCounters, 1000);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="about-wrapper">
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
          <h1 className="hero-title-about">About Gaurav Infra</h1>
          <p className="hero-subtitle-about">
            Building dreams, creating homes, transforming lives with luxury and uncompromising quality
          </p>
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
              src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Modern office building representing Gaurav Infra headquarters"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" data-section="stats">
        <div className="section-title-about">
          <h2>Our Impact in Numbers</h2>
          <p>Measurable success that speaks for our commitment</p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">{counters.projects}+</span>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">{counters.families}+</span>
            <p className="stat-label">Happy Families</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">{counters.experience}+</span>
            <p className="stat-label">Years Experience</p>
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

      {/* Leadership Excellence */}
      <section className="about-section" data-section="leadership">
        <div className={`section-title-about ${isVisible.leadership ? 'visible' : ''}`}>
          <h2>Leadership Excellence</h2>
          <p>Meet the visionaries behind Gaurav Infra's success</p>
        </div>
        <div className="content-layout">
          <div className={`content-image ${isVisible.leadership ? 'visible' : ''}`}>
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional team meeting in modern office environment"
              loading="lazy"
            />
          </div>
          <div className={`content-text ${isVisible.leadership ? 'visible' : ''}`}>
            <h3>Experienced Leadership</h3>
            <p>
              Our leadership team brings together decades of experience in real estate development, architecture, construction management, and customer service. This diverse expertise enables us to deliver projects that set new standards in the industry.
            </p>
            <p>
              Under their guidance, Gaurav Infra has successfully completed multiple residential projects, each characterized by innovative design, superior construction quality, and exceptional customer satisfaction.
            </p>
            <p>
              The team's commitment to continuous learning and adaptation to market trends ensures that our projects always incorporate the latest technologies and design philosophies.
            </p>
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
      <section className="about-section" data-section="quality">
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
      </section>

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
