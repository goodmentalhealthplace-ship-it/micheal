"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaCalendarCheck, 
  FaFireExtinguisher, 
  FaShieldAlt, 
  FaLock, 
  FaHeartbeat, 
  FaPills,
  FaBrain
} from 'react-icons/fa';

// --- BRAND COLOR CODES ---
// Highlight Blue: #306EFF (Trust, Authority)
// Accent Orange: #FFAA00 (Action, Focus)
// Secondary Green: #30A04C (Wellness, Hope)
// Dark Text: #1A1A1A

export default function PTSDTreatmentPage() {

  const coreSymptoms = [
    { icon: FaHeartbeat, text: "Intrusive Memories (Flashbacks, Nightmares)", color: "#FFAA00" },
    { icon: FaShieldAlt, text: "Avoidance (Places, people, activities related to trauma)", color: "#30A04C" },
    { icon: FaLock, text: "Negative Changes in Thinking and Mood (Numbness, detachment)", color: "#306EFF" },
    { icon: FaFireExtinguisher, text: "Changes in Arousal and Reactivity (Hypervigilance, irritability)", color: "#FFAA00" },
  ];

  const treatmentApproaches = [
    { 
      title: "Trauma-Focused Psychotherapy", 
      icon: FaBrain, 
      color: "#306EFF", 
      description: "Utilizing structured, evidence-based therapies (e.g., CPT, prolonged exposure principles) to process trauma safely."
    },
    { 
      title: "Symptom Stabilizing Medication", 
      icon: FaPills, 
      color: "#FFAA00", 
      description: "Medication management (e.g., Prazosin for nightmares, antidepressants) to reduce hyperarousal and anxiety."
    },
    { 
      title: "Safety and Grounding Skills", 
      icon: FaShieldAlt, 
      color: "#30A04C", 
      description: "Teaching specific techniques to manage dissociation, flashbacks, and regulate the nervous system."
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full bg-white pb-24 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* === 1. HERO & VALIDATION BLOCK (Focus on healing) === */}
        <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 md:p-16 rounded-[40px] shadow-xl border-t-8 border-[#30A04C] text-center">
          
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight mb-4">
            Healing from Trauma and <span className="text-[#306EFF]">PTSD</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
            The effects of trauma are real, but they are not permanent. We provide a safe, structured environment for you to process your trauma and regain control over your memories and your life.
          </p>

          <Link 
            href="/appointments"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl bg-[#FFAA00] transition transform hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <FaCalendarCheck /> Begin Your Healing Journey
          </Link>
        </motion.div>

        {/* === 2. Understanding the Symptoms & Trauma === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">
          
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-black text-[#1A1A1A] border-b pb-3 border-gray-100">
              The Four Core Symptom Clusters
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              PTSD is diagnosed by distinct symptom clusters that persist after a traumatic event. Michael Nwanna focuses on stabilizing these symptoms first to create a foundation for deeper therapeutic work.
            </p>
            
            <ul className="space-y-4 pt-4">
              {coreSymptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-semibold text-gray-800 p-3 rounded-lg bg-gray-50 border-l-4" style={{ borderColor: symptom.color }}>
                  <symptom.icon className="text-2xl mt-1 flex-shrink-0" style={{ color: symptom.color }} />
                  {symptom.text}
                </li>
              ))}
            </ul>
            
          </motion.div>

          {/* Image Placeholder 1: Grounding and Safety */}
          <motion.div variants={fadeInUp} className="p-8 bg-[#F4F9FA] rounded-2xl shadow-md border-l-4 border-[#30A04C]">
            <h3 className="text-2xl font-black text-[#1A1A1A] mb-6">
              Trauma and the Nervous System
            </h3>
            <p className="text-lg text-gray-700 mb-6">
                Trauma fundamentally changes the way your nervous system responds to stress, keeping you stuck in 'fight, flight, or freeze.' Our treatment focuses on restoring the brain's sense of safety and reducing hyperarousal.
            </p>
            <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                    src="/ptsd-grounding-safe-space.jpg"
                    alt="Illustration of a person standing calm and grounded in a chaotic background, symbolizing safety and resilience"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain" // Ensures full image is visible
                />
            </div>
            {/* FILE NAME: ptsd-grounding-safe-space.jpg */}
          </motion.div>
        </div>

        {/* === 3. THE THREE-STEP TREATMENT APPROACH === */}
        <div className="mt-20">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">
              Our 3-Step Trauma-Informed Approach
            </h2>
            <p className="text-xl text-gray-600">
              Healing is a structured process built on safety, processing, and reconnection.
            </p>
            <div className="h-1.5 w-24 bg-[#FFAA00] mx-auto rounded-full mt-4" /> {/* Accent Orange */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentApproaches.map((approach, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white shadow-lg border-t-8 transition hover:shadow-xl flex flex-col items-center text-center h-full"
                style={{ borderColor: approach.color }}
              >
                <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center text-white" style={{ backgroundColor: approach.color }}>
                  <approach.icon size={32} />
                </div>
                
                <h3 className="font-black text-gray-950 text-2xl mb-4 leading-tight">
                  {approach.title}
                </h3>
                
                <p className="text-base text-gray-700 font-medium leading-relaxed flex-grow">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Image Placeholder 2: Processing and Healing */}
          <div className="w-full h-72 relative rounded-xl overflow-hidden mt-12 shadow-2xl">
              <Image
                  src="/ptsd-healing-process.jpg"
                  alt="Illustration of a therapist and patient working together, symbolizing safety in the therapeutic relationship"
                  fill
                  sizes="100vw"
                  className="object-contain" // Ensures full image is visible
              />
          </div>
          {/* FILE NAME: ptsd-healing-process.jpg */}
        </div>

        {/* === 4. CLOSING CTA BLOCK === */}
        <motion.div 
          variants={fadeInUp}
          className="mt-20 bg-[#1B3C6A] p-8 md:p-12 rounded-[40px] text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
            Healing is possible. You deserve peace.
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Take the step toward specialized, trauma-informed care with Michael Nwanna.
          </p>
          
          <Link 
            href="/appointments"
            className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl bg-[#FFAA00] transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center"
          >
            Schedule a Confidential Consultation
          </Link>
        </motion.div>
        
      </div>
    </motion.div>
  );
}