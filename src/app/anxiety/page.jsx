"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaCalendarAlt, FaCheckCircle, FaExclamationTriangle, 
  FaBrain, FaClinicMedical 
} from "react-icons/fa";

export default function AnxietyPage() {
  // === BRAND COLORS (Confirmed) ===
  const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
  const BRAND_SECONDARY = "#4CAF50"; // Bright Green
  const BRAND_ACCENT = "#FF9800"; // Warm Orange

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* ----------------------------------------------------------- */}
        {/* 1. CONDITION HERO: LEFT TEXT / RIGHT IMAGE */}
        {/* ----------------------------------------------------------- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          
          {/* Left Column: Text & Tagline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:p-6" // Add padding on large screens
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-tight mb-4 tracking-tight">
              Finding Freedom from <span style={{ color: BRAND_ACCENT }}>Anxiety Disorders</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-lg mb-8">
              You don't have to live under the constant shadow of worry. We offer professional, tailored treatment to help you regain peace and control.
            </p>
            <div style={{ backgroundColor: BRAND_PRIMARY }} className="h-1.5 w-24 mt-4 rounded-full" />
          </motion.div>

          {/* Right Column: Standalone Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="w-full h-80 lg:h-[400px] relative overflow-hidden rounded-[40px] shadow-2xl"
          >
            <Image 
              src="/condition-anxiety-hero.jpg" 
              alt="Image representing calm and overcoming anxiety"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </section>


        {/* ----------------------------------------------------------- */}
        {/* 2. SYMPTOMS, TYPES, and IMPACT (Borders Removed) */}
        {/* ----------------------------------------------------------- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-10">
          
          {/* Main Symptoms Column - Neutral styling */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-8 p-6 md:p-10 rounded-[30px] bg-gray-50/70 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4 flex items-center gap-3">
              <FaExclamationTriangle size={30} style={{ color: BRAND_SECONDARY }} /> Common Symptoms & When to Seek Help
            </h2>
            <p className="text-lg text-gray-700">
              Anxiety can manifest both physically and mentally. If these symptoms are impacting your daily life, relationships, or work, professional support is the next critical step.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Persistent, excessive worry or fear (GAD)",
                "Panic attacks (sudden, intense fear)",
                "Avoidance of social situations (Social Anxiety)",
                "Rapid heart rate, sweating, or trembling",
                "Difficulty concentrating or sleeping",
                "Irritability and restlessness",
                "Muscle tension or chronic headaches",
                "Obsessive thoughts or compulsive behaviors",
              ].map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle size={18} className="mt-1 flex-shrink-0" style={{ color: BRAND_ACCENT }} /> 
                  <span className="font-medium">{symptom}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Types Sidebar - Neutral styling */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 rounded-[30px] shadow-xl border border-gray-200"
          >
            <h3 className="text-2xl font-extrabold text-gray-950 mb-4">Types We Treat</h3>
            <ul className="space-y-3 text-gray-700">
              {["Generalized Anxiety Disorder (GAD)", "Panic Disorder", "Social Anxiety Disorder", "Specific Phobias", "Obsessive-Compulsive Disorder (OCD)", "Post-Traumatic Stress Disorder (PTSD)"].map((type, index) => (
                <li key={index} className="font-medium hover:text-gray-950 transition">
                  <span style={{ color: BRAND_PRIMARY }}>&rarr;</span> {type}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
        
        {/* ----------------------------------------------------------- */}
        {/* 3. OUR TREATMENT APPROACH WITH VISUALS (Images set to CONTAIN) */}
        {/* ----------------------------------------------------------- */}
        <section className="py-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-12"
            style={{ color: BRAND_PRIMARY }}
          >
            A Tailored, Integrated Approach to Peace
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* CBT Card with Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 rounded-[30px] overflow-hidden shadow-lg border border-gray-200"
            >
              {/* Image container set to bg-white and objectFit="contain" */}
              <div className="relative h-64 w-full bg-white">
                <Image
                  src="/treatment-cbt.jpg" 
                  alt="Cognitive Behavioral Therapy session"
                  layout="fill"
                  objectFit="contain" 
                />
              </div>
              <div className="p-8 space-y-3">
                <h3 className="text-2xl font-extrabold flex items-center gap-3" style={{ color: BRAND_ACCENT }}>
                    <FaBrain size={24} /> Cognitive Behavioral Therapy (CBT)
                </h3>
                <p className="text-gray-700">
                  A foundational method to identify and challenge negative thought patterns, giving you concrete tools to manage and reduce anxiety responses.
                </p>
              </div>
            </motion.div>

            {/* Medication Management Card with Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 rounded-[30px] overflow-hidden shadow-lg border border-gray-200"
            >
              {/* Image container set to bg-white and objectFit="contain" */}
              <div className="relative h-64 w-full bg-white">
                <Image
                  src="/treatment-medication.jpg" 
                  alt="Medication management tools"
                  layout="fill"
                  objectFit="contain" 
                />
              </div>
              <div className="p-8 space-y-3">
                <h3 className="text-2xl font-extrabold flex items-center gap-3" style={{ color: BRAND_SECONDARY }}>
                    <FaClinicMedical size={24} /> Medication Management 
                </h3>
                <p className="text-gray-700">
                  If appropriate, we carefully prescribe and monitor anti-anxiety or antidepressant medications to restore balance and provide symptomatic relief.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ----------------------------------------------------------- */}
        {/* 4. FINAL CTA - Specific to Anxiety (Neutral Border) */}
        {/* ----------------------------------------------------------- */}
        <section className="w-full py-16 bg-white rounded-[40px] shadow-2xl border-2 border-gray-200">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
              Ready to Take the Next Step Toward Calm?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Start your confidential intake today and begin a personalized treatment plan for anxiety relief.
            </p>

            <Link 
              href="/appointments"
              style={{ 
                backgroundColor: BRAND_PRIMARY, 
                color: 'white',
                boxShadow: `0 10px 25px -8px ${BRAND_PRIMARY}60` 
              }}
              className="px-10 py-5 rounded-2xl font-black text-xl transition transform hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center gap-3"
            >
              <FaCalendarAlt className="text-xl" /> Schedule Anxiety Consultation
            </Link>
          </motion.div>
        </section>

      </div>
    </div>
  );
}