import React from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
import { Award, Users, Building, Heart, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="wrapper">
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      {/* Hero Section */}
      <section className="hero-section" style={{ height: '60vh' }}>
        <div 
          className="hero-video"
          style={{
            backgroundImage: `linear-gradient(rgba(22, 33, 62, 0.7), rgba(15, 76, 117, 0.5)), url('https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="hero-content">
          <h1>About Gaurav Infra</h1>
          <p>Building dreams, creating homes, transforming lives with luxury and quality</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="section-title">
          <h2>Our Story</h2>
          <p>A legacy of excellence in real estate development</p>
        </div>
        <div className="section-content">
          <div className="section-text">
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
          <div className="section-image">
            <img 
              src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Modern office building representing Gaurav Infra headquarters"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section bg-premium-light">
        <div className="section-title">
          <h2>Our Foundation</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon">
              <Target />
            </div>
            <h4>Our Mission</h4>
            <p>To create exceptional residential experiences by delivering luxury apartments that exceed expectations in quality, design, and service while maintaining affordability and sustainability.</p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon">
              <Eye />
            </div>
            <h4>Our Vision</h4>
            <p>To be the most trusted and respected real estate developer in Nagpur, known for innovative design, superior quality, and customer-centric approach in luxury residential projects.</p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon">
              <Heart />
            </div>
            <h4>Our Values</h4>
            <p>Integrity, excellence, innovation, and customer satisfaction form the core of our business philosophy. We believe in building long-term relationships based on trust and quality.</p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="section-title">
          <h2>Leadership Excellence</h2>
          <p>Meet the visionaries behind Gaurav Infra's success</p>
        </div>
        <div className="section-content">
          <div className="section-text">
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
          <div className="section-image">
            <img 
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Professional team meeting in modern office environment"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-premium-light">
        <div className="section-title">
          <h2>Our Achievements</h2>
          <p>Recognition and milestones that define our success</p>
        </div>
        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon">
              <Building />
            </div>
            <h4>Projects Delivered</h4>
            <p>Successfully completed multiple residential projects with 100% customer satisfaction and timely delivery record.</p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon">
              <Users />
            </div>
            <h4>Happy Families</h4>
            <p>Over 500 families have made our residential projects their home, creating a strong community of satisfied residents.</p>
          </div>
          <div className="amenity-card">
            <div className="amenity-icon">
              <Award />
            </div>
            <h4>Quality Recognition</h4>
            <p>Recognized for exceptional construction quality, innovative design, and customer-centric approach in the real estate sector.</p>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section">
        <div className="section-content" style={{ flexDirection: 'row-reverse' }}>
          <div className="section-text">
            <h3>Our Commitment to Quality</h3>
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
          <div className="section-image">
            <img 
              src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Construction site showing quality building work in progress"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;