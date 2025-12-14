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

  // Define key colors for easier maintenance
  const ACCENT_COLOR_BLUE = '#306EFF'; // Primary brand blue
  const ACCENT_COLOR_GREEN = '#30A04C'; // Secondary success green
  const CTA_COLOR = 'bg-green-600'; // Standard Tailwind green for CTA
  const DARK_TEXT = '#1A1A1A';

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

        {/* === 1. HERO: LEFT TEXT / RIGHT IMAGE (Two-Column Layout) === */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          
          {/* Left Column: Text, Credentials & CTA */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:pr-10"
          >
            <div className="inline-flex items-center gap-2 text-sm font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200 mb-3">
              <FaUserMd /> CLINICIAN PROFILE
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black" style={{ color: DARK_TEXT }}>
              Meet <span style={{ color: ACCENT_COLOR_BLUE }}>{profile.name}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-extrabold text-blue-600 mb-4">
              {profile.title} | {profile.primaryRole}
            </h2>

            <p className="text-lg md:text-xl text-gray-700 max-w-lg mt-4 mb-6">
              {profile.bioSummary}
            </p>
            
            {/* Quick Facts */}
            <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3 text-base font-bold text-gray-700">
              <span className="flex items-center gap-2">
                <FaGraduationCap className="text-blue-600" /> {profile.education}
              </span>
              <span className="flex items-center gap-2">
                <FaBriefcase className="text-blue-600" /> 20+ Years Nursing Experience
              </span>
            </div>

            {/* CTA Button */}
            <Link
              href="/appointments"
              className={`inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl ${CTA_COLOR}`}
            >
              <FaCalendarCheck /> Book Appointment
            </Link>
          </motion.div>

          {/* Right Column: Large Profile Image */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="w-full h-96 lg:h-[500px] relative overflow-hidden rounded-[40px] shadow-2xl bg-gray-100"
          >
            <Image
              // The original image is used here, now sized to fill the large hero container
              src="/clinician-michael-nwanna.jpg" 
              alt={`Profile photo of ${profile.name}`}
              layout="fill"
              objectFit="cover" // Use cover to ensure the image fills the space
              priority
              // Remove the rounded-full border-4 classes since the container is rounded-[40px]
            />
          </motion.div>
        </section>


        {/* 2. DETAILED BIOGRAPHY, SERVICES, & FOCUS (3-Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">

          {/* Left Column (2/3 Width): Detailed Bio */}
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

          {/* Right Column (1/3 Width): Services & Focus Blocks */}
          <div className="lg:col-span-1 space-y-12">

            {/* Core Services */}
            <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 rounded-2xl shadow-md border-l-4 border-l-green-600">
              <h4 className="text-2xl font-black" style={{ color: DARK_TEXT }}>
                Core Services
              </h4>
              <ul className="space-y-4 mt-4">
                {profile.servicesProvided.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-semibold text-gray-800">
                    <service.icon className="text-green-600 text-xl flex-shrink-0" />
                    {service.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Conditions Treated */}
            <motion.div variants={fadeInUp} className="bg-[#F8F9FA] p-8 rounded-2xl shadow-md border-l-4 border-l-blue-600">
              <h4 className="text-2xl font-black" style={{ color: DARK_TEXT }}>
                Conditions Treated
              </h4>
              <div className="flex flex-wrap gap-2 mt-4">
                {profile.clinicalFocus.map((condition, i) => (
                  <span key={i} className="bg-white text-sm font-semibold text-blue-600 px-3 py-1 rounded-full border border-blue-300 shadow-sm transition hover:bg-blue-50 hover:border-blue-600">
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