// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "../projectData"; // ✅ Import project data

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const hoverItem = {
    scale: 1.03,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  return (
    <SectionWrapper id="projects" bg="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3 tracking-wider"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          ></motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            My<span className="text-blue-600 dark:text-blue-400"> Projects</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
          />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">
              A Selection of Projects I've Developed
            </h2>
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hoverItem}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="bg-blue-600/90 text-white text-xs px-3 py-1.5 rounded-full"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 opacity-0 group-hover:opacity-100 shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <FiArrowRight className="text-gray-800 dark:text-white" />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    Project {index + 1}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-2"
                      whileHover={{ x: 3 }}
                    >
                      <FaExternalLinkAlt size={12} />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium flex items-center gap-2"
                      whileHover={{ x: 3 }}
                    >
                      <FaGithub size={14} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {/* ปุ่มเพิ่มเติมสามารถเพิ่มภายหลังได้ */}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;