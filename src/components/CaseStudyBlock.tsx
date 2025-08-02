import { motion, type Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface CaseStudyBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  stats: string[];
  link: string;
  isImageLeft: boolean;
  variants: Variants;
}

const CaseStudyBlock = ({ title, description, imageUrl, stats, link, isImageLeft, variants }: CaseStudyBlockProps) => {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24`}
      variants={variants}
    >
      <motion.div
        className={isImageLeft ? 'md:order-first' : 'md:order-last'}
        variants={{ hidden: { opacity: 0, x: isImageLeft ? -50 : 50 }, visible: { opacity: 1, x: 0 } }}
      >
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-3xl shadow-2xl" loading="lazy" />
      </motion.div>
      <motion.div
        className="text-left"
        variants={{ hidden: { opacity: 0, x: isImageLeft ? 50 : -50 }, visible: { opacity: 1, x: 0 } }}
      >
        <h3 className="text-3xl font-bold text-text">{title}</h3>
        <p className="mt-4 text-lg text-text">
          {description}
        </p>
        <ul className="mt-4 text-sm text-text list-disc list-inside">
          {stats.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
        <NavLink to={link} className="mt-6 inline-block px-8 py-3 text-secondary font-bold hover:underline transition-colors duration-300">
          Read Full Case Study
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyBlock;