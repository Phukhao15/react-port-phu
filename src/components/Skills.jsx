import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase 
} from "react-icons/fa";
import { SiTailwindcss,  SiMysql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-600" /> },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" bgClass="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-5 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-all w-24"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-gray-700 dark:text-gray-200 font-medium text-sm text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;