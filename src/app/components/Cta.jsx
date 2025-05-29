import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";

function Cta() {
  return (
    <div className="bg-red-50 pt-28 px-10">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-3">
            Find the talent needed to get your business growing.
          </h2>
          <p>
            Advertise your jobs to millions of monthly users and search 15.8
            million CVs
          </p>
          <button className="flex items-center gap-2 bg-green-900 text-white px-6 py-3 rounded hover:bg-green-500 hover:text-white transition mt-7 mb-28">
            <span>Get Started</span>
            <ArrowUpRight className="w-6 h-6" />
          </button>
        </div>

        <div className="relative">
          <Image
            src="/images/about-6.webp"
            alt="Call to Action Image"
            width={600}
            height={0}
            className="object-cover rounded-lg absolute bottom-0 left-30"
          />
        </div>
      </div>
    </div>
  );
}

export default Cta;
