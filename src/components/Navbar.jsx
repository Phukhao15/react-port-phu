// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // ติดตาม scroll เพื่อเปลี่ยน activeSection
  useEffect(() => {
    const onScroll = () => {
      const position = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= position) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navLinks]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-blue-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume<span className="text-gray-800"> Phu</span>
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.li key={link.id} whileHover={{ y: -2 }}>
              <a
                href={`#${link.id}`}
                className={`relative px-2 py-1 font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                      activeSection === link.id
                        ? "bg-blue-100 text-blue-500"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;