import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  const techIcons = {
    'React': '⚛️',
    'React.js': '⚛️',
    'Node.js': '🟢',
    'Node': '🟢',
    'MongoDB': '🍃',
    'MySQL': '🗄️',
    'Express.js': '⚡',
    'Express': '⚡',
    'AWS': '☁️',
    'REST APIs': '🔗',
    'JWT': '🔐',
    'NFC': '📡',
    'OCR': '📄',
    'Stripe': '💳',
    'Payment Gateway': '💰',
    'Google Maps API': '📍'
  };

  const handleCardClick = () => {
    if (isMobile && project.link) {
      window.open(`https://${project.link}`, '_blank');
    } else {
      onClick();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(255,42,42,0.2)' }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${isMobile ? 'cursor-pointer' : 'cursor-pointer'} group`}
    >
      <div
        data-aos="fade-up"
        className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden"
      >
        {/* Background gradient on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : ''
          }`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Number and Icon */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-#ff2a2a text-sm font-bold tracking-widest uppercase bg-red-50 px-3 py-1 rounded-full">
              0{project.number}
            </span>
            <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isMobile ? '🔗' : '↗️'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight group-hover:text-#ff2a2a transition-colors duration-300">
            {project.title}
          </h3>

          {/* Link */}
          {project.link && (
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!isMobile) e.stopPropagation();
              }}
              className="text-#ff2a2a text-sm font-bold mb-6 hover:underline inline-flex items-center gap-2"
            >
              {project.link}
              <span className="text-lg">↗</span>
            </a>
          )}

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-2 bg-[#ff2a2a] text-white text-xs font-semibold rounded-lg hover:bg-red-600 transition-all duration-300 flex items-center gap-1"
              >
                <span>{techIcons[item] || '⚙️'}</span>
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Accent line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-transparent transition-all duration-300 ${
            isHovered ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      number: 1,
      title: "Tapio.cards",
      subtitle: "NFC Smart Business Card Solution",
      link: "tapio.cards",
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs", "AWS", "NFC"],
      description: "Developed a digital business-card platform enabling contactless sharing of professional and portfolio information via NFC; built customizable user profiles and REST APIs for seamless data management and personalized branding."
    },
    {
      number: 2,
      title: "Smart Product & Defect Scanner",
      subtitle: "Portal",
      link: "nkminfinity.com/client/demo",
      tech: ["React", "Node.js", "MongoDB", "OCR", "JWT"],
      description: "Built a product-lifecycle and defect-scanning portal applying OCR for invoice scanning, with secure file uploads, warranty tracking, and JWT-based authentication."
    },
    {
      number: 3,
      title: "Project Management Web App",
      link: "rightupbussiness.store",
      tech: ["React", "Node.js", "REST APIs", "MySQL"],
      description: "Engineered a web-based project management application with task assignment, priority management, and deadline tracking; enabled role-based collaboration, dashboards, and secure authentication to streamline workflows and improve team productivity."
    },
    {
      number: 4,
      title: "Dreamstone CRM",
      subtitle: "Customer Relationship Management Platform",
      link: "www.rightuptechno.com/crm/login",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "JWT", "AWS"],
      description: "Built a CRM platform for lead management, follow-ups, and sales-pipeline tracking, with secure REST APIs, role-based dashboards, and Google Sheets/Excel data import."
    },
    {
      number: 5,
      title: "Dreamstone Space",
      subtitle: "Collaborative Workspace Platform",
      link: "dreamstone.space",
      tech: ["React", "Node.js", "MongoDB", "WebSocket", "AWS"],
      description: "Created a collaborative workspace platform enabling real-time team communication, file sharing, project tracking, and video conferencing with intuitive UI and seamless integration."
    },
    {
      number: 6,
      title: "AppUp",
      subtitle: "Mobile App Platform",
      link: "appup.ai",
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs", "AWS"],
      description: "Developed a comprehensive mobile application platform enabling developers to create, manage, and deploy mobile applications with real-time analytics, user management, and cloud infrastructure integration."
    },
    {
      number: 7,
      title: "GameFox Clothing",
      subtitle: "E-commerce Platform",
      link: "www.gamefoxclothing.com/shop/home",
      tech: ["React", "Node.js", "MySQL", "Stripe", "AWS"],
      description: "Built a full-featured e-commerce platform for clothing retail with product catalog management, shopping cart, secure payment processing, inventory tracking, and order management system."
    },
    {
      number: 8,
      title: "MyFruitBowl",
      subtitle: "Food Delivery Service",
      link: "myfruitbowl.in",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API", "Payment Gateway"],
      description: "Developed a food delivery platform with real-time order tracking, dynamic pricing, vendor management, customer reviews, and integrated payment solutions for fresh produce and food items."
    },
    {
      number: 9,
      title: "BatGulf",
      link: "batgulf.com",
      tech: ["React", "Node.js", "REST APIs", "MySQL", "AWS"],
      description: "Created a responsive business website with content management, service showcase, client portfolio, contact forms, and analytics integration for seamless client engagement and lead generation."
    },
    {
      number: 10,
      title: "ThirdBorn",
      link: "thirdborn.in",
      tech: ["React", "Node.js", "MongoDB", "Payment Integration", "AWS"],
      description: "Built a feature-rich e-commerce and service platform with product/service listings, secure checkout, user authentication, order management, and customer support integration."
    },
    {
      number: 11,
      title: "RightUpNext Innovations",
      subtitle: "Software Development Company",
      link: "rightupnextinnovations.com",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS", "REST APIs"],
      description: "Contributed to a full-stack software development company delivering custom web applications, enterprise solutions, and digital transformation services for diverse clients across multiple industries."
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-white via-gray-50 to-white pt-24 pb-32 px-6 md:px-12 w-full font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-20 md:mb-24">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white hover:shadow-md transition-all">
            ✨ Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl font-medium leading-relaxed">
            Full-stack applications built with React, Node.js, and modern databases. Each project demonstrates end-to-end ownership from design to deployment, showcasing expertise in creating scalable, user-centric solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              isMobile={isMobile}
              onClick={() => !isMobile && setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal - Desktop Only */}
      {selectedProject && !isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="mb-6">
              <span className="text-#ff2a2a text-sm font-bold tracking-widest uppercase bg-red-50 px-3 py-1 rounded-full">
                Project 0{selectedProject.number}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {selectedProject.title}
            </h2>

            {selectedProject.subtitle && (
              <p className="text-gray-500 text-lg mb-6">{selectedProject.subtitle}</p>
            )}

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#ff2a2a] text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Visit Button */}
            {selectedProject.link && (
              <a
                href={`https://${selectedProject.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-gray-900 font-bold rounded-full hover:bg-#ff2a2a transition-all transform hover:scale-105 shadow-lg"
              >
                Visit Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
