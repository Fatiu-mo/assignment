"use client";

import CountUp from "react-countup";

const stats = [
  { value: 834, label: "Total Freelancer" },
  { value: 732, label: "Positive Review" },
  { value: 90, label: "Order received" },
  { value: 236, label: "Projects Completed" },
];

export default function Stats() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-14">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold text-gray-900">
              <CountUp end={stat.value} decimals={1} duration={3} suffix="M" />
            </h2>
            <p className="mt-2 text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
