"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Added Image import
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaRegLightbulb, 
  FaMedkit, 
  FaCalendarCheck,
  FaPencilRuler,
  FaSearch
} from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';

// --- BRAND COLOR CODES ---
const HIGHLIGHT_BLUE = "#4CAF50"; // Trust, Authority
const ACCENT_ORANGE = "#4CAF50"; // Action, Focus
const SECONDARY_GREEN = "#30A04C"; // Wellness, Hope
const DARK_TEXT = "#1A1A1A"; // Dark Text

export default function ADHDManagementPage() {

  const coreChallenges = [
    { icon: FaBrain, text: "Difficulty focusing and sustaining attention" },
    { icon: GiGears, text: "Challenges with organization and executive function" },
    { icon: FaPencilRuler, text: "Impulsivity and difficulty waiting turns" },
    { icon: FaRegLightbulb, text: "Time management and prioritization issues" },
    { icon: FaSearch, text: "Restlessness or hyperactive behavior (less common in adults)" },
  ];

  const treatmentPhases = [
    { 
      title: "Comprehensive Evaluation", 
      icon: FaSearch, 
      color: HIGHLIGHT_BLUE, // Highlight Blue
      description: "A thorough diagnostic assessment by Michael Nwanna to confirm ADHD and rule out co-occurring conditions."
    },
    { 
      title: "Personalized Medication Management", 
      icon: FaMedkit, 
      color: ACCENT_ORANGE, // Accent Orange
      description: "Careful prescription and fine-tuning of stimulants or non-stimulants tailored to maximize focus and minimize side effects."
    },
    { 
      title: "Behavioral and Coaching Strategies", 
      icon: FaPencilRuler, 
      color: SECONDARY_GREEN, // Secondary Green
      description: "Implementing cognitive behavioral strategies and organizational techniques to improve daily functioning and routine."
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
        
        {/* === 1. HERO: LEFT TEXT / RIGHT IMAGE (/adhd.png) === */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:pr-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black" style={{ color: DARK_TEXT }}>
              Managing ADHD: <span style={{ color: HIGHLIGHT_BLUE }}>Regaining Focus</span> and Control
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-lg mt-4 mb-8">
              ADHD is not a lack of willpower; it’s a difference in brain function. We provide expert psychiatric assessment and personalized strategies to help you channel your strengths and overcome daily obstacles.
            </p>

            <Link 
              href="/appointments"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: ACCENT_ORANGE }}
            >
              <FaCalendarCheck /> Schedule an ADHD Assessment
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
              src="/adhd.png" // Using the specified image path
              alt="Image representing focus, clarity, and organization for ADHD management"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </section>


        {/* === 2. WHAT IS ADHD & DIAGNOSIS SECTION === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-center">
          
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-black" style={{ color: DARK_TEXT, borderBottom: `3px solid ${ACCENT_ORANGE}` }} className="pb-3">
              Precise Assessment and Diagnosis
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Diagnosing ADHD in adults and across the lifespan requires experienced clinical judgment to differentiate it from other conditions like anxiety or depression. Michael Nwanna utilizes a thorough evaluation process rooted in his extensive psychiatric and medical background.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              The goal is to provide an **accurate diagnosis** that confirms your struggles are real, leading directly to a treatment plan that targets your specific needs for **executive function and attentional improvement.**
            </p>
            
          </motion.div>

          {/* Core Challenges List */}
          <motion.div variants={fadeInUp} className="p-8 bg-[#F4F9FA] rounded-2xl shadow-md border-l-4" style={{ borderColor: ACCENT_ORANGE }}>
            <h3 className="text-2xl font-black" style={{ color: DARK_TEXT, marginBottom: '1.5rem' }}>
              Core Challenges We Address
            </h3>
            <ul className="space-y-4">
              {coreChallenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-semibold text-gray-800">
                  <challenge.icon className="text-xl mt-1 flex-shrink-0" style={{ color: ACCENT_ORANGE }} /> {/* Accent Orange */}
                  {challenge.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* === 3. THREE-PHASE TREATMENT APPROACH === */}
        <div className="mt-20">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: DARK_TEXT }}>
              Our 3-Phase Management Strategy
            </h2>
            <p className="text-xl text-gray-600">
              A balanced approach combining clinical expertise with practical support.
            </p>
            <div className="h-1.5 w-24 mx-auto rounded-full mt-4" style={{ backgroundColor: HIGHLIGHT_BLUE }} /> 
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentPhases.map((phase, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white shadow-lg border-t-8 transition hover:shadow-xl flex flex-col items-center text-center h-full"
                style={{ borderColor: phase.color }}
              >
                <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center text-white" style={{ backgroundColor: phase.color }}>
                  <phase.icon size={32} />
                </div>
                
                <h3 className="font-black text-2xl mb-4 leading-tight" style={{ color: DARK_TEXT }}>
                  {phase.title}
                </h3>
                
                <p className="text-base text-gray-700 font-medium leading-relaxed flex-grow">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>

        {/* === 4. CLOSING CTA BLOCK (Focus on the future) === */}
        <motion.div 
          variants={fadeInUp}
          className="mt-20 p-8 md:p-12 rounded-[40px] text-white text-center shadow-2xl"
          style={{ backgroundColor: HIGHLIGHT_BLUE }}
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
            Ready to Unlock Your Potential?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Stop struggling with distraction. Start building the life you know you are capable of living with targeted, expert ADHD support.
          </p>
          
          <Link 
            href="/appointments"
            className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center"
            style={{ backgroundColor: ACCENT_ORANGE }}
          >
            Schedule Your Consultation
          </Link>
        </motion.div>
        
      </div>
    </motion.div>
  );
}