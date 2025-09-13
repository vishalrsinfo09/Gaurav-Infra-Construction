// ProjectsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Home, MapPin, Star, ArrowRight, Eye} from 'lucide-react';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const navigate = useNavigate();

  // Residential Projects Data [web:41][web:48][web:50]
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

  // Commercial Projects Data [web:2][web:5][web:85]
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

  // Handle project click [web:82][web:86][web:88]
  const handleProjectClick = (projectId) => {
    if (projectId === 'gaurav-euphoria') {
      navigate(`/projects/${projectId}`);
    } else {
      alert('Coming Soon! This project will be available for viewing shortly.');
    }
  };

  const ProjectCard = ({ project, onClick }) => (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
          project.status === 'available' 
            ? 'bg-green-500 text-white' 
            : 'bg-yellow-500 text-black'
        }`}>
          {project.status === 'available' ? 'Available' : 'Coming Soon'}
        </div>

        {/* Rating Badge */}
        {project.rating > 0 && (
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{project.rating}</span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">View Details</span>
              </div>
              <ArrowRight className="w-5 h-5 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#D2AD75] transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Building className="w-4 h-4" />
            <span>{project.units} Units</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 text-[#D2AD75] mr-2" />
          <span className="text-sm">{project.location}</span>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.map((feature, index) => (
            <span 
              key={index}
              className="bg-gradient-to-r from-[#D2AD75]/20 to-[#7e581f]/20 text-[#7e581f] px-3 py-1 rounded-full text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">
            {project.price}
          </div>
          <button className="bg-gradient-to-r from-[#D2AD75] to-[#7e581f] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            {project.status === 'available' ? 'Explore Now' : 'Learn More'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#D2AD75] to-[#7e581f] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover premium residential and commercial projects designed for modern living and business success
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs Navigation [web:41][web:43][web:50] */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full shadow-xl p-2 inline-flex border">
              <button
                onClick={() => setActiveTab('residential')}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'residential'
                    ? 'bg-gradient-to-r from-[#D2AD75] to-[#7e581f] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#D2AD75] hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5" />
                Residential Projects
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'commercial'
                    ? 'bg-gradient-to-r from-[#D2AD75] to-[#7e581f] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#D2AD75] hover:bg-gray-50'
                }`}
              >
                <Building className="w-5 h-5" />
                Commercial Projects
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto">
            {activeTab === 'residential' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {residentialProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project.id)}
                  />
                ))}
                {/* Placeholder cards for coming soon projects */}
                {[...Array(2)].map((_, index) => (
                  <div key={`placeholder-${index}`} className="bg-white rounded-2xl overflow-hidden shadow-lg opacity-60">
                    <div className="h-64 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <Building className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Coming Soon</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-400 mb-2">New Project</h3>
                      <p className="text-gray-400 mb-4">Exciting residential project launching soon</p>
                      <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-center">
                        Stay Tuned
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'commercial' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercialProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project.id)}
                  />
                ))}
                {/* Placeholder cards for coming soon projects */}
                {[...Array(2)].map((_, index) => (
                  <div key={`commercial-placeholder-${index}`} className="bg-white rounded-2xl overflow-hidden shadow-lg opacity-60">
                    <div className="h-64 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <Building className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Coming Soon</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-400 mb-2">Commercial Space</h3>
                      <p className="text-gray-400 mb-4">Premium commercial project launching soon</p>
                      <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-center">
                        Stay Tuned
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
