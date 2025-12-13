"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// === BRAND COLORS from Logo (Defined outside component) ===
const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
const BRAND_SECONDARY = "#4CAF50"; // Bright Green
const BRAND_ACCENT = "#FF9800"; // Warm Orange (for CTAs)
const BRAND_LIGHT_BG = "#F4F9FA"; // Retain a light background color

// === Animation Variants ===
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// === Service Data (Remains the same) ===
const services = [
  {
    title: "Medication Management",
    imagePath: "/medication.png",
    description:
      "Monitoring and adjusting medication to optimize treatment and safety. Personalized review of prescriptions, dosages, and potential side effects.",
    href: "/medication",
  },
  {
    title: "Psychiatric Evaluation",
    imagePath: "/evaluation.png",
    description:
      "Comprehensive mental-health assessment and personalized professional diagnosis. We consider biological, psychological, and social factors.",
    href: "/evaluation",
  },
  {
    title: "Psychotherapy",
    imagePath: "/psychotherapy.png",
    description:
      "Supportive emotional guidance to help you heal, grow, and regain balance through various therapy modalities.",
    href: "/therapy",
  },
  {
    title: "Telepsychiatry",
    imagePath: "/tele.png",
    description:
      "Expert mental-health care securely from the comfort and privacy of home. Access all our services via a secure online platform.",
    href: "/telepsychiatry",
  },
];

// --- ServiceCard Component (Reusable internally) ---

const ServiceCard = ({ service, i }) => {
  return (
    <motion.div
      key={i}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="rounded-3xl bg-white shadow-xl transition-all duration-500 flex flex-col group overflow-hidden border-t-8 border-transparent hover:shadow-2xl hover:border-t-8"
      style={{ borderTopColor: BRAND_SECONDARY }}
    >
      
      {/* Image/Icon Section - Set background to white/transparent as requested */}
      <div 
        className="w-full h-48 relative flex items-center justify-center p-4 bg-white"
      >
        <Image
          src={service.imagePath}
          alt={service.title}
          fill
          // objectFit="contain" prevents cropping
          objectFit="contain" 
          sizes="(max-width: 768px) 100vw, 50vw" 
          className="transition-all duration-700"
        />
      </div>

      {/* Content Area - Uses flex-col for alignment, but removes flex-grow from inner elements */}
      <div className="p-8 md:p-10 flex flex-col text-center h-full bg-white">
        
        {/* Heading */}
        <h3
          className="font-black text-2xl md:text-3xl mb-4 leading-tight"
          style={{ color: BRAND_PRIMARY }}
        >
          {service.title}
        </h3>

        {/* Paragraph: No flex-grow to fix vertical spacing */}
        <p className="text-base text-gray-700 font-medium leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Button: Inline-flex, self-center, and minimal margin to fix gaps */}
        <Link
          href={service.href}
          style={{
            backgroundColor: BRAND_ACCENT,
            color: 'white',
          }}
          className="inline-flex items-center justify-center gap-2 font-bold text-base px-6 py-3 rounded-xl transition-all hover:bg-opacity-90 hover:shadow-lg mt-4 self-center"
        >
          Details →
        </Link>
      </div>
    </motion.div>
  );
};


// --- Services Section Component Definition ---

export default function ServicesSection() {
  return (
    <div className="w-full py-20" style={{ backgroundColor: BRAND_LIGHT_BG }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 mb-4 tracking-tight">
            Our Comprehensive Services
          </h2>
          {/* Divider bar with Warm Orange color */}
          <div
            style={{ backgroundColor: BRAND_ACCENT }}
            className="h-1.5 w-24 mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Services Grid: 2-column layout, aligned to start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> 
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}