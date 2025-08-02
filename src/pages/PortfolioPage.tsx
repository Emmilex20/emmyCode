import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import CaseStudyBlock from '../components/CaseStudyBlock';
import { projectsData, caseStudiesData } from '../data';

const easeOut = 'easeOut';
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut, staggerChildren: 0.2 } 
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PortfolioPage = () => {
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* Portfolio Page Header */}
      <motion.div
        className="py-24 md:py-32 bg-background text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container-full">
          <motion.h1 className="text-5xl md:text-6xl font-black text-text" variants={childVariants}>
            Our <span className="text-secondary">Signature</span> Work
          </motion.h1>
          <motion.p className="mt-4 text-xl text-text max-w-3xl mx-auto" variants={childVariants}>
            Explore a showcase of our best projects. Each project tells a story of creative problem-solving and technical excellence.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Portfolio Grid */}
      <motion.section
        className="py-20 bg-background"
        ref={projectsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
      >
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projectsData.map(project => (
              <ProjectCard 
                key={project.id} 
                {...project} 
                variants={childVariants} 
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Case Studies Section */}
      <section className="py-24 bg-background">
        <div className="container-full text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-text mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={childVariants}
          >
            In-Depth Case Studies
          </motion.h2>
          {caseStudiesData.map((caseStudy, index) => (
            <CaseStudyBlock
              key={caseStudy.id}
              {...caseStudy}
              isImageLeft={index % 2 === 0}
              variants={childVariants}
            />
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-background text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-black text-text">
            Ready to Showcase Your Vision?
          </h2>
          <p className="mt-4 text-xl text-text max-w-2xl mx-auto">
            Your project could be our next success story. Let's start a conversation.
          </p>
          <NavLink
            to="/contact"
            className="mt-10 inline-block px-12 py-4 bg-secondary text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Start a Project
          </NavLink>
        </motion.div>
      </section>
    </>
  );
};

export default PortfolioPage;