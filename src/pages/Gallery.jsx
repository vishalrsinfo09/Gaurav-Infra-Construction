import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
    {
      url: '/RAJ06536.JPG',
      title: 'Luxury Living Room',
      category: 'Interior'
    },
    {
      url: '/RAJ06629.JPG',
      title: 'Modern Kitchen',
      category: 'Interior'
    },
    {
      url: 'public/RAJ06579.JPG',
      title: 'Bathroom',
      category: 'Interior'
    },
     {
      url: '/RAJ06550.JPG',
      title: 'Dining Area',
      category: 'Interior'
    },
    {
      url: '/RAJ06645.JPG',
      title: 'Premium Bathroom',
      category: 'Interior'
    },
    // {
    //   url: 'https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Building Exterior',
    //   category: 'Exterior'
    // },
    // {
    //   url: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Front Facade',
    //   category: 'Exterior'
    // },
   
    // {
    //   url: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Office Space',
    //   category: 'Amenities'
    // },
    // {
    //   url: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Under Construction',
    //   category: 'Construction'
    // },
  ];

  // Navigation functions
  const goToPrevious = () => {
    const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : galleryImages.length - 1;
    setSelectedImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].url);
  };

  const goToNext = () => {
    const newIndex = selectedImageIndex < galleryImages.length - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].url);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  // Open modal with specific image
  const openModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setSelectedImageIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageIndex(0);
  };

  return (
    <div className="wrapper">
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      {/* Hero Section */}
      <section className="hero-section" style={{ height: '70vh' }}>
        <div 
          className="hero-video"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55)), url('/RAJ06626.JPG')`,
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
              onClick={() => openModal(image.url, index)}
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

      {/* Enhanced Lightbox Modal with Navigation */}
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
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 2001,
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease'
            }}
            onClick={closeModal}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            style={{
              position: 'absolute',
              left: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              zIndex: 2001,
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              opacity: galleryImages.length > 1 ? 1 : 0,
              pointerEvents: galleryImages.length > 1 ? 'auto' : 'none'
            }}
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            style={{
              position: 'absolute',
              right: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              zIndex: 2001,
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              opacity: galleryImages.length > 1 ? 1 : 0,
              pointerEvents: galleryImages.length > 1 ? 'auto' : 'none'
            }}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Image */}
          <img 
            src={selectedImage}
            alt={galleryImages[selectedImageIndex]?.title || "Gallery preview"}
            style={{
              maxWidth: '85%',
              maxHeight: '85%',
              objectFit: 'contain',
              borderRadius: '10px',
              transition: 'opacity 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image Counter */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              zIndex: 2001
            }}
          >
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>

          {/* Image Title */}
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              zIndex: 2001,
              maxWidth: '300px'
            }}
          >
            {galleryImages[selectedImageIndex]?.title}
          </div>
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
