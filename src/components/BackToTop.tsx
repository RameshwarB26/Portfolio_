import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

import React from 'react';


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            scale: isVisible ? 1 : 0.8,
            y: isVisible ? 0 : 20 
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full text-white z-50 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gray-900 rounded-full transform group-hover:scale-[0.96] transition-transform duration-300" />
{React.createElement(FaArrowUp, { className: "text-xl relative z-10 text-accent-cyan group-hover:text-white transition-colors duration-300" })}

        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;