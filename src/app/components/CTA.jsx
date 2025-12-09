"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaStar, FaShieldAlt } from 'react-icons/fa';

export default function TrustCTASection() {
  
  const trustPoints = [
    { 
      icon: FaCalendarAlt, 
      title: "Schedule Today", 
      description: "Convenient online booking and fast availability for new patients." 
    },
    { 
      icon: FaStar, 
      title: "Licensed & Verified", 
      description: "All practitioners are state-licensed and highly experienced specialists." 
    },
    { 
      icon: FaShieldAlt, 
      title: "Private & Secure", 
      description: "Your health information is always confidential and HIPAA compliant." 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* === Main CTA Block === */}
        <div className="bg-[#1B3C6A] p-8 md:p-16 rounded-[40px] text-white text-center shadow-2xl shadow-blue-500/20">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight"
          >
            Ready to Take the Next Step?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Start your journey toward mental wellness and clarity. Book your first appointment today.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link 
              href="/appointments"
              // COLOR: Accent Orange #FFAA00
              className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl bg-[#FFAA00] transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center"
            >
              Book Your Appointment Now
            </Link>
          </motion.div>
        </div>

        {/* === Trust Points Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 text-center"
            >
              <point.icon 
                size={36} 
                className="text-[#306EFF] mx-auto mb-4" // COLOR: Highlight Blue #306EFF
              />
              <h3 className="font-extrabold text-xl text-[#1A1A1A] mb-2">
                {point.title}
              </h3>
              <p className="text-gray-700 font-medium">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </motion.section>
  );
}