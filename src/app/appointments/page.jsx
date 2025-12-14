"use client";
import React, { useState } from 'react'; // Import useState for modal management
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaCalendarCheck,
  FaUserShield,
  FaFileInvoiceDollar,
  FaLaptopMedical,
  FaCheckCircle,
  FaPhone,
  FaTimes // Icon for closing the modal
} from 'react-icons/fa';

// --- CONSTANTS: CONTACT INFO ---
const PHONE_NUMBER = "9523220768";
const DISPLAY_PHONE = "(952) 322-0768";
const EMAIL_ADDRESS = "admin@goodplacementalhealthservices.com";

// --- CONSTANTS: BRAND COLOR CODES ---
const HIGHLIGHT_BLUE = "#4CAF50"; 
const ACCENT_ORANGE = "#4CAF50"; 
const SECONDARY_GREEN = "#30A04C"; 
const DARK_TEXT = "#1A1A1A"; 
const PRIMARY_BLUE = "#1B3C6A"; 
const PRIMARY_GREEN_CTA = "#4CAF59"; 

// --- COMPONENTS ---

/**
 * @description Modal component to display the Google Calendar appointment scheduler.
 */
function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // The Google Calendar embed code provided by the user
  const calendarEmbed = '\
<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2BTiJkVST2igfVNjdeHxzbxlp4G_s026p0tIDeXTXuVAkcpoQNcYjFmZx3MsxvbzQoiVswUA0E?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>\
';

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 backdrop-blur-sm">
      
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-700 hover:text-red-600 transition bg-white rounded-full shadow-md"
          aria-label="Close Booking Portal"
        >
          <FaTimes size={24} />
        </button>

        <div className="p-4 md:p-6 w-full h-full">
          <h2 className="text-2xl font-black text-center text-gray-800 mb-4">
            Select Your Appointment Time
          </h2>
          
          {/* Iframe content using dangerouslySetInnerHTML */}
          <div 
            className="w-full h-[600px]"
            dangerouslySetInnerHTML={{ __html: calendarEmbed }} 
          />
        </div>
      </motion.div>
    </div>
  );
}

/**
 * @description A highly engaging Call-to-Action section emphasizing trust and action.
 */
const TrustCTASection = () => {
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
      className="w-full"
    >
      {/* CTA WRAPPER */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[${PRIMARY_BLUE}] rounded-[40px] p-8 md:p-16 shadow-2xl shadow-blue-500/20`}>

        {/* LEFT COLUMN (TEXT STACK) */}
        <div className="text-white">

          {/* HEADING */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-black mb-6 leading-tight text-center lg:text-left"
          >
            Ready to Take the Next Step?
          </motion.h2>

          {/* IMAGE — comes immediately after heading on mobile (using placeholder image cta.png) */}
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
              className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black text-lg md:text-xl text-white bg-[${PRIMARY_GREEN_CTA}] shadow-xl transition transform hover:scale-[1.03] hover:shadow-2xl`}
            >
              Book Your Appointment
            </Link>
          </motion.div>
        </div>

        {/* RIGHT COLUMN IMAGE — DESKTOP ONLY (using placeholder image cta.png) */}
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
    </motion.section>
  );
};

/**
 * @description Main page component for Appointment Booking.
 */
export default function AppointmentBookingPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false); // State for booking modal

  // --- DATA ---
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

  // --- ANIMATION VARIANTS (kept for the main component structure) ---
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

  // --- RENDER ---
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full bg-white pb-24 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* === 1. HERO: LEFT TEXT / RIGHT IMAGE === */}
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

            {/* UPDATED: Link is now a button that opens the modal */}
            <button
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: ACCENT_ORANGE }}
              onClick={() => setIsBookingModalOpen(true)}
            >
              <FaCalendarCheck /> Access Booking Portal
            </button>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="w-full h-80 lg:h-[400px] relative overflow-hidden rounded-[40px] shadow-2xl"
          >
            <Image
              src="/appointment-hero.png" 
              alt="Illustration of secure online appointment scheduling or a virtual consultation."
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </section>

        {/* === 2. BOOKING STEP GUIDE === */}
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
                style={{ borderColor: i === 3 ? '#306EFF' : SECONDARY_GREEN }} 
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-black text-white bg-[${PRIMARY_BLUE}]`}>
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

        {/* === 3. INFORMATION & CONTACT BOXES === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">

          {/* Column A: Need Help? (Contact Information) */}
          <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-3xl border-2 border-[#FFAA00]/50 bg-[#FFFAF2] shadow-lg">
            <h3 className="text-3xl font-black text-[#FFAA00] mb-4 flex items-center gap-3">
              <FaPhone className="text-3xl" /> Need Personal Assistance?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you have urgent questions regarding appointment eligibility, insurance, or general inquiries, please contact our administrative office directly.
            </p>

            {/* UPDATED: Phone and Email */}
            <ul className="text-lg text-gray-800 space-y-3 pl-2 font-medium">
              <li>
                <span className="font-bold">Phone:</span> 
                <Link href={`tel:${PHONE_NUMBER}`} className="text-blue-600 hover:underline ml-1">{DISPLAY_PHONE}</Link>
                {" "} (M-F, 9am-5pm CST)
              </li>
              <li>
                <span className="font-bold">Email:</span> 
                <Link href={`mailto:${EMAIL_ADDRESS}`} className="text-blue-600 hover:underline ml-1">{EMAIL_ADDRESS}</Link>
              </li>
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
              All appointments are conducted via a HIPAA-compliant, secure video platform. You will receive a unique link for your appointment 24 hours prior. Ensure you have a stable internet connection and a private space.
            </p>
          </motion.div>
        </div>

        {/* === 4. FINAL REASSURANCE CTA === */}
        <div className="mt-20">
          <TrustCTASection />
        </div>
      </div>
      
      {/* === BOOKING MODAL RENDERED HERE === */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </motion.div>
  );
}