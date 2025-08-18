// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollHelpers";

const Hero = () => {
  return (
    <section
      className="relative bg-blueish-bg text-white py-20 px-6 text-center overflow-hidden"
      id="home"
    >
      {/* Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-40 h-40 bg-greenishbutton-bg rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-blueishbutton-bg rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ bottom: "20%", right: "15%" }}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto z-10 relative">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          We Design. You Grow.
          <span className="block text-greenish-text">
            Creative visuals that convert visitors into clients.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-whitish-header-text mb-6">
          Trusted by brands in Nairobi & beyond for impactful, results-driven design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => scrollToSection("solutions")}
              className="bg-blueishbutton-bg text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-greenishbutton-bg transition duration-300"
            >
              Explore Services
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-greenishbutton-bg text-greenishbutton-bg font-semibold py-3 px-6 rounded-lg hover:bg-greenishbutton-bg hover:text-white transition duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
