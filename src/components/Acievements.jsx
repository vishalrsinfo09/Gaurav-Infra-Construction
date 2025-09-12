import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Achievements() {
  const stats = [
    { number: 120, suffix: "+", text: "Completed Projects" },
    { number: 15, suffix: "+", text: "Awards Won" },
    { number: 500, suffix: "+", text: "Happy Clients" },
    { number: 8, suffix: "+", text: "Ongoing Projects" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 mb-16 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Achievements
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.08 }}
              viewport={{ once: true }}
            >
              {/* Animated Number */}
              <motion.h3
                className="text-5xl font-bold text-gray-900"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <CountUp end={item.number} duration={2} enableScrollSpy />
                {item.suffix}
              </motion.h3>

              {/* Text */}
              <p className="text-gray-600 italic mt-3 text-lg relative inline-block">
                {item.text}
                {/* Animated Line */}
                <motion.span
                  className="block w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
