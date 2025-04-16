// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { FaPaperPlane, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const socialLinks = [
    { 
      name: "Email", 
      icon: <HiMail className="text-2xl" />, 
      url: "mailto:your.email@example.com",
      color: "bg-red-500 hover:bg-red-600"
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin className="text-2xl" />, 
      url: "https://linkedin.com/in/yourprofile",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    { 
      name: "GitHub", 
      icon: <FaGithub className="text-2xl" />, 
      url: "https://github.com/yourusername",
      color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800"
    },
    { 
      name: "Phone", 
      icon: <FaPhone className="text-2xl" />, 
      url: "tel:+1234567890",
      color: "bg-green-500 hover:bg-green-600"
    },
  ];

  return (
    <SectionWrapper id="contact" bgClass="bg-gray-100 dark:bg-gray-900">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Get In Touch
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form 
            className="space-y-6"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="space-y-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                You can also reach me directly through these channels:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <HiMail className="text-2xl text-red-500" />
                  <a href="mailto:your.email@example.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-green-500" />
                  <a href="tel:+1234567890" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    +123 456 7890
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-2xl text-blue-600" />
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} text-white p-3 rounded-full transition-all hover:scale-110 shadow`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;