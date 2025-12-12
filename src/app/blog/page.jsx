// components/BlogHomePage.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // CRITICAL: Must be imported
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaArrowRight,
  FaSearch
} from 'react-icons/fa';

// --- BRAND COLOR CODES --- (Defined for reference)

export default function BlogHomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const featuredPost = {
    title: "Taming the Inner Storm: Practical Steps for Managing Anxiety",
    summary: "Anxiety is more than just stress—it's a persistent, overwhelming state. Learn four evidence-based coping mechanisms and when to seek professional help.",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: '5 min read',
    slug: 'taming-the-inner-storm-managing-anxiety',
    category: 'Anxiety & Stress',
    image: '/blog-anxiety-feature.jpg' 
  };
  
  const CalendarWidget = () => (
    <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#30A04C] space-y-4">
      <h3 className="text-xl font-black text-[#1A1A1A] flex items-center gap-2">
        <FaCalendarAlt className="text-[#30A04C]" /> Archive Calendar
      </h3>
      <input 
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-lg font-bold text-lg focus:border-[#306EFF] focus:ring-1 focus:ring-[#306EFF] transition"
      />
      <div className="text-sm text-gray-500 pt-2">
        Posts available on every date with a green dot (Placeholder function).
      </div>
    </div>
  );

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
        
        {/* Blog Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-[#1A1A1A] mb-4">
            GoodPlace <span className="text-[#FFAA00]">Insights</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Daily articles written by Michael Nwanna, dedicated to mental wellness, clinical education, and practical strategies for a healthier life.
          </p>
          <div className="h-1.5 w-24 bg-[#306EFF] mx-auto rounded-full mt-4" /> 
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Featured Post (2/3 width) */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-8">
                <h2 className="text-3xl font-black text-[#1A1A1A] border-b pb-3 border-gray-200">
                    Featured Daily Post
                </h2>
                
                {/* --- Featured Anxiety Card --- */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition duration-300 hover:shadow-3xl">
                    
                    {/* Image Area */}
                    <div className="relative h-96 w-full">
                        <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                    
                    {/* Text Content */}
                    <div className="p-8 md:p-10 space-y-4">
                        <div className="flex items-center gap-4 text-sm font-semibold text-gray-600">
                            <span className="text-[#306EFF] font-bold">{featuredPost.category}</span> |
                            <span>{featuredPost.date}</span> |
                            <span className="flex items-center gap-1"><FaClock className="text-[#FFAA00]" /> {featuredPost.readTime}</span>
                        </div>
                        
                        <h3 className="text-4xl font-black text-[#1A1A1A] leading-snug">
                            {featuredPost.title}
                        </h3>
                        
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {featuredPost.summary}
                        </p>
                        
                        <Link 
                            href={`/blog/${featuredPost.slug}`}
                            className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-[#FFAA00] hover:text-[#306EFF] transition group"
                        >
                            Read More 
                            <FaArrowRight className="group-hover:translate-x-1 transition" />
                        </Link>
                    </div>
                </div>

                {/* Placeholder for Recent Posts List */}
                <div className="pt-8 border-t border-gray-100">
                    <h2 className="text-3xl font-black text-[#1A1A1A] mb-6">
                        More Recent Posts
                    </h2>
                    <p className="text-lg text-gray-600">... Placeholder for more blog post summaries ...</p>
                </div>
            </motion.div>

            {/* Right Column: Sidebar (1/3 width) */}
            <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-10">
                
                {/* Calendar Widget */}
                <CalendarWidget />

                {/* Search Bar */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#306EFF] space-y-4">
                    <h3 className="text-xl font-black text-[#1A1A1A] flex items-center gap-2">
                        <FaSearch className="text-[#306EFF]" /> Search Blog
                    </h3>
                    <input 
                        type="search"
                        placeholder="e.g., 'medication' or 'ptsd'"
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#FFAA00] focus:ring-1 focus:ring-[#FFAA00] transition"
                    />
                    <button className="w-full px-4 py-3 bg-[#306EFF] text-white font-bold rounded-lg hover:bg-opacity-90 transition">
                        Search
                    </button>
                </div>

                {/* Categories Widget */}
                 <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#FFAA00] space-y-4">
                    <h3 className="text-xl font-black text-[#1A1A1A]">Popular Categories</h3>
                    <ul className="space-y-2">
                        {['Anxiety', 'Depression', 'ADHD', 'Bipolar', 'Self-Care'].map((cat, i) => (
                             <li key={i}>
                                <Link href={`/blog/category/${cat.toLowerCase()}`} className="text-lg text-gray-700 hover:text-[#FFAA00] font-medium transition">
                                    {cat} (X)
                                </Link>
                             </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
}