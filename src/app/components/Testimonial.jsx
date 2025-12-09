"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  // === BRAND COLORS from Logo ===
  const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
  const BRAND_ACCENT = "#FF9800"; // Warm Orange

  const reviews = [
    {
      text: "Dr. Smith provided the most compassionate care I've ever received. I finally feel like I have the tools to manage my anxiety. Highly recommend GoodPlace.",
      author: "Sarah J. (Verified Patient)",
      rating: 5,
    },
    {
      text: "The telehealth appointments are incredibly convenient and secure. Medication management has been seamless and effective. Truly a game changer.",
      author: "Michael T. (Telehealth User)",
      rating: 5,
    },
    {
      text: "After years of struggling, my therapist here helped me regain my balance and clarity. The professional yet warm approach is exactly what I needed.",
      author: "Elena R. (Psychotherapy Client)",
      rating: 5,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full bg-white pt-20 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 mb-4 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Trusted care and meaningful results from those who matter most—our community.
          </p>
          {/* Divider bar with Warm Orange color */}
          <div style={{ backgroundColor: BRAND_ACCENT }} className="h-1.5 w-24 mt-4 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-8 rounded-[40px] bg-gray-50 border border-gray-200 shadow-xl flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {/* Star rating using the Warm Orange accent color */}
                {[...Array(review.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-xl" style={{ color: BRAND_ACCENT }} />
                ))}
              </div>
              
              <FaQuoteLeft 
                className="text-4xl mb-4" 
                style={{ color: `${BRAND_PRIMARY}20` }} // Very light Dark Blue/Teal for visual interest
              />
              
              <p className="text-lg text-gray-800 italic flex-grow mb-6">
                "{review.text}"
              </p>
              
              <p className="font-bold text-gray-950 text-base">
                {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}