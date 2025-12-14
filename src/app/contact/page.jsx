"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCalendarCheck,
  FaClock,
  FaCommentDots,
  FaArrowRight
} from 'react-icons/fa';

// --- CONSTANTS: CONTACT INFO ---
const OFFICE_ADDRESS = "600 Twelve Oaks Center Drive, Suite 207, Wayzata, MN, 55391";
const PHONE_NUMBER = "9523220768";
const DISPLAY_PHONE = "(952) 322-0768";
const ADMIN_EMAIL = "admin@goodplacementalhealthservices.com";

// --- BRAND COLOR CODES ---
const HIGHLIGHT_BLUE = "#4CAF50";
const ACCENT_ORANGE = "#4CAF50";
const SECONDARY_GREEN = "#30A04C";
const DARK_TEXT = "#1A1A1A";

export default function ContactUsPage() {

  const contactMethods = [
    {
      title: "General Inquiries",
      icon: FaEnvelope,
      detail: ADMIN_EMAIL, // UPDATED
      link: `mailto:${ADMIN_EMAIL}`, // UPDATED
      color: HIGHLIGHT_BLUE
    },
    {
      title: "Call Us Directly",
      icon: FaPhone,
      detail: DISPLAY_PHONE, // UPDATED
      link: `tel:${PHONE_NUMBER}`, // UPDATED
      color: ACCENT_ORANGE
    },
    {
      title: "Mailing Address",
      icon: FaMapMarkerAlt,
      detail: OFFICE_ADDRESS, // UPDATED
      link: "#",
      color: SECONDARY_GREEN
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

        {/* === 1. HERO: LEFT TEXT / RIGHT IMAGE (/contact-hero.png) === */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">

          {/* Left Column: Text & CTA */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:pr-10"
          >
            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#306EFF] bg-white px-3 py-1 rounded-full border border-[#D0E0FF] mb-4">
                <FaCommentDots /> CONNECT WITH OUR TEAM
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black" style={{ color: DARK_TEXT }}>
              We Are Here to <span style={{ color: ACCENT_ORANGE }}>Listen</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 max-w-lg mt-4 mb-8">
              Whether you have a question about services, insurance, or need to schedule an appointment, please reach out. We respond to all inquiries promptly and confidentially.
            </p>

            <Link
              href="#contact-form" // Scroll to the form below
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: ACCENT_ORANGE }}
            >
              <FaArrowRight /> Go to Secure Contact Form
            </Link>
          </motion.div>

          {/* Right Column: Hero Image (Placeholder for contact/support) */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="w-full h-80 lg:h-[400px] relative overflow-hidden rounded-[40px] shadow-2xl"
          >
            <Image
              src="/contact-hero.png" // Using a placeholder image file name
              alt="Image representing customer service, communication, and support"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </section>

        {/* === 2. CONTACT FORM (IFRAME) BLOCK === */}
        <motion.div variants={fadeInUp} className="mb-20" id="contact-form">
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
                  <p
                      className="text-gray-700 font-medium break-words"
                      // Apply specific 10px font size only to the 'General Inquiries' detail (ADMIN_EMAIL)
                      style={method.title === "General Inquiries" ? { fontSize: '10px', lineHeight: '14px' } : { fontSize: '1.125rem', lineHeight: '1.75rem' }} // Fallback to 'text-lg' size for others
                  >
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