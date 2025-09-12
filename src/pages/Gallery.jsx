import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Living Room',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Kitchen',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Master Bedroom',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Bathroom',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Building Exterior',
      category: 'Exterior'
    },
    {
      url: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Front Facade',
      category: 'Exterior'
    },
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dining Area',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Office Space',
      category: 'Amenities'
    },
    {
      url: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Conference Room',
      category: 'Amenities'
    },
    {
      url: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Under Construction',
      category: 'Construction'
    },
    {
      url: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Balcony View',
      category: 'Interior'
    },
    {
      url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kitchen Island',
      category: 'Interior'
    }
  ];

  return (
    <div className="wrapper">
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      {/* Hero Section */}
      <section className="hero-section" style={{ height: '83vh' }}>
        <div 
          className="hero-video"
          style={{
            backgroundImage: `linear-gradient(rgba(22, 33, 62, 0.7), rgba(15, 76, 117, 0.5)), url('https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="hero-content">
          <h1>Visual Gallery</h1>
          <p>Explore our stunning collection of luxury apartments and amenities</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="section-title">
          <h2>Our Project Showcase</h2>
          <p>Take a visual journey through our beautiful residential spaces</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-item"
              style={{
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 15px 35px rgba(22, 33, 62, 0.1)'
              }}
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url}
                alt={image.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div 
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(22, 33, 62, 0.4), rgba(50, 130, 184, 0.4))',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  const img = e.currentTarget.previousElementSibling;
                  if (img) img.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                  const img = e.currentTarget.previousElementSibling;
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <ZoomIn size={32} className="mb-2" />
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {image.title}
                </h4>
                <span style={{ 
                  fontSize: '0.9rem', 
                  background: 'rgba(50, 130, 184, 0.8)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px'
                }}>
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 2001
            }}
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage}
            alt="Gallery preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '10px'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Call to Action */}
      <section className="section bg-premium-light" style={{ textAlign: 'center' }}>
        <div className="section-title">
          <h2>Ready to Make This Your Home?</h2>
          <p>Contact us today to schedule a personal tour of our luxury apartments</p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <a href="/contact" className="cta-button" style={{ marginRight: '1rem' }}>
            Schedule a Tour
          </a>
          <a href="/3d-tour" className="cta-button" style={{ background: 'transparent', border: '2px solid var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
            Virtual 3D Tour
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;