import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-blueish-bg text-white py-20 px-6 text-center overflow-hidden">
      
      {/* Main Content */}
      <div className="max-w-3xl mx-auto z-10 relative">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bringing Creative Visions to Life through Design
        </h1>
        <p className="text-lg md:text-xl text-whitish-header-text mb-8">
          Elevating your brand with striking visuals that speak louder than words.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/solutions">
            <button className="bg-blueishbutton-bg  text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Explore Services
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-greenishbutton-bg text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
  <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path
      fill="#a3daf6"
      d="
        M0,50 
        C360,90 360,10 720,50 
        C1080,90 1080,10 1440,50 
        L1440,100 
        L0,100 
        Z"
    />
  </svg>
</div>

    </section>
  );
};

export default Hero;
