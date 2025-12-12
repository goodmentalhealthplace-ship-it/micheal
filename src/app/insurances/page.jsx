"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaCalendarCheck, 
  FaHandshake, 
  FaShieldAlt,
  FaCheckCircle,
  FaPhone
} from 'react-icons/fa';

// --- BRAND COLOR CODES ---
// Highlight Blue: #306EFF (Trust, Authority)
// Accent Orange: #FFAA00 (Action, Focus)
// Secondary Green: #30A04C (Wellness, Hope)
// Dark Text: #1A1A1A

export default function InsuranceCoveragePage() {

  const insuranceLogos = [
    { src: "/insurances1.png", alt: "Insurance Provider 1" },
    { src: "/insurances2.png", alt: "Insurance Provider 2" },
    { src: "/insurances3.png", alt: "Insurance Provider 3" },
    { src: "/insurances4.png", alt: "Insurance Provider 4" },
    { src: "/insurances5.png", alt: "Insurance Provider 5" },
    { src: "/insurances6.png", alt: "Insurance Provider 6" },
    { src: "/insurances7.png", alt: "Insurance Provider 7" },
    { src: "/insurances8.png", alt: "Insurance Provider 8" },
  ];
  
  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };
  
  const logoItem = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.4
      } 
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 20px rgba(48, 110, 255, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full bg-white pb-24 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* === 1. HERO HEADER & CTA === */}
        <motion.div variants={fadeInUp} className="bg-[#F4F9FF] p-8 md:p-16 rounded-[40px] shadow-xl border-t-8 border-[#306EFF] text-center">
          
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#306EFF] bg-white px-3 py-1 rounded-full border border-[#D0E0FF] mb-4">
             <FaHandshake /> COVERAGE & FINANCIAL PEACE OF MIND
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight mb-4">
            We Accept Major <span className="text-[#306EFF]">Insurance Plans</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
            Access expert psychiatric care without financial burden. We work with a wide range of providers to make your mental health a priority.
          </p>

          <Link 
            href="/appointments"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl bg-[#FFAA00] transition transform hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <FaCalendarCheck /> Book Your Consultation Now
          </Link>
        </motion.div>

        {/* === 2. INSURANCE LOGO GRID === */}
        <motion.div variants={fadeInUp} className="mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] text-center mb-12">
                Trusted Partners in Care
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-6 md:p-10 bg-gray-50 rounded-[30px] border border-gray-100">
                {insuranceLogos.map((logo, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={logoItem}
                        whileHover="hover"
                        className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center h-24 sm:h-32"
                    >
                        {/* IMPORTANT: Ensure Image size is large enough (e.g., 200x80) 
                            The 'object-contain' class ensures the full logo is visible without cropping.
                        */}
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={200}
                            height={80}
                            className="object-contain w-auto h-full"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* === 3. Verification & Clarity Section === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">
          
          {/* Column A: How to Verify */}
          <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-3xl border-2 border-[#30A04C]/50 bg-[#F0FFF4] shadow-lg">
            <h3 className="text-3xl font-black text-[#30A04C] mb-4 flex items-center gap-3">
              <FaCheckCircle /> How to Verify Your Coverage
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              **Verification is simple and recommended.** While we partner with the plans listed above, coverage details can vary based on your specific policy, deductible, and network status (in-network or out-of-network).
            </p>
            
            <ol className="list-decimal list-inside text-lg text-gray-800 space-y-3 pl-4 font-medium">
                <li><span className="font-bold">Contact Your Insurer:</span> Call the Member Services number on the back of your insurance card.</li>
                <li><span className="font-bold">Ask Key Questions:</span> Inquire about coverage for "Psychiatric Nurse Practitioner" services (specifically Michael Nwanna, APRN, CNP, PMHNP-BC) and if prior authorization is needed.</li>
                <li><span className="font-bold">Confirm Network:</span> Ask if our services are "in-network" for your plan.</li>
            </ol>

            <Link 
                href="tel:8005551234"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#30A04C] hover:bg-opacity-90 transition shadow-md"
            >
                <FaPhone /> Call Your Insurer Now
            </Link>
          </motion.div>

          {/* Column B: Self-Pay & Transparency */}
          <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-3xl border-2 border-[#FFAA00]/50 bg-[#FFFAF2] shadow-lg">
            <h3 className="text-3xl font-black text-[#FFAA00] mb-4 flex items-center gap-3">
              <FaShieldAlt /> Self-Pay & Fee Transparency
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              For patients without coverage or those who prefer privacy, transparent self-pay rates are available. We believe financial clarity should never be a barrier to mental health care.
            </p>
            
            <ul className="list-disc list-inside text-lg text-gray-800 space-y-3 pl-4 font-medium">
                <li>**Initial Assessment (60-75 min):** $[Fee 1]</li>
                <li>**Follow-up Medication Management (30 min):** $[Fee 2]</li>
                <li>**Cancellation Policy:** We require 24 hours notice to avoid a late cancellation fee.</li>
            </ul>

            <Link 
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#FFAA00] hover:bg-opacity-90 transition shadow-md"
            >
                View Full Fee Schedule
            </Link>
          </motion.div>
        </div>

        {/* === 4. CLOSING CTA BLOCK (Final reassurance) === */}
        <motion.div 
          variants={fadeInUp}
          className="mt-20 bg-[#1B3C6A] p-8 md:p-12 rounded-[40px] text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
            Need Help Checking Your Benefits?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our administrative team is here to assist you with the verification process and answer any billing questions you may have.
          </p>
          
          <Link 
            href="/contact"
            className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl bg-[#306EFF] transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center"
          >
            Contact Billing Support
          </Link>
        </motion.div>
        
      </div>
    </motion.div>
  );
}