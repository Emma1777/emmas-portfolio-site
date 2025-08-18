import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../constants";
import { scrollToSection, scrollToTop } from "../utils/scrollHelpers";
import { useNavigate, useLocation } from "react-router-dom";

const MainNavbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (nav) => {
    setActive(nav.title);
    setIsOpen(false);

    if (nav.id === "home") {
      if (location.pathname === "/") {
        scrollToTop();
      } else {
        navigate("/");
        setTimeout(scrollToTop, 200);
      }
    } else {
      if (location.pathname === "/") {
        scrollToSection(nav.id);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(nav.id), 300);
      }
    }
  };

  const renderNavLinks = () =>
    navLinks.map((nav) => (
      <button
        key={nav.id}
        onClick={() => handleNavClick(nav)}
        className={`hover:underline ${
          active === nav.title ? "text-blueish-text font-semibold" : "text-black"
        }`}
      >
        {nav.title}
      </button>
    ));

  return (
    <nav className="fixed w-full z-40 top-0 lg:top-[48px] bg-whitish-bg">
      <div className="flex justify-between items-center px-4 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleNavClick({ id: "home", title: "Home" })}
          className="text-blueish-text font-bold text-xl"
        >
          FAMO Designs
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">{renderNavLinks()}</div>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => handleNavClick({ id: "contact", title: "Contact" })}
            className="bg-greenishbutton-bg px-4 py-2 rounded text-sm text-black hover:opacity-90"
          >
            Get in Touch
          </button>
          <button
            onClick={() =>
              handleNavClick({ id: "solutions", title: "Solutions" })
            }
            className="bg-blueishbutton-bg px-4 py-2 rounded text-sm text-black hover:opacity-90"
          >
            Explore Services
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="text-2xl text-black" />
            ) : (
              <HiMenuAlt3 className="text-2xl text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-whitish-bg border-t">
          {renderNavLinks()}
          <button
            onClick={() => handleNavClick({ id: "contact", title: "Contact" })}
            className="bg-greenishbutton-bg px-4 py-2 rounded text-sm text-black"
          >
            Get in Touch
          </button>
          <button
            onClick={() =>
              handleNavClick({ id: "solutions", title: "Solutions" })
            }
            className="bg-blueishbutton-bg px-4 py-2 rounded text-sm text-black"
          >
            Explore Services
          </button>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
