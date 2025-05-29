import React from "react";
import Image from "next/image";

function Sponsors() {
  const sponsors = [
    {
      name: "Amazon",
      logo: "/images/1.webp",
    },
    {
      name: "AMD",
      logo: "/images/2.webp",
    },
    {
      name: "Cisco",
      logo: "/images/3.webp",
    },
    {
      name: "Dropcom",
      logo: "/images/4.webp",
    },
    {
      name: "logitech",
      logo: "/images/5.webp",
    },
    {
      name: "spotify",
      logo: "/images/6.webp",
    },
  ];
  return (
    <div className="mt-20 mb-60">
      <p className="text-center mb-20">Trusted by the world's best</p>
      <div>
        <div className="flex items-center justify-around space-x-10">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-end">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={50}
                height={20}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
