// Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import WhatsAppChat from '../components/WhatsAppChat';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const [isVisible, setIsVisible] = useState({});
    const [activeProject, setActiveProject] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const heroRef = useRef(null);

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
        
        // Loading animation
        setTimeout(() => setIsLoading(false), 2000);

        // Mouse move effect
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            observer.disconnect();
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const styles = `
    .projects-wrapper {
      overflow-x: hidden;
      width: 100%;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      position: relative;
    }

    /* Loading Screen */
    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: fadeOut 1s ease-in-out 1.5s forwards;
    }

    .loading-content {
      text-align: center;
      color: white;
    }

    .loading-spinner {
      width: 60px;
      height: 60px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-top: 4px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }

    .loading-text {
      font-size: 1.5rem;
      font-weight: 600;
      animation: pulse 2s ease-in-out infinite;
    }

    /* Mouse Cursor Effect */
    .cursor-glow {
      position: fixed;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.8) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      mix-blend-mode: difference;
      animation: cursorPulse 2s ease-in-out infinite;
      transform: translate(-50%, -50%);
    }

    /* Floating Elements */
    .floating-element {
      position: absolute;
      opacity: 0.1;
      animation: float 6s ease-in-out infinite;
    }

    .floating-element:nth-child(1) { 
      top: 20%; 
      left: 10%; 
      animation-delay: 0s; 
      animation-duration: 8s;
    }
    .floating-element:nth-child(2) { 
      top: 60%; 
      right: 15%; 
      animation-delay: 2s; 
      animation-duration: 10s;
    }
    .floating-element:nth-child(3) { 
      bottom: 30%; 
      left: 20%; 
      animation-delay: 4s; 
      animation-duration: 12s;
    }

    /* Hero Section with Advanced Animations */
    .hero-projects {
      height: 70vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      // background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      // background: linear-gradient(135deg, #0ebe7f 0%, #3282b8 100%);
            background: linear-gradient(135deg, #0ebe7f 0%, #3282b8 100%);
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
      overflow: hidden;
    }
    
    .hero-projects::before {
      content: '';
      position: absolute;
      inset: 0;
      // background: 
      //   radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
      //   radial-gradient(circle at 80% 20%, rgba(255, 117, 95, 0.4) 0%, transparent 50%),
      //   radial-gradient(circle at 40% 80%, rgba(69, 104, 220, 0.3) 0%, transparent 50%);
      animation: floatingBubbles 15s ease-in-out infinite;
    }
    
    .hero-content-projects {
      text-align: center;
      z-index: 3;
      padding: 2rem;
      height:10vh;
      animation: heroFadeInUp 1.5s ease-out 0.5s backwards;
    }
    
    .hero-title-projects {
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

    .hero-title-projects::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 4px;
      background: linear-gradient(90deg, #ffffff, #f8fafc);
      border-radius: 2px;
      animation: expandLine 1s ease-out 2s forwards;
    }
    
    .hero-subtitle-projects {
      font-size: 1.35rem;
      opacity: 0;
      max-width: 700px;
      margin: 0 auto;
      font-weight: 300;
      letter-spacing: 0.5px;
      animation: fadeInUp 1s ease-out 1.5s forwards;
    }

    /* Animated Particles */
    .particles {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      animation: particleFloat 10s linear infinite;
    }

    .particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 8s; }
    .particle:nth-child(2) { left: 20%; animation-delay: 1s; animation-duration: 12s; }
    .particle:nth-child(3) { left: 30%; animation-delay: 2s; animation-duration: 10s; }
    .particle:nth-child(4) { left: 40%; animation-delay: 3s; animation-duration: 15s; }
    .particle:nth-child(5) { left: 50%; animation-delay: 4s; animation-duration: 9s; }
    .particle:nth-child(6) { left: 60%; animation-delay: 5s; animation-duration: 11s; }
    .particle:nth-child(7) { left: 70%; animation-delay: 6s; animation-duration: 13s; }
    .particle:nth-child(8) { left: 80%; animation-delay: 7s; animation-duration: 14s; }

    /* Section Animations */
    .projects-section {
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    .section-title {
      text-align: center;
      padding: 5rem 2rem 3rem;
      opacity: 0;
      transform: translateY(60px) scale(0.8);
      transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .section-title.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    
    .section-title h2 {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;
    }

    .section-title h2::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textReveal 2s ease-out 0.5s forwards;
      overflow: hidden;
      white-space: nowrap;
    }
    
    .section-title p {
      font-size: 1.25rem;
      opacity: 0;
      max-width: 600px;
      margin: 0 auto;
      animation: fadeInUp 1s ease-out 1s forwards;
    }

    /* Enhanced Project Rows */
    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    
    .project-row {
      display: flex;
      min-height: 70vh;
      opacity: 0;
      transform: translateX(-100px) rotateY(-15deg);
      transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    
    .project-row.visible {
      opacity: 1;
      transform: translateX(0) rotateY(0deg);
    }
    
    .project-row:nth-child(even) {
      flex-direction: row-reverse;
      transform: translateX(100px) rotateY(15deg);
    }
    
    .project-row:nth-child(even).visible {
      transform: translateX(0) rotateY(0deg);
    }

    .project-row::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(59, 130, 246, 0.1),
        transparent
      );
      transition: left 0.8s ease;
      z-index: 1;
    }

    .project-row:hover::before {
      left: 100%;
    }
    
    .project-image-half {
      flex: 1;
      position: relative;
      overflow: hidden;
      background: #000;
    }
    
    .project-image-half img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      filter: brightness(0.9) saturate(1.1);
    }
    
    .project-row:hover .project-image-half img {
      transform: scale(1.1) rotate(1deg);
      filter: brightness(1) saturate(1.3);
    }

    .project-image-half::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        45deg,
        rgba(59, 130, 246, 0.1) 0%,
        rgba(139, 92, 246, 0.1) 50%,
        rgba(236, 72, 153, 0.1) 100%
      );
      opacity: 0;
      // transition: opacity 0.6s ease;
    }

    .project-row:hover .project-image-half::after {
      opacity: 1;
    }
    
    .project-content {
      flex: 1;
      padding: 4rem 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: white;
      position: relative;
      z-index: 2;
    }
    
    .project-row:nth-child(even) .project-content {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding-left: 4rem;
      padding-right: 3rem;
    }

    .project-title {
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;
      transform: translateY(30px);
      opacity: 0;
      transition: all 0.8s ease 0.3s;
    }

    .project-row.visible .project-title {
      transform: translateY(0);
      opacity: 1;
    }

    .project-title::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      transition: width 0.8s ease 0.8s;
    }

    .project-row.visible .project-title::after {
      width: 60px;
    }
    
    .project-meta {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.6s ease 0.6s;
    }

    .project-row.visible .project-meta {
      transform: translateY(0);
      opacity: 1;
    }
    
    .project-meta span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      opacity: 0.8;
      padding: 0.5rem 1rem;
      background: rgba(59, 130, 246, 0.1);
      border-radius: 20px;
      transition: all 0.3s ease;
    }

    .project-meta span:hover {
      background: rgba(59, 130, 246, 0.2);
      transform: translateY(-2px);
    }
    
    .project-description {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2.5rem;
      max-width: 600px;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease 0.9s;
    }

    .project-row.visible .project-description {
      opacity: 1;
      transform: translateY(0);
    }
    
    .project-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.6s ease 1.2s;
    }

    .project-row.visible .project-actions {
      transform: translateY(0);
      opacity: 1;
    }
    
    .view-project-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.2rem 2.5rem;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      text-decoration: none;
      font-weight: 600;
      border-radius: 50px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      font-size: 1.1rem;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
    }

    .view-project-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s ease;
    }

    .view-project-btn:hover::before {
      left: 100%;
    }
    
    .view-project-btn:hover {
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
    }

    .view-project-btn svg {
      transition: transform 0.3s ease;
    }

    .view-project-btn:hover svg {
      transform: translateX(5px);
    }

    /* CTA Section with Advanced Animations */
    .cta-section {
      padding: 3rem 2rem;
      // background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            background: linear-gradient(135deg, #0ebe7f 0%, #3282b8 100%);
      background-size: 400% 300%;
      animation: gradientShift 10s ease infinite;
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
        radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
      animation: floatingBubbles 20s ease-in-out infinite reverse;
    }
    
    .cta-content {
      position: relative;
      z-index: 2;
      transform: translateY(50px);
      opacity: 0;
      animation: fadeInUp 1s ease-out 0.5s forwards;
    }
    
    .cta-content h3 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      // animation: textGlow 3s ease-in-out infinite
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      opacity: 0.95;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      // padding: 1.5rem 3rem;
      background: white;
      border-radius: 50px;
      color: #1e293b;
      font-weight: 700;
      font-size: 1.2rem;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }

    .cta-button::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .cta-button:hover::before {
      opacity: 1;
    }

    .cta-button span,
    .cta-button svg {
      position: relative;
      z-index: 2;
      transition: color 0.3s ease;
    }

    .cta-button:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    }

    .cta-button:hover span,
    .cta-button:hover svg {
      color: white;
    }

    /* Keyframe Animations */
    @keyframes fadeOut {
      to { 
        opacity: 0;
        visibility: hidden;
      }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @keyframes cursorPulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.5); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(180deg); }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes floatingBubbles {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-20px) scale(1.1); }
    }

    @keyframes heroFadeInUp {
      from { 
        opacity: 0; 
        transform: translateY(80px) scale(0.8); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0) scale(1); 
      }
    }

    @keyframes shimmerText {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes expandLine {
      from { width: 0; }
      to { width: 100px; }
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

    @keyframes particleFloat {
      0% { 
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { 
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes textReveal {
      from { width: 0; }
      to { width: 100%; }
    }

    @keyframes textGlow {
      0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
      50% { text-shadow: 0 0 40px rgba(255, 255, 255, 0.8); }
    }

    /* Responsive Animations */
    @media (max-width: 768px) {
      .project-row {
        flex-direction: column !important;
        min-height: auto;
        transform: translateY(50px);
      }
      
      .project-row.visible {
        transform: translateY(0);
      }
      
      .project-row:nth-child(even) {
        flex-direction: column !important;
        transform: translateY(50px);
      }
      
      .project-content {
        padding: 2rem 1.5rem !important;
      }
      
      .floating-element,
      .particles {
        display: none;
      }
      
      .hero-title-projects {
        font-size: 3rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
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
                location: "LakshariBagh, Nagpur",
                year: "2024",
                units: "120 Units"
            },
            {
                title: 'Gaurav Signature',
                img: '/gaurav-signature.jpeg',
                desc: 'Spacious apartments designed for comfort, luxury, and functionality. Every detail crafted to perfection for modern families seeking contemporary living spaces.',
                path: "/",
                location: "City Center",
                year: "2023",
                units: "80 Units"
            },
            {
                title: 'Gaurav Residency',
                img: '/gaurav-residency.jpeg',
                desc: 'Elegant residential complex offering premium living spaces with world-class amenities and excellent connectivity to major business hubs.',
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
                desc: 'Modern commercial complex offering premium office spaces in prime location. Perfect for businesses looking for prestigious addresses with cutting-edge infrastructure.',
                path: "/",
                location: "Awale Babu Square,LakshariBagh, Nagpur",
                year: "2024",
                units: "50 Offices"
            },
        ]
    };

    return (
        <div className="projects-wrapper">
            <style>{styles}</style>
            
            {/* Loading Screen */}
            {/* {isLoading && (
                <div className="loading-screen">
                    <div className="loading-content">
                        <div className="loading-spinner"></div>
                        <div className="loading-text">Loading Projects...</div>
                    </div>
                </div>
            )} */}

            {/* Mouse Cursor Effect */}
            {/* <div 
                className="cursor-glow" 
                style={{
                    left: mousePosition.x + 'px',
                    top: mousePosition.y + 'px'
                }}
            ></div> */}

            {/* Floating Elements */}
            {/* <div className="floating-element">
                <div style={{width: '60px', height: '60px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%'}}></div>
            </div>
            <div className="floating-element">
                <div style={{width: '40px', height: '40px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%'}}></div>
            </div>
            <div className="floating-element">
                <div style={{width: '80px', height: '80px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '50%'}}></div>
            </div> */}

            <ProgressBar />
            <Navigation />
            <WhatsAppChat />

            {/* Hero Section */}
            <section className="hero-projects" ref={heroRef}>
                {/* <div className="particles">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="particle"></div>
                    ))}
                </div> */}
                <div className="hero-content-projects">
                    <h1 className="hero-title-projects">Our Projects</h1>
                    <p className="hero-subtitle-projects">
                        Luxury living spaces designed for modern lifestyles and future aspirations
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
                            style={{ transitionDelay: `${i * 0.3}s` }}
                        >
                            <div className="project-image-half">
                                <img src={project.img} alt={project.title} loading="lazy" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-meta">
                                    <span><MapPin size={16} />{project.location}</span>
                                    <span><Calendar size={16} />{project.year}</span>
                                    {/* <span><Eye size={16} />{project.units}</span> */}
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
                                <img src={project.img} alt={project.title} loading="lazy" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-meta">
                                    <span><MapPin size={16} />{project.location}</span>
                                    <span><Calendar size={16} />{project.year}</span>
                                    <span><Eye size={16} />{project.units}</span>
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

            {/* Enhanced CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h3>Ready to Find Your Dream Space?</h3>
                    <p>Discover our complete portfolio and let us help you find the perfect property that matches your vision and lifestyle</p>
                    <a href="/contact" className="cta-button">
                        <span>Get in Touch</span>
                        <ArrowRight size={22} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Projects;
