"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
    FaCalendarCheck, 
    FaBrain, 
    FaSearch, 
    FaShieldAlt, 
    FaLock, 
    FaHandsHelping 
} from 'react-icons/fa';

// --- BRAND COLOR CODES ---
const HIGHLIGHT_BLUE = "#4CAF50"; // Trust, Authority
const ACCENT_ORANGE = "#4caf50"; // Action, Focus
const SECONDARY_GREEN = "#30A04C"; // Wellness, Hope
const DARK_TEXT = "#1A1A1A"; // Dark Text

export default function PTSTreatmentPage() {

    const coreSymptoms = [
        { icon: FaBrain, text: "Re-experiencing", description: "Intrusive memories, flashbacks, and nightmares related to the trauma." },
        { icon: FaSearch, text: "Avoidance", description: "Steering clear of people, places, activities, or thoughts that are reminders of the trauma." },
        { icon: FaLock, text: "Negative Mood & Cognition", description: "Distorted beliefs about oneself/the world, feeling detached, persistent negative emotions." },
        { icon: FaShieldAlt, text: "Arousal & Reactivity", description: "Hypervigilance, exaggerated startle response, irritability, difficulty concentrating or sleeping." },
    ];

    const treatmentPillars = [
        { 
            title: "Trauma-Focused Psychotherapy", 
            icon: FaBrain, 
            color: HIGHLIGHT_BLUE, 
            description: "Evidence-based therapies like CPT (Cognitive Processing Therapy) and PE (Prolonged Exposure) to process the trauma safely."
        },
        { 
            title: "Psychiatric Medication Management", 
            icon: FaShieldAlt, 
            color: ACCENT_ORANGE, 
            description: "Targeted use of SSRIs, Prazosin, and other agents to stabilize sleep, reduce hyperarousal, and manage anxiety/depression."
        },
        { 
            title: "Grounding & Coping Skills", 
            icon: FaHandsHelping, 
            color: SECONDARY_GREEN, 
            description: "Teaching practical, real-time strategies to regain control during flashbacks or periods of high anxiety."
        },
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        animate: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="w-full bg-white pb-24 pt-16"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                
                {/* === 1. HERO: LEFT TEXT / RIGHT IMAGE (/ptsd.png) === */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          
                    {/* Left Column: Text & CTA */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeInUp}
                        className="lg:pr-10"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black" style={{ color: DARK_TEXT }}>
                            Healing from Trauma, <span style={{ color: SECONDARY_GREEN }}>Regaining Safety</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-700 max-w-lg mt-4 mb-8">
                            Post-Traumatic Stress Disorder can make the past feel like the present. We offer specialized, evidence-based trauma treatment to process memories and restore your sense of safety and control.
                        </p>

                        <Link 
                            href="/appointments"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition transform hover:-translate-y-0.5 hover:shadow-2xl"
                            style={{ backgroundColor: ACCENT_ORANGE }}
                        >
                            <FaCalendarCheck /> Begin Your Path to Healing
                        </Link>
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
                            src="/ptsd.png" // Using the specified image path
                            alt="Image representing finding peace and safety after trauma"
                            layout="fill"
                            objectFit="contain" // Set to object-contain for full visibility
                            priority
                        />
                    </motion.div>
                </section>

                {/* === 2. Understanding PTSD & Diagnosis === */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">
                    
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h2 className="text-3xl font-black text-[#1A1A1A] border-b pb-3 border-gray-100">
                            The Four Clusters of PTSD Symptoms
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            PTSD symptoms fall into four main categories. Recognizing these patterns is crucial for accurate diagnosis, distinguishing PTSD from general anxiety or depression, and initiating effective treatment.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                            Michael Nwanna provides expert psychiatric assessment to determine the severity and specific presentation of your PTSD, leading to a highly personalized treatment plan that often integrates **trauma-focused therapy** and **medication management**.
                        </p>
                        
                        {/* Image Placeholder 1: The PTSD cycle/symptom diagram */}
                        <div className="w-full h-64 relative rounded-xl overflow-hidden mt-6 shadow-lg border border-gray-100">
                            <Image
                                src="/ptsd-symptom-cycle.jpg"
                                alt="Diagram illustrating the four-cluster model of PTSD symptoms"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain" // Ensures full image visibility
                            />
                        </div>
                        {/* FILE NAME: ptsd-symptom-cycle.jpg */}
                        
                    </motion.div>

                    {/* Core Symptoms List */}
                    <motion.div variants={fadeInUp} className="p-8 bg-[#F4F9FA] rounded-2xl shadow-md border-l-4" style={{ borderColor: HIGHLIGHT_BLUE }}>
                        <h3 className="text-2xl font-black text-[#1A1A1A] mb-6">
                            Recognizing the Impact of Trauma
                        </h3>
                        <ul className="space-y-6">
                            {coreSymptoms.map((component, i) => (
                                <li key={i} className="flex flex-col gap-1">
                                    <span className="flex items-center gap-3 text-xl font-bold" style={{ color: DARK_TEXT }}> 
                                        <component.icon className="text-2xl flex-shrink-0" style={{ color: HIGHLIGHT_BLUE }} />
                                        {component.text}
                                    </span>
                                    <p className="text-base text-gray-700 ml-9">{component.description}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* === 3. TREATMENT PILLARS === */}
                <div className="mt-20">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">
                            Proven Approaches to Reclaim Your Life
                        </h2>
                        <p className="text-xl text-gray-600">
                            Our treatment focuses on therapies scientifically validated to treat trauma and reduce PTSD symptoms.
                        </p>
                        <div className="h-1.5 w-24 bg-[#FFAA00] mx-auto rounded-full mt-4" /> {/* Accent Orange */}
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {treatmentPillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="p-8 rounded-3xl bg-white shadow-lg border-t-8 transition hover:shadow-xl flex flex-col items-center text-center h-full"
                                style={{ borderColor: pillar.color }}
                            >
                                <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center text-white" style={{ backgroundColor: pillar.color }}>
                                    <pillar.icon size={32} />
                                </div>
                                
                                <h3 className="font-black text-gray-950 text-2xl mb-4 leading-tight">
                                    {pillar.title}
                                </h3>
                                
                                <p className="text-base text-gray-700 font-medium leading-relaxed flex-grow">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Image Placeholder 2: Person moving forward from trauma */}
                    <div className="w-full h-80 relative rounded-xl overflow-hidden mt-12 shadow-2xl">
                        <Image
                            src="/ptsd-forward-movement.jpg"
                            alt="Illustration of a person stepping out of shadow into light, symbolizing healing from PTSD"
                            fill
                            sizes="100vw"
                            className="object-contain" // Ensures full image visibility
                        />
                    </div>
                    {/* FILE NAME: ptsd-forward-movement.jpg */}
                </div>

                {/* === 4. CLOSING CTA BLOCK === */}
                <motion.div 
                    variants={fadeInUp}
                    className="mt-20 bg-[#1B3C6A] p-8 md:p-12 rounded-[40px] text-white text-center shadow-2xl"
                    style={{ backgroundColor: HIGHLIGHT_BLUE }}
                >
                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
                        Ready to start your journey toward safety and peace?
                    </h3>
                    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Specialized trauma care can break the cycle of re-experiencing and avoidance. Take the first step today.
                    </p>
                    
                    <Link 
                        href="/appointments"
                        className="px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-xl transition transform hover:scale-[1.03] hover:shadow-2xl inline-flex items-center justify-center"
                        style={{ backgroundColor: ACCENT_ORANGE }}
                    >
                        Schedule Your Expert Consultation
                    </Link>
                </motion.div>
                
            </div>
        </motion.div>
    );
}