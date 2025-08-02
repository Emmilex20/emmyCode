import { motion, type Variants } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  variants: Variants;
}

const FAQItem = ({ question, answer, variants }: FAQItemProps) => {
  return (
    <motion.div className="bg-card-bg p-6 rounded-xl mb-4 shadow-md text-left" variants={variants}>
      <h3 className="text-lg font-bold text-text cursor-pointer">{question}</h3>
      <p className="mt-2 text-text transition-all duration-300">{answer}</p>
    </motion.div>
  );
};

export default FAQItem;