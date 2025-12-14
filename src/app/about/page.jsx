
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    IoMedalOutline, 
    IoBulbOutline, 
    IoShieldCheckmarkOutline, 
    IoWalletOutline,
    IoAlertCircleOutline,
    IoChevronForward
} from "react-icons/io5";

// --- BRAND COLOR CODES ---
const COLORS = {
    primary: '#306EFF',
    accent: '#FFAA00',
    secondary: '#30A04C',
    dark: '#1A1A1A',
};

export default function AboutPage() {

    const conditions = [
        "Alcohol Use Disorder",
        "Post-Traumatic Stress Disorder (PTSD)",
        "Borderline Personality Disorder",
        "Obsessive-Compulsive Disorder (OCD)",
        "Autism Spectrum Disorder",
        "Mood Disorders (Major Depressive Disorder, Bipolar I and II Disorders, DMDD)",
        "Adjustment Disorders",
        "Disruptive and Impulse-Control Disorders",
        "Attention-Deficit Hyperactivity Disorder (ADHD)",
        "Anxiety Disorders (GAD, Social Anxiety, Panic Disorder, Agoraphobia)",
        "Weight Loss Medication Management",
    ];

    const insuranceCarriers = [
        "Carelon Behavioral Health", "CIGNA", "AETNA", 
        "United Healthcare", "Oxford", "Oscar Health", 
        "Horizon Blue Cross and Blue Shield of New Jersey", 
        "Blue Cross Blue Shield of Massachusetts"
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div 
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            className="w-full bg-gray-50 pb-24 pt-16"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-start">
                    
                    <motion.div variants={fadeInUp} className="lg:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: COLORS.primary }}>
                            Meet Michael Nwanna, PMHNP
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Hello! My name is Michael Nwanna, and I am a board-certified Psychiatric Mental Health Nurse Practitioner licensed to treat individuals of all ages. 
                        </p>
                        
                        <div className="space-y-4 mb-6 text-gray-800">
                            <h2 className="text-2xl font-bold border-b pb-2" style={{ borderColor: COLORS.accent }}>
                                Experience & Education
                            </h2>
                            <p>
                                I completed my undergraduate studies at Minneapolis Community and Technical College and Metropolitan State University in Saint Paul, followed by graduate studies at Eastern Kentucky University.
                            </p>
                            <p>
                                With over 20 years of experience in mental health, critical care, and medical healthcare, I am dedicated to providing compassionate, comprehensive mental health care that empowers you to reach your wellness goals.
                            </p>
                        </div>
                        
                        <div className="space-y-4 text-gray-800">
                            <h2 className="text-2xl font-bold border-b pb-2" style={{ borderColor: COLORS.accent }}>
                                My Philosophy
                            </h2>
                            <p>
                                My patient-centered approach focuses on building a collaborative partnership with each individual. I aim to create a safe, supportive environment where patients feel heard, understood, and actively involved in their healing journey.
                            </p>
                            <p>
                                I strive to foster a therapeutic partnership based on respect and support, using a holistic approach that combines evidence-based practices with empathy and, occasionally, a bit of humor. My ultimate goal is to help clients navigate their unique paths toward balance, resilience, and lasting well-being.
                            </p>
                        </div>
                        
                        <div className="mt-8 p-4 rounded-xl border-l-4" style={{ borderColor: COLORS.accent, backgroundColor: '#FFFBEA' }}>
                            <p className="italic text-gray-700">
                                Outside work: I enjoy spending quality time with family and friends, running, and reading. I look forward to hearing your story.
                            </p>
                        </div>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className="lg:col-span-1 flex flex-col items-center">
                        <div className="relative w-full max-w-sm aspect-square rounded-full overflow-hidden shadow-2xl border-4" style={{ borderColor: COLORS.primary }}>
                            <Image 
                                src="/clinician-michael-nwanna.jpg"
                                fill={true} 
                                style={{ objectFit: 'cover' }}
                                alt="Michael Nwanna, Psychiatric Mental Health Nurse Practitioner"
                                priority={true}
                            />
                        </div>
                        <Link href="/appointments" className="mt-8 w-full max-w-sm text-center px-8 py-3 rounded-full font-bold text-lg text-white shadow-xl transition transform hover:scale-[1.03]" style={{ backgroundColor: COLORS.accent }}>
                            Book A Consultation
                        </Link>
                    </motion.div>
                </div>

                <motion.div variants={fadeInUp} className="py-16 border-t border-gray-200">
                    <h2 className="text-4xl font-black text-center mb-4" style={{ color: COLORS.primary }}>
                        Mental Health Issues We Treat
                    </h2>
                    <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
                        We use evidence-based practices to address various psychiatric conditions in children, adolescents, and adults.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conditions.map((condition, index) => (
                            <motion.div key={index} variants={fadeInUp} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border-l-4" style={{ borderColor: COLORS.secondary }}>
                                <IoShieldCheckmarkOutline className="text-3xl flex-shrink-0" style={{ color: COLORS.secondary }} />
                                <span className="font-semibold text-gray-800">{condition}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="py-16 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <div className="p-8 rounded-3xl shadow-xl h-full" style={{ backgroundColor: '#F4F9FF', border: `2px solid ${COLORS.primary}` }}>
                            <IoWalletOutline className="text-5xl mb-4" style={{ color: COLORS.primary }} />
                            <h3 className="text-3xl font-black mb-4" style={{ color: COLORS.dark }}>
                                Payment & Insurance
                            </h3>
                            <p className="text-lg text-gray-700 mb-6">
                                We accept major healthcare plans. Please verify your coverage prior to your first session.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {insuranceCarriers.map((carrier, index) => (
                                    <li key={index} className="flex items-center text-gray-800 font-medium">
                                        <IoChevronForward className="text-xl mr-2" style={{ color: COLORS.accent }} /> {carrier}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm italic text-gray-600">
                                Note: Before asking for services, please consider and review your insurance type, coverage, deductible, self-pay, and referrals.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <div className="p-8 rounded-3xl shadow-xl h-full" style={{ backgroundColor: '#FFF8F4', border: `2px solid ${COLORS.accent}` }}>
                            <IoAlertCircleOutline className="text-5xl mb-4" style={{ color: COLORS.accent }} />
                            <h3 className="text-3xl font-black mb-4" style={{ color: COLORS.dark }}>
                                Crisis & Safety Resources
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-lg font-bold" style={{ color: COLORS.primary }}>
                                        Suicide Lifeline (24/7)
                                    </p>
                                    <p className="text-2xl font-extrabold" style={{ color: COLORS.accent }}>
                                        <a href="tel:18002738255">1-800-273-8255</a>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold" style={{ color: COLORS.primary }}>
                                        Poison Control (24/7)
                                    </p>
                                    <p className="text-2xl font-extrabold" style={{ color: COLORS.accent }}>
                                        <a href="tel:8002221222">800-222-1222</a>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold" style={{ color: COLORS.primary }}>
                                        Emergency
                                    </p>
                                    <p className="text-2xl font-extrabold" style={{ color: COLORS.accent }}>
                                        <a href="tel:911">Call 911</a>
                                    </p>
                                </div>
                                <Link href="/contact" className="mt-4 inline-block font-bold transition hover:underline" style={{ color: COLORS.primary }}>
                                    View Full Resource List →
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <div className="p-8 rounded-3xl shadow-xl h-full border-4 border-dashed" style={{ borderColor: COLORS.secondary }}>
                            <IoShieldCheckmarkOutline className="text-5xl mb-4" style={{ color: COLORS.secondary }} />
                            <h3 className="text-3xl font-black mb-4" style={{ color: COLORS.dark }}>
                                Privacy & Boundaries
                            </h3>
                            <p className="text-lg text-gray-700 mb-4">
                                Social Media: Your Medical Professional does not accept friend or contact requests from current or former clients on any social networking sites to maintain confidentiality and boundaries.
                            </p>
                            <p className="text-lg text-gray-700">
                                Electronic Communication: Texts and emails are not completely secure. Service-related questions will be dealt with during your next session or through your secure patient portal, not via non-secure electronic communication.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.div>
    );
}
