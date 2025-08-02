import { motion, type Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import type { ReactNode } from 'react';

// Define the type for a single service card's props
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  variants: Variants;
}

const ServiceCard = ({ icon, title, description, link, variants }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-card-bg p-8 rounded-2xl shadow-xl flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300"
      variants={variants}
      whileHover={{ scale: 1.05, y: -8 }} // Combined hover animation
    >
      <div className="text-6xl text-secondary mb-6 p-4 bg-background rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-text">{title}</h3>
      <p className="mt-4 text-text leading-relaxed flex-grow">{description}</p>
      <NavLink
        to={link}
        className="mt-6 px-6 py-2 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
      >
        Learn More
      </NavLink>
    </motion.div>
  );
};

export default ServiceCard;