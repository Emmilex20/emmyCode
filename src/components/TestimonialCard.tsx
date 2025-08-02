/* eslint-disable no-irregular-whitespace */
import { motion, type Variants } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  variants: Variants;
}

const TestimonialCard = ({ quote, author, company, variants }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-background p-8 rounded-2xl text-left shadow-md" 
      variants={variants}
    >
      <p className="text-lg italic leading-relaxed text-text">"{quote}"</p>
      <div className="mt-6 font-bold">
        <h4 className="text-secondary">{author}</h4>
        <p className="text-sm mt-1 text-text">{company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;