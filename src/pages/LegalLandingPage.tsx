import { motion, type Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { legalUpdates } from '../data';
import { FaFileAlt } from 'react-icons/fa';

// Define reusable animation variants
const easeOut = 'easeOut';
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut } 
  },
};

// Container variant for staggered children animations
const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Child variant for individual list items
const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const LegalLandingPage = () => {
  const { title, description, links } = legalUpdates[0];

  return (
    <>
      <motion.div
        className="py-24 md:py-32 bg-background text-center"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="container-full">
          <h1 className="text-5xl md:text-6xl font-black text-text">
            {title}
          </h1>
          <motion.p className="mt-4 text-xl text-text max-w-3xl mx-auto" variants={childVariants}>
            {description}
          </motion.p>
        </div>
      </motion.div>

      <section className="py-24 bg-background">
        <div className="container-full max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listContainerVariants} // Use the new container variant here
            className="p-8 md:p-12 bg-card-bg rounded-3xl shadow-2xl"
          >
            <motion.h2 className="text-3xl font-bold text-text mb-6 text-center" variants={childVariants}>
              Important Documents
            </motion.h2>
            <ul className="space-y-6">
              {links.map((link, index) => (
                <motion.li // Apply motion and child variants here
                  key={index} 
                  className="border-b border-line-color pb-6 last:border-b-0 last:pb-0"
                  variants={childVariants}
                >
                  <NavLink
                    to={link.href}
                    className="flex items-center space-x-4 group"
                  >
                    <FaFileAlt className="text-secondary text-4xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-2xl font-semibold text-text group-hover:text-secondary transition-colors">
                      {link.title}
                    </span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LegalLandingPage;