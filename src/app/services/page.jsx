"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaStar, FaCheckCircle, FaLaptopMedical, FaShieldAlt } from "react-icons/fa";
import { MdMedicalServices, MdOutlinePsychology, MdOutlineMonitorHeart } from "react-icons/md";
import { BiConversation } from "react-icons/bi";

export default function ServicesPage() {
  // === BRAND COLORS from Logo (Defined once for consistency) ===
  const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
  const BRAND_SECONDARY = "#4CAF50"; // Bright Green
  const BRAND_ACCENT = "#FF9800"; // Warm Orange

  // --- Data for Individual Services ---
  const servicesData = [
    {
      title: "Psychiatric Evaluation & Assessment",
      slug: "evaluation",
      icon: MdOutlineMonitorHeart,
      image: "/psychiatric-evaluation.jpg",
      description: "A thorough initial assessment with a qualified psychiatric provider to establish a comprehensive understanding of your mental health history, current challenges, and diagnosis. This critical first step informs all subsequent treatment planning.",
      color: BRAND_PRIMARY,
      details: [
        "In-depth patient history and symptom review.",
        "Establishing a working diagnosis.",
        "Collaborative goal setting for treatment.",
        "Foundation for personalized care plan.",
      ]
    },
    {
      title: "Medication Management",
      slug: "medication",
      icon: MdMedicalServices,
      image: "/medication-management.jpg",
      description: "Careful prescription, monitoring, and adjustment of psychiatric medications. Our goal is to find the optimal combination and dosage to effectively manage symptoms while prioritizing your safety and minimizing side effects.",
      color: BRAND_SECONDARY,
      details: [
        "Prescription and refills management.",
        "Regular monitoring and safety checks.",
        "Personalized dosing adjustments.",
        "Integration with therapy (if applicable).",
      ]
    },
    {
      title: "Psychotherapy / Counseling",
      slug: "therapy",
      icon: BiConversation,
      image: "/psychotherapy.jpg",
      description: "Individualized talk therapy sessions focused on helping you gain insight, develop coping skills, process trauma, and achieve emotional growth. We offer evidence-based approaches tailored to your needs.",
      color: BRAND_ACCENT,
      details: [
        "Cognitive Behavioral Therapy (CBT).",
        "Dialectical Behavior Therapy (DBT) skills.",
        "Trauma-informed care and support.",
        "Goal-oriented emotional support.",
      ]
    },
    {
      title: "Telepsychiatry (Virtual Care)",
      slug: "telepsychiatry",
      icon: FaLaptopMedical,
      image: "/telepsychiatry.jpg",
      description: "Receive all our services, including evaluations, medication management, and therapy, securely and conveniently online. Access expert care from the comfort and privacy of your home anywhere in Texas.",
      color: BRAND_PRIMARY,
      details: [
        "Convenient, flexible scheduling.",
        "HIPAA-compliant, secure platform.",
        "No commute or waiting room stress.",
        "Same professional standard of care.",
      ]
    },
  ];

  // --- Animation Variants ---
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };


  return (
    <div className="w-full bg-white">
      
      {/* ================= 1. SERVICES PAGE HERO/BANNER ================= */}
      <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/services-hero-banner.jpg" 
          alt="Abstract image representing mental health services and clarity"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-center text-white p-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4">
            Our Comprehensive <span style={{ color: BRAND_ACCENT }}>Mental Health</span> Services
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto">
            Dedicated care tailored to your unique journey toward emotional wellness and stability.
          </p>
          <Link 
            href="/appointments"
            style={{ 
              backgroundColor: BRAND_ACCENT, 
              boxShadow: `0 8px 25px -8px ${BRAND_ACCENT}80` 
            }}
            className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-xl transition transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <FaCalendarAlt className="text-xl" /> Book a Consultation
          </Link>
        </motion.div>
      </section>

      {/* ================= 2. INDIVIDUAL SERVICE SECTIONS ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-950 text-center mb-4 tracking-tight"
        >
          Your Path to Wellness, Defined
        </motion.h2>
        <div style={{ backgroundColor: BRAND_PRIMARY }} className="h-1.5 w-24 mx-auto mb-16 rounded-full" />
        
        {servicesData.map((service, i) => (
          <motion.div
            key={service.slug}
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 lg:mb-32 p-6 md:p-10 rounded-[40px] border ${i % 2 === 0 ? 'bg-gray-50/70 border-gray-100' : 'bg-white border-white'} `}
          >
            
            {/* Image Column (Flips order based on index) */}
            <motion.div 
                variants={cardVariants}
                className={`relative h-64 md:h-96 w-full ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
                <Image
                    src={service.image}
                    alt={`Illustration for ${service.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl shadow-xl border-4"
                    style={{ borderColor: service.color }}
                />
            </motion.div>

            {/* Content Column */}
            <div className={`space-y-6 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-4">
                    <service.icon size={48} style={{ color: service.color }} />
                    <h3 className="text-3xl md:text-4xl font-black leading-tight text-gray-950" style={{ color: service.color }}>
                        {service.title}
                    </h3>
                </div>

                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    {service.description}
                </p>

                {/* Key Details List */}
                <ul className="space-y-3 text-gray-700">
                    {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                            <FaCheckCircle className="mt-1 flex-shrink-0" size={18} style={{ color: service.color }} />
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>

                {/* Service CTA */}
                <Link 
                    href={`/${service.slug}`}
                    style={{ 
                        backgroundColor: service.color, 
                        boxShadow: `0 4px 15px -4px ${service.color}50` 
                    }}
                    className="mt-6 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white transition transform hover:-translate-y-0.5 hover:shadow-xl"
                >
                    Learn More & Start Treatment
                </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= 3. UNIQUE SELLING PROPOSITION (USP) ================= */}
      <section 
        style={{ backgroundColor: BRAND_PRIMARY }}
        className="w-full py-20 text-white"
      >
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-7xl mx-auto px-6 lg:px-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            The GoodPlace Difference
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            We ensure our services are seamless, secure, and focused entirely on your successful recovery and stability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <FaShieldAlt size={40} className="mx-auto mb-4" style={{ color: BRAND_SECONDARY }} />
                <h3 className="font-extrabold text-xl mb-2">HIPAA Compliant</h3>
                <p className="text-sm text-white/70">Your privacy and data security are our highest priority.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <FaStar size={40} className="mx-auto mb-4" style={{ color: BRAND_ACCENT }} />
                <h3 className="font-extrabold text-xl mb-2">Texas Licensed Experts</h3>
                <p className="text-sm text-white/70">Care from qualified professionals licensed in Texas.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <MdOutlinePsychology size={40} className="mx-auto mb-4" style={{ color: BRAND_SECONDARY }} />
                <h3 className="font-extrabold text-xl mb-2">Integrated Approach</h3>
                <p className="text-sm text-white/70">Combining medication and therapy for holistic results.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= 4. FINAL CTA ================= */}
      <section className="w-full py-20 bg-gray-50/70">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto px-6 lg:px-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-6 leading-snug tracking-tight">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Booking an appointment is the first confidential step towards clarity, balance, and a better you.
          </p>

          <Link 
            href="/appointments"
            style={{ 
              backgroundColor: BRAND_ACCENT, 
              color: 'white',
              boxShadow: `0 10px 25px -8px ${BRAND_ACCENT}80` 
            }}
            className="px-10 py-5 rounded-2xl font-black text-xl transition transform hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center gap-3"
          >
            <FaCalendarAlt className="text-xl" /> Schedule Online Now
          </Link>
        </motion.div>
      </section>

    </div>
  );
}