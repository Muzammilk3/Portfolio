import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
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

  return (
    <section id="about" className={`about section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="about-container">
            <div className="about-layout">
              <motion.div variants={itemVariants} className="profile-section">
                <div className="profile-image-container">
                  <img src="/MY_pic.jpg" alt="Muzammil Ahamed Khan" className="profile-image" />
                </div>
                <motion.h3 variants={itemVariants} className="profile-name">
                  Muzammil Ahamed Khan
                </motion.h3>
                <motion.p variants={itemVariants} className="profile-title">
                  Full Stack Developer
                </motion.p>
                <motion.p variants={itemVariants} className="profile-location">
                  📍 Mangalore, Karnataka
                </motion.p>
                <motion.p variants={itemVariants} className="profile-status">
                  🟢 Available for opportunities
                </motion.p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="content-section">
                <motion.p variants={itemVariants} className="intro-text">
                  I'm Muzammil Ahamed Khan, a passionate Full Stack Developer currently pursuing B.E. in Computer Science & Engineering 
                  from Sri Devi Institute of Technology (2022-2026). With a strong foundation in web development 
                  and modern technologies, I love creating innovative solutions that make a difference.
                </motion.p>
                
                <motion.p variants={itemVariants} className="description-text">
                  My experience in web development includes successful completion of over 4+ projects.
                  My expertise spans across the MERN stack, and I have hands-on
                  experience building responsive web applications, RESTful APIs, and user-friendly interfaces. I'm
                  always eager to learn new technologies and take on challenging projects that push the boundaries
                  of what's possible.
                </motion.p>
                
                <motion.p variants={itemVariants} className="description-text">
                  Beyond coding, I've demonstrated leadership abilities by securing first place in intra-college 
                  technical competitions and the IT Quiz Challenge (YENIXA 2.0). I've also participated in prestigious 
                  hackathons including Hack Summit at P.A. College of Engineering Mangalore and Hack Yugma at JNNCE 
                  Shivamogga, where I contributed to developing innovative solutions in cybersecurity and web security.
                </motion.p>
                
                <motion.p variants={itemVariants} className="description-text">
                  My passion lies in transforming complex problems into elegant, efficient solutions. Whether it's 
                  developing full-stack applications, optimizing database performance, or creating intuitive user 
                  interfaces, I approach each project with dedication, creativity, and a commitment to excellence. 
                  I believe in continuous learning and staying updated with the latest industry trends and technologies.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
