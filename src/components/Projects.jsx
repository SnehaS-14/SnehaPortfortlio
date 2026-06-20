import React from 'react';

const ProjectCard = ({ number, title, link, tech, description }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-[#ff2a2a] text-sm font-bold tracking-widest uppercase">
          0{number}
        </span>
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
        {title}
      </h3>

      {link && (
        <a
          href={`https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff2a2a] text-sm font-bold mb-4 hover:underline"
        >
          {link}
        </a>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-[#ff2a2a]/10 text-[#ff2a2a] text-xs font-semibold rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

const Projects = () => {
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
      title: "AppUp",
      subtitle: "Mobile App Platform",
      link: "appup.ai",
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs", "AWS"],
      description: "Developed a comprehensive mobile application platform enabling developers to create, manage, and deploy mobile applications with real-time analytics, user management, and cloud infrastructure integration."
    },
    {
      number: 6,
      title: "GameFox Clothing",
      subtitle: "E-commerce Platform",
      link: "www.gamefoxclothing.com/shop/home",
      tech: ["React", "Node.js", "MySQL", "Stripe", "AWS"],
      description: "Built a full-featured e-commerce platform for clothing retail with product catalog management, shopping cart, secure payment processing, inventory tracking, and order management system."
    },
    {
      number: 7,
      title: "MyFruitBowl",
      subtitle: "Food Delivery Service",
      link: "myfruitbowl.in",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API", "Payment Gateway"],
      description: "Developed a food delivery platform with real-time order tracking, dynamic pricing, vendor management, customer reviews, and integrated payment solutions for fresh produce and food items."
    },
    {
      number: 8,
      title: "BatGulf",
      link: "batgulf.com",
      tech: ["React", "Node.js", "REST APIs", "MySQL", "AWS"],
      description: "Created a responsive business website with content management, service showcase, client portfolio, contact forms, and analytics integration for seamless client engagement and lead generation."
    },
    {
      number: 9,
      title: "ThirdBorn",
      link: "thirdborn.in",
      tech: ["React", "Node.js", "MongoDB", "Payment Integration", "AWS"],
      description: "Built a feature-rich e-commerce and service platform with product/service listings, secure checkout, user authentication, order management, and customer support integration."
    },
    {
      number: 10,
      title: "RightUpNext Innovations",
      subtitle: "Software Development Company",
      link: "rightupnextinnovations.com",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS", "REST APIs"],
      description: "Contributed to a full-stack software development company delivering custom web applications, enterprise solutions, and digital transformation services for diverse clients across multiple industries."
    }
  ];

  return (
    <section id="projects" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl font-medium">
            Full-stack applications built with React, Node.js, and modern databases. Each project demonstrates end-to-end ownership from design to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              link={project.link}
              tech={project.tech}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
