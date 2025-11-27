import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Digestrack',
      description: 'A comprehensive iOS app for tracking and managing digestive health. Features include meal logging, symptom tracking, and personalized health insights.',
      tech: ['Flutter', 'iOS', 'Dart', 'Health Tracking'],
      github: 'https://github.com/aiqalatif',
      demo: 'https://apps.apple.com/es/app/digestrack/id6740924621?l=en-GB',
      image: '📱',
    },
    {
      title: 'Baraka',
      description: 'A financial technology mobile application available on Android. Provides investment and financial management services with a user-friendly interface.',
      tech: ['Flutter', 'Android', 'Firebase', 'FinTech'],
      github: 'https://github.com/aiqalatif',
      demo: 'https://play.google.com/store/apps/details?id=com.baraka.user&hl=en_US',
      image: '💰',
    },
     {
    title: 'PowerTracker',
    description: 'A cross-platform mobile application developed with Flutter that provides users with seamless experience to view billing portals and external content securely within the app. Features secure WebView integration, monetization through Google AdMob, and optimized for fast performance.',
    tech: ['Flutter', 'React', 'React Native', 'Redux', 'Firebase', 'REST APIs', 'Push Notifications', 'Geolocation', 'Google AdMob'],
    github: 'https://github.com/aiqalatif',
    demo: 'https://play.google.com/store/apps/details?id=com.billingcheck.app&hl=en',
    image: '⚡',
    period: 'Feb 2023 - Nov 2023'
  },
  {
    title: 'Fidarii',
    description: 'Developed a cross-platform service booking app for Android and iOS featuring a multi-level selection process. The app integrates real-time features like date/time slot selection, Google Maps, and in-app chat.',
    tech: ['Flutter', 'REST APIs', 'Node.js', 'Firebase', 'Stripe API'],
    github: 'https://github.com/aiqalatif',
    demo: 'https://apps.apple.com/pk/app/fidarii/id6740487752',
    image: '📱'
  },
  {
    title: 'Myth Fit',
    description: 'An AI-powered fitness app that generates personalized workout plans tailored to your goals, equipment, and fitness level. It provides video-guided exercises and adapts your training plan over time.',
    tech: ['Flutter', 'Dart', 'Provider', 'Firebase', 'Firestore', 'Firebase Authentication'],
    github: 'https://github.com/aiqalatif',
    demo: 'https://mythfit.app/',
    image: '💪'
  },
    {
      title: 'Rel8',
      description: 'A social networking mobile application for Android. Enables users to connect, share experiences, and build meaningful relationships in their community.',
      tech: ['Flutter', 'Android', 'Social Networking', 'Real-time Chat'],
      github: 'https://github.com/aiqalatif',
      demo: 'https://play.google.com/store/apps/details?id=com.rel8.app&hl=en',
      image: '🤝',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && project.github !== 'https://github.com/aiqalatif' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt /> View Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

