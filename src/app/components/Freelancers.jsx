import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const Freelancers = () => {
  const freelancers = [
    {
      name: "Marvin McKinney",
      role: "Designer",
      avatar: "/images/testi-1.webp",
    },
    {
      name: "Ralph Edwards",
      role: "Designer",
      avatar: "/images/testi-4.webp",
    },
    {
      name: "Annette Black",
      role: "Designer",
      avatar: "/images/testi-2.webp",
    },
    {
      name: "Jane Cooper",
      role: "Designer",
      avatar: "/images/testi-3.webp",
    },
  ];

  const skills = ["Figma", "Sketch", "HTML5"];
  const stats = [
    { label: "Location", value: "London" },
    { label: "Rate", value: "$90 / hr" },
    { label: "Job Success", value: "98%" },
  ];

  return (
    <section className="bg-green-50 pb-44">
      <div className="grid grid-cols-2 py-20 pl-10">
        <div className="relative">
          <div className="bg-white rounded-sm w-fit shadow-lg pr-20">
            <div className="p-10">
              <p className="mb-6">
                <span className="text-green-400">200+</span>Verified Freelancers
              </p>
              <div className="space-y-4 mb-8">
                {freelancers.map((freelancer, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={freelancer.avatar}
                      alt="Freelancer Avatar"
                      className="rounded-full"
                      width={48}
                      height={48}
                    />
                    <div>
                      <div className="text-gray-900">{freelancer.name}</div>
                      <div className="text-gray-500 text-sm">
                        {freelancer.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-sm w-fit shadow-lg absolute left-64 top-52">
            <div className="p-6">
              <Image
                src="/images/fl-2.webp"
                alt="fl-image"
                width={90}
                height={90}
                className="rounded-full mx-auto"
              />
              <div className="text-center space-y-2 mt-4">
                <p>Kriston Waston</p>
                <p className="text-gray-500">Dog Trainer</p>
                <div className="inline-block">
                  <span className="text-green-400">5.0</span>
                  <span className="text-gray-500"> (100 reviews)</span>
                </div>
              </div>
              <div>
                <div className="flex justify-center space-x-4 mt-4">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-red-100 text-gray-800 px-3 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-4 mt-6 border-t pt-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <p className="text-gray-900 font-medium text-lg">
                          {stat.label}
                        </p>
                        <p className="text-gray-500">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-48 pr-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 break-words">
            Trusted By Best Freelancer
          </h1>
          <p className="break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex items-center space-x-2 mt-6">
            <CheckCircle2 className="h-7 w-7 text-amber-300" />
            <span>Last Education of Bachelor Degree</span>
          </div>
          <div className="flex items-center space-x-2 mt-6">
            <CheckCircle2 className="h-7 w-7 text-amber-300" />
            <span>12 Education Award Winning</span>
          </div>
          <div className="flex items-center space-x-2 mt-6">
            <CheckCircle2 className="h-7 w-7 text-amber-300" />
            <span>More Than 15 Years Experience</span>
          </div>
          <div>
            <button className="flex items-center gap-2 bg-green-900 text-white px-6 py-3 rounded hover:bg-green-500 hover:text-white transition mt-7">
              <span>See More</span>
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelancers;
