import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-800"
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-gray-600 text-lg"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-6"
      >
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-all">
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NoPage;
