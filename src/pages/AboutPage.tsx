import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import TeamMemberCard from '../components/TeamMemberCard';
import ValueCard from '../components/ValueCard';
import { teamMembers, coreValues } from '../data'; // Import data
import companyStoryImage from '../assets/company-story.png';

const easeOut = 'easeOut';
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut, staggerChildren: 0.2 } 
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut } 
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => {
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* 1. About Page Header */}
      <motion.div
        className="py-24 md:py-32 bg-background text-center"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="container-full">
          <h1 className="text-5xl md:text-6xl font-black text-text">
            We are the team <span className="text-secondary">behind</span> the magic
          </h1>
          <p className="mt-4 text-xl text-text max-w-3xl mx-auto">
            A group of passionate and experienced professionals dedicated to bringing your digital vision to life.
          </p>
        </div>
      </motion.div>

      {/* 2. Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-text">Our Journey</h2>
              <p className="mt-6 text-lg text-text leading-relaxed">
                Founded in Lekki, Lagos, our agency was built on a simple principle: to empower businesses with exceptional online platforms. We saw a gap in the market for web development that combined technical excellence with a genuine passion for client success. What started as a small team of three has grown into a collaborative force, united by a love for clean code, elegant design, and the tangible results we deliver for our partners.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <img
                src={companyStoryImage}
                alt="Our journey"
                className="w-full h-auto rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Meet Our Team Section */}
      <motion.section
        className="py-24 bg-background"
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="container-full text-center">
          <motion.h2 className="text-4xl md:text-5xl font-black text-text" variants={childVariants}>
            Meet Our Dedicated Team
          </motion.h2>
          <motion.p className="mt-4 text-xl text-text max-w-3xl mx-auto" variants={childVariants}>
            We are a group of passionate and experienced professionals dedicated to bringing your digital vision to life.
          </motion.p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index} 
                {...member} 
                variants={childVariants} 
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Our Core Values Section */}
      <motion.section
        className="py-24 bg-dark-bg text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container-full text-center">
          <motion.h2 className="text-4xl md:text-5xl font-black" variants={childVariants}>
            Our Guiding Principles
          </motion.h2>
          <motion.p className="mt-4 text-xl max-w-3xl mx-auto text-white/80" variants={childVariants}>
            These values are at the heart of everything we do and every project we build.
          </motion.p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {coreValues.map((value, index) => (
              <ValueCard key={index} {...value} variants={childVariants} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Final Call-to-Action */}
      <section className="py-24 bg-background text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-black text-text">
            Ready to Build Your Digital Future?
          </h2>
          <p className="mt-4 text-xl text-text max-w-2xl mx-auto">
            Let's discuss how our passion and expertise can bring your next project to life.
          </p>
          <NavLink
            to="/contact"
            className="mt-10 inline-block px-12 py-4 bg-secondary text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </NavLink>
        </motion.div>
      </section>
    </>
  );
};

export default AboutPage;