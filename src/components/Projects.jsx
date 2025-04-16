// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// โครงสร้างข้อมูลโปรเจกต์
const projects = [
  {
    title: "My Portfolio",
    description: "เว็บไซต์เรซูเม่ของผมที่สร้างด้วย React และ Tailwind CSS",
    image: "/assets/project1.png",
    demoLink: "#",
    codeLink: "#",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Todo App",
    description: "แอพจัดการงานแบบพื้นฐาน สร้างด้วย React + LocalStorage",
    image: "/assets/project2.png",
    demoLink: "#",
    codeLink: "#",
    tags: ["React", "LocalStorage", "Custom Hooks"],
  },
  {
    title: "Weather App",
    description: "แอพพยากรณ์อากาศแบบเรียลไทม์ด้วย OpenWeatherMap API",
    image: "/assets/project3.png",
    demoLink: "#",
    codeLink: "#",
    tags: ["React", "API Integration", "Geolocation"],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper id="projects" bg="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          โปรเจกต์ของ<span className="text-blue-600 dark:text-blue-400">ผม</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          ผลงานบางส่วนที่ผมได้พัฒนาขึ้นมา
        </motion.p>

        <motion.div
          ref={ref}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/80 text-white text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center gap-1"
                    >
                      <FaExternalLinkAlt size={12} />
                      Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium flex items-center gap-1"
                    >
                      <FaGithub size={12} />
                      Code
                    </a>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Project {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;