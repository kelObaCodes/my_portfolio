"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CodeIcon, 
  MailIcon, 
  ArrowLeftIcon, 
  ArrowRightIcon,
  BracketsIcon,
  ServerIcon,
  CloudIcon
} from 'lucide-react';

import styles from './Portfolio.module.css';

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
    description: "Replaces the default new tab page with a customizable news section, quick links, note taking and more.Discover news provides a fully customisable new tab experience that enhances your browsing efficiency and productivity. With features like news from around the world, note management with advanced filtering, image carousel, local news, and theme customisation,this extension is designed to streamline your daily tasks and make your browser more personalised and useful.",
    technologies: ["Javascript", "CSS3", "HTML", "Chrome ext"],
    imageUrl: "/images/discover.png",
    githubLink: "#",
    type: 'open-source'
  },
  {
    id: 6,
    title: "Scientific calculator & unit converter",
    description: "A calculator with result history, also includes a unit conversion feature that helps you to convert Length, Temperature, Mass.This Chrome extension provides users with a powerful, dual-function tool: a calculator and a unit converter. It offers a sleek and responsive user interface that adapts to both light and dark themes, ensuring a comfortable experience regardless of your preference or ambient lighting. Additionally, it includes a history feature for past calculations, enhancing productivity by allowing users to review previous entries.",
    technologies: ["Javascript", "CSS3", "HTML", "Chrome ext"],
    imageUrl: "/images/calc.png",
    githubLink: "#",
    type: 'open-source'
  },
  {
    id: 7,
    title: "React snippets for vscode",
    description: "The React Snippets extension for Visual Studio Code enhances your React development workflow by providing a comprehensive collection of code snippets. These snippets help you quickly insert common React patterns, hooks, and components, saving you valuable time and effort. Whether you are a beginner or an experienced developer, these snippets will streamline your coding process and boost your productivity.",
    technologies: ["Javascript", "vscode"],
    imageUrl: "/images/snippet.png",
    githubLink: "#",
    type: 'open-source'
  }
];

// Remove the named export and keep only the default export
export default function Page() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [projectType, setProjectType] = useState<'open-source' | 'company'>('open-source');

  // Filter projects based on selected type
  const filteredProjects = projects.filter(project => project.type === projectType);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      (prev + 1) % filteredProjects.length
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const currentProject = filteredProjects[currentProjectIndex];

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolioGrid}>
        <div className={styles.profileColumn}>
          <div className={styles.profileHeader}>
            <div className={styles.profilePicture}>
              <img 
                src="/images/prof.png" 
                alt="Kelvin Igbinoba" 
              />
            </div>
            <h1>Kelvin Igbinoba</h1>
            <p className={styles.subtitle}>Senior Frontend Engineer</p>
            
            <div className={styles.socialLinks}>
              {/* <a href="#" aria-label="GitHub"><GithubIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="#" aria-label="Contact"><MailIcon /></a> */}
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h2>Core Competencies</h2>
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className={styles.skillCard}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={styles.skillIcon}>
                  <skill.icon />
                </div>
                <div className={styles.skillContent}>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.projectColumn}>
          <div className={styles.projectTabs}>
            <button 
              className={projectType === 'open-source' ? styles.activeTab : ''} 
              onClick={() => {
                setProjectType('open-source');
                setCurrentProjectIndex(0);
              }}
            >
              Open Source
            </button>
            <button 
              className={projectType === 'company' ? styles.activeTab : ''} 
              onClick={() => {
                setProjectType('company');
                setCurrentProjectIndex(0);
              }}
            >
              Company Projects
            </button>
          </div>

          {filteredProjects.length > 0 ? (
            <motion.div 
              className={styles.projectCarousel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={currentProject.id}
            >
              <div className={styles.projectNavigation}>
                <button onClick={prevProject} aria-label="Previous Project">
                  <ArrowLeftIcon />
                </button>
                <button onClick={nextProject} aria-label="Next Project">
                  <ArrowRightIcon />
                </button>
              </div>

              <div className={styles.projectDetails}>
                <motion.img 
                  src={currentProject.imageUrl} 
                  alt={currentProject.title}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className={styles.projectInfo}>
                  <h2>{currentProject.title}</h2>
                  <p>{currentProject.description}</p>
                  
                  <div className={styles.technologies}>
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    {currentProject.githubLink && (
                      <a 
                        href={currentProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                      GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className={styles.noProjects}>
              No projects in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
}