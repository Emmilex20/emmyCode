import { motion, type Variants } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { legalDocuments } from '../data';

// Animation variants for the whole section
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: 'easeOut',
      staggerChildren: 0.2,
      delayChildren: 0.2,
    } 
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const LegalPage = () => {
  const { docType } = useParams<{ docType: string }>();

  // Find the document that matches the URL parameter
  const document = legalDocuments.find(doc => doc.id === docType);

  if (!document) {
    // If the document is not found, display a 404 message
    return <div className="flex-grow flex items-center justify-center p-8 text-center bg-background text-text">
    <div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
    </div>
  </div>;
  }

  return (
    <motion.main
      className="py-24 md:py-32 bg-background text-text"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-full max-w-4xl mx-auto">
        <motion.h1 className="text-5xl md:text-6xl font-black text-text text-center mb-4" variants={childVariants}>
          {document.title}
        </motion.h1>
        <motion.p className="text-lg text-center mb-12 text-text/80" variants={childVariants}>
          Last updated: {document.lastUpdated}
        </motion.p>
        
        <div className="space-y-12">
          {document.content.map((section, index) => (
            <motion.section key={index} variants={childVariants}>
              <h2 className="text-3xl font-bold text-text mb-4">
                {section.heading}
              </h2>
              <p className="text-lg leading-relaxed text-text/80">
                {section.body}
              </p>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default LegalPage;