import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import React from 'react';

//import { IconType } from 'react-icons';

interface NavLink {
  name: string;
  to: string;
}

interface MenuButtonProps {
  isOpen: boolean;
  Icon: React.ComponentType<{ className?: string }>;
  onClick: () => void;
}

const MenuButton = ({ isOpen, Icon, onClick }: MenuButtonProps) => (
  <button
    onClick={onClick}
    className="md:hidden p-2 hover:text-accent-cyan transition-colors"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
{React.createElement(Icon, { className: "text-2xl" })}
  </button>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Honours', to: 'honours' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/30 backdrop-blur-lg border-b border-gray-700/20 py-4' : 'bg-transparent py-6'}`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold gradient-text"
        >
          @Ram
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-accent-cyan relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
{isMenuOpen
  ? React.createElement(FaTimes, { className: "text-2xl" })
  : React.createElement(FaBars, { className: "text-2xl" })}
          </motion.div>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm py-4 md:hidden"
            >
              <div className="container mx-auto px-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.indexOf(link) * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link block py-2 relative group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;