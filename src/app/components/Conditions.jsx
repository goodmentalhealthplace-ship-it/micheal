"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Conditions() {
  const BRAND_PRIMARY = "#4CAF50";
  const BRAND_SECONDARY = "#4CAF50";
  const BRAND_ACCENT = "#4CAE50";
  const BRAND_GRAY = "#E0E0E0";

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
      description: "Obsessive compulsive and related disorders.",
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
      description: "Coping with trauma symptoms and hypervigilance.",
      color: BRAND_PRIMARY,
      href: "/ptsd",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.45 },
    }),
  };

  return (
    <section className="w-full bg-gray-50/50 pt-14 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-gray-950 mb-4 tracking-tight">
            Comprehensive Care for Common Conditions
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Compassionate specialists supporting healing, clarity, and stability across a wide range of mental health needs.
          </p>

          <div
            className="h-1 w-20 mt-4 mx-auto rounded-full"
            style={{ backgroundColor: BRAND_PRIMARY }}
          />
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {conditions.map((condition, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* IMAGE */}
              <div
                className="relative w-full aspect-[4/3]"
                style={{ backgroundColor: BRAND_GRAY }}
              >
                <Image
                  src={condition.imagePath}
                  alt={condition.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="px-5 py-4 flex flex-col text-center flex-grow">
                <h3 className="font-bold text-gray-950 text-lg mb-2">
                  {condition.title}
                </h3>

                <p className="text-sm text-gray-600 flex-grow">
                  {condition.description}
                </p>

                <Link
                  href={condition.href}
                  style={{ color: condition.color }}
                  className="mt-3 text-sm font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            style={{
              backgroundColor: BRAND_PRIMARY,
              color: "white",
              boxShadow: `0 8px 18px -6px ${BRAND_PRIMARY}60`,
            }}
            className="px-8 py-4 rounded-xl font-bold text-lg transition hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center gap-2"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
