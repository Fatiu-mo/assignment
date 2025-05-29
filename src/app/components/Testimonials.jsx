"use client";

import { LucideQuote } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      text: "Our family embarked on a remarkable bullet train journey in Japan – this hotel's convenient location made it a breeze. Agoda's pricing was fantastic.",
      author: "Emma Johnson",
      role: "Product Manager, Apple Inc",
      avatar: "/images/testi-1.webp",
    },
    {
      id: 1,
      text: "The service quality exceeded our expectations. The team was professional, responsive, and delivered exactly what we needed for our project.",
      author: "Michael Chen",
      role: "CTO, Tech Solutions",
      avatar: "/images/testi-2.webp",
    },
    {
      id: 2,
      text: "Working with this platform has transformed how we approach remote collaboration. The results speak for themselves.",
      author: "Sarah Williams",
      role: "Director, Marketing",
      avatar: "/images/testi-3.webp",
    },
    {
      id: 3,
      text: "Incredible attention to detail and commitment to excellence. This is exactly the kind of partnership we were looking for.",
      author: "David Rodriguez",
      role: "CEO, StartupCo",
      avatar: "/images/testi-4.webp",
    },
    {
      id: 4,
      text: "The platform's intuitive design and powerful features have streamlined our entire workflow. Highly recommended!",
      author: "Lisa Thompson",
      role: "Operations Lead, Corp Inc",
      avatar: "/images/testi-5.webp",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Interdum et malesuada fames ac ante ipsum
          </p>
        </div>

        {/* Quote Icon */}
        <div className="text-center mb-12">
          <LucideQuote className="inline-block h-10 w-10 text-green-400" />
        </div>

        {/* Testimonial Content */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl font-bold text-gray-900 leading-relaxed max-w-4xl mx-auto mb-12">
            {testimonials[activeTestimonial].text}
          </blockquote>

          {/* Author Info */}
          <div className="mb-12">
            <div className="font-medium text-lg text-gray-900 mb-1">
              {testimonials[activeTestimonial].author}
            </div>
            <div className="text-gray-500">
              {testimonials[activeTestimonial].role}
            </div>
          </div>
        </div>

        {/* Avatar Navigation */}
        <div className="flex justify-center items-center space-x-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`relative transition-all duration-300 ${
                index === activeTestimonial
                  ? "transform scale-110"
                  : "hover:transform hover:scale-105"
              }`}
            >
              {/* Active Border Ring */}
              {index === activeTestimonial && (
                <div className="absolute inset-0 rounded-full border-3 border-green-400"></div>
              )}

              {/* Avatar */}
              <div
                className={`rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "shadow-lg"
                    : "opacity-70 hover:opacity-100"
                } p-2`}
              >
                <Image
                  src={testimonial.avatar}
                  alt="avatar"
                  width={48}
                  height={48}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
