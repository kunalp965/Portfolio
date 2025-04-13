import React from 'react';

const navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Kunal's Portfolio</h1>
        <ul className="flex space-x-6 text-gray-700">
          {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="hover:text-blue-500 capitalize">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
