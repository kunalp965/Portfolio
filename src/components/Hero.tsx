import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 bg-gradient-to-r from-emerald-100 via-blue-100 to-indigo-100 pt-24 text-gray-800"



    >
      {/* Image */}
      <motion.img
        src="/images/kunal-profile.png"
        alt="Kunal Patil"
        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Text */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-black mb-4">
          Hi, I'm Kunal Patil 👋
        </h1>
        <p className="text-xl text-gray-700 dark:text-balck-300 max-w-xl">
          A passionate Computer Engineering student focused on building modern web experiences and solving real-world problems.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
