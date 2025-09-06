import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
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

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      location: "California, USA",
      duration: "2019 - 2023",
      gpa: "3.8/4.0",
      relevant: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering"]
    }
  ];

  return (
    <section id="experience" className={`experience section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Education & Certifications
          </motion.h2>
          
          <div className="experience-grid">
            {/* Education */}
            <motion.div variants={itemVariants} className="education-section">
              <h3 className="subsection-title">
                <FiBriefcase className="subsection-icon" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="education-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="education-header">
                    <h4 className="degree">{edu.degree}</h4>
                    <span className="gpa">GPA: {edu.gpa}</span>
                  </div>
                  
                  <h5 className="institution">{edu.institution}</h5>
                  
                  <div className="edu-meta">
                    <span className="duration">
                      <FiCalendar /> {edu.duration}
                    </span>
                    <span className="location">
                      <FiMapPin /> {edu.location}
                    </span>
                  </div>
                  
                  <div className="relevant-courses">
                    <h6>Relevant Coursework:</h6>
                    <div className="course-tags">
                      {edu.relevant.map((course, courseIndex) => (
                        <span key={courseIndex} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Certifications */}
              <motion.div
                variants={itemVariants}
                className="certifications-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="cert-title">Certifications & Learning</h4>
                <div className="cert-list">
                  <div className="cert-item">
                    <span className="cert-name">React Developer Certification</span>
                    <span className="cert-issuer">Meta</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-name">Full Stack Web Development</span>
                    <span className="cert-issuer">freeCodeCamp</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-name">JavaScript Algorithms and Data Structures</span>
                    <span className="cert-issuer">freeCodeCamp</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
