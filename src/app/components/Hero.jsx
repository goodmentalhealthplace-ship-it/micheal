"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdMedicalServices, MdLaptopMac, MdOutlineHealthAndSafety, MdOutlineVerified } from "react-icons/md"; 
import { BiConversation } from "react-icons/bi";
import { FaUserMd, FaShieldAlt } from "react-icons/fa"; 

export default function Hero() {
  // === BRAND COLORS from Logo ===
  const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
  const BRAND_SECONDARY = "#4CAF50"; // Bright Green
  const BRAND_ACCENT = "#FF9800"; // Warm Orange (for CTAs)
  const BRAND_LIGHT_BG = "#F4F9FA"; // Retain a light background color

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const services = [
    { 
      title: "Medication Management", 
      icon: MdMedicalServices, 
      description: "Monitoring and adjusting medication to optimize treatment and safety.", 
      href: "/medication" 
    },
    { 
      title: "Psychiatric Evaluation", 
      icon: FaUserMd, 
      description: "Comprehensive mental-health assessment and personalized professional diagnosis.", 
      href: "/evaluation" 
    },
    { 
      title: "Psychotherapy", 
      icon: BiConversation, 
      description: "Supportive emotional guidance to help you heal, grow, and regain balance.", 
      href: "/therapy" 
    },
    { 
      title: "Telepsychiatry", 
      icon: MdLaptopMac, 
      description: "Expert mental-health care securely from the comfort and privacy of home.", 
      href: "/telepsychiatry" 
    },
  ];

  return (
    <section className="w-full bg-white pb-24 overflow-x-hidden">
      
      {/* ================= HERO TOP ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-16 pt-24 items-center">

        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
          {/* Tag line with Dark Blue/Teal color */}
          <div 
            style={{ 
              color: BRAND_PRIMARY, 
              backgroundColor: `${BRAND_PRIMARY}10`, // 10% opacity for light background
              borderColor: `${BRAND_PRIMARY}30` // 30% opacity for light border
            }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-black px-4 py-1 rounded-full border mb-6"
          >
            <FaShieldAlt className="text-sm" /> CONFIDENTIAL & PROFESSIONAL CARE
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-tight tracking-tight">
            Elevating Emotional Wellness and <span style={{ color: BRAND_SECONDARY }}>Clarity</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg mb-10 font-medium">
            Compassionate, professional mental-health care designed to help you 
            regain clarity, balance, and peace.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:hidden flex justify-center mb-10"
          >
             <div 
                style={{ backgroundColor: BRAND_LIGHT_BG, borderColor: BRAND_LIGHT_BG }}
                className="p-4 rounded-[40px] shadow-2xl shadow-blue-100/40"
              >
                <Image 
                    src="/hero.png"
                    width={550}
                    height={550}
                    alt="Illustration of health clarity"
                    className="rounded-3xl object-cover w-full h-auto"
                />
             </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA with Warm Orange color */}
            <Link 
              href="/appointments"
              style={{ backgroundColor: BRAND_ACCENT }}
              className="px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center"
            >
              Book Appointment
            </Link>
            
            <Link 
              href="/insurances"
              className="px-10 py-5 rounded-2xl font-black text-xl text-gray-900 border-2 border-gray-100 bg-white hover:bg-gray-50 transition flex items-center justify-center"
            >
              Check Insurance
            </Link>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-gray-700 text-sm font-bold">
            {/* Verification icons with Dark Blue/Teal color */}
            <span className="flex items-center gap-2"><MdOutlineVerified style={{ color: BRAND_PRIMARY }} className="text-xl" /> Licensed in Texas</span>
            <span className="flex items-center gap-2"><MdOutlineHealthAndSafety style={{ color: BRAND_PRIMARY }} className="text-xl" /> Secure Telehealth</span>
          </div>

        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex relative justify-center lg:justify-end"
        >
            <div 
              style={{ backgroundColor: BRAND_LIGHT_BG }}
              className="p-6 rounded-[50px] shadow-2xl shadow-blue-50"
            >
                <Image 
                    src="/hero.png"
                    width={550}
                    height={550}
                    alt="Clarity Illustration"
                    className="rounded-[40px] object-cover"
                />
            </div>
        </motion.div>
      </div>

      {/* ================= OUR COMPREHENSIVE SERVICES ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-32">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-950 mb-4 tracking-tight">
            Our Comprehensive Services
            </h2>
            {/* Divider bar with Warm Orange color */}
            <div style={{ backgroundColor: BRAND_ACCENT }} className="h-1.5 w-20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50/50 p-6 md:p-10 rounded-[40px] border border-gray-100">

          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-8 rounded-3xl bg-white border-2 border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(26,67,90,0.1)] transition-all duration-500 flex flex-col items-center text-center group"
              style={{
                // Subtle hover border using Dark Blue/Teal
                "--hover-color": BRAND_PRIMARY,
                border: "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${BRAND_PRIMARY}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <div 
                style={{ 
                  backgroundColor: BRAND_LIGHT_BG, 
                  color: BRAND_ACCENT, // Icon default color is Orange
                }}
                className="mb-6 p-4 rounded-2xl group-hover:text-white transition-all duration-300 group-hover:bg-opacity-90"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND_PRIMARY; // Hover background is Dark Blue/Teal
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND_LIGHT_BG;
                  e.currentTarget.style.color = BRAND_ACCENT;
                }}
              >
                <service.icon size={42} />
              </div>
              
              <h3 className="font-black text-gray-950 text-xl md:text-2xl mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-base text-gray-700 font-medium leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              {/* Link text with Bright Green color */}
              <Link 
                href={service.href} 
                style={{ color: BRAND_SECONDARY }}
                className="inline-flex items-center gap-2 font-black text-base transition-all hover:gap-3"
              >
                Explore Details <span className="text-xl">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}