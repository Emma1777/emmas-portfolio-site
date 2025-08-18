// src/components/OurValues.jsx
import React from 'react';
import {values} from '../constants';

const OurValues = () => {
  return (
    <section className="bg-blueish-bg px-6 py-16">
      {/* Section Heading */}
      <h2 className="text-3xl text-center font-bold text-white mb-12">
        Our Values
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-[#1b1a4d] text-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300"
          >
            <value.icon className="text-greenish-text text-4xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
            <p className="text-sm text-whitish-header-text">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
