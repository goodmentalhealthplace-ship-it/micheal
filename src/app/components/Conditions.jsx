"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa"; 

export default function Conditions() {
  // === BRAND COLORS from Logo ===
  const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
  const BRAND_SECONDARY = "#4CAF50"; // Bright Green
  const BRAND_ACCENT = "#FF9800"; // Warm Orange
  const BRAND_GRAY = "#E0E0E0"; // Light gray for card accents

  const conditions = [
    {
      title: "Depression",
      imagePath: "/depression.png",
      description: "Major depression, persistent depressive disorder (dysthymia).",
      color: BRAND_PRIMARY,
      href: "/depression",
    },
    {
      title: "Anxiety Disorders",
      imagePath: "/anxiety.png",
      description: "Generalized anxiety, social anxiety, and panic disorder.",
      color: BRAND_SECONDARY,
      href: "/anxiety",
    },
    {
      title: "Bipolar Disorder",
      imagePath: "/bipolar.png",
      description: "Managing mood swings, manic, and depressive episodes.",
      color: BRAND_ACCENT,
      href: "/bipolar",
    },
    {
      title: "OCD",
      imagePath: "/ocd.png",
      description: "Obsessive-compulsive and related disorders.",
      color: BRAND_PRIMARY,
      href: "/ocd",
    },
    {
      title: "Schizophrenia",
      imagePath: "/schizophrenia.png",
      description: "Psychosis, thought disorders, and reality testing.",
      color: BRAND_SECONDARY,
      href: "/schizophrenia",
    },
    {
      title: "ADHD",
      imagePath: "/adhd.png",
      description: "Focus, impulsivity, and organizational challenges.",
      color: BRAND_ACCENT,
      href: "/adhd",
    },
    {
      title: "PTSD & Trauma",
      imagePath: "/ptsd.png",
      description: "Coping with trauma symptoms, flashbacks, and hypervigilance.",
      color: BRAND_PRIMARY,
      href: "/ptsd",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-gray-50/50 pt-16 pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Comprehensive Care for Common Conditions
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our compassionate specialists are here to guide you toward healing and stability, addressing a wide range of mental health challenges.
          </p>
          {/* Divider bar with Dark Blue/Teal color */}
          <div
            style={{ backgroundColor: BRAND_PRIMARY }}
            className="h-1.5 w-24 mt-4 mx-auto rounded-full"
          />
        </motion.div>

        {/* MODIFIED GRID LAYOUT: grid-cols-1 (mobile), sm:grid-cols-3 (tablet), and lg:grid-cols-3 (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {conditions.map((condition, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="rounded-3xl bg-white shadow-xl hover:shadow-[0_20px_40px_rgba(26,67,90,0.08)] transition-all duration-300 flex flex-col group hover:scale-[1.03] overflow-hidden"
            >
              {/* IMAGE DISPLAY AREA - FULL WIDTH BANNER */}
              <div
                className="w-full aspect-video relative rounded-t-3xl"
                style={{
                  backgroundColor: BRAND_GRAY,
                }}
              >
                <Image
                  src={condition.imagePath}
                  alt={condition.title}
                  fill
                  objectFit="cover"
                  className="rounded-t-3xl"
                />
              </div>
              
              {/* TEXT CONTENT AREA */}
              <div className="p-4 md:p-6 flex flex-col items-center text-center flex-grow">
                <h3 className="font-extrabold text-gray-950 text-lg md:text-xl mb-3 leading-tight">
                  {condition.title}
                </h3>

                <p className="text-sm text-gray-600 font-medium flex-grow">
                  {condition.description}
                </p>

                {/* Optional Link to Condition Page */}
                <Link
                  href={condition.href}
                  style={{ color: condition.color }}
                  className="text-sm font-bold mt-3 inline-flex items-center gap-1 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            // 🏆 UPDATED HREF
            href="/services"
            style={{
              backgroundColor: BRAND_PRIMARY,
              color: 'white',
              boxShadow: `0 8px 20px -5px ${BRAND_PRIMARY}60`,
            }}
            className="px-10 py-5 rounded-2xl font-black text-xl transition transform hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center gap-2"
          >
            {/* 🏆 UPDATED TEXT */}
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}