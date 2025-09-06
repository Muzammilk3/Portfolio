import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiEye } from 'react-icons/fi';
import './Projects.css';

const Projects = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: "AuditX: Advanced Website Security & Performance Analyzer",
      category: "fullstack",
      description: "A comprehensive website audit tool that scans for security vulnerabilities, performance issues, SEO gaps, and accessibility compliance with instant PDF reports.",
      longDescription: "AuditX is an advanced website security and performance analyzer that provides comprehensive auditing capabilities. The tool performs deep scans to identify security vulnerabilities, performance bottlenecks, SEO optimization opportunities, and accessibility compliance issues. It generates detailed PDF reports instantly without requiring user registration, making it accessible and user-friendly for developers and businesses.",
      image: "/AuditX.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "PDF Generator", "Security Scanner", "Performance Analyzer"],
      githubUrl: "https://github.com/Muzammilk3/auditx",
      liveUrl: "https://auditx-demo.com",
      features: [
        "Comprehensive security vulnerability scanning",
        "Performance analysis and optimization suggestions",
        "SEO audit and recommendations",
        "Accessibility compliance checking",
        "Instant PDF report generation",
        "No registration required for basic scans",
        "Real-time scanning with detailed insights",
        "Responsive design for all devices"
      ]
    },
    {
      id: 2,
      title: "Face Recognition Attendance System",
      category: "fullstack",
      description: "A desktop application using Python, OpenCV, and Tkinter for automatic attendance tracking with anti-spoofing measures.",
      longDescription: "Developed a sophisticated face recognition attendance system as a desktop application using Python, OpenCV, and Tkinter. The system features advanced facial recognition algorithms for automatic attendance tracking, integrated anti-spoofing measures to prevent fraudulent check-ins, and stores attendance data with timestamps in a local database. The application provides a user-friendly interface for administrators to manage attendance records and generate reports.",
      image: "/face_recognition_project.png",
      technologies: ["Python", "OpenCV", "Tkinter", "SQLite", "Machine Learning", "Computer Vision", "NumPy"],
      githubUrl: "https://github.com/Muzammilk3/face-recognition-attendance",
      liveUrl: "https://face-attendance-demo.com",
      features: [
        "Real-time face detection and recognition",
        "Automatic attendance marking with timestamps",
        "Anti-spoofing protection against fake images",
        "Local database storage for attendance records",
        "User-friendly desktop interface with Tkinter",
        "Attendance report generation and export",
        "Multiple user registration and management",
        "Accurate facial recognition using OpenCV algorithms"
      ]
    },
    {
      id: 3,
      title: "E-Corp: Secure Authentication System",
      category: "fullstack",
      description: "A comprehensive security platform built during a hackathon featuring Safe Browsing, Spam Protection, Deepfake Detection, and Zero-Auth Sign-In.",
      longDescription: "E-Corp is a cutting-edge secure authentication system developed during a hackathon that integrates multiple security features into a unified platform. The system includes Safe Browsing protection, Spam Email Protection, Deepfake Detection capabilities, innovative Zero-Auth Sign-In technology, and Steganography features. This comprehensive security solution addresses modern cybersecurity challenges with advanced algorithms and user-friendly interfaces.",
      image: "/E-Corp_project.png",
      technologies: ["React.js", "Node.js", "Machine Learning", "Computer Vision", "Cryptography", "WebRTC", "TensorFlow"],
      githubUrl: "https://github.com/Muzammilk3/e-corp-security",
      liveUrl: "https://e-corp-demo.com",
      features: [
        "Safe Browsing protection against malicious websites",
        "Advanced spam email detection and filtering",
        "AI-powered deepfake detection technology",
        "Innovative Zero-Auth Sign-In system",
        "Steganography for secure data hiding",
        "Real-time threat monitoring and alerts",
        "Multi-layer security authentication",
        "Comprehensive security dashboard and analytics"
      ]
    },
    {
      id: 4,
      title: "Healthcare Management System",
      category: "fullstack",
      description: "A complete healthcare management solution for managing patient records, appointments, and medical history with robust security measures.",
      longDescription: "Created a comprehensive full-stack healthcare management system designed to streamline medical practice operations. The system securely manages patient records, appointment scheduling, medical history tracking, and prescription management. Built with HIPAA compliance in mind, it features role-based access control, encrypted data storage, and audit trails. The platform includes separate interfaces for doctors, patients, and administrative staff.",
      image: "/Healthcare.jpg",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Express.js", "JWT", "Encryption", "Chart.js", "Socket.io"],
      githubUrl: "https://github.com/Muzammilk3/healthcare-management",
      liveUrl: "https://healthcare-demo.com",
      features: [
        "Secure patient record management with encryption",
        "Appointment scheduling and calendar integration",
        "Medical history tracking and documentation",
        "Prescription management and drug interaction alerts",
        "Role-based access control for different user types",
        "HIPAA compliant data handling and storage",
        "Real-time notifications and appointment reminders",
        "Comprehensive reporting and analytics dashboard"
      ]             
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={`projects section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          
          <motion.p variants={itemVariants} className="projects-description">
            Here are some of my recent projects that showcase my skills and experience
          </motion.p>
          
          <motion.div variants={itemVariants} className="project-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          <motion.div 
            className="projects-grid"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="project-card"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <button 
                        className="overlay-btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        <FiEye /> View Details
                      </button>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-links">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FiGithub />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag more">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-content">
                <h3 className="modal-title">{selectedProject.title}</h3>
                
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                <div className="modal-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FiGithub /> View Code
                  </a>
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
