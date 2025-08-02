import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import ContactInfoItem from '../components/ContactInfoItem';
import { contactInfo, businessHours, socialLinks } from '../data';
import { FaClock } from 'react-icons/fa';

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
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut } 
  },
};

const ContactPage = () => {
  const mainRef = useRef(null);
  const mainInView = useInView(mainRef, { once: true, amount: 0.3 });

  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, amount: 0.5 });
  
  const hoursRef = useRef(null);
  const hoursInView = useInView(hoursRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Contact Page Header */}
      <motion.div
        className="py-24 md:py-32 bg-background text-center"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="container-full">
          <h1 className="text-5xl md:text-6xl font-black text-text">
            Let's <span className="text-secondary">Build</span> Something Great
          </h1>
          <p className="mt-4 text-xl text-text max-w-3xl mx-auto">
            We're excited to hear about your project. Reach out to us today to start the conversation.
          </p>
        </div>
      </motion.div>

      {/* Main Contact Section (Form and Info) */}
      <motion.section
        className="py-24 bg-background"
        ref={mainRef}
        variants={containerVariants}
        initial="hidden"
        animate={mainInView ? 'visible' : 'hidden'}
      >
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-black text-text mb-6">Send Us a Message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-text mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-card-bg text-text border border-line-color rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-text mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-card-bg text-text border border-line-color rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-text mb-2">Project Details</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-card-bg text-text border border-line-color rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-secondary text-white font-bold rounded-full hover:bg-blue-700 transition-colors text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info Block */}
            <motion.div className="lg:text-left text-center" variants={itemVariants}>
              <h2 className="text-4xl font-black text-text mb-6">Contact Information</h2>
              <p className="text-lg text-text leading-relaxed max-w-xl lg:max-w-none">
                Don't hesitate to reach out! Whether you have a question, a project idea,
                or just want to say hello, we'd love to hear from you.
              </p>
              <div className="mt-8 space-y-4">
                {contactInfo.map((item, index) => (
                  <ContactInfoItem key={index} {...item} variants={itemVariants} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Embedded Map Section */}
      <motion.section
        className="py-24 bg-background"
        ref={mapRef}
        initial="hidden"
        animate={mapInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="container-full text-center">
          <motion.h2 className="text-4xl md:text-5xl font-black text-text" variants={itemVariants}>
            Find Our Office
          </motion.h2>
          <motion.p className="mt-4 text-xl text-text max-w-3xl mx-auto" variants={itemVariants}>
            We're conveniently located in the heart of Lekki. Feel free to schedule an in-person meeting!
          </motion.p>
          <motion.div className="mt-16 w-full h-96 overflow-hidden rounded-3xl shadow-2xl" variants={itemVariants}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.802418498664!2d3.23567607404609!3d6.546614722896284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b85ff19f96f73%3A0x38d9fa389c074020!2sWeb%20Development%20Technologies!5e0!3m2!1sen!2sng!4v1754107791284!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Our office location in Lekki, Lagos"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* Business Hours & Socials Section */}
      <motion.section
        className="py-24 bg-background"
        ref={hoursRef}
        initial="hidden"
        animate={hoursInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            {/* Business Hours */}
            <motion.div variants={itemVariants}>
              <FaClock className="text-6xl text-secondary mx-auto mb-6" />
              <h3 className="text-3xl font-black text-text mb-4">Business Hours</h3>
              <ul className="text-lg text-text">
                {businessHours.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.day}: <span className="font-semibold">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-black text-text mb-4">Connect with Us</h3>
              <p className="text-lg text-text mb-6">Follow us on social media for updates and insights.</p>
              <div className="flex justify-center space-x-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="text-4xl text-text hover:text-secondary transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;