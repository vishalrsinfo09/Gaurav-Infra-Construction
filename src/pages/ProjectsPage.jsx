// Projects.jsx
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import WhatsAppChat from '../components/WhatsAppChat';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Eye } from 'lucide-react';

const Projects = () => {
    const [isVisible, setIsVisible] = useState({});
    const [activeProject, setActiveProject] = useState(0);

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
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .hero-projects::before {
      content: '';
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 117, 95, 0.3) 0%, transparent 50%);
    }
    
    .hero-content-projects {
      text-align: center;
      z-index: 2;
      padding: 2rem;
    }
    
    .hero-title-projects {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 800;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #ffffff, #f8fafc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .hero-subtitle-projects {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Section Base */
    .projects-section {
      min-height: 100vh;
      position: relative;
    }

    .section-title {
      text-align: center;
      padding: 4rem 2rem 2rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease;
    }
    
    .section-title.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .section-title h2 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .section-title p {
      font-size: 1.2rem;
      opacity: 0.8;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Full Width Project Display */
    .project-showcase {
      position: relative;
      width: 100%;
      height: 80vh;
      overflow: hidden;
      opacity: 0;
      transform: translateY(50px);
      transition: all 1s ease;
    }
    
    .project-showcase.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .project-image-full {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
      filter: brightness(0.8);
    }
    
    .project-showcase:hover .project-image-full {
      transform: scale(1.05);
      filter: brightness(0.9);
    }

    /* Project Info Overlay */
    .project-info-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        transparent,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.9)
      );
      color: white;
      padding: 4rem 2rem 2rem;
      transform: translateY(20px);
      transition: transform 0.4s ease;
    }
    
    .project-showcase:hover .project-info-overlay {
      transform: translateY(0);
    }
    
    .project-title {
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .project-meta {
      display: flex;
      gap: 2rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }
    
    .project-meta span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      opacity: 0.9;
    }
    
    .project-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      max-width: 600px;
      opacity: 0.95;
    }
    
    .project-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .view-project-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      text-decoration: none;
      font-weight: 600;
      border-radius: 50px;
      transition: all 0.3s ease;
      font-size: 1.1rem;
    }
    
    .view-project-btn:hover {
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
    }

    /* Project Navigation */
    .project-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      display: flex;
      gap: 1rem;
    }
    
    .project-nav.left { left: 2rem; }
    .project-nav.right { right: 2rem; }
    
    .nav-btn {
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .nav-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }

    /* Project Indicators */
    .project-indicators {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 1rem;
      z-index: 10;
    }
    
    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .indicator.active {
      background: white;
      transform: scale(1.2);
    }

    /* List View for Multiple Projects */
    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    
    .project-row {
      display: flex;
      min-height: 60vh;
      opacity: 0;
      transform: translateX(-50px);
      transition: all 0.8s ease;
    }
    
    .project-row.visible {
      opacity: 1;
      transform: translateX(0);
    }
    
    .project-row:nth-child(even) {
      flex-direction: row-reverse;
    }
    
    .project-row:nth-child(even) .project-content {
      padding-left: 3rem;
      padding-right: 2rem;
    }
    
    .project-image-half {
      flex: 1;
      background-size: cover;
      background-position: center;
      transition: transform 0.6s ease;
      position: relative;
      overflow: hidden;
    }
    
    .project-image-half img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .project-content {
      flex: 1;
      padding: 3rem 3rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: white;
    }
    
    .project-row:nth-child(even) .project-content {
      background: #f8fafc;
    }

    /* CTA Section */
    .cta-section {
      padding: 6rem 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      text-align: center;
      color: white;
    }
    
    .cta-content h3 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin-bottom: 1rem;
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
      transition: all 0.4s ease;
      text-decoration: none;
      margin-top: 2rem;
    }
    
    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .project-row {
        flex-direction: column !important;
        min-height: auto;
      }
      
      .project-row:nth-child(even) {
        flex-direction: column !important;
      }
      
      .project-content {
        padding: 2rem 1rem !important;
      }
      
      .project-nav { display: none; }
      
      .project-meta {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `;

    const projectsData = {
        residential: [
            {
                title: 'Gaurav Euphoria',
                img: 'gaurav-euphoria.jpeg',
                desc: 'Premium 2BHK & 3BHK apartments with modern amenities and green surroundings. Experience luxury living with state-of-the-art facilities and beautiful landscaped gardens.',
                path: "/projects/gaurav-euphoria",
                location: "Prime Location",
                year: "2024",
                units: "120 Units"
            },
            {
                title: 'Gaurav Signature',
                img: '/gaurav-signature.jpeg',
                desc: 'Spacious apartments designed for comfort, luxury, and functionality. Every detail crafted to perfection for modern families.',
                path: "/",
                location: "City Center",
                year: "2023",
                units: "80 Units"
            },
            {
                title: 'Gaurav Residency',
                img: '/gaurav-residency.jpeg',
                desc: 'Elegant residential complex offering premium living spaces with world-class amenities and excellent connectivity.',
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
                desc: 'Modern commercial complex offering premium office spaces in prime location. Perfect for businesses looking for prestigious addresses.',
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
                        Luxury living spaces designed for modern lifestyles
                    </p>
                </div>
            </section>

            {/* Residential Projects */}
            <section className="projects-section" data-section="residential">
                <div className={`section-title ${isVisible.residential ? 'visible' : ''}`}>
                    <h2>Residential Projects</h2>
                    <p>Elegant apartments crafted for families & individuals</p>
                </div>
                
                <div className="projects-list">
                    {projectsData.residential.map((project, i) => (
                        <div 
                            key={i} 
                            className={`project-row ${isVisible.residential ? 'visible' : ''}`}
                            style={{ transitionDelay: `${i * 0.2}s` }}
                        >
                            <div className="project-image-half">
                                <img src={project.img} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-meta">
                                    <span><MapPin size={18} />{project.location}</span>
                                    <span><Calendar size={18} />{project.year}</span>
                                    <span><Eye size={18} />{project.units}</span>
                                </div>
                                <p className="project-description">{project.desc}</p>
                                <div className="project-actions">
                                    {project.path && (
                                        <Link to={project.path} className="view-project-btn">
                                            <span>View Project</span>
                                            <ArrowRight size={20} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Commercial Projects */}
            <section className="projects-section" data-section="commercial">
                <div className={`section-title ${isVisible.commercial ? 'visible' : ''}`}>
                    <h2>Commercial Projects</h2>
                    <p>Spaces that inspire innovation and business growth</p>
                </div>
                
                <div className="projects-list">
                    {projectsData.commercial.map((project, i) => (
                        <div 
                            key={i} 
                            className={`project-row ${isVisible.commercial ? 'visible' : ''}`}
                        >
                            <div className="project-image-half">
                                <img src={project.img} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-meta">
                                    <span><MapPin size={18} />{project.location}</span>
                                    <span><Calendar size={18} />{project.year}</span>
                                    <span><Eye size={18} />{project.units}</span>
                                </div>
                                <p className="project-description">{project.desc}</p>
                                <div className="project-actions">
                                    {project.path && (
                                        <Link to={project.path} className="view-project-btn">
                                            <span>View Project</span>
                                            <ArrowRight size={20} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h3>Ready to Find Your Dream Space?</h3>
                    <p>Discover our complete portfolio and let us help you find the perfect property</p>
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
