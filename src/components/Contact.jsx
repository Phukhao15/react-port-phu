// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper from "./SectionWrapper";
import { FaPaperPlane, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const HOME_POSITION = [13.746247, 100.588119];
  const MAP_LINK = "https://maps.app.goo.gl/6gtn1rHmQknHdaNZ7";
  const EMAIL = "phusitboonwong.phu@gmail.com";
  const PHONE = "097-178-4484";
  const LINKEDIN = "https://www.linkedin.com/in/phusit-boonwong-547b40331/";
  const GITHUB = "https://github.com/yourusername";

  const contactItems = [
    { 
      id: 1,
      name: "Email", 
      icon: <HiMail className="text-2xl" />,
      content: EMAIL,
      url: `mailto:${EMAIL}`,
      color: "text-red-500",
      bgColor: "bg-red-500 hover:bg-red-600"
    },
    { 
      id: 2,
      name: "Phone", 
      icon: <FaPhone className="text-2xl" />,
      content: PHONE,
      url: `tel:${PHONE.replace(/-/g, '')}`,
      color: "text-green-500",
      bgColor: "bg-green-500 hover:bg-green-600"
    },
    { 
      id: 3,
      name: "Location", 
      icon: <FaMapMarkerAlt className="text-2xl" />,
      content: "Petchburi Road, Soi Rama 9 10310",
      url: MAP_LINK,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500 hover:bg-yellow-600"
    },
    { 
      id: 4,
      name: "LinkedIn", 
      icon: <FaLinkedin className="text-2xl" />,
      content: "linkedin.com/in/phusit-boonwong",
      url: LINKEDIN,
      color: "text-blue-600",
      bgColor: "bg-blue-600 hover:bg-blue-700"
    },
    { 
      id: 5,
      name: "GitHub", 
      icon: <FaGithub className="text-2xl" />,
      content: "github.com/yourusername",
      url: GITHUB,
      color: "text-gray-800 dark:text-gray-300",
      bgColor: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800"
    },
  ];

  return (
    <SectionWrapper id="contact" bgClass="bg-gray-100 dark:bg-gray-900">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Contact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
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
                placeholder="Your Name..."
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
                placeholder="you@gmail.com"
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
              ส่งข้อความ
            </motion.button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Details</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to reach out through any of these channels:
              </p>
              
              <div className="space-y-4">
                {contactItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    {React.cloneElement(item.icon, { className: `text-2xl ${item.color}` })}
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {item.content}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Social Media</h3>
              <div className="flex gap-4 mb-6">
                {contactItems.slice(3).map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${item.bgColor} text-white p-3 rounded-full transition-all hover:scale-110 shadow`}
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Location</h3>
              <div className="h-72 w-full rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
                <MapContainer 
                  center={HOME_POSITION} 
                  zoom={13} 
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={HOME_POSITION}>
                    <Popup>
                      <div className="text-center">
                        <strong>My Location</strong><br />
                        Petchburi Road, Soi Rama 9 10310<br />
                        <a 
                          href={MAP_LINK}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;