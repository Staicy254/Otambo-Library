import { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, image, description, link }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-64 h-80 perspective-1000 cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* Front Side (Image) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg backface-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
        </div>

        {/* Back Side (Blue Overlay with Text) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 bg-opacity-70 dark:bg-blue-900 rounded-xl shadow-lg p-6 rotate-y-180 backface-hidden">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white mt-2">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 text-white underline">
            View Project
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
