// src/layout/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Show top info bar only on large screens */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      <MainNavbar />

      {/* Adjust padding based on nav height */}
      <div className="pt-[72px] lg:pt-[120px]">{children}</div>

      <Footer />
    </>
  );
};

export default MainLayout;
