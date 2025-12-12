"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaCalendarCheck,
  FaClock,
  FaCommentDots // Added FaCommentDots for the header tag
} from 'react-icons/fa';

// --- BRAND COLOR CODES ---
// Highlight Blue: #306EFF (Trust, Authority)
// Accent Orange: #FFAA00 (Action, Focus)
// Secondary Green: #30A04C (Wellness, Hope)
// Dark Text: #1A1A1A

export default function ContactUsPage() {

  const contactMethods = [
    { 
      title: "General Inquiries", 
      icon: FaEnvelope, 
      detail: "support@goodmentalhealthplace.com", 
      link: "mailto:support@goodmentalhealthplace.com",
      color: "#306EFF"
    },
    { 
      title: "Call Us Directly", 
      icon: FaPhone, 
      detail: "(800) 555-1234", 
      link: "tel:8005551234",
      color: "#FFAA00"
    },
    { 
      title: "Mailing Address", 
      icon: FaMapMarkerAlt, 
      detail: "123 Wellness Ave, Suite 100, Anytown, USA 12345", 
      link: "#",
      color: "#30A04C"
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };
  
  // Custom component to safely handle the iframe injection
  const IframeContainer = ({ html }) => (
    <div 
        className="w-full bg-white p-4 sm:p-8 rounded-3xl shadow-2xl border-t-8 border-[#306EFF] my-10"
        aria-label="Contact Form Container"
    >
        <div 
            dangerouslySetInnerHTML={{ __html: html }} 
        />
    </div>
  );
  
  // Cleaned and verified the provided Zoho iframe HTML
  const zohoIframeHtml = `
    <iframe 
        aria-label='Contact Us Form' 
        frameborder="0" 
        style="height:500px;width:100%;border:none;" 
        src='https://forms.zohopublic.com/goodmentalhealthplacegm1/form/ContactUs/formperma/8mYNhrf3JfsA0-9_cj6ZcyKhg5rxCD3pgOdgZ1KVSPE'
    ></iframe>
  `;

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full bg-gray-50 pb-24 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* === 1. HERO HEADER & INTRODUCTION === */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#306EFF] bg-white px-3 py-1 rounded-full border border-[#D0E0FF] mb-4">
             <FaCommentDots /> CONNECT WITH OUR TEAM
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight mb-4">
            We Are Here to <span className="text-[#FFAA00]">Listen</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Whether you have a question about services, insurance, or need to schedule an appointment, please reach out. We respond to all inquiries promptly and confidentially.
          </p>
        </motion.div>

        {/* === 2. CONTACT FORM (IFRAME) BLOCK === */}
        <motion.div variants={fadeInUp} className="mb-20">
            <h2 className="text-3xl font-black text-[#1A1A1A] text-center mb-6">
                Send Us a Secure Message
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
                Please use the form below for all non-urgent communications. Our administrative staff will follow up within 24 business hours.
            </p>
            
            <IframeContainer html={zohoIframeHtml} />
            
            <p className="text-center text-sm text-gray-500 mt-4">
                *If this is a medical emergency, please call 911 or visit your nearest emergency room immediately.
            </p>
        </motion.div>

        {/* === 3. ALTERNATIVE CONTACT & HOURS GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            
            {/* Contact Methods */}
            {contactMethods.map((method, i) => (
                <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-6 rounded-2xl bg-white shadow-lg border-t-4 flex flex-col items-start"
                    style={{ borderColor: method.color }}
                >
                    <method.icon size={30} className="mb-4" style={{ color: method.color }} />
                    <h3 className="font-bold text-gray-950 text-xl mb-2">
                        {method.title}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium break-words">
                        {method.detail}
                    </p>
                    {method.link !== "#" && (
                         <Link href={method.link} className="mt-3 text-sm font-bold text-[#306EFF] hover:underline transition">
                            {method.title === "Call Us Directly" ? "Call Now" : "Send Email"}
                         </Link>
                    )}
                </motion.div>
            ))}
            
            {/* Office Hours / Booking CTA */}
            <motion.div 
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-[#1B3C6A] text-white shadow-xl border-t-4 border-[#FFAA00] flex flex-col items-start"
            >
                <FaClock size={30} className="mb-4 text-[#FFAA00]" />
                <h3 className="font-bold text-xl mb-2">
                    Office Hours
                </h3>
                <ul className="text-lg space-y-1">
                    <li>Mon - Fri: 9:00 AM - 5:00 PM</li>
                    <li>Sat - Sun: Closed</li>
                </ul>
                <Link 
                    href="/appointments"
                    className="mt-4 w-full text-center px-4 py-3 rounded-xl font-bold text-white bg-[#FFAA00] hover:bg-opacity-90 transition shadow-md"
                >
                    <FaCalendarCheck className="inline mr-2" /> Book Now
                </Link>
            </motion.div>
        </div>
        
      </div>
    </motion.div>
  );
}