"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaBrain, FaRegSadTear, FaBalanceScale, FaLightbulb, 
  FaMoon, FaShieldAlt 
} from "react-icons/fa"; // Switched all icons to the stable Fa set

export default function Conditions() {
  // === BRAND COLORS from Logo ===
  const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
  const BRAND_SECONDARY = "#4CAF50"; // Bright Green
  const BRAND_ACCENT = "#FF9800"; // Warm Orange

  const conditions = [
    { 
      title: "Anxiety Disorders", 
      icon: FaBrain, // Changed from GiNervousSystem
      description: "Generalized anxiety, social anxiety, and panic disorder.", 
      color: BRAND_SECONDARY
    },
    { 
      title: "Depression", 
      icon: FaRegSadTear, 
      description: "Major depression, persistent depressive disorder (dysthymia).", 
      color: BRAND_PRIMARY
    },
    { 
      title: "Bipolar Disorder", 
      icon: FaBalanceScale, // Changed from GiUnstableState
      description: "Managing mood swings, manic, and depressive episodes.", 
      color: BRAND_ACCENT
    },
    { 
      title: "ADHD", 
      icon: FaLightbulb, 
      description: "Focus, impulsivity, and organizational challenges.", 
      color: BRAND_SECONDARY
    },
    { 
      title: "Sleep Issues", 
      icon: FaMoon, 
      description: "Insomnia, nightmares, and other sleep-related mental health impacts.", 
      color: BRAND_PRIMARY
    },
    { 
      title: "PTSD & Trauma", 
      icon: FaShieldAlt, // Changed from GiSpikedShield
      description: "Coping with trauma symptoms, flashbacks, and hypervigilance.", 
      color: BRAND_ACCENT
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full bg-gray-50/50 pt-16 pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Comprehensive Care for Common Conditions
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our compassionate specialists are here to guide you toward healing and stability, addressing a wide range of mental health challenges.
          </p>
          {/* Divider bar with Dark Blue/Teal color */}
          <div style={{ backgroundColor: BRAND_PRIMARY }} className="h-1.5 w-24 mt-4 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {conditions.map((condition, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 md:p-8 rounded-3xl bg-white shadow-lg border-2 border-transparent hover:shadow-[0_20px_40px_rgba(26,67,90,0.05)] transition-all duration-300 flex flex-col items-center text-center group"
              style={{
                borderColor: "transparent",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${condition.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <div 
                style={{ color: condition.color, backgroundColor: `${condition.color}10` }}
                className="mb-4 p-4 rounded-full transition-colors duration-300"
              >
                <condition.icon size={42} />
              </div>
              
              <h3 className="font-extrabold text-gray-950 text-lg md:text-xl mb-3 leading-tight">
                {condition.title}
              </h3>
              
              <p className="text-sm text-gray-600 font-medium flex-grow">
                {condition.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/conditions"
            style={{ 
              backgroundColor: BRAND_PRIMARY, 
              color: 'white',
              boxShadow: `0 8px 20px -5px ${BRAND_PRIMARY}60` 
            }}
            className="px-10 py-5 rounded-2xl font-black text-xl transition transform hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center gap-2"
          >
            View All Conditions We Treat
          </Link>
        </div>
      </div>
    </section>
  );
}