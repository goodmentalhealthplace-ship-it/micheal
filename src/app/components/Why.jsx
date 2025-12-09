"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaRegLightbulb, FaLock, FaHandsHelping, FaLaptopMedical
} from "react-icons/fa"; 

export default function WhyChooseUs() {
  // === BRAND COLORS from Logo ===
  const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
  const BRAND_SECONDARY = "#4CAF50"; // Bright Green
  const BRAND_ACCENT = "#FF9800"; // Warm Orange

  const features = [
    { 
      title: "Patient-Centered Care", 
      icon: FaHandsHelping, 
      description: "Your needs, goals, and voice are central to every treatment plan we create.", 
      color: BRAND_SECONDARY
    },
    { 
      title: "Evidence-Based Methods", 
      icon: FaRegLightbulb, 
      description: "We utilize proven therapeutic techniques and current psychiatric research for effective results.", 
      color: BRAND_ACCENT
    },
    { 
      title: "Secure Telehealth Platform", 
      icon: FaLaptopMedical, 
      description: "Access confidential and convenient care from anywhere in Texas using our secure online system.", 
      color: BRAND_PRIMARY
    },
    { 
      title: "Privacy and Compliance", 
      icon: FaLock, 
      description: "We maintain the highest standards of HIPAA compliance to ensure your data and sessions are fully protected.", 
      color: BRAND_SECONDARY
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full bg-white pt-20 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text and Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 mb-6 tracking-tight">
              Why Choose <span style={{ color: BRAND_PRIMARY }}>GoodPlace?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg mb-10">
              We combine professional expertise with genuine compassion, delivering mental health care that is both **effective and deeply supportive.** Our commitment is your path to stability and growth.
            </p>

            <Link 
              href="/about"
              style={{ 
                backgroundColor: BRAND_ACCENT, 
                color: 'white',
                boxShadow: `0 8px 20px -5px ${BRAND_ACCENT}60` 
              }}
              className="px-10 py-5 rounded-2xl font-black text-xl transition transform hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Learn More About Our Approach
            </Link>
          </motion.div>

          {/* Right Column - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
                className="p-6 rounded-3xl bg-gray-50/70 border border-gray-100 shadow-md flex flex-col items-start text-left"
              >
                <div 
                  style={{ color: feature.color, backgroundColor: `${feature.color}10` }}
                  className="mb-4 p-4 rounded-xl"
                >
                  <feature.icon size={36} />
                </div>
                
                <h3 className="font-black text-gray-950 text-xl mb-2 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-base text-gray-700 font-medium flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}