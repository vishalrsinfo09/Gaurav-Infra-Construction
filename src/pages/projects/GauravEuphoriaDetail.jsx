// GauravEuphoriaDetail.jsx - Single Page Version
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle, Download, MapPin, Home, Star, Play } from 'lucide-react';

const GauravEuphoriaDetail = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    // Smooth scroll function [web:95][web:98][web:103]
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 100);

            // Update active section based on scroll position [web:95][web:99]
            const sections = ['overview', 'interior', 'about', 'gallery', 'contact', '3d-tour', 'blog'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation items [web:90][web:94][web:96]
    const navigationItems = [
        { id: 'overview', label: 'Overview', icon: Home },
        { id: 'interior', label: 'Interior', icon: Home },
        { id: 'gallery', label: 'Gallery', icon: Star },
        { id: '3d-tour', label: '3D Tour', icon: Play },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Sticky Navigation [web:91][web:97] */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90'
                }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <Link
                            to="/projects"
                            className="flex items-center gap-2 text-gray-600 hover:text-[#D2AD75] transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Projects</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${activeSection === item.id
                                                ? 'text-[#D2AD75] bg-[#D2AD75]/10'
                                                : 'text-gray-600 hover:text-[#D2AD75] hover:bg-gray-50'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Download Brochure Button */}
                        <button className="bg-gradient-to-r from-[#D2AD75] to-[#7e581f] text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                            <Download className="w-4 h-4 inline mr-2" />
                            Brochure
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Gaurav Euphoria"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                <div className="relative h-full flex items-center justify-center text-center text-white z-10">
                    <div className="max-w-4xl px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                            Gaurav Euphoria
                        </h1>
                        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <MapPin className="w-6 h-6" />
                            <span className="text-xl">Prime Location, Nagpur</span>
                        </div>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Experience luxury living with world-class amenities and modern architecture
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <button className="bg-gradient-to-r from-[#D2AD75] to-[#7e581f] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                                <Phone className="w-5 h-5 inline mr-2" />
                                Call Now: +91 99701 41477
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all">
                                <MessageCircle className="w-5 h-5 inline mr-2" />
                                WhatsApp
                            </button>
                        </div>

                        {/* Scroll Down Indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                            <button
                                onClick={() => scrollToSection('overview')}
                                className="text-white hover:text-[#D2AD75] transition-colors"
                            >
                                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                                    <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section [web:94][web:96] */}
            <section id="overview" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Project Overview</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Luxury redefined with modern living spaces designed for contemporary lifestyle</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                            <div className="text-center p-8 bg-gradient-to-br from-[#D2AD75]/10 to-[#7e581f]/10 rounded-2xl hover:shadow-lg transition-all">
                                <div className="text-4xl font-bold text-[#D2AD75] mb-2">3-5</div>
                                <div className="text-gray-600 font-medium">BHK Options</div>
                            </div>
                            <div className="text-center p-8 bg-gradient-to-br from-[#D2AD75]/10 to-[#7e581f]/10 rounded-2xl hover:shadow-lg transition-all">
                                <div className="text-4xl font-bold text-[#D2AD75] mb-2">120</div>
                                <div className="text-gray-600 font-medium">Total Units</div>
                            </div>
                            <div className="text-center p-8 bg-gradient-to-br from-[#D2AD75]/10 to-[#7e581f]/10 rounded-2xl hover:shadow-lg transition-all">
                                <div className="text-4xl font-bold text-[#D2AD75] mb-2">₹85L+</div>
                                <div className="text-gray-600 font-medium">Starting Price</div>
                            </div>
                            <div className="text-center p-8 bg-gradient-to-br from-[#D2AD75]/10 to-[#7e581f]/10 rounded-2xl hover:shadow-lg transition-all">
                                <div className="text-4xl font-bold text-[#D2AD75] mb-2">24/7</div>
                                <div className="text-gray-600 font-medium">Security</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Luxury Living Redefined</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Gaurav Euphoria represents the pinnacle of luxury residential living in Nagpur. These meticulously designed 3BHK, 4BHK, and 5BHK apartments offer an unparalleled living experience with modern amenities and premium finishes throughout.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Each residence features spacious layouts, high-quality fixtures, and breathtaking views of the city. The project includes world-class amenities such as a swimming pool, fitness center, landscaped gardens, and round-the-clock security.
                                </p>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Luxury Living Room"
                                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interior Walkthrough Section [web:99][web:101] */}
            <section id="interior" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Interior Walkthrough</h2>
                            <p className="text-xl text-gray-600">Step inside luxury living with our meticulously designed interiors</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { img: "1571460", title: "Living Room", desc: "Spacious and elegant living areas" },
                                { img: "1571468", title: "Kitchen", desc: "Modern kitchen with premium appliances" },
                                { img: "1571463", title: "Master Bedroom", desc: "Luxurious bedrooms with city views" },
                                { img: "1571467", title: "Bathroom", desc: "Premium bathroom fittings and finishes" },
                                { img: "1571471", title: "Dining Area", desc: "Perfect space for family gatherings" },
                                { img: "1571473", title: "Balcony", desc: "Private balconies with panoramic views" }
                            ].map((room, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src={`https://images.pexels.com/photos/${room.img}/pexels-photo-${room.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                                        alt={room.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <h4 className="text-lg font-semibold mb-1">{room.title}</h4>
                                            <p className="text-sm opacity-90">{room.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section [web:104][web:107] */}
            <section id="gallery" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Project Gallery</h2>
                            <p className="text-xl text-gray-600">Visual journey through Gaurav Euphoria's luxury spaces</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                <div key={item} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src={`https://images.pexels.com/photos/${1571460 + item}/pexels-photo-${1571460 + item}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                                        alt={`Gallery ${item}`}
                                        className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                            View Full Size
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3D Tour Section */}
            <section id="3d-tour" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">3D Virtual Tour</h2>
                        <p className="text-xl text-gray-300 mb-12">Experience your future home virtually with our immersive 3D tour</p>

                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-12 shadow-2xl">
                            <div className="text-center">
                                <Play className="w-20 h-20 text-[#D2AD75] mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
                                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                    We're preparing an immersive 3D virtual tour that will let you explore every corner of Gaurav Euphoria from the comfort of your home.
                                </p>
                                <button className="bg-gradient-to-r from-[#D2AD75] to-[#7e581f] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                                    Request Preview Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Navigation - Bottom Tabs [web:95][web:103] */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40">
                <div className="flex overflow-x-auto py-2">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-2 text-xs transition-colors ${activeSection === item.id ? 'text-[#D2AD75]' : 'text-gray-600'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="whitespace-nowrap">{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div>
    );
};

export default GauravEuphoriaDetail;
