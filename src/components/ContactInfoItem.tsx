import { type IconType } from 'react-icons';
import { motion, type Variants } from 'framer-motion';

interface ContactInfoItemProps {
  icon: IconType;
  text: string;
  link: string;
  variants: Variants;
}

const ContactInfoItem = ({ icon: Icon, text, link, variants }: ContactInfoItemProps) => {
  return (
    <motion.div className="flex items-center lg:justify-start justify-center space-x-4" variants={variants}>
      <Icon className="text-2xl text-secondary flex-shrink-0" />
      <a href={link} className="text-lg text-text hover:underline transition-colors">
        {text}
      </a>
    </motion.div>
  );
};

export default ContactInfoItem;