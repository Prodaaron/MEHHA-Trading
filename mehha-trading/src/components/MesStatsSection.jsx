// StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './messtat.css';

const statsData = [
  { id: 1, value: 15, suffix: "+", label: "Years in Business", color: "var(--secondary)" },
  { id: 4, value: 22, suffix: "+", label: "Containers Imported", color: "var(--secondary)" }
];

export default function MesStatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // runs only once
    threshold: 0.2,    // 20% of section visible
  });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <h2 style={{ color: stat.color }}>
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix || ""}
                  prefix={stat.prefix || ""}
                />
              ) : (
                "0"
              )}
            </h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}