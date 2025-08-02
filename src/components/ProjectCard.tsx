import { motion, type Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  variants: Variants;
}

const ProjectCard = ({ image, title, description, link, variants }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-card-bg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
      variants={variants}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-8 flex flex-col items-start text-left">
        <h3 className="text-2xl font-bold text-text">{title}</h3>
        <p className="mt-2 text-text flex-grow">{description}</p>
        <NavLink
          to={link}
          className="mt-6 flex items-center space-x-2 text-secondary font-semibold hover:underline transition-colors duration-300"
          aria-label={`View project for ${title}`}
        >
          <span>View Project</span>
          <FaExternalLinkAlt className="text-sm" />
        </NavLink>
      </div>
    </motion.div>
  );
};

export default ProjectCard;