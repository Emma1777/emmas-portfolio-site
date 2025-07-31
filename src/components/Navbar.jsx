import React from 'react';
import { MdEmail, MdCall } from 'react-icons/md';
import { socialLinks } from '../constants'; // adjust path
import { motion } from 'framer-motion';
import { marqueeVariant } from '../utils/motion';

const Navbar = () => {
  return (
   <nav className="hidden lg:flex bg-blueish-bg text-whitish-header-text px-4 py-3 flex-col lg:flex-row items-center justify-between gap-4">
      
      
      {/* Left: Contact Info */}
      <div className="flex items-center gap-6">
        <a href="mailto:emma.designs@gmail.com" className="flex items-center gap-2">
          <MdEmail className="text-greenish-text" />
          <span className="text-whitish-header-text text-sm">emma.designs@gmail.com</span>
        </a>
        <a href="tel:+254712345678" className="flex items-center gap-2">
          <MdCall className="text-greenish-text" />
          <span className="text-whitish-header-text text-sm">+254 712 345678</span>
        </a>
      </div>

      {/* Center: Animated Tagline */}
      <div className="overflow-hidden whitespace-nowrap w-full max-w-xs lg:max-w-sm">
        <motion.div
          variants={marqueeVariant}
          animate="animate"
          className="text-greenish-text font-semibold text-sm md:text-base"
        >
          Creative graphics design at affordable prices
        </motion.div>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-3">
        {socialLinks.map(({ icon: Icon, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <div className="rounded-full p-2 bg-blueishbutton-bg hover:bg-greenishbutton-bg transition duration-300">
              <Icon className="text-white text-sm" />
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
