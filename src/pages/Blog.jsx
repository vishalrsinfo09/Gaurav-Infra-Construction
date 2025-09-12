import React from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Choosing the Perfect Luxury Apartment",
      excerpt: "Discover the key factors to consider when selecting your dream luxury home in Nagpur.",
      author: "Gaurav Infra Team",
      date: "January 15, 2024",
      image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Modern Interior Design Trends for 2024",
      excerpt: "Explore the latest interior design trends that are shaping luxury apartments this year.",
      author: "Design Team",
      date: "January 10, 2024",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "The Benefits of Vastu-Compliant Homes",
      excerpt: "Learn how Vastu principles enhance the positive energy and well-being in your home.",
      author: "Architecture Team",
      date: "January 5, 2024",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="wrapper">
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      <section className="hero-section" style={{ height: '82vh' }}>
        <div 
          className="hero-video"
          style={{
            backgroundImage: `linear-gradient(rgba(22, 33, 62, 0.7), rgba(15, 76, 117, 0.5)), url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="hero-content">
          <h1>Our Blog</h1>
          <p>Insights, tips, and updates about luxury living and real estate</p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Latest Articles</h2>
          <p>Stay informed with our latest insights on luxury living and real estate trends</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(22, 33, 62, 0.1)',
                transition: 'transform 0.3s ease',
                border: '1px solid rgba(50, 130, 184, 0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img 
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-light)'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <User size={14} />
                    {post.author}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: 'var(--primary-navy)'
                }}>
                  {post.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-light)', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {post.excerpt}
                </p>
                <a 
                  href={`/blog/${post.id}`}
                  style={{
                    color: 'var(--accent-cyan)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-blue)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;