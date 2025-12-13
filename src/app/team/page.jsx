// components/MichaelNwannaProfile.jsx
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaUserMd, 
  FaStethoscope, 
  FaGraduationCap, 
  FaBriefcase, 
  FaShieldAlt,
  FaCalendarCheck,
  FaCommentMedical,
  FaClipboardList 
} from 'react-icons/fa';

export default function MichaelNwannaProfile() {

  const profile = {
    name: "Michael Nwanna",
    title: "APRN, CNP, PMHNP-BC",
    primaryRole: "Psychiatric Nurse Practitioner",
    location: "Minneapolis, Minnesota, United States",
    education: "Eastern Kentucky University",
    certification: "Board Certified in Psychiatric Mental Health Nursing",
    bioSummary: "With over 20 years of experience as a Registered Nurse, Michael provides comprehensive telepsychiatry and in-person psychiatric services, focusing on holistic, evidence-based treatment for diverse mental health conditions. He is dedicated to culturally responsive, trauma-informed care.",
    clinicalFocus: [
      "ADHD", "Depression", "Anxiety", "Bipolar Disorder", "Schizophrenia",
      "PTSD", "OCD", "Substance Use Disorders", "Insomnia", "Trauma-Related Nightmares"
    ],
    servicesProvided: [
      { text: "Psychotherapy (Talk Therapy)", icon: FaCommentMedical },
      { text: "Psychiatric Medication Management", icon: FaStethoscope },
      { text: "Comprehensive Psychiatric Assessment and Diagnosis", icon: FaClipboardList },
      { text: "Culturally Responsive, Trauma-Informed Care", icon: FaShieldAlt },
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggeredContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
        initial="initial"
        animate="animate"
        variants={staggeredContainer}
        className="w-full bg-white pb-24 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* 1. HEADER & PROFILE CARD */}
        <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 md:p-12 rounded-[40px] shadow-xl border-t-8 border-[#306EFF]">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Profile Image Column */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 flex-shrink-0">
              <Image
                src="/clinician-michael-nwanna.jpg" 
                alt={`Profile photo of ${profile.name}`}
                fill
                sizes="250px"
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Title & Credentials Column */}
            <div className="text-center md:text-left flex-grow">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#30A04C] bg-[#F0FFF4] px-3 py-1 rounded-full border border-[#D0FFE0] mb-3">
                 <FaUserMd /> CLINICIAN PROFILE
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight">
                {profile.name}
              </h1>
              <h2 className="text-2xl font-extrabold text-[#306EFF] mb-4">
                {profile.title} | {profile.primaryRole}
              </h2>
              
              <p className="text-lg text-gray-700 max-w-2xl">
                {profile.bioSummary}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-gray-700">
                <span className="flex items-center gap-2">
                  <FaGraduationCap className="text-[#306EFF]" /> {profile.education}
                </span>
                <span className="flex items-center gap-2">
                  <FaBriefcase className="text-[#306EFF]" /> 20+ Years Nursing Experience
                </span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="md:ml-auto mt-6 md:mt-0">
                <Link 
                    href="/appointments"
                    className="px-8 py-4 rounded-xl font-black text-lg text-white shadow-lg bg-[#FFAA00] transition transform hover:-translate-y-0.5 hover:shadow-2xl flex items-center gap-3 whitespace-nowrap"
                >
                    <FaCalendarCheck /> Book Appointment
                </Link>
            </div>
          </div>
        </motion.div>

        {/* 2. DETAILED BIOGRAPHY & EXPERIENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-[#1A1A1A] border-b pb-3 border-gray-100">
                Comprehensive Psychiatric Services
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
                As a Psychiatric Nurse Practitioner, I provide comprehensive telepsychiatry and in-person psychiatric services to individuals across the lifespan. My clinical focus includes the assessment, diagnosis, and treatment of a wide range of mental health conditions, including ADHD, depression, anxiety, bipolar disorder, schizophrenia, PTSD, OCD, substance abuse, substance use disorders, adjustment disorders, insomnia, and trauma-related nightmares.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                I offer both psychotherapy and psychiatric medication management, creating individualized, evidence-based treatment plans that promote recovery, resilience, and long-term mental wellness. At GoodPlace Mental Health Services, I am dedicated to delivering culturally responsive, trauma-informed care that empowers patients to lead fulfilling and stable lives.
            </p>

            <h3 className="text-3xl font-black text-[#1A1A1A] border-b pb-3 border-gray-100 pt-4">
                Extensive Clinical and Medical Background
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
                In addition to my psychiatric role, I have worked as a Registered Nurse at major hospitals, delivering high-quality medical and post-surgical care across specialties including orthopedics, gastroenterology, urology, surgical oncology, and medical oncology.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed italic">
                With over 20 years of experience as a bedside nurse in diverse settings, including critical care, medical-surgical, and mental health, I have provided direct patient care across multiple environments. This background informs my holistic, integrated approach to psychiatric care.
            </p>
          </motion.div>

          <div className="lg:col-span-1 space-y-12">
            
            <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 rounded-2xl shadow-md border-l-4 border-[#30A04C]">
              <h4 className="text-2xl font-black text-[#1A1A1A] mb-4">
                Core Services
              </h4>
              <ul className="space-y-4">
                {profile.servicesProvided.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-semibold text-gray-800">
                    <service.icon className="text-[#30A04C] text-xl flex-shrink-0" /> 
                    {service.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 rounded-2xl shadow-md border-l-4 border-[#306EFF]">
              <h4 className="text-2xl font-black text-[#1A1A1A] mb-4">
                Conditions Treated
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.clinicalFocus.map((condition, i) => (
                  <span key={i} className="bg-white text-sm font-semibold text-[#306EFF] px-3 py-1 rounded-full border border-[#306EFF]/50 shadow-sm transition hover:bg-[#306EFF] hover:text-white">
                    {condition}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
