"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    FaFeatherAlt,
    FaRegClock, // Icon for timing/launch
    FaArrowLeft // Icon for navigation back home
} from 'react-icons/fa';

// --- CONSTANTS: BRAND COLOR CODES ---
const PRIMARY_BLUE = "#1B3C6A"; // Main Section Color
const ACCENT_ORANGE = "#4CAF50"; // Action, Focus (Keeping green for brand consistency)
const SECONDARY_GREEN = "#30A04C"; // Wellness, Hope (Titles/Emphasis)
const DARK_TEXT = "#1A1A1A"; // Dark Text

/**
 * @description Independent, full-page component indicating the blog is coming soon.
 */
export default function BlogComingSoonPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen w-full bg-white flex items-center justify-center p-6 md:p-12"
        >
            <div className="max-w-6xl mx-auto w-full">
                
                {/* BACK TO HOME LINK */}
                <motion.div variants={itemVariants} className="mb-10">
                    <Link 
                        href="/" 
                        className="inline-flex items-center text-lg font-medium text-gray-600 hover:text-gray-900 transition"
                    >
                         <FaArrowLeft className="mr-2 text-xl" /> Back to Home
                    </Link>
                </motion.div>

                {/* MAIN CONTENT WRAPPER */}
                <motion.section 
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#F4F9FF] border-4 border-[${SECONDARY_GREEN}] rounded-[40px] p-8 md:p-16 shadow-2xl shadow-green-500/20`}
                    variants={containerVariants}
                >
                    {/* LEFT COLUMN (TEXT STACK) */}
                    <div className="text-gray-800 order-2 lg:order-1">

                        {/* HEADING */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-black mb-3 leading-tight text-center lg:text-left"
                            style={{ color: PRIMARY_BLUE }}
                        >
                            The Good Placement Blog
                        </motion.h1>

                        {/* SUB-HEADING/INTRO */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3 text-2xl font-bold mb-6 justify-center lg:justify-start"
                            style={{ color: ACCENT_ORANGE }}
                        >
                            <FaRegClock />
                            Launching Soon!
                        </motion.div>

                        {/* TEXT */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl text-center lg:text-left"
                        >
                            We are building a resource center filled with evidence-based articles, wellness strategies, and insights on mental health and psychiatric care. Your source for clarity is nearly ready.
                        </motion.p>
                        
                        <motion.div variants={itemVariants} className="space-y-4 text-center lg:text-left mb-8">
                            <p className="text-lg font-semibold text-gray-700 flex items-center justify-center lg:justify-start">
                                <FaFeatherAlt className="mr-3 text-2xl" style={{ color: SECONDARY_GREEN }} />
                                Expect topics on anxiety management, medication insights, and teletherapy benefits.
                            </p>
                            {/* Adding a placeholder for estimated time or encouragement */}
                            <p className="text-lg font-semibold text-gray-700 flex items-center justify-center lg:justify-start">
                                <FaRegClock className="mr-3 text-2xl" style={{ color: PRIMARY_BLUE }} />
                                Check back shortly! We are finalizing our first set of posts.
                            </p>
                        </motion.div>
                        
                        {/* THE SUBSCRIPTION BUTTON / LINK WAS REMOVED HERE */}

                    </div>

                    {/* RIGHT COLUMN IMAGE (Illustration) */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-md h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/blog.png" // Placeholder image for blog/content illustration
                                alt="Illustration of a person reading or writing insightful content for a blog."
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                </motion.section>

            </div>
        </motion.div>
    );
}