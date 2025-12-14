"use client";
import React, { useState } from 'react'; // Import useState for modal management
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaCalendarCheck,
  FaHandshake,
  FaFileInvoiceDollar, // Changed icon to better reflect policy/fee schedule
  FaCheckCircle,
  FaPhone,
  FaTimes // Icon for closing the modal
} from 'react-icons/fa';

// --- BRAND COLOR CODES ---
const HIGHLIGHT_BLUE = "#4CAF50"; // Trust, Authority (Original HIGHLIGHT_BLUE from Appointment page, kept for reference)
const ACCENT_ORANGE = "#4caf50"; // Action, Focus (Used for CTAs on Insurance page)
const SECONDARY_GREEN = "#30A04C"; // Wellness, Hope (Used for emphasis on Insurance page)
const DARK_TEXT = "#1A1A1A"; // Dark Text
const LIGHT_BLUE = "#4caf50"; // Primary color on Insurance page

// --- MODAL COMPONENT (Defined outside the main function for clarity, or kept inside if you prefer) ---

function PaymentPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-700 hover:text-red-600 transition"
        >
          <FaTimes size={24} />
        </button>

        {/* Policy Content */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">
            Good Place Mental Health Services Payment Authorization Policy
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Thank you for choosing Good Place Mental Health Services LLC as your provider for mental health care. We are committed to delivering high-quality care at an affordable price. The following outlines our financial policy, which you are required to read and sign before receiving any services.
          </p>

          {/* --- Policy Sections --- */}
          <div className="space-y-8">
            
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-1">
                Active Credit/Debit Card on File, Insurance Billing, and Post-Insurance Balances
              </h3>
              <p className="text-gray-700">
                To receive services at Good Place Mental Health Services LLC, an active credit card, debit card, or FSA/HSA card must be kept on file. If you are insured, we will collect the estimated patient responsibility amounts (including co-pays, co-insurance, and any estimated deductible costs) at the time of service. These amounts are based on the benefits of your insurance plan and our contracted fee schedule.
              </p>
              <p className="text-sm text-red-600 mt-2 italic">
                Please note that the amounts collected are estimates. Your final responsibility will be determined once your insurance processes the claim. Any remaining balance after your insurance provider processes the claim will be due within 30 days from the date of their determination.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-1">
                Payment Methods
              </h3>
              <p className="text-gray-700 mb-3">
                We accept checks; however, please be aware that a $25 fee will apply if a check is returned due to insufficient funds (NSF).
              </p>
              <p className="text-gray-700 mb-3">
                After your insurance company processes the claim and sends the Explanation of Benefits (EOB), we will bill you for any remaining balance. This may include discrepancies between the amount collected at the time of service and the actual amount your insurance determines you owe. You are responsible for paying any remaining balance within **30 days** of receiving the bill. Failure to do so may result in discharge from care.
              </p>
              <p className="text-gray-700">
                You are also welcome to pay any outstanding balance using a different credit/debit card or alternative payment method, as long as the balance is paid in full within 30 days.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-1">
                Private Pay Patients and Reimbursement
              </h3>
              <p className="text-gray-700 mb-3">
                For patients who opt to pay privately (uninsured or choosing not to use insurance), payment must be made in full prior to the start of any services. If payment is not received in advance, the appointment will be rescheduled. The fees for services will be provided ahead of the appointment, and private pay patients are accountable for the entire cost.
              </p>
              <p className="text-gray-700">
                Patients wishing to request reimbursement from their insurance for out-of-pocket expenses can obtain a **super bill** upon request. This document serves as a detailed receipt containing all the necessary information to submit to your insurer for reimbursement. It is your responsibility to confirm with your insurance provider whether reimbursement is an option, as Good Place Mental Health Services LLC cannot assure reimbursement.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-1">
                Disputing Charges
              </h3>
              <p className="text-gray-700 mb-3">
                If you have any concerns or questions about your charges, please reach out to Good Place Mental Health Services LLC using the contact details provided on our website or directly at the clinic. You have the right to dispute any charges or challenge the payment determination made by your insurance provider. In the event of an overpayment or incorrect co-payment, you may choose to receive a refund or apply the amount as a credit toward your next visit. If the co-payment is underpaid, you will be sent a revised bill for the remaining balance or, alternatively, the outstanding amount can be included with your next co-payment.
              </p>
              <p className="text-gray-700">
                If you need additional time to process a payment, please notify Good Place Mental Health Services LLC. We are open to discussing reasonable accommodations to help arrange payment for services provided.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-black text-green-700 mb-4">
                Authorization and Acknowledgment
              </h3>
              
              <p className="font-bold text-gray-900 mb-3">
                Authorization for Direct Payment to the Clinic:
              </p>
              <p className="text-gray-700 mb-6">
                By signing this document, you authorize Good Place Mental Health Services LLC to receive direct payment for any medical benefits due for services provided (up to the amount you owe to the clinic). You are responsible for any costs that are not covered by your insurance.
              </p>

              <p className="font-bold text-gray-900 mb-3">
                Acknowledgment of Financial Policy:
              </p>
              <p className="text-gray-700 mb-4">
                I understand that once my insurance has processed their portion for the mental health services I received at Good Place Mental Health Services LLC, I will be responsible for any remaining balance, as outlined in the Explanation of Benefits (EOB) from my insurer.
              </p>
              <p className="text-gray-700 mb-4">
                If the credit or debit card information provided today changes, expires, or is declined, I agree to promptly provide Good Place Mental Health Services LLC with updated payment details. I authorize the clinic to charge the new card for any amounts owed, in accordance with this agreement.
              </p>
              <p className="text-gray-700 mb-8">
                I give Good Place Mental Health Services LLC permission to charge my credit or debit card, or check for payment of services, missed appointments, or any other outstanding charges under the terms of this agreement.
              </p>
              
              <div className="space-y-4">
                <p className="font-mono pt-4 border-t border-gray-300">
                  Patient Signature ________________________________________
                </p>
                <p className="font-mono">
                  Patient Name __________________________________________
                </p>
              </div>
            </section>
          </div>
          {/* End Policy Content */}

        </div>
      </motion.div>
    </div>
  );
}

// --- MAIN COMPONENT ---

export default function InsuranceCoveragePage() {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false); // State for modal

  const insuranceLogos = [
    { src: "/insurances1.jpeg", alt: "Insurance Provider 1" },
    { src: "/insurances2.jpeg", alt: "Insurance Provider 2" },
    { src: "/insurances3.jpeg", alt: "Insurance Provider 3" },
    { src: "/insurances4.jpeg", alt: "Insurance Provider 4" },
    { src: "/insurances5.jpeg", alt: "Insurance Provider 5" },
    { src: "/insurances6.jpeg", alt: "Insurance Provider 6" },
    { src: "/insurances7.jpeg", alt: "Insurance Provider 7" },
    { src: "/insurances8.jpeg", alt: "Insurance Provider 8" },
  ];

  // --- ANIMATION VARIANTS (kept for the main component structure) ---
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const logoItem = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.4
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(48, 110, 255, 0.2)",
      transition: { duration: 0.3 }
    }
  };
  
  // --- NEW CTA SECTION VARIANTS (for the bottom section) ---
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full bg-white pb-24 pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* === 1. HERO === (Section content omitted for brevity, assumed unchanged) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div initial="initial" animate="animate" variants={fadeInUp} className="lg:pr-10">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-green-500 px-4 py-2 rounded-full border border-green-300 mb-4">
              <FaHandshake /> COVERAGE & FINANCIAL PEACE OF MIND
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black" style={{ color: DARK_TEXT }}>
              Stress-Free <span style={{ color: LIGHT_BLUE }}>Insurance Coverage</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-lg mt-4 mb-8">
              Access expert, compassionate psychiatric care with the financial peace of mind you deserve. We are in-network with many major providers.
            </p>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ backgroundColor: ACCENT_ORANGE }}
            >
              <FaCalendarCheck /> Book Your Consultation Now
            </Link>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="w-full h-80 lg:h-[400px] relative overflow-hidden rounded-[40px] shadow-2xl"
          >
            <Image
              src="/insurance.png" 
              alt="Illustration representing health insurance coverage, financial security, and support."
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </section>

        {/* === 2. INSURANCE LOGO GRID === (Section content omitted for brevity, assumed unchanged) */}
        <motion.div variants={fadeInUp} className="mt-20">
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] text-center mb-12">
            Trusted Partners in Care
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-6 md:p-10 bg-gray-50 rounded-[30px] border border-gray-100">
            {insuranceLogos.map((logo, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={logoItem}
                whileHover="hover"
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center h-24 sm:h-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  className="object-contain w-auto h-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === 3. Verification & Clarity Section === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">

          {/* Column A: How to Verify */}
          <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-3xl border-2 border-[#30A04C]/50 bg-[#F0FFF4] shadow-lg">
            <h3 className="text-3xl font-black text-[#30A04C] mb-4 flex items-center gap-3">
              <FaCheckCircle /> How to Verify Your Coverage
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Verification is simple and recommended. While we partner with the plans listed above, coverage details can vary based on your specific policy, deductible, and network status (in-network or out-of-network).
            </p>
            <ol className="list-decimal list-inside text-lg text-gray-800 space-y-3 pl-4 font-medium">
              <li><span className="font-bold">Contact Your Insurer:</span> Call the Member Services number on the back of your insurance card.</li>
              <li><span className="font-bold">Ask Key Questions:</span> Inquire about coverage for "Psychiatric Nurse Practitioner" services (specifically Michael Nwanna, APRN, CNP, PMHNP-BC) and if prior authorization is needed.</li>
              <li><span className="font-bold">Confirm Network:</span> Ask if our services are "in-network" for your plan.</li>
            </ol>
            <Link
              href="tel:8005551234"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#30A04C] hover:bg-opacity-90 transition shadow-md"
            >
              <FaPhone /> Call Your Insurer Now
            </Link>
          </motion.div>

          {/* Column B: Self-Pay & Transparency - UPDATED BUTTON */}
          <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-3xl border-2 border-[#FFAA00]/50 bg-[#FFFAF2] shadow-lg">
            <h3 className="text-3xl font-black text-[#FFAA00] mb-4 flex items-center gap-3">
              <FaFileInvoiceDollar /> Self-Pay & Full Transparency
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to financial clarity. For all non-insured services, including self-pay and out-of-network benefits, please review our comprehensive fee schedule and cancellation policy. Our full policy details are available below.
            </p>
            
            {/* **UPDATED LINK TO BUTTON THAT OPENS MODAL** */}
            <button
              onClick={() => setIsPolicyModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#FFAA00] hover:bg-opacity-90 transition shadow-md"
            >
              Read Policy
            </button>

            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 pt-4 pl-4 font-normal">
              <li>*A detailed fee schedule for all services is included in the policy document.</li>
              <li>*The policy covers cancellation fees, payment terms, and confidentiality agreements.</li>
            </ul>
          </motion.div>
        </div>

        {/* === 4. CLOSING CTA BLOCK (The previous replacement section) === */}
        <motion.section
          variants={fadeInUp} 
          className="w-full bg-white pt-24 -mb-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1B3C6A] rounded-[40px] p-8 md:p-16 shadow-2xl shadow-blue-500/20">
              
              <div className="text-white">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-black mb-6 leading-tight text-center lg:text-left"
                >
                  Ready to Take the Next Step?
                </motion.h2>

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

                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl text-center lg:text-left"
                >
                  Start your journey toward mental wellness and clarity.
                  Book your first appointment today and move forward with confidence.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="text-center lg:text-left"
                >
                  <Link
                    href="/appointments"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black text-lg md:text-xl text-white bg-[#4CAF59] shadow-xl transition transform hover:scale-[1.03] hover:shadow-2xl"
                  >
                    Book Your Appointment
                  </Link>
                </motion.div>
              </div>

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

      </div>
      
      {/* === MODAL RENDERED HERE === */}
      <PaymentPolicyModal 
        isOpen={isPolicyModalOpen} 
        onClose={() => setIsPolicyModalOpen(false)} 
      />
    </motion.div>
  );
}