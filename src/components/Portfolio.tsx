import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';

// Centralize your data for better code organization
const projectsData = [
  {
    id: '1',
    image: project1,
    title: 'E-commerce Platform',
    description: 'A modern, full-featured online store for a fashion brand.',
    link: '/portfolio/ecommerce-platform'
  },
  {
    id: '2',
    image: project2,
    title: 'Corporate Website Redesign',
    description: 'A sleek and professional website for a financial services company.',
    link: '/portfolio/corporate-redesign'
  },
  {
    id: '3',
    image: project3,
    title: 'Mobile App Landing Page',
    description: 'A high-converting landing page to promote a new mobile application.',
    link: '/portfolio/mobile-app-landing'
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container-full text-center">
        <h2 className="text-4xl md:text-5xl font-black text-text">
          Our <span className="text-secondary">Work</span>
        </h2>
        <p className="mt-4 text-xl text-text max-w-3xl mx-auto">
          Take a look at some of our recent projects that showcase our skills and dedication.
        </p>
        <motion.div
          ref={ref}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              {...project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;