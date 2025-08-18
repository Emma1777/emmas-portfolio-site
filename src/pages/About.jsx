// src/components/About.jsx
import React from "react";
import emmaImage from "../assets/emma-image.jpg";
import { scrollToSection } from "../utils/scrollHelpers";

const About = () => {
  return (
    <section id="about" className="bg-whitish-bg px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blueish-bg inline-block px-6 py-2 rounded-md">
          About FAMO Designs
        </h2>
        <p className="text-blueish-text text-lg mt-4 font-medium max-w-2xl mx-auto">
          Transforming your ideas into beautiful, impactful graphic designs that connect and convert.
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg p-6 flex flex-col md:flex-row items-center gap-10 bg-white">
        <div className="w-full md:w-1/2">
          <img
            src={emmaImage}
            alt="Emma Treezer"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-black relative inline-block mb-4">
            Who Are We?
            <span className="block w-16 h-1 bg-greenishbutton-bg mt-1 rounded-full"></span>
          </h3>

          <div className="text-black space-y-4 text-sm md:text-base">
            <p>
              FAMO Designs is a passionate graphic design brand dedicated to helping businesses and individuals bring their ideas to life.
            </p>
            <p>
              With years of experience in design, we specialize in logos, branding, posters, digital flyers, and custom visual content.
            </p>
            <p>
              Whether you're a startup or an established brand, we craft creative solutions that make you stand out.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-6 bg-blueishbutton-bg hover:bg-greenishbutton-bg text-white font-semibold px-6 py-2 rounded transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
