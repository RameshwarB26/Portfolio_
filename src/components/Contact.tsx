import { useState, FormEvent, createElement } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';
import emailjs from '@emailjs/browser';
import React from 'react';

interface SocialLink {
  name: string;
  Icon: IconType;
  url: string;
}

interface ContactInfo {
  Icon: IconType;
  title: string;
  details: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const socialLinks: SocialLink[] = [
    { name: 'GitHub', Icon: FaGithub, url: 'https://github.com/RameshwarB26' },
    { name: 'LinkedIn', Icon: FaLinkedin, url: 'https://www.linkedin.com/in/rameshwarbhumbar/' },
    { name: 'Instagram', Icon: FaInstagram, url: 'https://instagram.com/Rameshwar__26' },
  ];

  const contactInfo: ContactInfo[] = [
    {
      Icon: FaEnvelope,
      title: 'Email',
      details: 'ram26.bhumbar@gmail.com',
    },
    {
      Icon: FaMapMarkerAlt,
      title: 'Location',
      details: 'Nashik, Maharashtra',
    },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
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
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-xl space-y-6 hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300"
          >
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="contact-input"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="contact-input"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="contact-input min-h-[150px]"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary w-full"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>

            {status.submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}

            {status.error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-center"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
           {contactInfo.map((info) => {
  const Icon = info.Icon;
  return (
    <motion.div key={info.title} variants={itemVariants} className="flex items-start gap-4">
      <div className="flex-shrink-0 p-3 bg-gray-800/50 rounded-full">
        <Icon className="text-2xl text-accent-cyan" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{info.title}</h3>
        <p className="text-gray-300">{info.details}</p>
      </div>
    </motion.div>
  );
})}


            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex gap-4">
               {socialLinks.map((social) => {
  const Icon = social.Icon;
  return (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label={social.name}
    >
      <Icon className="text-2xl" />
    </a>
  );
})}

              </div>
            </motion.div>
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
          className="absolute top-40 -right-20 w-96 h-96 bg-gradient-alt-end rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 -left-20 w-96 h-96 bg-accent-cyan rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>
    </section>
  );
};

export default Contact;
