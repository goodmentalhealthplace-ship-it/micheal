"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// === BRAND COLORS ===
const BRAND_PRIMARY = "#1A435A";
const BRAND_SECONDARY = "#4CAF50";
const BRAND_ACCENT = "#FF9800";
const BRAND_LIGHT_BG = "#F4F9FA";

// === Animation ===
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// === SERVICES DATA ===
const services = [
  {
    title: "Medication Management",
    imagePath: "/medication.png",
    description:
      "Thoughtful monitoring and adjustment of medication to support stability, safety, and long term progress.",
    href: "/medication",
  },
  {
    title: "Psychiatric Evaluation",
    imagePath: "/evaluation.png",
    description:
      "A comprehensive mental health assessment that considers your full history, symptoms, and goals.",
    href: "/evaluation",
  },
  {
    title: "Psychotherapy",
    imagePath: "/psychotherapy.png",
    description:
      "Supportive therapy focused on healing, insight, and emotional growth using proven approaches.",
    href: "/therapy",
  },
  {
    title: "Telepsychiatry",
    imagePath: "/tele.png",
    description:
      "Secure virtual care that allows you to receive expert mental health services from the comfort of home.",
    href: "/telepsychiatry",
  },
];

// === SERVICE CARD ===
const ServiceCard = ({ service, i }) => (
  <motion.div
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
    className="rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition flex flex-col overflow-hidden"
  >
    <div className="relative h-40 w-full bg-white">
      <Image
        src={service.imagePath}
        alt={service.title}
        fill
        className="object-contain p-6"
      />
    </div>

    <div className="p-8 text-center">
      <h3
        className="font-extrabold text-2xl mb-3"
        style={{ color: BRAND_PRIMARY }}
      >
        {service.title}
      </h3>

      <p className="text-gray-700 leading-relaxed mb-6">
        {service.description}
      </p>

      <Link
        href={service.href}
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white transition"
        style={{ backgroundColor: BRAND_ACCENT }}
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);

// === MAIN SECTION ===
export default function ServicesSection() {
  return (
    <section className="w-full py-24" style={{ backgroundColor: BRAND_LIGHT_BG }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* INTRO BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">

          {/* IMAGE */}
          <div className="relative h-[300px] md:h-[420px] rounded-[32px] overflow-hidden">
            <Image
              src="/services.png"
              alt="Mental health services overview"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 mb-6 tracking-tight">
              Care That Meets You Where You Are
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-xl">
              Our services are designed to support your mental wellbeing with
              clarity, compassion, and evidence based care. We focus on the whole
              person, not just symptoms.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Whether you need evaluation, ongoing treatment, therapy, or
              flexible virtual care, each service is delivered with respect,
              collaboration, and clinical excellence.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
