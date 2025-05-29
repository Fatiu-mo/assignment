"use client";

import React, { useState } from "react";

export default function MembershipPlans() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: 39,
      yearlyPrice: 39,
      features: [
        "1 Listing",
        "30 Days Visibility",
        "Highlighted in Search Results",
        "4 Revisions",
        "9 days Delivery Time",
        "Products Support",
      ],
    },
    {
      name: "Standard Plan",
      monthlyPrice: 59,
      yearlyPrice: 59,
      features: [
        "1 Listing",
        "30 Days Visibility",
        "Highlighted in Search Results",
        "4 Revisions",
        "9 days Delivery Time",
        "Products Support",
      ],
      popular: true,
    },
    {
      name: "Extended Plan",
      monthlyPrice: 99,
      yearlyPrice: 99,
      features: [
        "1 Listing",
        "30 Days Visibility",
        "Highlighted in Search Results",
        "4 Revisions",
        "9 days Delivery Time",
        "Products Support",
      ],
    },
    {
      name: "Enterprise Plan",
      monthlyPrice: 139,
      yearlyPrice: 139,
      features: [
        "1 Listing",
        "30 Days Visibility",
        "Highlighted in Search Results",
        "4 Revisions",
        "9 days Delivery Time",
        "Products Support",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Membership Plans
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Give your visitor a smooth online experience with a solid UX design
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Billed Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              isYearly ? "bg-green-500" : "bg-gray-50"
            } transition-colors focus:outline-none `}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Billed Yearly
          </span>
          <span className="bg-red-100 text-green-500 text-xs font-semibold px-2 py-1 rounded-full">
            Save 20%
          </span>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`bg-white rounded-2xl p-8 relative ${
              plan.popular
                ? "border-gray-100 shadow-lg border-1"
                : "hover:border-gray-100 hover:shadow-lg hover:border-1"
            }`}
          >
            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-gray-900">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-500 ml-1">/ yearly</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                One time fee for one listing or task highlighted in search
                results.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="text-center">
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                plan.popular
                  ? "bg-green-500 text-white hover:bg-green-600 shadow-md"
                  : "bg-gray-100 text-green-600 hover:bg-green-500 hover:text-white"
              }`}
            >
              Buy Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
