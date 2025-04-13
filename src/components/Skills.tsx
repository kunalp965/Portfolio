import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  
  FaGithub,
  FaCuttlefish,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;

};

const skills: Skill[] = [
  { name: "HTML", level: 70, icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", level: 65, icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", level: 33, icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "TypeScript", level: 26, icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", level: 55, icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", level: 58, icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git & GitHub", level: 42, icon: <FaGithub className="text-gray-800" /> },
  { name: "C", level: 79, icon: <FaCuttlefish className="text-blue-700" /> },
  { name: "Python", level: 78, icon: <FaPython className="text-yellow-500" /> },
{ name: "Java", level: 60, icon: <FaJava className="text-red-600" /> },

];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-r from-emerald-100 via-blue-100 to-indigo-100 pt-24 text-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-600">Skills</h2>
        <p className="text-gray-600 mt-2 text-lg">Here’s what I’m good at 👨‍💻</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3 text-indigo-600 text-xl font-semibold">
                <span className="text-2xl">{skill.icon}</span>
                {skill.name}
              </div>
              <span className="text-sm font-medium text-gray-500">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <motion.div
                className="bg-indigo-500 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
