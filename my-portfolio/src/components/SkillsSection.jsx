import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiWebflow } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "text-blue-400", glow: "shadow-blue-500/50" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", glow: "shadow-yellow-500/50" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", glow: "shadow-orange-500/50" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", glow: "shadow-blue-500/50" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", glow: "shadow-green-500/50" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400", glow: "shadow-teal-500/50" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", glow: "shadow-green-600/50" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-900 dark:text-white", glow: "shadow-gray-800/50" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500", glow: "shadow-red-500/50" },
  { name: "Webflow", icon: <SiWebflow />, color: "text-purple-500", glow: "shadow-purple-500/50" },
  { name: "WordPress", icon: <FaWordpress />, color: "text-blue-600", glow: "shadow-blue-600/50" },
];

const SkillsSection = () => {
  return (
    <section className="py-12 px-6">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-110 ${skill.glow}`}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Skill Icon */}
            <motion.div
              className={`text-5xl ${skill.color}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {skill.icon}
            </motion.div>

            {/* Skill Name */}
            <motion.p
              className="mt-2 text-lg font-medium dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
