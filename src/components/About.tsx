import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-white text-gray-800 text-center overflow-hidden"
    >
      <motion.div
        className="max-w-3xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm <span className="font-semibold">Kunal</span>, a Computer Engineering student with a passion for technology, design, and building interactive web apps.
          I love learning about frontend frameworks, solving real-world problems, and continuously leveling up my skills.
        </p>
        <p className="mt-4 text-md text-gray-600">
          Whether it’s crafting smooth UIs or exploring new tech, I enjoy making ideas come to life.
        </p>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/kunalp965"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-transform duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-patil-0b27a4245"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.codechef.com/users/kunalpatil_106"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
          >
            <SiCodechef />
          </a>
        </div>

        {/* Resume Button */}
        <motion.a
          href="Kunal Dilip Patil Resume.pdf"
          download
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
