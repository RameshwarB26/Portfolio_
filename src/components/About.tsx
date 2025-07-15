import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiDocker } from 'react-icons/si';
import { IconType } from 'react-icons';
import React from 'react';


interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

const About = () => {
  const skills: Skill[] = [
    { name: 'React', Icon: FaReact, color: 'text-blue-400' },
    { name: 'Node.js', Icon: FaNodeJs, color: 'text-green-500' },
    { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Python', Icon: FaPython, color: 'text-yellow-300' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-400' },
    { name: 'SQL', Icon: FaDatabase, color: 'text-orange-400' },
    { name: 'Docker', Icon: SiDocker, color: 'text-blue-500' },
    { name: 'Many More', Icon: SiDocker, color: 'text-blue-500' },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          I am a Computer Engineering student driven by a passion for creating impactful, user-focused digital experiences. I specialize in frontend development, real-time dashboards, and scalable, secure web solutions. I am eager to contribute my skills to challenging projects that foster growth, innovation, and real-world impact.
</p>
        </motion.div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8"
          >
            Education
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300 hover:scale-[1.02] cursor-default"
            >
              <h3 className="text-xl font-bold mb-4 text-center">Diploma in Information Technology</h3>
              <p className="text-gray-300 text-center">
                Matoshri Aasarbai Polytechnic,Nashik<br />
                2020 - 2023
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-300 hover:scale-[1.02] cursor-default"
            >
              <h3 className="text-xl font-bold mb-4 text-center">BE in Computer Science</h3>
              <p className="text-gray-300 text-center">
                Pune Vidyarthi Griha's College of Engineering, Nashik<br />
                2023 - 2026
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8"
          >
            Technical Skills
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {skills.map((skill) => {
  const SkillIcon = skill.Icon; // ✅ valid inside block
  return (
    <motion.div key={skill.name} variants={itemVariants} className="skill-card">
      <SkillIcon className={`text-4xl ${skill.color}`} />
      <span className="mt-2">{skill.name}</span>
    </motion.div>
  );
})}

          </motion.div>
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 -left-20 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 -right-20 w-96 h-96 bg-gradient-alt-end rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>
    </section>
  );
};

export default About;