import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'Disaster Ready India',
    description: 'A disaster management platform for real-time reporting, donations, and volunteer coordination.',
    image: '/images/disaster.jpeg',
    github: 'https://github.com/kunalpatil/disaster-ready-india', // Updated from 'link' to 'github'
  },
  {
    title: 'Social Media Page Selling Website',
    description: 'Buy and sell social media pages with verified transactions, user authentication, and chat.',
    image: '/images/social.jpeg',
    github: 'https://github.com/kunalpatil/social-media-page-sell', // Updated from 'link' to 'github'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built using React, TypeScript, and Tailwind CSS with dark mode support.',
    image: '/images/portfolio.jpeg',
    github: 'https://github.com/kunalpatil/portfolio', // Updated from 'link' to 'github'
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-gray-200 to-white"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-600">Projects</h2>
        <p className="text-gray-600 mt-2">Here are some of the things I’ve built 💻</p>
      </div>

      <div className="grid gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all transform hover:scale-105"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#E0F7FA", // Light cyan background on hover
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Slightly more shadow on hover
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold text-indigo-700">{project.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-600 text-sm hover:underline"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-600 text-sm hover:underline"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
