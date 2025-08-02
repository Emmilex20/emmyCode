import { motion, type Variants, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpeg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Use this to ensure easing types are correct.
import type { Easing } from 'framer-motion';

const easeOut: Easing = 'easeOut';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const textVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const rotatingWords = [
  'Experiences',
  'Solutions',
  'Brands',
  'Futures',
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background with advanced styling */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <motion.div
        className="relative z-10 container-full px-4 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-lg"
          variants={itemVariants}
        >
          We Build Digital <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingWords[currentWordIndex]}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="text-secondary inline-block"
            >
              {rotatingWords[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-white max-w-4xl mx-auto drop-shadow-md"
          variants={itemVariants}
        >
          As your trusted web development partners in Lekki, Lagos, we specialize in
          crafting bespoke, high-performance websites and applications that are
          not just visually stunning, but are engineered for success.
        </motion.p>
        
        {/* Buttons with complex animations */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={itemVariants}
        >
          <Link
            to="/portfolio"
            className="px-10 py-4 bg-secondary text-white font-bold rounded-full text-lg shadow-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            aria-label="View our portfolio"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="px-10 py-4 text-white font-bold rounded-full text-lg border-2 border-white shadow-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            aria-label="Contact our team"
          >
            Get a Quote
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;