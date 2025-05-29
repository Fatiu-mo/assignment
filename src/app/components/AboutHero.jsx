import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckIcon } from "lucide-react";

function AboutHero() {
  const heroImages = [
    {
      src: "/images/about-1.webp",
      alt: "About Hero Image 1",
    },
    {
      src: "/images/about-2.webp",
      alt: "About Hero Image 2",
    },
    {
      src: "/images/about-3.webp",
      alt: "About Hero Image 3",
    },
    {
      src: "/images/about-4.webp",
      alt: "About Hero Image 4",
    },
  ];
  return (
    <section className="my-20">
      <div className="grid grid-cols-4 gap-4 px-20 items-center h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`relative w-full ${index % 2 === 0 ? "h-64" : "h-96"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 justify-end px-20">
        <h1 className="text-3xl font-bold">
          Join World's Best Marketplace for Workers
        </h1>
        <div>
          <p className="mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="flex items-start mb-5">
            <CheckIcon className="h-6 w-6 flex-shrink-0" />
            <p className="ml-3">
              Connect to freelancers with proven business experience
            </p>
          </div>
          <div className="flex items-start mb-5">
            <CheckIcon className="h-6 w-6 flex-shrink-0" />
            <p className="ml-3">
              Get matched with the perfect talent by a customer success manager
            </p>
          </div>
          <div className="flex items-start mb-5">
            <CheckIcon className="h-6 w-6 flex-shrink-0" />
            <p className="ml-3">
              Unmatched quality of remote, hybrid, and flexible jobs
            </p>
          </div>
          <div>
            <button className="flex items-center gap-2 border border-green-500 text-green-500 px-6 py-3 rounded hover:bg-green-500 hover:text-white transition">
              <span>Get Started</span>
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
