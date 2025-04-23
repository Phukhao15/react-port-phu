import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.2,
    rootMargin: "-50px 0px"
  });

  const socialLinks = [
    { icon: <FaGithub className="text-2xl" />, url: "https://github.com/Phukhao15" },
    { icon: <FaLinkedin className="text-2xl" />, url: "https://www.linkedin.com/in/phusit-boonwong-547b40331/" },
    // { icon: <FaTwitter className="text-2xl" />, url: "https://twitter.com/yourhandle" }
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 py-20 md:py-0"
    >
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Improved Profile Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={inView ? { 
            scale: 1, 
            opacity: 1, 
            y: 0,
          } : {}}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            type: "spring",
            damping: 10,
            stiffness: 100
          }}
          whileHover={{ y: -10 }}
          className="relative mx-auto w-fit mb-8 group"
        >
          <div className="relative z-10 rounded-full p-1 bg-gradient-to-tr from-blue-400 to-blue-600">
            <img
              src={profileImg}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 blur-lg opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="absolute -inset-2 rounded-full bg-blue-100 opacity-0 group-hover:opacity-30 -z-20 transition-opacity duration-500"></div>
        </motion.div>

        {/* Headline with Staggered Letters Animation */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {"Hi, I'm ".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-blue-500"
          >
            Phu
          </motion.span>
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            Front-End Developer 
          </motion.span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.a
            href="#contact"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300 shadow-md flex items-center justify-center gap-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            download
            className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-50 transition duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload /> Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.3, 
                delay: 1.4 + index * 0.1,
                type: "spring",
                stiffness: 500,
                damping: 15
              }}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;