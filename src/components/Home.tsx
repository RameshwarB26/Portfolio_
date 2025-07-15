import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';


const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer | AI/ML Enthusiast | Problem Solver";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-0">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text inline-block hover:animate-float cursor-default">Rameshwar Bhumbar</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 h-8 mb-4">{text}</p>
            <p className="text-gray-400 max-w-lg leading-relaxed animate-fade-in">
              
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <a 
              href="#contact" 
              className="btn-primary inline-block mr-4 hover:animate-float"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="inline-block px-6 py-3 border-2 border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan/10 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end opacity-20 blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-gradient-alt-start to-gradient-alt-end opacity-20 blur-xl"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-cyan/50 hover:border-accent-cyan transition-colors duration-300 transform hover:rotate-6 hover:shadow-2xl hover:shadow-accent-cyan/20"
            >
              <img
                src="/ram.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-accent-cyan rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-start rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute top-40 right-20 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>
    </section>
  );
};

export default Home;