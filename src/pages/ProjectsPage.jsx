import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Home, MapPin, Star, ArrowRight, Eye } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';

const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState('residential');
    const navigate = useNavigate();

    const residentialProjects = [
        {
            id: 'gaurav-euphoria',
            name: 'Gaurav Euphoria',
            location: 'Prime Location, Nagpur',
            price: '₹85 Lacs Onwards',
            features: ['3BHK', '4BHK', '5BHK', 'Luxury'],
            image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600',
            status: 'available',
            rating: 4.8,
            units: 120,
            description: 'Experience luxury living with modern amenities and premium finishes in the heart of Nagpur.'
        }
    ];

    const commercialProjects = [
        {
            id: 'business-plaza',
            name: 'Business Plaza',
            location: 'Commercial District, Nagpur',
            price: '₹45 Lacs Onwards',
            features: ['Office Spaces', 'Retail', 'Premium Location'],
            image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
            status: 'coming-soon',
            rating: 0,
            units: 80,
            description: 'Strategic commercial spaces with maximum visibility and modern infrastructure.'
        }
    ];

    const handleProjectClick = (projectId) => {
        if (projectId === 'gaurav-euphoria') {
            navigate(`/projects/${projectId}`);
        } else {
            alert('Coming Soon! This project will be available for viewing shortly.');
        }
    };

    // Enhanced CSS with About page color scheme [web:153][web:154][web:157]
    const styles = `
        .projects-wrapper {
            overflow-x: hidden;
            width: 100%;
        }
        
        /* Hero Section with matching gradient */
        .hero-projects {
            padding: 8.5rem 1rem;
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #16213e 0%, #0f4c75 50%, #3282b8 100%);
        }
        
        .hero-projects::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center/cover;
            opacity: 0.1;
            animation: parallaxMove 20s ease-in-out infinite;
        }
        
        .hero-projects::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at center, transparent 0%, rgba(22, 33, 62, 0.4) 100%);
        }
        
        .hero-content-projects {
            text-align: center;
            color: white;
            z-index: 2;
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .hero-title-projects {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: linear-gradient(45deg, #ffffff, #3282b8, #0ebe7f, #ffffff);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientFlow 4s ease-in-out infinite;
            line-height: 1.2;
        }
        
        .hero-subtitle-projects {
            font-size: 1.25rem;
            font-weight: 400;
            opacity: 0.95;
            line-height: 1.6;
            max-width: 48rem;
            margin: 0 auto 2rem;
        }
        
        /* Projects Section */
        .projects-section {
            padding: 4rem 1rem;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        /* Tab Navigation */
        .tab-navigation {
            display: flex;
            justify-content: center;
            margin-bottom: 3rem;
        }
        
        .tab-wrapper {
            background: white;
            border-radius: 9999px;
            box-shadow: 0 25px 50px -12px rgba(22, 33, 62, 0.15);
            padding: 0.5rem;
            display: inline-flex;
            border: 1px solid rgba(22, 33, 62, 0.08);
        }
        
        .tab-button {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 2rem;
            border-radius: 9999px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        
        .tab-button.active {
            background: linear-gradient(135deg, #3282b8, #0ebe7f);
            color: white;
            box-shadow: 0 10px 25px rgba(50, 130, 184, 0.3);
        }
        
        .tab-button.inactive {
            color: #64748b;
            background: transparent;
        }
        
        .tab-button.inactive:hover {
            color: #3282b8;
            background: rgba(50, 130, 184, 0.05);
        }
        
        /* Project Cards */
        .projects-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .project-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(22, 33, 62, 0.08);
            transition: all 0.5s ease;
            cursor: pointer;
            position: relative;
        }
        
        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(22, 33, 62, 0.15);
        }
        
        .project-card::before {
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
        
        .project-card:hover::before {
            transform: scaleX(1);
        }
        
        .project-image {
            height: 16rem;
            position: relative;
            overflow: hidden;
        }
        
        .project-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image img {
            transform: scale(1.1);
        }
        
        .status-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 600;
            backdrop-filter: blur(10px);
        }
        
        .status-available {
            background: rgba(14, 190, 127, 0.9);
            color: white;
        }
        
        .status-coming-soon {
            background: rgba(245, 158, 11, 0.9);
            color: white;
        }
        
        .rating-badge {
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            color: white;
            padding: 0.5rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .project-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 60%);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: end;
            padding: 1rem;
        }
        
        .project-card:hover .project-overlay {
            opacity: 1;
        }
        
        .overlay-content {
            display: flex;
            align-items: center;
            justify-content: between;
            width: 100%;
            color: white;
        }
        
        .view-details {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
        }
        
        .project-info {
            padding: 1.5rem;
        }
        
        .project-header {
            display: flex;
            align-items: start;
            justify-content: between;
            margin-bottom: 0.75rem;
        }
        
        .project-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #16213e;
            transition: color 0.3s ease;
            margin: 0;
        }
        
        .project-card:hover .project-title {
            color: #3282b8;
        }
        
        .units-info {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            color: #64748b;
            font-size: 0.875rem;
        }
        
        .location-info {
            display: flex;
            align-items: center;
            color: #64748b;
            margin-bottom: 0.75rem;
            font-size: 0.875rem;
        }
        
        .location-info svg {
            color: #3282b8;
            margin-right: 0.5rem;
            width: 1rem;
            height: 1rem;
        }
        
        .project-description {
            color: #64748b;
            margin-bottom: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;
        }
        
        .features-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .feature-tag {
            background: linear-gradient(135deg, rgba(50, 130, 184, 0.1), rgba(14, 190, 127, 0.1));
            color: #3282b8;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
        }
        
        .project-footer {
            display: flex;
            align-items: center;
            justify-content: between;
        }
        
        .project-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0ebe7f;
        }
        
        .project-button {
            background: linear-gradient(135deg, #3282b8, #0ebe7f);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(50, 130, 184, 0.2);
        }
        
        .project-button:hover {
            box-shadow: 0 8px 25px rgba(50, 130, 184, 0.3);
            transform: translateY(-2px);
        }
        
        /* Coming Soon Cards */
        .coming-soon-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(22, 33, 62, 0.08);
            opacity: 0.6;
        }
        
        .coming-soon-image {
            height: 16rem;
            background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .coming-soon-content {
            text-align: center;
            color: #64748b;
        }
        
        .coming-soon-info {
            padding: 1.5rem;
        }
        
        .coming-soon-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #cbd5e1;
            margin-bottom: 0.5rem;
        }
        
        .coming-soon-description {
            color: #cbd5e1;
            margin-bottom: 1rem;
            font-size: 0.875rem;
        }
        
        .coming-soon-button {
            background: #e2e8f0;
            color: #64748b;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            text-align: center;
            width: 100%;
        }
        
        /* Animations */
        @keyframes gradientFlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        @keyframes parallaxMove {
            0%, 100% { transform: translateY(0px) scale(1.1); }
            50% { transform: translateY(-10px) scale(1.15); }
        }
        
        /* Responsive Design */
        @media (min-width: 768px) {
            .hero-title-projects {
                font-size: 4rem;
            }
            
            .hero-subtitle-projects {
                font-size: 1.5rem;
            }
            
            .projects-section {
                padding: 5rem 1rem;
            }
            
            .projects-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 2.5rem;
            }
            
            .tab-button {
                padding: 1rem 2rem;
            }
        }
        
        @media (min-width: 1024px) {
            .hero-title-projects {
                font-size: 5rem;
            }
            
            .projects-section {
                padding: 6rem 2rem;
            }
            
            .projects-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 3rem;
            }
        }
    `;

    const ProjectCard = ({ project, onClick }) => (
        <div className="project-card" onClick={onClick}>
            <div className="project-image">
                <img src={project.image} alt={project.name} />
                
                <div className={`status-badge ${project.status === 'available' ? 'status-available' : 'status-coming-soon'}`}>
                    {project.status === 'available' ? 'Available' : 'Coming Soon'}
                </div>

                {project.rating > 0 && (
                    <div className="rating-badge">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{project.rating}</span>
                    </div>
                )}

                <div className="project-overlay">
                    <div className="overlay-content">
                        <div className="view-details">
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="project-info">
                <div className="project-header">
                    <h3 className="project-title">{project.name}</h3>
                    <div className="units-info">
                        <Building className="w-4 h-4" />
                        <span>{project.units} Units</span>
                    </div>
                </div>

                <div className="location-info">
                    <MapPin />
                    <span>{project.location}</span>
                </div>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="features-list">
                    {project.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                            {feature}
                        </span>
                    ))}
                </div>

                <div className="project-footer">
                    <div className="project-price">
                        {project.price}
                    </div>
                    <button className="project-button">
                        {project.status === 'available' ? 'Explore Now' : 'Learn More'}
                    </button>
                </div>
            </div>
        </div>
    );

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
                        Discover premium residential and commercial projects designed for modern living and business success
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <div className="container mx-auto px-4">
                    {/* Tab Navigation */}
                    <div className="tab-navigation">
                        <div className="tab-wrapper">
                            <button
                                onClick={() => setActiveTab('residential')}
                                className={`tab-button ${activeTab === 'residential' ? 'active' : 'inactive'}`}
                            >
                                <Home className="w-5 h-5" />
                                Residential Projects
                            </button>
                            <button
                                onClick={() => setActiveTab('commercial')}
                                className={`tab-button ${activeTab === 'commercial' ? 'active' : 'inactive'}`}
                            >
                                <Building className="w-5 h-5" />
                                Commercial Projects
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {activeTab === 'residential' && (
                            <>
                                {residentialProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        onClick={() => handleProjectClick(project.id)}
                                    />
                                ))}
                                {/* Coming Soon Cards */}
                                {[...Array(2)].map((_, index) => (
                                    <div key={`placeholder-${index}`} className="coming-soon-card">
                                        <div className="coming-soon-image">
                                            <div className="coming-soon-content">
                                                <Building className="w-12 h-12 mx-auto mb-2" />
                                                <p className="text-lg font-semibold">Coming Soon</p>
                                            </div>
                                        </div>
                                        <div className="coming-soon-info">
                                            <h3 className="coming-soon-title">New Project</h3>
                                            <p className="coming-soon-description">Exciting residential project launching soon</p>
                                            <div className="coming-soon-button">
                                                Stay Tuned
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                        {activeTab === 'commercial' && (
                            <>
                                {commercialProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        onClick={() => handleProjectClick(project.id)}
                                    />
                                ))}
                                {/* Coming Soon Cards */}
                                {[...Array(2)].map((_, index) => (
                                    <div key={`commercial-placeholder-${index}`} className="coming-soon-card">
                                        <div className="coming-soon-image">
                                            <div className="coming-soon-content">
                                                <Building className="w-12 h-12 mx-auto mb-2" />
                                                <p className="text-lg font-semibold">Coming Soon</p>
                                            </div>
                                        </div>
                                        <div className="coming-soon-info">
                                            <h3 className="coming-soon-title">Commercial Space</h3>
                                            <p className="coming-soon-description">Premium commercial project launching soon</p>
                                            <div className="coming-soon-button">
                                                Stay Tuned
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
