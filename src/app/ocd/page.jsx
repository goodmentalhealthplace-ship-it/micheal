"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image for Next.js 
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaHandSparkles, 
  FaRedoAlt, 
  FaCalendarCheck,
  FaShieldAlt,
  FaLightbulb,
  FaMedkit
} from 'react-icons/fa';

// --- BRAND COLOR CODES ---
// Highlight Blue: #306EFF (Trust, Authority)
// Accent Orange: #FFAA00 (Action, Focus)
// Secondary Green: #30A04C (Wellness, Hope)
// Dark Text: #1A1A1A

export default function OCDTreatmentPage() {

  const coreComponents = [
    { icon: FaBrain, text: "Intrusive Thoughts (Obsessions)", description: "Unwanted, repetitive thoughts, images, or urges that cause significant anxiety." },
    { icon: FaRedoAlt, text: "Repetitive Behaviors (Compulsions)", description: "Rituals or actions performed to temporarily neutralize the anxiety from obsessions." },
    { icon: FaLightbulb, text: "Significant Distress", description: "The cycle consumes time and severely interferes with daily functioning, work, or relationships." },
  ];

  const treatmentPillars = [
    { 
      title: "Exposure and Response Prevention (ERP)", 
      icon: FaShieldAlt, 
      color: "#30A04C", // Secondary Green
      description: "The gold- standard, evidence-based therapy to gradually confront fears without engaging in compulsions."
    },
    { 
      title: "Psychiatric Medication", 
      icon: FaMedkit, 
      color: "#306EFF", // Highlight Blue
      description: "Careful use of SSRIs and other medications to reduce the frequency and intensity of obsessive thoughts."
    },
    { 
      title: "Psychoeducation & Support", 
      icon: FaBrain, 
      color: "#FFAA00", // Accent Orange
      description: "Gaining a deep understanding of OCD mechanisms to restore control and reduce self-blame."
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
        
        {/* === 1. HERO & VALIDATION BLOCK (Focus on breaking the cycle) === */}
        <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 md:p-16 rounded-[40px] shadow-xl border-t-8 border-[#30A04C] text-center">
          
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight mb-4">
            Breaking the Cycle of OCD
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
            Obsessive-Compulsive Disorder is a cycle of intense anxiety and exhausting rituals. We offer focused, evidence-based treatment to help you regain control, peace, and time.
          </p>

          <Link 
            href="/appointments"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl bg-[#306EFF] transition transform hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <FaCalendarCheck /> Schedule an OCD Consultation
          </Link>
        </motion.div>

        {/* === 2. WHAT IS OCD & DIAGNOSIS SECTION === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-center">
          
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-black text-[#1A1A1A] border-b pb-3 border-gray-100">
              Understanding the OCD Mechanism
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              OCD involves two primary parts: **Obsessions** (the unwanted, anxiety-inducing thoughts) and **Compulsions** (the actions you feel forced to perform to reduce the anxiety). This cycle can be consuming.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Michael Nwanna provides expert diagnosis, differentiating OCD from general anxiety, and crafts a treatment plan centered on **Exposure and Response Prevention (ERP)** combined with medication management when necessary.
            </p>
            
            {/* Image Placeholder 1 */}
            <div className="w-full h-48 relative rounded-xl overflow-hidden mt-6 shadow-lg">
                <Image
                    src="/ocd-cycle-illustration.jpg"
                    alt="Illustration of the OCD Obsession-Compulsion Cycle"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
            {/* FILE NAME: ocd-cycle-illustration.jpg */}
            
          </motion.div>

          {/* Core Components List */}
          <motion.div variants={fadeInUp} className="p-8 bg-[#F4F9FA] rounded-2xl shadow-md border-l-4 border-[#FFAA00]">
            <h3 className="text-2xl font-black text-[#1A1A1A] mb-6">
              The Three Core Components
            </h3>
            <ul className="space-y-6">
              {coreComponents.map((component, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <span className="flex items-center gap-3 text-xl font-bold text-[#306EFF]"> {/* Highlight Blue */}
                    <component.icon className="text-[#FFAA00] text-2xl flex-shrink-0" /> {/* Accent Orange */}
                    {component.text}
                  </span>
                  <p className="text-base text-gray-700 ml-9">{component.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* === 3. ERP & TREATMENT PILLARS === */}
        <div className="mt-20">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">
              Our Proven Treatment Pillars for Relief
            </h2>
            <p className="text-xl text-gray-600">
              We focus on strategies scientifically proven to disrupt the OCD cycle.
            </p>
            <div className="h-1.5 w-24 bg-[#306EFF] mx-auto rounded-full mt-4" /> {/* Highlight Blue */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentPillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white shadow-lg border-t-8 transition hover:shadow-xl flex flex-col items-center text-center h-full"
                style={{ borderColor: pillar.color }}
              >
                <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center text-white" style={{ backgroundColor: pillar.color }}>
                  <pillar.icon size={32} />
                </div>
                
                <h3 className="font-black text-gray-950 text-2xl mb-4 leading-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-base text-gray-700 font-medium leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Image Placeholder 2 */}
          <div className="w-full h-72 relative rounded-xl overflow-hidden mt-12 shadow-2xl">
              <Image
                  src="/ocd-erp-success.jpg"
                  alt="Illustration of a person stepping away from a compulsive behavior, symbolizing successful ERP"
                  fill
                  sizes="100vw"
                  className="object-cover"
              />
          </div>
          {/* FILE NAME: ocd-erp-success.jpg */}
        </div>

        {/* === 4. CLOSING CTA BLOCK === */}
        <motion.div 
          variants={fadeInUp}
          className="mt-20 bg-[#1B3C6A] p-8 md:p-12 rounded-[40px] text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
            It is time to take back your time and peace.
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get structured, expert help to disrupt the cycle of OCD and regain control over your life.
          </p>
          
          <Link 
            href="/appointments"
            className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl bg-[#FFAA00] transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center"
          >
            Begin Your Assessment
          </Link>
        </motion.div>
        
      </div>
    </motion.div>
  );
}