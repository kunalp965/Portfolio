import React from "react";
import { motion } from "framer-motion";
import {  Linkedin, Phone } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-600">Contact Me</h2>
        <p className="text-gray-600 mt-2">Let’s connect and build something amazing together.</p>
      </div>

      <motion.div
        className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" placeholder="Your Name" className="mt-1 block w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="you@example.com" className="mt-1 block w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows={4} placeholder="Your message..." className="mt-1 block w-full p-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center space-y-2">
          <p className="flex items-center justify-center gap-2 text-gray-700">
          <div className="flex items-center gap-2">
  <FaEnvelope className="text-blue-500" />
  <span>Email: <a href="mailto:kunalpatil090605@gmail.com" className="text-blue-500">kunalpatil090605@gmail.com</a></span>
</div>

          </p>
          <p className="flex items-center justify-center gap-2 text-gray-700">
            <Phone size={18} /> +91 7666465511
          </p>
          <a
             href="https://www.linkedin.com/in/kunal-patil-0b27a4245"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-indigo-600 hover:underline"
          >
            <Linkedin size={18} /> LinkedIn Profile
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
