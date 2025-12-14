"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineHealthAndSafety, MdOutlineVerified } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";

// ===================================
// === BRAND COLORS (Constants) ===
// ===================================
const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
const BRAND_SECONDARY = "#4CAF50"; // Bright Green
const BRAND_ACCENT = "#FF9800"; // Warm Orange (for CTAs)
const BRAND_LIGHT_BG = "#F4F9FA"; // Light background color

// ===================================
// === HeroSection Component ===
// ===================================
export default function HeroSection() {
  return (
    <section
      className="w-full pb-24 overflow-x-hidden"
      style={{ backgroundColor: BRAND_LIGHT_BG }}
    >
      {/* ================= HERO TOP SECTION (TEXT & IMAGE) ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-16 pt-24 items-center">
        
        {/* Left Column: Text Content and CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tag line */}
          <div
            style={{
              color: BRAND_PRIMARY,
              backgroundColor: `white`,
              borderColor: BRAND_PRIMARY,
            }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-black px-4 py-1 rounded-full border-2 mb-6 shadow-md"
          >
            <FaShieldAlt className="text-sm" /> CONFIDENTIAL & PROFESSIONAL CARE
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-tight tracking-tight">
            Expert Mental Health Care for Lasting{" "}
            <span style={{ color: BRAND_SECONDARY }}>Stability</span> and{" "}
            <span style={{ color: BRAND_SECONDARY }}>Clarity</span>
          </h1>

          {/* Subheadline/Description */}
          <p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed max-w-lg mb-10">
            Compassionate, professional care designed to help you regain clarity,
            balance, and peace through expert psychiatric services and therapy.
          </p>

          {/* Mobile Image (Hidden on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:hidden flex justify-center mb-10"
          >
            <div className="p-0 rounded-[40px] shadow-2xl shadow-blue-100/40 border-4 border-white">
              <Image
                src="/hero.png"
                width={550}
                height={550}
                alt="Illustration of health clarity"
                className="rounded-[36px] object-cover w-full h-auto"
              />
            </div>
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/appointments"
              style={{ backgroundColor: BRAND_SECONDARY }}
              className="px-12 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center"
            >
              Book Appointment
            </Link>

            <Link
              href="/insurances"
              style={{ borderColor: BRAND_PRIMARY, color: BRAND_PRIMARY }}
              className="px-12 py-5 rounded-2xl font-black text-xl bg-transparent border-2 hover:bg-white transition flex items-center justify-center"
            >
              Check Insurance
            </Link>
          </div>

          {/* Verification Badges */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-gray-700 text-sm font-bold">
            <span className="flex items-center gap-2">
              <MdOutlineVerified
                style={{ color: BRAND_PRIMARY }}
                className="text-xl"
              />{" "}
              Licensed in Texas
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineHealthAndSafety
                style={{ color: BRAND_PRIMARY }}
                className="text-xl"
              />{" "}
              Secure Telehealth
            </span>
          </div>
        </motion.div>

        {/* Right Column: Hero Image (Hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hidden lg:flex relative justify-center lg:justify-end"
        >
          <Image
            src="/hero.png"
            width={550}
            height={550}
            alt="Clarity Illustration"
            className="rounded-[40px] object-cover shadow-2xl shadow-blue-50/50"
          />
        </motion.div>
      </div>
    </section>
  );
}