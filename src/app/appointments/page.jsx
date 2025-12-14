"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaCalendarCheck, 
  FaUserShield, 
  FaFileInvoiceDollar, 
  FaLaptopMedical,
  FaArrowRight,
  FaCheckCircle,
  FaPhone
} from 'react-icons/fa';

// --- BRAND COLOR CODES ---
const HIGHLIGHT_BLUE = "#4CAF50"; // Trust, Authority
const ACCENT_ORANGE = "#4CAF50"; // Action, Focus (Primary CTA color)
const SECONDARY_GREEN = "#30A04C"; // Wellness, Hope (Titles/Emphasis)
const DARK_TEXT = "#1A1A1A"; // Dark Text

export default function AppointmentBookingPage() {

  const bookingSteps = [
    { 
      number: 1, 
      title: "Check Coverage & Availability", 
      icon: FaFileInvoiceDollar, 
      description: "Review accepted insurance plans and confirm Michael Nwanna's current openings via the link below." 
    },
    { 
      number: 2, 
      title: "Complete Intake Forms", 
      icon: FaUserShield, 
      description: "Securely fill out necessary medical and confidentiality forms prior to your consultation." 
    },
    { 
      number: 3, 
      title: "Confirm Your Session", 
      icon: FaCheckCircle, 
      description: "Receive a confirmation email with your link for the secure telepsychiatry video appointment." 
    },
    { 
      number: 4, 
      title: "Attend Your Consultation", 
      icon: FaLaptopMedical, 
      description: "Connect with Michael Nwanna from the privacy and comfort of your home." 
    },
  ];

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };
  
  const stepItem = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full bg-white pb-24 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* === 1. HERO: LEFT TEXT / RIGHT IMAGE (/appointment-hero.png) === */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:pr-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black" style={{ color: DARK_TEXT }}>
              Book Your Secure <span style={{ color: SECONDARY_GREEN }}>Online Appointment</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-lg mt-4 mb-8">
              Confidential psychiatric care is just a few clicks away. Start your smooth, stress-free journey to wellness today.
            </p>

            <Link 
              href="#" // Placeholder link to be updated
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: ACCENT_ORANGE }}
              onClick={(e) => e.preventDefault()}
            >
              <FaCalendarCheck /> Access Booking Portal
            </Link>
          </motion.div>

          {/* Right Column: Hero Image (Updated to a placeholder for booking) */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="w-full h-80 lg:h-[400px] relative overflow-hidden rounded-[40px] shadow-2xl"
          >
            <Image 
              src="/appointment-hero.png" // Using a new, descriptive placeholder image file name
              alt="Illustration of secure online appointment scheduling or a virtual consultation."
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </section>
        
        {/* === 2. BOOKING STEP GUIDE (Content remains the same) === */}
        <motion.div variants={fadeInUp} className="mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] text-center mb-12">
                Your Simple 4-Step Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {bookingSteps.map((step, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={stepItem}
                        className="p-6 md:p-8 bg-[#F8F9FA] rounded-3xl shadow-lg border-t-4 transition hover:shadow-xl"
                        // Using colors from the original AppointmentBookingPage for consistency here
                        style={{ borderColor: i === 3 ? '#306EFF' : '#30A04C' }} 
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full text-xl font-black text-white bg-[#1B3C6A]">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-extrabold text-[#1A1A1A]">
                                {step.title}
                            </h3>
                        </div>
                        <p className="text-base text-gray-700 leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* === 3. INFORMATION & CONTACT BOXES (Content remains the same) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">
          
          {/* Column A: Need Help? (Contact Information) */}
          <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-3xl border-2 border-[#FFAA00]/50 bg-[#FFFAF2] shadow-lg">
            <h3 className="text-3xl font-black text-[#FFAA00] mb-4 flex items-center gap-3">
              <FaPhone className="text-3xl" /> Need Personal Assistance?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you have urgent questions regarding appointment eligibility, insurance, or general inquiries, please contact our administrative office directly.
            </p>
            
            <ul className="text-lg text-gray-800 space-y-3 pl-2 font-medium">
                <li><span className="font-bold">Phone:</span> (800) 555-1234 (M-F, 9am-5pm CST)</li>
                <li><span className="font-bold">Email:</span> support@goodplacemh.com</li>
            </ul>

            <Link 
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#FFAA00] hover:bg-opacity-90 transition shadow-md"
            >
                View Contact Page
            </Link>
          </motion.div>

          {/* Column B: Telehealth Explanation & Image */}
          <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-3xl border-2 border-[#306EFF]/50 bg-[#F4F9FF] shadow-lg">
            <h3 className="text-3xl font-black text-[#306EFF] mb-4 flex items-center gap-3">
              <FaLaptopMedical className="text-3xl" /> Your Telepsychiatry Session
            </h3>
            
            <div className="w-full h-48 relative rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-4">
                <Image
                    src="/telehealth-confidentiality.jpg"
                    alt="Illustration of a person using a laptop for a video therapy session in a confidential home setting."
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
            
            <p className="text-base text-gray-700 leading-relaxed">
              All appointments are conducted via a **HIPAA-compliant, secure video platform**. You will receive a unique link for your appointment 24 hours prior. Ensure you have a stable internet connection and a private space.
            </p>
          </motion.div>
        </div>

        {/* === 4. FINAL REASSURANCE CTA (Content remains the same) === */}
        <motion.div 
          variants={fadeInUp}
          className="mt-20 bg-[#1B3C6A] p-8 md:p-12 rounded-[40px] text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
            Ready to Prioritize Your Mental Health?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We are committed to making your first step toward care as smooth and stress-free as possible.
          </p>
          
          <Link 
            href="#" 
            className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl bg-[#306EFF] transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center hover:bg-[#205EFF]"
            onClick={(e) => e.preventDefault()}
          >
            Access Our Booking Portal (Placeholder)
          </Link>
        </motion.div>
        
      </div>
    </motion.div>
  );
}