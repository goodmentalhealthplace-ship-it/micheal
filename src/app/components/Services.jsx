"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// === BRAND COLORS ===
const BRAND_PRIMARY = "#1A435A";
const BRAND_ACCENT = "#4CAF50";
const BRAND_LIGHT_BG = "#F4F9FA";

// === SERVICES DATA ===
const services = [
  {
    title: "Medication Management",
    image: "/medication.png",
    description:
      "Careful monitoring and adjustment of medication to support balance, safety, and long term stability.",
    href: "/medication",
  },
  {
    title: "Psychiatric Evaluation",
    image: "/evaluation.png",
    description:
      "A comprehensive assessment to understand your mental health clearly and guide the right treatment path.",
    href: "/evaluation",
  },
  {
    title: "Psychotherapy",
    image: "/psychotherapy.png",
    description:
      "Supportive, evidence based therapy to help you heal, grow, and regain emotional clarity.",
    href: "/therapy",
  },
  {
    title: "Telepsychiatry",
    image: "/tele.png",
    description:
      "Secure virtual care that brings expert mental health services to you wherever you are.",
    href: "/telepsychiatry",
  },
];

// === SERVICE CARD ===
const ServiceCard = ({ service, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: i * 0.06 }}
    viewport={{ once: true }}
    className="relative h-[300px] md:h-[340px] rounded-[28px] overflow-hidden shadow-md"
  >
    {/* IMAGE */}
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover"
      priority
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

    {/* CONTENT */}
    <div className="absolute bottom-0 p-6 text-white">
      <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
        {service.title}
      </h3>

      <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4 max-w-sm">
        {service.description}
      </p>

      <Link
        href={service.href}
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition"
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

        {/* INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          <div className="relative h-[280px] md:h-[360px] rounded-[32px] overflow-hidden">
            <Image
              src="/services.png"
              alt="Mental health services"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 mb-6 tracking-tight">
              Mental Health Care, Delivered With Intention
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-xl">
              Our services are designed to support your mental wellbeing with
              clarity, compassion, and clinical excellence.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Every service below is offered with care, collaboration, and a
              deep respect for your individual journey.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
