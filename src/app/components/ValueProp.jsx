import { Award, BadgeDollarSignIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import Stats from "./Stats";

function ValueProp() {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-2 bg-amber-50 mb-5">
        <div className="pl-14 py-28 pr-36">
          <h1 className="font-bold text-3xl mb-12">
            A whole world of freelance talent at your fingertips
          </h1>
          <div className="flex items-start mb-5">
            <Award className="h-7 w-7 flex-shrink-0" />
            <div>
              <p className="ml-3 mb-2 text-xl font-medium">Proof of quality</p>
              <p>
                Check any pro's work samples, client reviews, and identity
                verification.
              </p>
            </div>
          </div>
          <div className="flex items-start mb-5">
            <BadgeDollarSignIcon className="h-7 w-7 flex-shrink-0" />
            <div>
              <p className="ml-3 mb-2 text-xl font-medium">
                No cost until you hire
              </p>
              <p>
                Interview potential fits for your job, negotiate rates, and only
                pay for work you approve.
              </p>
            </div>
          </div>
          <div className="flex items-start mb-5">
            <ShieldCheck className="h-7 w-7 flex-shrink-0" />
            <div>
              <p className="ml-3 mb-2 text-xl font-medium">Safe and secure</p>
              <p>
                Focus on your work knowing we help protect your data and
                privacy. We're here with 24/7 support if you need it.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src="/images/about-5.webp"
            alt="about-5"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default ValueProp;
