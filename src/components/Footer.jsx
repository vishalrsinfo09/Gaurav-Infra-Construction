import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <motion.div
          className="footer-section flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          <a href="/" className="inline-block">
            <motion.img
              src="/Logo.png"
              alt="Gaurav Infra Logo"
              className="w-32 block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}

            />
          </a>

          <motion.p className="text-gray-300 mb-1" variants={fadeInUp} custom={1}>
            Premium residential projects in Nagpur offering luxury apartments with
            modern amenities and traditional values.
          </motion.p>
          <motion.p className="text-gray-300" variants={fadeInUp} custom={2}>
            Experience the finest in contemporary living.
          </motion.p>
        </motion.div>

        {/* Quick Links */}
        {/* <motion.div
          className="footer-section"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            {["About Us", "Gallery", "Interior Walkthrough", "3D Virtual Tour", "Contact Us"].map(
              (link, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  custom={i + 2}
                  whileHover={{
                    scale: 1.1,
                    x: 6,
                    color: "#22d3ee", // cyan glow
                    textShadow: "0px 0px 8px rgba(34,211,238,0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a href="/About" className="transition-colors">{link}</a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div> */}
        <motion.div
          className="footer-section"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Gallery", href: "/gallery" },
              // { name: "Interior Walkthrough", href: "/interior-walkthrough" },
              // { name: "3D Virtual Tour", href: "/virtual-tour" },
              { name: "Contact Us", href: "/contact" },
              // { name: "Blog", href: "/Blog" },
            ].map((link, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                custom={i + 2}
                whileHover={{
                  scale: 1.1,
                  x: 6,
                  color: "#22d3ee", // cyan glow
                  textShadow: "0px 0px 8px rgba(34,211,238,0.8)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href={link.href} className="transition-colors">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>


        {/* Apartment Types */}
        <motion.div
          className="footer-section"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
        >
          <h3 className="text-xl font-semibold mb-4">Apartment Types</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            {[
              "3BHK Luxury Apartments",
              "4BHK Premium Homes",
              "5BHK Ultra-Luxury Residences",
              "Penthouse Collection",
            ].map((type, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                custom={i + 2}
                whileHover={{
                  scale: 1.1,
                  x: 6,
                  color: "#22d3ee",
                  textShadow: "0px 0px 8px rgba(34,211,238,0.8)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href="/" className="transition-colors">{type}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>


        {/* Contact Info */}
        <motion.div
          className="footer-section"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={3}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

          {/* Phone */}
          <motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            custom={1}
            whileHover={{
              scale: 1.05,
              color: "#22d3ee",
              textShadow: "0px 0px 8px rgba(34,211,238,0.8)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Phone size={20} />
            <a href="tel:+919970141477">
              +91 99804 14166
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            custom={2}
            whileHover={{
              scale: 1.05,
              color: "#22d3ee",
              textShadow: "0px 0px 8px rgba(34,211,238,0.8)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Mail size={20} />
            <a href="mailto:info@gaurainfra.com">
              info@gaurainfra.com
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            custom={3}
            whileHover={{
              scale: 1.05,
              color: "#22d3ee",
              textShadow: "0px 0px 8px rgba(34,211,238,0.8)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <MapPin size={20} />
            <span className="text-cyan-200">Nagpur, Maharashtra</span>
          </motion.div>

          {/* Timing */}
          <motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            custom={4}
            whileHover={{
              scale: 1.05,
              color: "#22d3ee",
              textShadow: "0px 0px 8px rgba(34,211,238,0.8)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* <span>🕐</span>
    <span>Mon - Sat: 9:00 AM - 6:00 PM</span> */}
          </motion.div>
          <motion.div
            className="flex gap-4 mt-4"
            variants={fadeInUp}
            custom={3}
          >
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400"
              whileHover={{
                scale: 1.2,
                color: "#1877F2",
                textShadow: "0px 0px 8px rgba(24,119,242,0.8)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Facebook size={28} />
            </motion.a>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400"
              whileHover={{
                scale: 1.2,
                color: "#E1306C",
                textShadow: "0px 0px 8px rgba(225,48,108,0.8)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Instagram size={28} />
            </motion.a>

            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400"
              whileHover={{
                scale: 1.2,
                color: "#1DA1F2",
                textShadow: "0px 0px 8px rgba(29,161,242,0.8)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Twitter size={28} />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400"
              whileHover={{
                scale: 1.2,
                color: "#0077B5",
                textShadow: "0px 0px 8px rgba(0,119,181,0.8)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Linkedin size={28} />
            </motion.a>
          </motion.div>

        </motion.div>

      </div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
       
      > <p>
        &copy; {new Date().getFullYear()} Gaurav Infra. All Rights Reserved. | 
        Designed & Developed by <a
          href="https://www.rsinfotechsys.com" // 👉 yaha apni company ka website link dal do
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-cyan-400 transition-colors"
        >
          Right Serve Infotech Systems Pvt Ltd.
        </a>
        </p>
      </motion.div>
    </footer>
  );
}
