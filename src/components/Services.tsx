/* eslint-disable no-irregular-whitespace */
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaShoppingCart, FaChartLine, FaMobileAlt, FaCloud, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ServiceCard from './ServiceCard';

// Define the easing type for better clarity
import type { Easing } from 'framer-motion';
const easeOut: Easing = 'easeOut';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description: "Crafting custom, responsive, and modern websites from scratch using cutting-edge frameworks like React and Next.js.",
    link: "/services"
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce Solutions",
    description: "Building secure, scalable online stores with integrated payment gateways and a seamless user experience.",
    link: "/services"
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    description: "Improving your website's visibility and search engine rankings to attract more organic traffic and customers.",
    link: "/services"
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Developing cross-platform mobile applications that are performant, intuitive, and beautifully designed.",
    link: "/services"
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Hosting",
    description: "Providing reliable hosting solutions and cloud infrastructure to ensure your website is always fast and secure.",
    link: "/services"
  },
  {
    icon: <FaChartLine />,
    title: "Digital Strategy",
    description: "Developing a comprehensive digital strategy to align your online presence with your business goals and objectives.",
    link: "/services"
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut } 
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-24 bg-background dark:bg-dark-bg dark:text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-text">
          What We <span className="text-secondary">Offer</span>
        </h2>
        <p className="mt-4 text-xl text-text max-w-3xl mx-auto">
          We combine technical expertise with creative problem-solving to deliver a full suite of
          services tailored to your unique needs.
        </p>
        
        <motion.div
          ref={ref}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              link={service.link}
              variants={cardVariants}
            />
          ))}
        </motion.div>
        
        {/* Call-to-Action */}
        <div className="mt-20">
          <NavLink
            to="/contact"
            // Using theme-aware colors for better consistency
            className="inline-block px-10 py-4 bg-secondary text-white font-bold rounded-full text-lg shadow-lg hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Services;