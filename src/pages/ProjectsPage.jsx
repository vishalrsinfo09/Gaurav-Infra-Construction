// Projects.jsx
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import WhatsAppChat from '../components/WhatsAppChat';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
    const [isVisible, setIsVisible] = useState({});

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
    }

    /* Hero */
    .hero-projects {
      height: 100vh;
      min-height: 500px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      // background: linear-gradient(135deg, #16213e 0%, #0f4c75 50%, #3282b8 100%);
    }
    .hero-projects::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url('/3bhk.jpg') center/cover;
      // opacity: 0.15;
      animation: parallaxMove 20s ease-in-out infinite;
    }
    .hero-projects::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(rgba(0, 0, 0, 0.5));
    }
    .hero-content-projects {
      text-align: center;
      color: white;
      z-index: 2;
      padding: 2rem 1rem;
      animation: heroSlideUp 1s ease-out;
    }
    .hero-title-projects {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #ffffff, #3282b8, #0ebe7f, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 300% 300%;
      animation: gradientFlow 5s ease infinite;
    }
    .hero-subtitle-projects {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    /* Section Base */
    .projects-section {
      padding: 4rem 1rem;
      position: relative;
    }
    .projects-section.bg-light {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }
    .projects-section.bg-dark {
      background: linear-gradient(135deg, #16213e 0%, #0f4c75 100%);
      color: white;
    }
    .section-title-projects {
      text-align: center;
      margin-bottom: 3rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease;
    }
    .section-title-projects.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .section-title-projects h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      position: relative;
    }
    .section-title-projects h2::after {
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

    /* Grid */
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Card */
    .project-card {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      height: 500px;
      box-shadow: 0 10px 30px rgba(22, 33, 62, 0.1);
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    .project-card.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .project-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s ease;
    }
    .project-card:hover img {
      transform: scale(1.1);
    }

    /* Overlay */
    .project-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px 20px;
      background: linear-gradient( rgba(0, 0, 0, 0.64));
      color: #fff;
      text-align: center;
    }
    .project-overlay h4 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .project-overlay p {
      font-size: 1rem;
      margin-bottom: 15px;
    }
    .view-btn {
      display: inline-block;
      padding: 10px 25px;
      border: 2px solid #fff;
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 6px;
      transition: all 0.3s ease;
    }
    .view-btn:hover {
      background: #fff;
      color: #000;
    }

    /* CTA */
    .cta-section {
      padding: 4rem 1rem;
      background: linear-gradient(135deg, #0ebe7f 0%, #3282b8 100%);
      text-align: center;
      color: white;
    }
    .cta-content h3 {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1rem 2rem;
      background: white;
      border-radius: 50px;
      color: #16213e;
      font-weight: 600;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }

    /* Animations */
    @keyframes heroSlideUp {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes gradientFlow {
      0%,100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes parallaxMove {
      0%,100% { transform: translateY(0) scale(1.1); }
      50% { transform: translateY(-10px) scale(1.15); }
    }

    /* Responsive */
    @media(min-width:768px){
      .projects-grid{ grid-template-columns: repeat(2,1fr);}
      .hero-title-projects{ font-size:4rem; }
    }
    @media(min-width:1024px){
      .projects-grid{ grid-template-columns: repeat(3,1fr);}
      .hero-title-projects{ font-size:4rem; }
    }
  `;

    return (
        <div className="projects-wrapper">
            <style>{styles}</style>
            <ProgressBar />
            <Navigation />
            <WhatsAppChat />

            {/* Hero */}
            <section className="hero-projects">
                <div className="hero-content-projects">
                    <h1 className="hero-title-projects">Our Projects</h1>
                    <p className="hero-subtitle-projects">Luxury living spaces designed for modern lifestyles</p>
                </div>
            </section>

            {/* Residential */}
            <section className="projects-section" data-section="residential">
                <div className={`section-title-projects ${isVisible.residential ? 'visible' : ''}`}>
                    <h2>Residential Projects</h2>
                    <p>Elegant apartments crafted for families & individuals</p>
                </div>
                <div className="projects-grid">
                    {[
                        {
                            title: 'Gaurav Euphoria',
                            img: 'gaurav-euphoria.jpeg',
                            desc: 'Premium 2BHK & 3BHK apartments with modern amenities and green surroundings.',
                             path: "/projects/gaurav-euphoria"  
                        },
                        {
                            title: 'Gaurav Signature',
                            img: '/gaurav-signature.jpeg',
                            desc: 'Spacious apartments designed for comfort, luxury, and functionality.',
                            path: "/"
                        },
                        {
                            title: 'Gaurav Residency',
                            img: '/gaurav-residency.jpeg',
                            desc: 'Spacious apartments designed for comfort, luxury, and functionality.',
                            path: "/"
                        },
                    ].map((project, i) => (
                        <div key={i} className={`project-card ${isVisible.residential ? 'visible' : ''}`}>
                            <img src={project.img} alt={project.title} loading="lazy" />
                            <div className="project-overlay">
                                <h4>{project.title}</h4>
                                <p>{project.desc}</p>
                                {project.path && (
                                    <Link to={project.path} className="view-btn">
                                        View Project
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Commercial */}
            <section className="projects-section bg-light" data-section="commercial">
                <div className={`section-title-projects ${isVisible.commercial ? 'visible' : ''}`}>
                    <h2>Commercial Projects</h2>
                    <p>Spaces that inspire innovation and business growth</p>
                </div>
                <div className="projects-grid ">
                    {[
                        {
                            title: 'Gaurav Square',
                            img: '/carousal-build3.jpeg',
                            desc: 'Modern commercial complex offering premium office spaces in prime location.',
                            path: "/"
                        },
                        // {
                        //     title: 'Corporate Tower',
                        //     img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
                        //     desc: 'A-grade commercial tower with world-class facilities for enterprises.',
                        //     path: "/"
                        // },
                    ].map((project, i) => (
                        <div key={i} className={`project-card ${isVisible.commercial ? 'visible' : ''}`}>
                            <img src={project.img} alt={project.title} loading="lazy" />
                            <div className="project-overlay">
                                <h4>{project.title}</h4>
                                <p>{project.desc}</p>
                                {project.path && (
                                    <Link to={project.path} className="view-btn">
                                        View Project
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-content">
                    <h3>Want to Explore More?</h3>
                    <p>Discover our complete portfolio of residential & commercial developments</p>
                    <a href="/contact" className="cta-button">
                        <span>Get in Touch</span>
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Projects;
