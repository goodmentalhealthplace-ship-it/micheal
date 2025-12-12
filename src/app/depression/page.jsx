"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaSun, 
  FaCloudShowersHeavy, 
  FaUserFriends, 
  FaPills, 
  FaBrain, 
  FaHeartbeat,
  FaCalendarCheck 
} from 'react-icons/fa';
import { MdOutlineLocalHospital } from 'react-icons/md';

// --- BRAND COLOR CODES ---
// Highlight Blue: #306EFF (Trust, Authority)
// Accent Orange: #FFAA00 (Action, Focus)
// Secondary Green: #30A04C (Wellness, Hope)
// Dark Text: #1A1A1A

export default function DepressionTreatmentPage() {

  const commonSymptoms = [
    { icon: FaCloudShowersHeavy, text: "Persistent feelings of sadness or 'emptiness'" },
    { icon: FaBrain, text: "Loss of interest or pleasure in hobbies and activities" },
    { icon: FaHeartbeat, text: "Changes in appetite or weight (loss or gain)" },
    { icon: FaSun, text: "Difficulty sleeping (insomnia) or sleeping too much (hypersomnia)" },
    { icon: FaUserFriends, text: "Feeling worthless, hopeless, or excessively guilty" },
  ];

  const treatmentOptions = [
    { 
      title: "Psychotherapy (Talk Therapy)", 
      icon: FaBrain, 
      color: "#30A04C", // Secondary Green
      description: "Utilizing evidence-based approaches like CBT and IPT to explore thought patterns and coping mechanisms."
    },
    { 
      title: "Psychiatric Medication Management", 
      icon: FaPills, 
      color: "#306EFF", // Highlight Blue
      description: "Careful prescription and monitoring of antidepressants (SSRIs, SNRIs, etc.) tailored to your unique biology."
    },
    { 
      title: "Integrated Care Planning", 
      icon: MdOutlineLocalHospital, 
      color: "#FFAA00", // Accent Orange
      description: "A holistic approach that considers lifestyle, nutrition, and coordinates with primary care physicians."
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
        
        {/* === 1. HERO & VALIDATION BLOCK === */}
        <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 md:p-16 rounded-[40px] shadow-xl border-t-8 border-[#306EFF] text-center">
          
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight mb-4">
            Finding <span className="text-[#30A04C]">Clarity</span> Through Depression
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
            Depression is a treatable medical condition, not a personal failing. You are not alone, and help is available. We offer expert, compassionate care to guide you toward stability and well-being.
          </p>

          <Link 
            href="/appointments"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl bg-[#FFAA00] transition transform hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <FaCalendarCheck /> Start Your Treatment Journey
          </Link>
        </motion.div>

        {/* === 2. SYMPTOMS & UNDERSTANDING === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-black text-[#1A1A1A] border-b pb-3 border-gray-100">
              Understanding Major Depressive Disorder
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Depression (Major Depressive Disorder) is characterized by persistent low mood and a loss of interest in activities, significantly impacting daily life. At GoodPlace, Michael Nwanna approaches depression holistically, viewing it through the lens of biological, psychological, and social factors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              His **20+ years of diverse clinical experience** allows him to create treatment plans that integrate psychiatric medication management with focused psychotherapy techniques, ensuring care is both effective and empathetic.
            </p>
          </motion.div>

          {/* Symptom Grid */}
          <motion.div variants={fadeInUp} className="p-8 bg-[#F4F9FA] rounded-2xl shadow-md border-l-4 border-[#306EFF]">
            <h3 className="text-2xl font-black text-[#1A1A1A] mb-6">
              Common Signs We Treat
            </h3>
            <ul className="space-y-4">
              {commonSymptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-semibold text-gray-800">
                  <symptom.icon className="text-[#306EFF] text-xl mt-1 flex-shrink-0" /> {/* Highlight Blue */}
                  {symptom.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* === 3. OUR TREATMENT APPROACH (3-Column) === */}
        <div className="mt-20">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">
              Our Integrated Path to Recovery
            </h2>
            <p className="text-xl text-gray-600">
              Michael Nwanna utilizes a comprehensive, evidence-based approach tailored to your specific needs.
            </p>
            <div className="h-1.5 w-24 bg-[#30A04C] mx-auto rounded-full mt-4" /> {/* Secondary Green */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentOptions.map((option, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white shadow-lg border-t-8 transition hover:shadow-xl flex flex-col items-center text-center h-full"
                style={{ borderColor: option.color }}
              >
                <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center text-white" style={{ backgroundColor: option.color }}>
                  <option.icon size={32} />
                </div>
                
                <h3 className="font-black text-gray-950 text-2xl mb-4 leading-tight">
                  {option.title}
                </h3>
                
                <p className="text-base text-gray-700 font-medium leading-relaxed flex-grow">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === 4. CLOSING CTA BLOCK === */}
        <motion.div 
          variants={fadeInUp}
          className="mt-20 bg-[#1B3C6A] p-8 md:p-12 rounded-[40px] text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
            It is time to feel better.
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Take the first step toward managing your depression and reclaiming your life. Book a confidential consultation today.
          </p>
          
          <Link 
            href="/appointments"
            className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl bg-[#FFAA00] transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center"
          >
            Schedule Your Assessment
          </Link>
        </motion.div>
        
      </div>
    </motion.div>
  );
}