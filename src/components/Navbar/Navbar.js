import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsNavbarVisible(true); // Always show at very top
      } else if (currentScrollY > lastScrollY.current) {
        setIsNavbarVisible(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY.current) {
        setIsNavbarVisible(true); // Show on scroll up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      // Check if the menu is open and the click is outside the navbar
      if (isMobileMenuOpen && 
          !event.target.closest('.navbar') && 
          !event.target.closest('.mobile-menu-toggle') &&
          !event.target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Use mousedown instead of click to avoid conflicts
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Reset menu state on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''} ${isNavbarVisible ? 'visible' : ''}`}
    >
      <div className="nav-container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="nav-logo"
        >
          <span className="logo-text">Muzammil</span>
        </motion.div>

        <div className="nav-menu">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                scrollToSection(item.href, e);
              }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              delay={index * 0.1}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="nav-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            onTouchEnd={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            type="button"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(false);
        }}
      />

      {/* Mobile Menu */}
      <div 
        key={`mobile-menu-${isMobileMenuOpen}`}
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="mobile-nav-link"
            onClick={(e) => {
              scrollToSection(item.href, e);
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              x: isMobileMenuOpen ? 0 : -20 
            }}
            transition={{ delay: isMobileMenuOpen ? index * 0.1 : 0 }}
          >
            {item.name}
          </motion.a>
        ))}
      </div>

    </motion.nav>
  );
}

export default Navbar;
