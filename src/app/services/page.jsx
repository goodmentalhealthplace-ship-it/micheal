"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaLaptopMedical,
  FaStar,
} from "react-icons/fa";
import {
  MdMedicalServices,
  MdOutlineMonitorHeart,
} from "react-icons/md";
import { BiConversation } from "react-icons/bi";

// --- BRAND COLOR CODES ---
const BRAND_PRIMARY = "#1A435A"; // Dark Blue
const BRAND_SECONDARY = "#4CAF50"; // Green
const BRAND_ACCENT = "#FF9800"; // Orange
const DARK_TEXT = "#1A1A1A";

// --- SERVICE DATA ---
const servicesData = [
  {
    title: "Psychiatric Evaluation & Assessment",
    slug: "evaluation",
    icon: MdOutlineMonitorHeart,
    image: "/psychiatric-evaluation.jpg",
    description:
      "A thorough initial assessment with a qualified psychiatric provider to establish a clear understanding of your mental health and guide treatment.",
    color: BRAND_PRIMARY,
    details: [
      "In-depth patient history and symptom review",
      "Establishing a working diagnosis",
      "Collaborative goal setting",
      "Personalized care planning",
    ],
  },
  {
    title: "Medication Management",
    slug: "medication",
    icon: MdMedicalServices,
    image: "/medication-management.jpg",
    description:
      "Careful monitoring and adjustment of psychiatric medications to support safety, balance, and long term stability.",
    color: BRAND_SECONDARY,
    details: [
      "Prescription and refills",
      "Ongoing monitoring",
      "Dosage optimization",
      "Integrated care approach",
    ],
  },
  {
    title: "Psychotherapy",
    slug: "therapy",
    icon: BiConversation,
    image: "/psychotherapy.jpg",
    description:
      "Evidence based therapy designed to help you heal, develop coping skills, and regain emotional clarity.",
    color: BRAND_ACCENT,
    details: [
      "CBT and DBT approaches",
      "Trauma informed support",
      "Emotional regulation",
      "Goal focused sessions",
    ],
  },
  {
    title: "Telepsychiatry",
    slug: "telepsychiatry",
    icon: FaLaptopMedical,
    image: "/telepsychiatry.jpg",
    description:
      "Secure, convenient virtual care allowing you to access expert mental health services from anywhere.",
    color: BRAND_PRIMARY,
    details: [
      "Flexible scheduling",
      "HIPAA compliant platform",
      "No commute required",
      "Same quality of care",
    ],
  },
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggeredContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// --- MOBILE IMAGE BLOCK ---
// Renders the large image on mobile, hidden on desktop
const MobileHeroImage = () => (
  <motion.div
      variants={fadeInUp}
      className="w-full h-80 relative overflow-hidden rounded-[40px] shadow-2xl bg-gray-100 mt-6 mb-8 lg:hidden"
  >
      <Image
          src="/services-hero-banner.jpg" 
          alt="Image representing comprehensive mental health care services"
          layout="fill"
          objectFit="cover"
          priority
      />
  </motion.div>
);

// ---------------------------------------------------------------------
// --- MAIN COMPONENT ---
// ---------------------------------------------------------------------
export default function ServicesPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggeredContainer}
      className="w-full bg-white pb-24 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* === 1. HERO: LEFT TEXT / RIGHT IMAGE (Two-Column Layout) === */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            variants={fadeInUp}
            className="lg:pr-10"
          >
             <div className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-300 mb-3">
              <FaStar className="text-yellow-500" /> WHAT WE OFFER
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: DARK_TEXT }}>
              Our Comprehensive{" "}
              <span style={{ color: BRAND_ACCENT }}>Mental Health</span> Services
            </h1>
            
            {/* --- MOBILE IMAGE PLACEMENT (Added Here) --- */}
            <MobileHeroImage />

            <p className="text-xl md:text-2xl text-gray-700 max-w-lg mt-4 mb-8">
              We provide integrated, evidence-based treatment—combining therapy, medication management, and specialized support—all designed for your long-term wellness.
            </p>

            <Link
              href="/appointments"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: BRAND_PRIMARY }}
            >
              <FaCalendarAlt /> Book a Consultation
            </Link>
          </motion.div>

          {/* Right Column: Large Hero Image (Desktop Only) */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="hidden lg:block w-full h-96 lg:h-[500px] relative overflow-hidden rounded-[40px] shadow-2xl bg-gray-100"
          >
            <Image
              src="/services-hero-banner.jpg" 
              alt="Image representing comprehensive mental health care services"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </section>

        {/* 2. SERVICES LIST (Remains the same, but centered better) */}
        <div className="py-10">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-black text-center mb-16"
            style={{ color: DARK_TEXT }}
          >
            Explore Our Core Treatment Areas
          </motion.h2>

          {servicesData.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28"
            >
              
              {/* Service Image (Alternating sides) */}
              <div className={`relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl ${i % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Service Content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <service.icon size={44} style={{ color: service.color }} />
                  <h3
                    className="text-3xl md:text-4xl font-black"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 text-gray-800">
                  {service.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: service.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${service.slug}`}
                  className="inline-flex px-8 py-4 rounded-xl font-bold text-white shadow-lg transition hover:shadow-xl hover:scale-[1.01]"
                  style={{ backgroundColor: service.color }}
                >
                  Learn More About {service.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}