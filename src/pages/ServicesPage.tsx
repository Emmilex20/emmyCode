import { motion, type Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ServiceDetailBlock from '../components/ServiceDetailBlock';
import TestimonialCard from '../components/TestimonialCard';
import FAQItem from '../components/FAQItem';

// Import data from the new file
import { servicesData, testimonials, faqs, techStackIcons } from '../data';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } 
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ServicesPage = () => {
  return (
    <>
      {/* Services Page Header */}
      <motion.div
        className="py-24 md:py-32 bg-background text-center"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="container-full">
          <h1 className="text-5xl md:text-6xl font-black text-text">
            Our <span className="text-secondary">Tailored</span> Services
          </h1>
          <p className="mt-4 text-xl text-text max-w-3xl mx-auto">
            We are more than just developers; we are strategic partners dedicated to
            building your digital future, one project at a time.
          </p>
        </div>
      </motion.div>

      {/* Dynamic Service Blocks */}
      <div className="bg-background">
        {servicesData.map((service, index) => (
          <ServiceDetailBlock
            key={service.id}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            ctaText={service.ctaText}
            ctaLink={service.ctaLink}
            isImageLeft={index % 2 === 0}
          />
        ))}
      </div>

      {/* Testimonials Section */}
<motion.section
  className="py-24 bg-background text-text dark:bg-dark-bg dark:text-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={sectionVariants}
>
  <div className="container mx-auto px-4 md:px-8 text-center">
    <motion.h2 
      className="text-4xl md:text-5xl font-black text-text" 
      variants={childVariants}
    >
      What Our Clients Say
    </motion.h2>
    <motion.p 
      className="mt-4 text-xl text-text max-w-3xl mx-auto" 
      variants={childVariants}
    >
      Hear directly from the businesses we've helped succeed.
    </motion.p>
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} variants={childVariants} />
      ))}
    </div>
  </div>
</motion.section>

      {/* Technology Stack Section */}
      <motion.section
        className="py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container-full text-center">
          <motion.h2 className="text-4xl md:text-5xl font-black text-text" variants={childVariants}>
            Our <span className="text-secondary">Technology</span> Stack
          </motion.h2>
          <motion.p className="mt-4 text-xl text-text max-w-3xl mx-auto" variants={childVariants}>
            We build with the best tools to deliver modern, efficient, and reliable solutions.
          </motion.p>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
            {techStackIcons.map((Icon, index) => (
              <motion.div key={index} variants={childVariants} className="text-6xl text-text hover:text-secondary transition-colors duration-300">
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container-full text-center">
          <motion.h2 className="text-4xl md:text-5xl font-black text-text" variants={childVariants}>
            Frequently <span className="text-secondary">Asked</span> Questions
          </motion.h2>
          <div className="mt-16 w-full max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} variants={childVariants} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final Call to Action */}
      <section className="py-24 bg-background text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-black text-text">
            Ready to Build Something Amazing?
          </h2>
          <p className="mt-4 text-xl text-text max-w-2xl mx-auto">
            Let's turn your vision into a powerful digital reality. Contact our team today for a free consultation.
          </p>
          <NavLink
            to="/contact"
            className="mt-10 inline-block px-12 py-4 bg-secondary text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Get in Touch
          </NavLink>
        </motion.div>
      </section>
    </>
  );
};

export default ServicesPage;