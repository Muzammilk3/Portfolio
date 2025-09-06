import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiAward, FiEye } from 'react-icons/fi';
import './Education.css';

const Education = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openModal = (imageSrc, title) => {
    setSelectedImage({ src: imageSrc, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: isMobile ? 0.1 : 0.3,
        staggerChildren: isMobile ? 0.1 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: isMobile ? 20 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: isMobile ? 0.4 : 0.6 }
    }
  };

  const educationData = [
    {
      degree: "B.E - Computer Science & Engineering",
      institution: "Sri Devi Institute of Technology",
      location: "Mangalore",
      period: "2022 - 2026",
      cgpa: "CGPA: 8.4"
    },
    {
      degree: "Pre-University College (PUC)",
      institution: "Sahyadri Composite PU College",
      location: "Thirthahalli", 
      period: "2020 - 2022",
      score: "74.16%"
    },
    {
      degree: "SSLC (10th Standard)",
      institution: "Sri Malenadu English Medium High School Bejjavalli",
      location: "Thirthahalli",
      period: "2020",
      score: "77.6%"
    }
  ];

  const certifications = [
    {
      name: "1st Place - Intra-College Technical Round",
      issuer: "Sri Devi Institute of Technology Mangalore",
      year: "2025",
      description: "Demonstrated strong problem-solving skills in a competitive coding challenge among participants",
      image: "SDIT_collage.jpg"
    },
    {
      name: "Winner - IT Quiz Challenge, YENIXA 2.0",
      issuer: "Technical Event Competition @ Yenepoya Institute of Technology",
      year: "2025", 
      description: "Secured first place by showcasing deep technical knowledge and fast reasoning under timed conditions",
      image: "yenepoya_collage.jpg"
    },
    {
      name: "Hackathon Participant - Hack Summit",
      issuer: "Hack Summit 2025 @ P. A. College of Engineering Mangalore",
      year: "2025",
      description: "Collaborated in a national-level hackathon to develop a full-stack cybersecurity & website security solution under time constraints",
      image: "P.A.collage.jpg"
    },
    {
      name: "Hackathon Participant - Hack Yugma",
      issuer: "Hack Yugma 2025 @ JNN College of Engineering Shivamogga",
      year: "2025",
      description: "Participated in competitive programming and development hackathon, gaining experience in rapid prototyping and team collaboration",
      image: "JNNCE_collage.jpg"
    }
  ];

  return (
    <section id="education" className={`education section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="education-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Education & Certifications
          </motion.h2>
          
          <motion.p variants={itemVariants} className="education-description">
            My educational background and professional certifications
          </motion.p>

          {/* Education Section - Single Row */}
          <div className="education-section-wrapper">
            <motion.div variants={itemVariants} className="section-header">
              <h3 className="main-section-title">
                <FiAward className="subsection-icon" />
                Education
              </h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="education-container">
              <div className="education-horizontal-grid">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="education-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="timeline-content">
                      <div className="education-header">
                        <h4 className="degree">{edu.degree}</h4>
                        <div className="education-meta">
                          <div className="institution">
                            <FiMapPin />
                            {edu.institution}, {edu.location}
                          </div>
                          <div className="period">
                            <FiCalendar />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                      
                      {(edu.cgpa || edu.score) && (
                        <div className="grade-info">
                          <p className="grade">{edu.cgpa || edu.score}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certificates Section - Below Education */}
          <div className="certificates-section-wrapper">
            <motion.div variants={itemVariants} className="section-header">
              <h3 className="main-section-title">
                <FiAward className="subsection-icon" />
                Achievements and Certificates
              </h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="certifications-container">
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="certification-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="cert-header">
                      <h4 className="cert-name">{cert.name}</h4>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                    <p className="cert-issuer">{cert.issuer}</p>
                    
                    <div className="cert-content">
                      <button 
                        className="view-cert-btn-center"
                        onClick={() => openModal(cert.image, cert.name)}
                        title="View Certificate"
                      >
                        <FiEye />
                      </button>
                      <p className="cert-description">{cert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header">
              <h3>{selectedImage?.title}</h3>
            </div>
            <div className="modal-body">
              <img 
                src={selectedImage?.src} 
                alt={selectedImage?.title}
                className="certificate-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/placeholder-certificate.jpg';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
