import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import React from 'react';


interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  //demoLink: string;
}

interface ProjectLinkProps {
  href: string;
  Icon: IconType;
  label: string;
}

const ProjectLink = ({ href, Icon, label }: ProjectLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-cyan transition-colors"
    aria-label={label}
  >
{React.createElement(Icon, { className: "text-lg" })}
    <span>{label}</span>
  </a>
);

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'EV Search',
      description: 'EV Search is a user-friendly web application that helps electric vehicle users easily locate, explore, and book nearby charging stations in real time.',
      image: '/images/car.png',
      technologies: ['React', 'Javascript', 'MongoDB', 'API'],
      githubLink: 'https://github.com/RameshwarB26',
      //demoLink: 'https://project1-demo.com',
    },
    {
      title: 'Smart Hostel Managment System with E-commarce features ',
      description: 'An all-in-one Smart Hostel Management System combining hostel operations and E-commerce convenience.',
      image: '/images/hostel.jpeg',
      technologies: ['React', 'Firebase', 'Tailwind CSS','MySQL','PHP'],
      githubLink: 'https://github.com/RameshwarB26',
      //demoLink: 'https://project2-demo.com',
    },
    {
      title: 'Resume Checker (Short Listing)',
      description: 'An AI-powered Resume Shortlisting system that analyzes, ranks, and filters resumes based on job-specific keywords, skills, and qualification criteria',
      image: '/images/resume.avif',
      technologies: ['Python', 'TensorFlow', 'NLP', 'React','SpaCY'],
      githubLink: 'https://github.com/RameshwarB26',
      //demoLink: 'https://project3-demo.com',
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            My <span className="gradient-text-alt hover:animate-float inline-block cursor-default">Projects</span>
          </motion.h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and experience
            in building modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="project-card group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <ProjectLink
                    href={project.githubLink}
                    Icon={FaGithub}
                    label="View Code"
                  />
                  {/*<ProjectLink
                    //href={project.demoLink}
                    Icon={FaExternalLinkAlt}
                    label="Live Demo"
                  />*/}       
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 -right-20 w-96 h-96 bg-accent-cyan rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 -left-20 w-96 h-96 bg-gradient-alt-start rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>
    </section>
  );
};

export default Projects;