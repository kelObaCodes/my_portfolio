"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CodeIcon, 
  MailIcon, 
  ArrowLeftIcon, 
  ArrowRightIcon,
  BracketsIcon,
  ServerIcon,
  CloudIcon,
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  MoonIcon,
  ExternalLinkIcon
} from 'lucide-react';

interface Skill {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  demoLink?: string;
  type: 'open-source' | 'company';
}

const skills: Skill[] = [
  {
    icon: BracketsIcon,
    title: "Frontend Development",
    description: "Expert in creating responsive, performant web applications using React, Next.js, and modern JavaScript frameworks."
  },
  {
    icon: ServerIcon,
    title: "Backend Integration",
    description: "Comprehensive experience with Node.js, GraphQL, and microservices architecture."
  },
  {
    icon: BracketsIcon,
    title: "Performance Optimization",
    description: "Specialized in application performance tuning, code splitting, and efficient state management."
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    description: "Proficient in Docker, Kubernetes, and cloud deployment strategies across AWS and GCP."
  }
];

const projects: Project[] = [
  {
    id: 1,
    title: "Autochek Africa",
    description: "Comprehensive React component library with accessibility and performance optimizations.",
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
    imageUrl: "/images/auto.png",
    githubLink: "https://github.com/example/design-system",
    type: 'company'
  },
  {
    id: 2,
    title: "Certifaction AG",
    description: "Full-stack responsive e-commerce solution with microservices architecture and real-time inventory management.",
    technologies: ["React", "Node.js", "GraphQL", "Docker"],
    imageUrl: "/images/cert2.png",
    githubLink: "#",
    type: 'company'
  },
  {
    id: 3,
    title: "Requid Tech",
    description: "Collaborative design platform with machine learning-driven design suggestions and real-time collaboration.",
    technologies: ["Next.js", "TypeScript", "WebSockets", "TensorFlow"],
    imageUrl: "/images/requid2.png",
    githubLink: "#",
    type: 'company'
  },
  {
    id: 4,
    title: "Brains & Motion Education",
    description: "Collaborative design platform with machine learning-driven design suggestions and real-time collaboration.",
    technologies: ["Next.js", "TypeScript", "WebSockets", "TensorFlow"],
    imageUrl: "/images/bam.png",
    githubLink: "#",
    type: 'company'
  },
  {
    id: 5,
    title: "Discover news",
    description: "Replaces the default new tab page with a customizable news section, quick links, note taking and more. Enhances browsing efficiency with features like news from around the world, note management, and theme customisation.",
    technologies: ["Javascript", "CSS3", "HTML", "Chrome ext"],
    imageUrl: "/images/discover.png",
    githubLink: "#",
    demoLink: "#",
    type: 'open-source'
  },
  {
    id: 6,
    title: "Scientific calculator & unit converter",
    description: "A calculator with result history, also includes a unit conversion feature that helps you to convert Length, Temperature, Mass. Features a sleek and responsive UI that adapts to both light and dark themes.",
    technologies: ["Javascript", "CSS3", "HTML", "Chrome ext"],
    imageUrl: "/images/calc.png",
    githubLink: "#",
    demoLink: "#",
    type: 'open-source'
  },
  {
    id: 7,
    title: "Periodic table & Nutrition",
    description: "NutriElements is an educational Chrome extension that helps users explore chemical elements, their food sources, and industrial applications. The extension features an interactive periodic table, nutrition information, and industry-specific element usage.",
    technologies: ["Javascript", "CSS3", "HTML", "Chrome ext"],
    imageUrl: "/images/periodic.png",
    githubLink: "#",
    demoLink: "#",
    type: 'open-source'
  },
  {
    id: 8,
    title: "React snippets for vscode",
    description: "The React Snippets extension for Visual Studio Code enhances your React development workflow by providing a comprehensive collection of code snippets that boost productivity.",
    technologies: ["Javascript", "vscode"],
    imageUrl: "/images/snippet.png",
    githubLink: "#",
    demoLink: "#",
    type: 'open-source'
  }
];

export default function Page() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [projectType, setProjectType] = useState<'open-source' | 'company'>('open-source');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Filter projects based on selected type
  const filteredProjects = projects.filter(project => project.type === projectType);

  // Check system preference for dark mode on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Apply theme class to body
    document.body.classList.toggle('dark-theme', prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  const nextProject = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex((prev) => 
        (prev + 1) % filteredProjects.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex((prev) => 
        prev === 0 ? filteredProjects.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const switchProjectType = (type: 'open-source' | 'company') => {
    if (projectType === type) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setProjectType(type);
      setCurrentProjectIndex(0);
      setIsTransitioning(false);
    }, 300);
  };

  const currentProject = filteredProjects[currentProjectIndex];

  return (
    <div className={`portfolio ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="theme-toggle" onClick={toggleTheme}>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </div>

      <div className="portfolio-container">
        <motion.div 
          className="profile-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-picture">
            <img src="/images/prof.png" alt="Kelvin Igbinoba" />
          </div>
          <h1 className="name">Kelvin Igbinoba</h1>
          <p className="title">Senior Frontend Engineer</p>
          
          <div className="social-links">
            <motion.a 
              href="#" 
              aria-label="GitHub"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="LinkedIn"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinIcon />
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="Contact"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MailIcon />
            </motion.a>
          </div>
          
          <div className="skills-section">
            <h2>Core Competencies</h2>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: isDarkMode 
                      ? '0 10px 25px rgba(0, 0, 0, 0.3)' 
                      : '0 10px 25px rgba(59, 130, 246, 0.15)' 
                  }}
                >
                  <div className="skill-icon">
                    <skill.icon />
                  </div>
                  <div className="skill-content">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="projects-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="project-tabs">
            <button 
              className={`tab-button ${projectType === 'open-source' ? 'active' : ''}`} 
              onClick={() => switchProjectType('open-source')}
            >
              <motion.span 
                className="tab-text"
                whileHover={{ scale: 1.05 }}
              >
                Open Source
              </motion.span>
              {projectType === 'open-source' && (
                <motion.div 
                  className="tab-indicator" 
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
            <button 
              className={`tab-button ${projectType === 'company' ? 'active' : ''}`} 
              onClick={() => switchProjectType('company')}
            >
              <motion.span 
                className="tab-text"
                whileHover={{ scale: 1.05 }}
              >
                Company Projects
              </motion.span>
              {projectType === 'company' && (
                <motion.div 
                  className="tab-indicator" 
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="project-carousel">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentProject.id}
                  className="project-slide"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="project-image-container">
                    <motion.img 
                      src={currentProject.imageUrl} 
                      alt={currentProject.title}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="project-image"
                    />
                    <div className="project-navigation">
                      <motion.button 
                        onClick={prevProject} 
                        aria-label="Previous Project"
                        className="nav-button prev"
                        whileHover={{ scale: 1.1, backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb' }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isTransitioning}
                      >
                        <ArrowLeftIcon />
                      </motion.button>
                      <motion.button 
                        onClick={nextProject} 
                        aria-label="Next Project"
                        className="nav-button next"
                        whileHover={{ scale: 1.1, backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb' }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isTransitioning}
                      >
                        <ArrowRightIcon />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="project-info">
                    <h2>{currentProject.title}</h2>
                    <p>{currentProject.description}</p>
                    
                    <div className="technologies">
                      {currentProject.technologies.map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className="tech-badge"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileHover={{ y: -2, scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="project-links">
                      {currentProject.githubLink && (
                        <motion.a 
                          href={currentProject.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="link-button github"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <GithubIcon size={18} />
                          <span>View on GitHub</span>
                        </motion.a>
                      )}
                      {currentProject.demoLink && (
                        <motion.a 
                          href={currentProject.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="link-button demo"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLinkIcon size={18} />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="project-counter">
                    {`${currentProjectIndex + 1} / ${filteredProjects.length}`}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="no-projects">
              No projects in this category
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}