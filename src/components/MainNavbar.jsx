import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../constants';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-whitish-bg shadow-md">
      <div className="flex justify-between items-center px-4 py-5 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-blueish-text font-bold text-xl">Emma Designs</div>

        {/* NavLinks - Desktop */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              className="text-black hover:underline text-md"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex gap-3">
          <button className="bg-greenishbutton-bg px-4 py-2 rounded text-sm text-black hover:opacity-90">
            Get Quote
          </button>
          <button className="bg-blueishbutton-bg px-4 py-2 rounded text-sm text-black hover:opacity-90">
            View Portfolio
          </button>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="text-2xl text-black" /> : <HiMenuAlt3 className="text-2xl text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-whitish-bg border-t">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              className="text-black hover:underline text-base"
            >
              {link.title}
            </a>
          ))}

          <button className="bg-greenishbutton-bg px-4 py-2 rounded text-sm text-black">
            Get Quote
          </button>
          <button className="bg-blueishbutton-bg px-4 py-2 rounded text-sm text-black">
            View Portfolio
          </button>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
