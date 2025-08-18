// src/components/Footer.jsx
import React from "react";
import { MdEmail, MdCall, MdLocationOn, MdWeb } from "react-icons/md";
import { socialLinks } from "../constants";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection, scrollToTop } from "../utils/scrollHelpers";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const existingSections = ["about", "contact", "solutions", "blog"];
  const unavailablePages = ["faq", "privacy", "terms", "support"];

  const handleFooterNav = (id) => {
    if (unavailablePages.includes(id)) {
      navigate("/not-found");
      setTimeout(scrollToTop, 100);
      return;
    }

    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    }
  };

  return (
    <footer className="bg-blueish-bg text-whitish-header-text pt-12 px-6 md:px-12 pb-4">
      {/* Four Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-greenishbutton-bg pb-6">
        <div>
          <h2 className="text-2xl font-bold text-blueish-text">FAMO Designs</h2>
          <h4 className="text-greenish-text mt-2 font-semibold">About Us</h4>
          <p className="text-sm mt-1">
            We create visually stunning and affordable designs that help your business grow online and offline.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-greenish-text font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {existingSections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleFooterNav(section)}
                  className="hover:underline"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="text-greenish-text font-semibold mb-2">Help</h4>
          <ul className="space-y-1 text-sm">
            {unavailablePages.map((page) => (
              <li key={page}>
                <button
                  onClick={() => handleFooterNav(page)}
                  className="hover:underline"
                >
                  {page.charAt(0).toUpperCase() +
                    page.slice(1).replace("-", " ")}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-greenish-text font-semibold mb-2">
            Contact Info
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-greenish-text" />
              <span>Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-2">
              <MdCall className="text-greenish-text" />
              <a href="tel:+254703774038" className="hover:underline">
                +254 703774038
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-greenish-text" />
              <a
                href="mailto:atienoemmaculate464@gmail.com"
                className="hover:underline"
              >
                atienoemmaculate464@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdWeb className="text-greenish-text" />
              <a
                href="https://emmaportfolio1.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-greenish-text font-semibold text-sm">
          Creative & Affordable Designs that Drive Results
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {socialLinks.map(({ icon: Icon, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noreferrer">
            <div className="rounded-full p-2 bg-blueishbutton-bg hover:bg-greenishbutton-bg transition">
              <Icon className="text-white text-sm" />
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-6 text-xs">
        <p className="text-white">
          &copy; {currentYear} FAMO Designs. All rights reserved.
        </p>
        <p className="text-blueish-text">
          Designed and coded by{" "}
          <a
            href="https://kevinngesaportfolio1.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Kevin Ngesa
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
