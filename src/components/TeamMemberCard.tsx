import { motion, type Variants } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
  };
  variants: Variants;
}

const TeamMemberCard = ({ name, role, bio, image, socials, variants }: TeamMemberCardProps) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 bg-card-bg rounded-2xl shadow-xl transition-shadow duration-300 group"
      variants={variants}
      whileHover={{ scale: 1.05, y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
    >
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full object-cover shadow-lg mb-6"
        loading="lazy"
      />
      <h3 className="text-2xl font-bold text-text">{name}</h3>
      <p className="mt-1 text-secondary text-lg font-medium">{role}</p>
      <p className="mt-4 text-text leading-relaxed flex-grow">{bio}</p>
      {socials?.linkedin && (
        <a 
          href={socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 text-text/80 hover:text-secondary text-2xl transition-colors"
          aria-label={`Visit ${name}'s LinkedIn profile`}
        >
          <FaLinkedin />
        </a>
      )}
    </motion.div>
  );
};

export default TeamMemberCard;