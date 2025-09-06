import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const ContactAlternative = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
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

  // Using Formspree (easier alternative to EmailJS)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }

    setTimeout(() => {
      setFormStatus({ loading: false, success: false, error: false, message: '' });
    }, 5000);
  };

  // Rest of your component code remains the same...
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

  return (
    <section id="contact" className={`contact ${darkMode ? 'dark' : ''}`} ref={ref}>
      {/* Your existing JSX structure... */}
    </section>
  );
};

export default ContactAlternative;
