import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const Contact = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
      return;
    }

    setFormStatus({ loading: true, success: false, error: false, message: '' });

    // Create Gmail mailto link
    const gmailTo = 'muzammilahmedk3@gmail.com';
    const gmailSubject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const gmailBody = encodeURIComponent(
      `Hi Muzammil,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSent from your portfolio contact form`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${gmailTo}&su=${gmailSubject}&body=${gmailBody}`;

    // Open Gmail compose window
    try {
      window.open(gmailUrl, '_blank');
      
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Gmail opened! Please send the email from the new tab/window.'
      });
      
      // Clear form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error opening Gmail:', error);
      
      // Fallback to regular mailto
      const mailtoUrl = `mailto:${gmailTo}?subject=${gmailSubject}&body=${gmailBody}`;
      window.location.href = mailtoUrl;
      
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Email client opened! Please send the email from your default email app.'
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    }

    setTimeout(() => {
      setFormStatus({ loading: false, success: false, error: false, message: '' });
    }, 7000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'muzammilahmedk3@gmail.com',
      link: 'mailto:muzammilahmedk3@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 9591912358',
      link: 'tel:+919591912358'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muzammil-ahamed-khan/',
      color: '#0077B5'
    },
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/Muzammilk3',
      color: '#333'
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://x.com/muzammil_x_',
      color: '#1DA1F2'
    }
  ];

  return (
    <section id="contact" className={`contact section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contact-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Let's Contact
          </motion.h2>
          
          <motion.p variants={itemVariants} className="contact-description">
            Send me a message and let's discuss your project or just say hello!
          </motion.p>
          
          <div className="contact-grid">
            <motion.div variants={itemVariants} className="contact-info">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-description">
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
              
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-method"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="method-icon">
                      <info.icon />
                    </div>
                    <div className="method-details">
                      <span className="method-title">{info.title}</span>
                      <span className="method-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--hover-color': social.color }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon />
                      <span className="social-tooltip">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Me a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter the subject"
                    autoComplete="off"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                    placeholder="Enter your message"
                    rows="5"
                    autoComplete="off"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className={`form-submit ${formStatus.loading ? 'loading' : ''}`}
                  disabled={formStatus.loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus.loading ? (
                    <>
                      <div className="spinner"></div>
                      Opening Gmail...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send via Gmail
                    </>
                  )}
                </motion.button>
                
                {formStatus.message && (
                  <motion.div
                    className={`form-status ${formStatus.success ? 'success' : 'error'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
