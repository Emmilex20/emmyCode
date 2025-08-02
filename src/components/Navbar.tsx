/* eslint-disable no-irregular-whitespace */
import { motion, type Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Services', to: '/services' },
  { name: 'About Us', to: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion variants for simple fade-in and mobile menu
  const navInitial: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const menuVariants: Variants = {
    open: { x: 0, transition: { type: "tween", duration: 0.3 } },
    closed: { x: '100%', transition: { type: "tween", duration: 0.3 } },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-card-bg/80 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}
      variants={navInitial}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-1">
        <Link to="/" className="cursor-pointer">
  {/* Container for both logo and text */}
  <div className="flex flex-col items-center">
    <img 
  src={logo} 
  alt="EmmyCode Logo" 
  className="h-10 w-10 rounded-full transition-transform hover:scale-105" 
  loading="lazy"
/>
    <h1
      className="mt-1 text-base font-medium text-text hover:text-secondary transition-colors"
    >
      EmmyCode.
    </h1>
  </div>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-12 font-medium">
          <ThemeToggleButton />
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `relative text-lg cursor-pointer group ${isActive ? 'text-secondary font-bold' : 'text-text'}`
              }
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="px-4 py-2 lg:px-6 lg:py-2 bg-secondary text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggleButton />
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary text-4xl">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-full bg-background/95 backdrop-filter backdrop-blur-md text-text p-8 md:hidden"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex justify-end mb-16">
          <button onClick={() => setIsOpen(false)} className="text-primary text-4xl">
            <HiX />
          </button>
        </div>
        <div
          className="flex flex-col items-center space-y-10 text-4xl font-bold"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={navInitial}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `hover:text-secondary transition-colors ${isActive ? 'text-secondary' : 'text-text'}`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          <motion.div variants={navInitial}>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-secondary text-white text-center rounded-full text-2xl hover:bg-blue-700 transition-colors"
            >
              Contact
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;