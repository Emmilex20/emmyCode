import { motion, type Variants } from 'framer-motion';
import { type IconType } from 'react-icons';

interface ValueCardProps {
  icon: IconType;
  title: string;
  description: string;
  variants: Variants;
}

const ValueCard = ({ icon: Icon, title, description, variants }: ValueCardProps) => {
  return (
    <motion.div className="flex flex-col items-center text-center" variants={variants}>
      <Icon className="text-6xl text-secondary mb-6" />
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-lg text-white/80">{description}</p>
    </motion.div>
  );
};

export default ValueCard;