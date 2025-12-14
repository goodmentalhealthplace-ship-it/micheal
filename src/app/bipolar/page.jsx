"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaCalendarCheck, 
  FaChartLine, 
  FaToggleOff, 
  FaPills, 
  FaUserFriends, 
  FaRegCheckCircle 
} from 'react-icons/fa';

// --- BRAND COLOR CODES ---
const HIGHLIGHT_BLUE = "#4CAF50"; // Trust, Authority
const ACCENT_ORANGE = "#4CAF50"; // Action, Focus
const SECONDARY_GREEN = "#30A04C"; // Wellness, Hope
const DARK_TEXT = "#1A1A1A"; // Dark Text

export default function BipolarDisorderPage() {

  const stabilityPillars = [
    { 
      title: "Mood Stabilizers & Medication", 
      icon: FaPills, 
      color: HIGHLIGHT_BLUE, 
      description: "Careful management of medications (e.g., mood stabilizers, antipsychotics) tailored to your specific cycle pattern."
    },
    { 
      title: "Psychotherapy & Psychoeducation", 
      icon: FaUserFriends, 
      color: ACCENT_ORANGE, 
      description: "Therapy focused on recognizing triggers, managing emotional regulation, and improving interpersonal rhythm."
    },
    { 
      title: "Routine & Lifestyle Management", 
      icon: FaRegCheckCircle, 
      color: SECONDARY_GREEN, 
      description: "Strategies to stabilize sleep, diet, and daily routine, which are crucial anchors for mood stability."
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
        
        {/* === 1. HERO: LEFT TEXT / RIGHT IMAGE (/bipolar.png) === */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:pr-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black" style={{ color: DARK_TEXT }}>
              Achieving Lasting <span style={{ color: SECONDARY_GREEN }}>Stability</span> with Bipolar Disorder
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-lg mt-4 mb-8">
              Bipolar disorder involves significant shifts in mood, energy, and activity levels. We provide expert, compassionate care focused on accurate diagnosis and creating a stable, personalized long-term management plan.
            </p>

            <Link 
              href="/appointments"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: ACCENT_ORANGE }}
            >
              <FaCalendarCheck /> Schedule a Comprehensive Evaluation
            </Link>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="w-full h-80 lg:h-[400px] relative overflow-hidden rounded-[40px] shadow-2xl"
          >
            <Image 
              src="/bipolar.png" // Using the specified image path
              alt="Image representing stability, balance, and mood regulation for Bipolar Disorder"
              layout="fill"
              objectFit="contain" // Changed to object-contain for full visibility
              priority
            />
          </motion.div>
        </section>

        {/* === 2. Understanding the Bipolar Spectrum === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">
          
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-black text-[#1A1A1A] border-b pb-3 border-gray-100">
              Precise Diagnosis on the Bipolar Spectrum
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Diagnosis is the first critical step. Bipolar disorder exists on a spectrum (Type I, Type II, Cyclothymia), each with distinct patterns of **manic/hypomanic** and **depressive** episodes. Misdiagnosis is common and can be dangerous, which is why an expert psychiatric assessment is non-negotiable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Michael Nwanna utilizes his medical expertise to differentiate between the types and ensure your treatment targets the core mechanisms of your specific disorder for optimal control.
            </p>
            
            {/* Image Placeholder 1: Visualizing the mood swings - Object-contain is already applied here */}
            <div className="w-full h-64 relative rounded-xl overflow-hidden mt-6 shadow-lg border border-gray-100">
                <Image
                    src="/bipolar-mood-cycle.jpg"
                    alt="Graph illustrating the oscillating mood states of Bipolar Disorder (Mania/Hypomania and Depression)"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain" // Use object-contain to ensure the full graph/chart is visible
                />
            </div>
            {/* FILE NAME: bipolar-mood-cycle.jpg */}
            
          </motion.div>

          {/* Mood States Summary */}
          <motion.div variants={fadeInUp} className="p-8 bg-[#F4F9FA] rounded-2xl shadow-md border-l-4 border-[#FFAA00]">
            <h3 className="text-2xl font-black text-[#1A1A1A] mb-6">
              The Two Poles of Bipolarity
            </h3>
            
            <div className="space-y-6">
                <div>
                    <span className="flex items-center gap-3 text-xl font-bold text-[#306EFF] mb-2">
                        <FaChartLine className="text-2xl flex-shrink-0" /> Manic / Hypomanic States
                    </span>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 text-base">
                        <li>Elevated, expansive, or irritable mood.</li>
                        <li>Increased energy, reduced sleep need.</li>
                        <li>Racing thoughts and pressured speech.</li>
                    </ul>
                </div>
                
                <hr className="border-gray-200" />
                
                <div>
                    <span className="flex items-center gap-3 text-xl font-bold text-[#306EFF] mb-2">
                        <FaToggleOff className="text-2xl flex-shrink-0" /> Depressive States
                    </span>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 text-base">
                        <li>Profound sadness, loss of interest, or pleasure.</li>
                        <li>Fatigue, difficulty concentrating.</li>
                        <li>Changes in appetite and sleep patterns.</li>
                    </ul>
                </div>
            </div>
          </motion.div>
        </div>

        {/* === 3. THREE PILLARS OF STABILITY === */}
        <div className="mt-20">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">
              Our 3 Pillars for Long-Term Stability
            </h2>
            <p className="text-xl text-gray-600">
              Management involves careful pharmacological control combined with therapeutic and lifestyle anchors.
            </p>
            <div className="h-1.5 w-24 bg-[#FFAA00] mx-auto rounded-full mt-4" /> {/* Accent Orange */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stabilityPillars.map((pillar, i) => (
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
          
          {/* Image Placeholder 2: Stability and support - Object-contain is already applied here */}
          <div className="w-full h-80 relative rounded-xl overflow-hidden mt-12 shadow-2xl">
              <Image
                  src="/bipolar-stability-support.jpg"
                  alt="Illustration of stable mood management (e.g., a person standing balanced on a life raft, symbolizing stability)"
                  fill
                  sizes="100vw"
                  className="object-contain" // Use object-contain
              />
          </div>
          {/* FILE NAME: bipolar-stability-support.jpg */}
        </div>

        {/* === 4. CLOSING CTA BLOCK === */}
        <motion.div 
          variants={fadeInUp}
          className="mt-20 bg-[#1B3C6A] p-8 md:p-12 rounded-[40px] text-white text-center shadow-2xl"
          style={{ backgroundColor: HIGHLIGHT_BLUE }}
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
            Ready to find your anchor of stability?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get the specialized expertise needed to manage your condition and lead a predictable, fulfilling life.
          </p>
          
          <Link 
            href="/appointments"
            className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center"
            style={{ backgroundColor: ACCENT_ORANGE }}
          >
            Book Your Expert Consultation
          </Link>
        </motion.div>
        
      </div>
    </motion.div>
  );
}