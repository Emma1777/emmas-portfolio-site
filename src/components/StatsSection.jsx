// components/StatsSection.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Businesses Assisted', value: 207 },
  { label: 'Years of Experience', value: 5 },
  { label: 'Satisfaction Rate', value: 99, suffix: '%' },
  { label: 'Projects Completed', value: 320 },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="bg-blueish-bg py-12 px-4 flex flex-col items-center justify-center text-center"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold text-greenish-text">
              {inView && (
                <CountUp end={stat.value} duration={5} suffix={stat.suffix || ''} />
              )}
            </h2>
            <p className="text-white text-sm md:text-base mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
