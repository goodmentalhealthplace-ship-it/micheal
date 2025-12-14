"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaRegLightbulb,
  FaLock,
  FaHandsHelping,
  FaLaptopMedical,
} from "react-icons/fa";

// === BRAND COLORS ===
const BRAND_PRIMARY = "#1A435A";
const BRAND_SECONDARY = "#4CAF50";
const BRAND_ACCENT = "#4CAF50";

const FEATURES = [
  {
    id: 1,
    title: "Patient Centered Care",
    icon: FaHandsHelping,
    description:
      "Your needs, goals, and voice are central to every treatment plan we create.",
    color: BRAND_SECONDARY,
  },
  {
    id: 2,
    title: "Evidence Based Methods",
    icon: FaRegLightbulb,
    description:
      "We use proven therapeutic techniques and current psychiatric research to guide effective care.",
    color: BRAND_ACCENT,
  },
  {
    id: 3,
    title: "Secure Telehealth Platform",
    icon: FaLaptopMedical,
    description:
      "Access confidential and convenient care from anywhere using our online system.",
    color: BRAND_PRIMARY,
  },
  {
    id: 4,
    title: "Privacy and Compliance",
    icon: FaLock,
    description:
      "We maintain strong standards of HIPAA compliance to protect your information and sessions.",
    color: BRAND_SECONDARY,
  },
];

// --- Simple Feature Card with Subtle Pulse ---
function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 shadow-md flex flex-col text-left h-full">
      {/* ICON — NO BACKGROUND, SUBTLE BREATHING EFFECT */}
      <div className="mb-4 inline-flex">
        <Icon
          size={34}
          style={{ color: feature.color }}
          className="animate-[pulse_3.5s_ease-in-out_infinite]"
        />
      </div>

      <h3 className="font-bold text-gray-900 text-xl mb-2">
        {feature.title}
      </h3>

      <p className="text-base text-gray-700 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

// --- MAIN SECTION ---
export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN */}
          <div>
            {/* HEADING — CENTER ON MOBILE ONLY */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 mb-6 tracking-tight text-center lg:text-left">
              Why Choose{" "}
              <span style={{ color: BRAND_PRIMARY }}>
                GoodPlace
              </span>
            </h2>

            {/* IMAGE AFTER HEADING */}
            <div className="relative w-full max-w-md h-[220px] md:h-[260px] mb-8 rounded-3xl overflow-hidden mx-auto lg:mx-0">
              <Image
                src="/why.png"
                alt="Why choose GoodPlace Mental Health Services"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg mb-10 text-center lg:text-left mx-auto lg:mx-0">
              We combine professional expertise with genuine compassion,
              delivering mental health care that is effective and deeply
              supportive. Our commitment is your path to stability and growth.
            </p>

            <div className="text-center lg:text-left">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-xl text-white transition"
                style={{
                  backgroundColor: BRAND_ACCENT,
                  boxShadow: `0 8px 20px -5px ${BRAND_ACCENT}60`,
                }}
              >
                Learn More About Our Approach
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN — STATIC GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
