import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
    // { path: '/3d-tour', label: '3D Tour' },
    // { path: '/blog', label: 'Blog' }
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}

    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 h-full -ml-4">
          <img src="/Logo3.png" alt="Gaurav Infra" className="h-20 w-46 object-fill" />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-semibold text-lg lg:text-xl">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-cyan-400 transition ${location.pathname === link.path ? 'text-cyan-400' : ''
                  }`}
              >
                {link.label}
              </Link>

            </li>

          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md flex flex-col text-white px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-cyan-400 transition ${location.pathname === link.path ? 'text-cyan-400' : ''
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>

          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
