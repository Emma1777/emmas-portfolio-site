import React from 'react';
import { MdEmail, MdCall } from 'react-icons/md';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="bg-blueish-bg text-whitish-header-text px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Left: Contact Info */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <MdEmail className="text-greenish-text" />
          <span className="text-whitish-header-text text-sm">emma.designs@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MdCall className="text-greenish-text" />
          <span className="text-whitish-header-text text-sm">+254 712 345678</span>
        </div>
      </div>

      {/* Center: Tagline */}
      <div>
        <span className="text-greenish-text font-semibold text-sm md:text-base">
          Creative graphics design at affordable prices
        </span>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-3">
        {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
          <a key={index} href="#" target="_blank" rel="noopener noreferrer">
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
