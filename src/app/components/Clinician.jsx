"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUserMd, FaStethoscope, FaClipboardList } from 'react-icons/fa';

export default function MichaelNwannaProfile() {

  const expertisePoints = [
    { icon: FaUserMd, text: "APRN, CNP, PMHNP-BC specializing in Psychiatric services." },
    { icon: FaStethoscope, text: "20+ years of diverse experience as a Registered Nurse (Mental Health, Critical Care, Medical-Surgical)." },
    { icon: FaClipboardList, text: "Clinical focus on holistic treatment, including psychotherapy and psychiatric medication management." },
  ];
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="w-full bg-[#F4F9FA] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4 tracking-tight">
            Meet Our Clinician, Michael Nwanna
          </h2>
          <div className="h-1.5 w-24 bg-[#306EFF] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/3 p-8 bg-[#1B3C6A] text-white flex flex-col items-center justify-center"
          >
            <div className="relative w-48 h-48 mb-6">
              <Image
                src="/clinician-michael-nwanna.jpg" 
                alt="Profile photo of Michael Nwanna"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="rounded-full object-cover border-4 border-[#306EFF] shadow-lg"
              />
            </div>

            <h3 className="font-extrabold text-3xl mb-1">
              Michael Nwanna
            </h3>
            <p className="text-lg font-semibold text-[#FFAA00] mb-6">
              APRN, CNP, PMHNP-BC
            </p>

            <div className="space-y-3 text-left w-full max-w-xs">
              {expertisePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <point.icon className="text-[#306EFF] text-xl mt-1 flex-shrink-0" />
                  <p className="text-sm font-medium leading-snug text-gray-200">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

          <div className="w-full lg:w-2/3 p-8 md:p-12 space-y-6">
            <motion.h4 variants={itemVariants} className="font-black text-2xl text-[#1A1A1A]">
                Holistic, Integrated Psychiatric Care
            </motion.h4>
            
            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed">
                As a Psychiatric Nurse Practitioner, I provide comprehensive telepsychiatry and in-person psychiatric services. My focus includes the assessment, diagnosis, and treatment of a wide range of mental health conditions, including ADHD, depression, anxiety, bipolar disorder, schizophrenia, PTSD, OCD, substance use disorders, insomnia, and trauma-related nightmares.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed font-bold">
                I offer both psychotherapy and psychiatric medication management, creating individualized, evidence-based treatment plans that promote recovery, resilience, and long-term mental wellness. I am dedicated to delivering culturally responsive, trauma-informed care that empowers patients to lead fulfilling and stable lives.
            </motion.p>

            <motion.h4 variants={itemVariants} className="font-black text-2xl text-[#1A1A1A] pt-4 border-t border-gray-100">
                Extensive Clinical Background
            </motion.h4>
            
            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed">
                With over 20 years of experience as a bedside nurse in diverse settings, including critical care, medical-surgical, and mental health, I have a deep understanding of both the physical and psychological needs of patients. This extensive background informs my holistic, integrated approach to psychiatric care, ensuring safe medication administration and strong patient advocacy.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 text-center lg:text-left">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-lg font-bold text-white px-8 py-4 rounded-2xl bg-[#4CAF50] hover:bg-opacity-90 transition shadow-lg"
                >
                    Book a Consult with Michael →
                </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
