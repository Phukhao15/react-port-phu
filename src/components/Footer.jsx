// src/components/Footer.jsx
import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaPhone,
  FaFileDownload
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "phusitboonwong.phu@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: <FaPhone className="text-xl" />,
      url: "tel:097-178-4484",
      label: "Phone",
      color: "hover:text-green-400"
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/Phukhao15",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/phusit-boonwong-547b40331/",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">About Me</h3>
            <p className="text-gray-400 text-sm">
              Frontend developer passionate about creating beautiful, responsive web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Get In Touch</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope /> phusitboonwong.phu@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone /> 097-178-4484
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Phu Resume. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${link.color} transition-colors`}
                aria-label={link.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Resume Download */}
          <a
           href="https://drive.google.com/file/d/1XPcYlyxtIQ2vLsA59vQpYcpkMiiIpRMo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
>
  <FaFileDownload /> View Resume
</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;