"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaStar,
  FaCheckCircle,
  FaLaptopMedical,
  FaShieldAlt,
} from "react-icons/fa";
import {
  MdMedicalServices,
  MdOutlinePsychology,
  MdOutlineMonitorHeart,
} from "react-icons/md";
import { BiConversation } from "react-icons/bi";

export default function ServicesPage() {
  const BRAND_PRIMARY = "#1A435A";
  const BRAND_SECONDARY = "#4CAF50";
  const BRAND_ACCENT = "#FF9800";

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

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/services-hero-banner.jpg"
          alt="Mental health services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Our Comprehensive{" "}
            <span style={{ color: BRAND_ACCENT }}>Mental Health</span> Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Personalized care designed to support your wellbeing and recovery.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xl text-white"
            style={{ backgroundColor: BRAND_ACCENT }}
          >
            <FaCalendarAlt /> Book a Consultation
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28"
          >
            <div className={`relative h-72 md:h-96 ${i % 2 ? "lg:order-2" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <service.icon size={44} style={{ color: service.color }} />
                <h2
                  className="text-3xl md:text-4xl font-black"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle style={{ color: service.color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/${service.slug}`}
                className="inline-flex px-6 py-3 rounded-xl font-bold text-white"
                style={{ backgroundColor: service.color }}
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
