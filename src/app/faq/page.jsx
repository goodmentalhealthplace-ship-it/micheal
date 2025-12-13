"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronDown, FaQuestionCircle, FaCalendarAlt } from "react-icons/fa";

// Component for a single Accordion Item
const AccordionItem = ({ question, answer, index, activeIndex, setActiveIndex, BRAND_ACCENT }) => {
  const isOpen = index === activeIndex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-200"
    >
      {/* Question Header */}
      <button
        className="flex justify-between items-center w-full py-5 text-left font-semibold text-lg hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setActiveIndex(isOpen ? null : index)}
      >
        <span className={isOpen ? 'font-extrabold' : 'font-semibold'} style={{ color: isOpen ? BRAND_ACCENT : '#374151' }}>
          {question}
        </span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FaChevronDown size={16} style={{ color: BRAND_ACCENT }} />
        </motion.div>
      </button>

      {/* Answer Content */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="pb-5 pr-10 text-gray-700 text-base leading-relaxed"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};


export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  // === BRAND COLORS from Logo (Confirmed) ===
  const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
  const BRAND_SECONDARY = "#4CAF50"; // Bright Green
  const BRAND_ACCENT = "#FF9800"; // Warm Orange

  const faqData = [
    {
      question: "What is the difference between a Psychiatrist and a Therapist?",
      answer: "A Psychiatrist (like the providers at GoodPlace) is a medical doctor (MD/DO) or an advanced practice provider (NP/PA) specializing in mental health who can diagnose conditions, prescribe and manage medication. A Therapist (or counselor) provides psychotherapy (talk therapy) to help you develop coping skills and emotional growth. We often use an integrated approach combining both."
    },
    {
      question: "Do you accept insurance, and how does billing work?",
      answer: "We are often in-network with major insurance providers across Texas. To find out your exact coverage and benefits, please use the 'Check My Insurance' link provided below. We handle all insurance submissions, and you are responsible for any co-pays or deductibles."
    },
    {
      question: "How do Telepsychiatry appointments work?",
      answer: "Telepsychiatry appointments are held virtually via a secure, HIPAA-compliant video platform. You can connect from anywhere in Texas using a smartphone, tablet, or computer. This offers the same high standard of care as in-person visits, with maximum convenience and privacy."
    },
    {
      question: "How long does it take to get an appointment?",
      answer: "We strive to offer rapid access to care. New patient intake appointments are typically available within 1-2 weeks, depending on scheduling demand. Medication management follow-up visits are scheduled as needed by your provider."
    },
    {
      question: "What should I expect during my first Psychiatric Evaluation?",
      answer: "Your first evaluation is a comprehensive discussion lasting about 60 minutes. Your provider will review your medical and psychiatric history, current symptoms, goals, and lifestyle factors. This is a collaborative session designed to create a personalized treatment plan, which may or may not include medication."
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ----------------------------------------------------------- */}
        {/* NEW: Hero Image Section (faq.png) */}
        {/* ----------------------------------------------------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full h-80 overflow-hidden mb-16 rounded-[40px] shadow-2xl"
        >
          <img 
            src="/faq.png" 
            alt="Frequently Asked Questions Hero Banner"
            // Tailwind classes to ensure the image covers the container nicely
            className="w-full h-full object-cover object-center" 
          />
        </motion.div>
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <FaQuestionCircle size={48} className="mx-auto mb-4" style={{ color: BRAND_PRIMARY }} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find quick answers to common questions about our services, appointments, and billing process.
          </p>
          <div style={{ backgroundColor: BRAND_ACCENT }} className="h-1.5 w-24 mt-4 mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Accordion (2/3 width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-gray-50 p-6 md:p-10 rounded-[40px] shadow-xl border-t-8"
            style={{ borderColor: BRAND_PRIMARY }} // Border in Dark Blue/Teal
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                BRAND_ACCENT={BRAND_ACCENT}
              />
            ))}
          </motion.div>

          {/* Sidebar CTA/Info (1/3 width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* CTA Box */}
            <div className="bg-white p-8 rounded-[30px] shadow-lg border-l-4" style={{ borderColor: BRAND_SECONDARY }}>
              <h3 className="text-2xl font-extrabold mb-3" style={{ color: BRAND_PRIMARY }}>Still Have Questions?</h3>
              <p className="text-gray-700 mb-6">
                If you can't find your answer here, our friendly team is ready to assist you.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg text-white transition hover:opacity-90"
                style={{ backgroundColor: BRAND_PRIMARY }} // Button in Dark Blue/Teal
              >
                Contact Our Team
              </Link>
            </div>
            
            {/* Insurance Box */}
            <div className="bg-white p-8 rounded-[30px] shadow-lg border-l-4" style={{ borderColor: BRAND_ACCENT }}>
              <h3 className="text-2xl font-extrabold mb-3" style={{ color: BRAND_PRIMARY }}>Insurance Verification</h3>
              <p className="text-gray-700 mb-6">
                Confirm your benefits instantly before booking your first session.
              </p>
              <Link
                href="/insurances"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg text-white transition hover:opacity-90"
                style={{ backgroundColor: BRAND_ACCENT }} // Button in Warm Orange
              >
                Check My Coverage
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}