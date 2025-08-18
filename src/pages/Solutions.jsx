import React from "react";
import { services } from "../constants";
import { zoomIn } from "../utils/motion";
import { motion } from "framer-motion";

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="bg-blueish-bg py-16 px-6 md:px-12 text-whitish-header-text"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Solutions</h2>
        <p className="text-blueish-text mt-4 text-lg">
          Creative visual and digital solutions to grow your brand.
        </p>
      </div>

      {/* Solution Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, icon: Icon, description }, index) => (
          <motion.div
            key={index}
            variants={zoomIn(index * 0.2, 0.8)} // stagger zoom per card
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-[#1a1450] hover:bg-blueishbutton-bg transition rounded-lg shadow-md p-6 text-center flex flex-col items-center space-y-4"
          >
            <Icon className="text-greenish-text text-4xl" />
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-whitish-header-text">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
