// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { FaLaptopCode, FaGraduationCap, FaRocket } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.6,
      }
    })
  };

  const aboutCards = [
    {
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
      title: "Developer",
      description: "Passionate front-end developer with a focus on creating responsive, accessible websites and applications."
    },
    {
      icon: <FaGraduationCap className="text-blue-500 text-3xl" />,
      title: "Education",
      description: "Bachelor's degree in Computer Science. Continuously learning new technologies to keep my skills current."
    },
    {
      icon: <FaRocket className="text-blue-500 text-3xl" />,
      title: "Goals",
      description: "Aiming to create impactful digital experiences that solve real problems and delight users."
    }
  ];

  return (
    <SectionWrapper id="about" bgClass="bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Personal Introduction */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <motion.div 
            className="md:col-span-3 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">
              Hello, I'm <span className="text-blue-500">Phu</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I'm a front-end developer with a passion for crafting intuitive and engaging user interfaces.
              With experience in modern web technologies like <strong className="text-blue-500">React</strong>,
              <strong className="text-blue-500"> Tailwind CSS</strong>, and interactive animation libraries,
              I strive to bring ideas to life through clean and responsive design.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My approach combines technical expertise with an eye for design, ensuring that the websites and applications 
              I build are not only functional but also visually appealing and user-friendly. I'm constantly exploring new 
              technologies and techniques to enhance my skills and deliver better results.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-blue-100 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Quick Facts
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">X+ years of front-end development experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Specialized in React ecosystem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Experienced with modern CSS frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Proficient in responsive and accessible design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Based in [Your Location]</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-full mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;