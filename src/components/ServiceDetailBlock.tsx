import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

// Define the easing type for better clarity
import type { Easing } from 'framer-motion';
const easeOut: Easing = 'easeOut';

interface ServiceDetailBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  isImageLeft: boolean; // Prop to control the alternating layout
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut } 
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: easeOut } 
  },
};

const ServiceDetailBlock = ({ 
  title, 
  description, 
  imageUrl, 
  ctaText, 
  ctaLink, 
  isImageLeft 
}: ServiceDetailBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const contentOrderClass = isImageLeft ? 'md:order-last' : 'md:order-first';
  const imageOrderClass = isImageLeft ? 'md:order-first' : 'md:order-last';

  return (
    <motion.div
      ref={ref}
      className="container-full py-24"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div className={`flex flex-col space-y-6 ${contentOrderClass}`} variants={containerVariants}>
          <motion.h2 className="text-4xl md:text-5xl font-black text-primary" variants={itemVariants}>
            {title}
          </motion.h2>
          <motion.p className="text-lg text-text leading-relaxed" variants={itemVariants}>
            {description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <NavLink
              to={ctaLink}
              className="mt-4 inline-block px-8 py-3 bg-secondary text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              {ctaText}
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div className={imageOrderClass} variants={imageVariants}>
          <img src={imageUrl} alt={title} className="w-full h-auto rounded-3xl shadow-2xl" loading="lazy" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceDetailBlock;