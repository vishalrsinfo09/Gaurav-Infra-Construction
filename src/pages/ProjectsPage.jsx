// Projects.jsx
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import WhatsAppChat from '../components/WhatsAppChat';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Eye } from 'lucide-react';

const Projects = () => {
    const [isVisible, setIsVisible] = useState({});
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.dataset.section]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const styles = `
    .projects-wrapper {
      overflow-x: hidden;
      width: 100%;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    /* Hero Section */
    .hero-projects {
      height: 80vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      background-size: 300% 300%;
      animation: gradientShift 10s ease infinite;
    }
    
    .hero-projects::before {
      content: '';
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 117, 95, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(69, 104, 220, 0.2) 0%, transparent 50%);
      animation: floatingBubbles 15s ease-in-out infinite;
    }
    
    .hero-projects::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.1);
    }
    
    .hero-content-projects {
      text-align: center;
      color: white;
      z-index: 2;
      padding: 2rem 1rem;
      animation: heroSlideUp 1s ease-out;
    }
    
    .hero-title-projects {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 800;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #ffffff, #f8fafc, #e2e8f0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 300% 300%;
      animation: shimmer 3s ease-in-out infinite;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .hero-subtitle-projects {
      font-size: 1.25rem;
      opacity: 0.95;
      font-weight: 300;
      letter-spacing: 0.5px;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Section Styling */
    .projects-section {
      padding: 5rem 1rem;
      position: relative;
    }
    
    .projects-section.bg-light {
      background: linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%);
    }
    
    .projects-section.bg-dark {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      color: white;
    }
    
    .section-title-projects {
      text-align: center;
      margin-bottom: 4rem;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .section-title-projects.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .section-title-projects h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;
    }
    
    .section-title-projects h2::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
      border-radius: 2px;
      animation: pulseGlow 2s ease-in-out infinite;
    }
    
    .section-title-projects p {
      font-size: 1.1rem;
      opacity: 0.8;
      max-width: 500px;
      margin: 0 auto;
    }

    /* Grid Layout */
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    /* Enhanced Project Cards */
    .project-card {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      height: 550px;
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.05);
      opacity: 0;
      transform: translateY(40px) rotateX(10deg);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      background: #fff;
      cursor: pointer;
    }
    
    .project-card.visible {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }
    
    .project-card:hover {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.15),
        0 10px 25px rgba(0, 0, 0, 0.1);
    }
    
    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      transition: left 0.6s ease;
      z-index: 2;
    }
    
    .project-card:hover::before {
      left: 100%;
    }
    
    .project-image {
      width: 100%;
      height: 70%;
      object-fit: cover;
      display: block;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 20px 20px 0 0;
    }
    
    .project-card:hover .project-image {
      transform: scale(1.1);
      filter: brightness(1.1) saturate(1.2);
    }

    /* Enhanced Overlay */
    .project-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      padding: 1.5rem;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.8) 40%,
        rgba(0, 0, 0, 0.95) 100%
      );
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      transition: all 0.4s ease;
    }
    
    .project-card:hover .project-overlay {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.9) 20%,
        rgba(0, 0, 0, 0.98) 100%
      );
    }
    
    .project-info {
      transform: translateY(10px);
      transition: transform 0.4s ease;
    }
    
    .project-card:hover .project-info {
      transform: translateY(0);
    }
    
    .project-overlay h4 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .project-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      opacity: 0.9;
    }
    
    .project-meta span {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    
    .project-overlay p {
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 1.25rem;
      opacity: 0.95;
    }
    
    .view-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: #fff;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 600;
      border-radius: 50px;
      transition: all 0.3s ease;
      align-self: flex-start;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }
    
    .view-btn:hover {
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }
    
    .view-btn svg {
      transition: transform 0.3s ease;
    }
    
    .view-btn:hover svg {
      transform: translateX(3px);
    }

    /* Stats Badge */
    .stats-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      backdrop-filter: blur(10px);
      z-index: 3;
    }

    /* Enhanced CTA Section */
    .cta-section {
      padding: 6rem 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .cta-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    }
    
    .cta-content {
      position: relative;
      z-index: 2;
    }
    
    .cta-content h3 {
      font-size: clamp(2rem, 4vw, 2.75rem);
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .cta-content p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.25rem 2.5rem;
      background: white;
      border-radius: 50px;
      color: #1e293b;
      font-weight: 700;
      font-size: 1.1rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .cta-button:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      background: #f8fafc;
    }

    /* Animations */
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes shimmer {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes heroSlideUp {
      from { opacity: 0; transform: translateY(60px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes floatingBubbles {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes pulseGlow {
      0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
      50% { opacity: 0.8; transform: translateX(-50%) scale(1.1); }
    }

    /* Responsive Design */
    @media (min-width: 640px) {
      .projects-grid { grid-template-columns: repeat(2, 1fr); }
    }
    
    @media (min-width: 1024px) {
      .projects-grid { grid-template-columns: repeat(3, 1fr); }
      .project-card { height: 500px; }
    }
    
    @media (min-width: 1280px) {
      .projects-grid { gap: 3rem; }
    }
  `;

    const projectsData = {
        residential: [
            {
                title: 'Gaurav Euphoria',
                img: 'gaurav-euphoria.jpeg',
                desc: 'Premium 2BHK & 3BHK apartments with modern amenities and green surroundings.',
                path: "/projects/gaurav-euphoria",
                location: "Prime Location",
                year: "2024",
                units: "120 Units"
            },
            {
                title: 'Gaurav Signature',
                img: '/gaurav-signature.jpeg',
                desc: 'Spacious apartments designed for comfort, luxury, and functionality.',
                path: "/",
                location: "City Center",
                year: "2023",
                units: "80 Units"
            },
            {
                title: 'Gaurav Residency',
                img: '/gaurav-residency.jpeg',
                desc: 'Spacious apartments designed for comfort, luxury, and functionality.',
                path: "/",
                location: "Suburb Area",
                year: "2023",
                units: "95 Units"
            },
        ],
        commercial: [
            {
                title: 'Gaurav Square',
                img: '/carousal-build3.jpeg',
                desc: 'Modern commercial complex offering premium office spaces in prime location.',
                path: "/",
                location: "Business District",
                year: "2024",
                units: "50 Offices"
            },
        ]
    };

    return (
        <div className="projects-wrapper">
            <style>{styles}</style>
            <ProgressBar />
            <Navigation />
            <WhatsAppChat />

            {/* Hero Section */}
            <section className="hero-projects">
                <div className="hero-content-projects">
                    <h1 className="hero-title-projects">Our Projects</h1>
                    <p className="hero-subtitle-projects">
                        Luxury living spaces designed for modern lifestyles and future aspirations
                    </p>
                </div>
            </section>

            {/* Residential Projects */}
            <section className="projects-section" data-section="residential">
                <div className={`section-title-projects ${isVisible.residential ? 'visible' : ''}`}>
                    <h2>Residential Projects</h2>
                    <p>Elegant apartments crafted for families & individuals</p>
                </div>
                <div className="projects-grid">
                    {projectsData.residential.map((project, i) => (
                        <div 
                            key={i} 
                            className={`project-card ${isVisible.residential ? 'visible' : ''}`}
                            onMouseEnter={() => setHoveredCard(`residential-${i}`)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="stats-badge">{project.units}</div>
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                loading="lazy" 
                                className="project-image"
                            />
                            <div className="project-overlay">
                                <div className="project-info">
                                    <h4>
                                        {project.title}
                                        <MapPin size={18} />
                                    </h4>
                                    <div className="project-meta">
                                        <span><MapPin size={14} />{project.location}</span>
                                        <span><Calendar size={14} />{project.year}</span>
                                    </div>
                                    <p>{project.desc}</p>
                                    {project.path && (
                                        <Link to={project.path} className="view-btn">
                                            <Eye size={16} />
                                            <span>View Project</span>
                                            <ArrowRight size={16} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Commercial Projects */}
            <section className="projects-section bg-light" data-section="commercial">
                <div className={`section-title-projects ${isVisible.commercial ? 'visible' : ''}`}>
                    <h2>Commercial Projects</h2>
                    <p>Spaces that inspire innovation and business growth</p>
                </div>
                <div className="projects-grid">
                    {projectsData.commercial.map((project, i) => (
                        <div 
                            key={i} 
                            className={`project-card ${isVisible.commercial ? 'visible' : ''}`}
                            onMouseEnter={() => setHoveredCard(`commercial-${i}`)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="stats-badge">{project.units}</div>
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                loading="lazy" 
                                className="project-image"
                            />
                            <div className="project-overlay">
                                <div className="project-info">
                                    <h4>
                                        {project.title}
                                        <MapPin size={18} />
                                    </h4>
                                    <div className="project-meta">
                                        <span><MapPin size={14} />{project.location}</span>
                                        <span><Calendar size={14} />{project.year}</span>
                                    </div>
                                    <p>{project.desc}</p>
                                    {project.path && (
                                        <Link to={project.path} className="view-btn">
                                            <Eye size={16} />
                                            <span>View Project</span>
                                            <ArrowRight size={16} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h3>Ready to Find Your Dream Space?</h3>
                    <p>Discover our complete portfolio of residential & commercial developments and let us help you find the perfect property</p>
                    <a href="/contact" className="cta-button">
                        <span>Get in Touch</span>
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Projects;
