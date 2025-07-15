import { motion } from 'framer-motion';
import { createElement } from 'react';
import { FaAward, FaCertificate, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { IconType } from 'react-icons';
import React from 'react';


interface Achievement {
  title: string;
  description: string;
  Icon: IconType;
  date: string;
}

const Honours = () => {
  const achievements: Achievement[] = [
    {
      title: 'Selected for MSBTE State Level Project Competition ',
      description: 'Recognized for outstanding contributions to project development and innovation.',
      Icon: FaAward,
      date: '2021',
    },
    {
      title: 'Selection for Bharatiy Antariksh Hackathon ',
      description: 'Professional certification for AWS cloud development and architecture.',
      Icon: FaCertificate,
      date: '2024',
    },
    {
      title: 'Tech Lead Experience',
      description: 'Led a team of developers in delivering enterprise-scale applications.',
      Icon: FaBriefcase,
      date: '2021-2023',
    },
    {
      title: 'Finalist of Aavushkaar 2.0 ',
      description: 'Graduated with honors in Computer Science.',
      Icon: FaGraduationCap,
      date: '2025',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section id="honours" className="min-h-screen py-20 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text-alt hover:animate-float inline-block cursor-default">Honours</span>
        </motion.h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognition and milestones from my Acadamic journey in software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="glass-card rounded-xl p-6 flex items-start space-x-6 hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300 hover:scale-[1.02] group cursor-default"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
                {React.createElement(achievement.Icon, { 
                  className: "text-4xl text-accent-cyan group-hover:text-accent-purple transition-colors duration-300 relative z-10 flex-shrink-0" 
                })}
              </div>
              <div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold mb-3 group-hover:text-accent-cyan transition-colors duration-300"
                >
                  {achievement.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-400 leading-relaxed"
                >
                  {achievement.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 -left-20 w-96 h-96 bg-gradient-alt-start rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 -right-20 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>
    </section>
  );
};

export default Honours;