"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustCTASection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.6 } 
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
        
        {/* CTA WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1B3C6A] rounded-[40px] p-8 md:p-16 shadow-2xl shadow-blue-500/20">
          
          {/* LEFT COLUMN (TEXT STACK) */}
          <div className="text-white">

            {/* HEADING */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-black mb-6 leading-tight text-center lg:text-left"
            >
              Ready to Take the Next Step?
            </motion.h2>

            {/* IMAGE — comes immediately after heading on mobile */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex justify-center lg:hidden"
            >
              <div className="relative w-full max-w-sm h-[260px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/cta.png"
                  alt="Call to action illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl text-center lg:text-left"
            >
              Start your journey toward mental wellness and clarity.
              Book your first appointment today and move forward with confidence.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black text-lg md:text-xl text-white bg-[#FFAA00] shadow-xl transition transform hover:scale-[1.03] hover:shadow-2xl"
              >
                Book Your Appointment
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN IMAGE — DESKTOP ONLY */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md h-[380px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/cta.png"
                alt="Call to action illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
