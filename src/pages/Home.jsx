import React from 'react';
import Navbar from '../components/Navbar';
import MainNavbar from '../components/MainNavbar';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import About from './About';
import OurValues from '../components/OurValues';
import Contact from './Contact';
import Footer from '../components/Footer';
import Blog from './Blog';
import Solutions from './Solutions';

const Home = () => {
  return (
    <>
      {/* Show Navbar only on lg+ */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      <MainNavbar />

      {/* Adjust top padding: more space on desktop for both bars */}
      <div className="pt-[72px] lg:pt-[120px]">
        <Hero />
        <StatsSection />
        <About />
        <Solutions />
        <OurValues />
        <Contact />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
