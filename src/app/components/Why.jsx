"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaRegLightbulb, FaLock, FaHandsHelping, FaLaptopMedical
} from "react-icons/fa"; 

// === BRAND COLORS from Logo ===
const BRAND_PRIMARY = "#1A435A"; // Dark Blue/Teal
const BRAND_SECONDARY = "#4CAF50"; // Bright Green
const BRAND_ACCENT = "#FF9800"; // Warm Orange

const INITIAL_FEATURES = [
  { 
    id: 1,
    title: "Patient-Centered Care", 
    icon: FaHandsHelping, 
    description: "Your needs, goals, and voice are central to every treatment plan we create.", 
    color: BRAND_SECONDARY
  },
  { 
    id: 2,
    title: "Evidence-Based Methods", 
    icon: FaRegLightbulb, 
    description: "We utilize proven therapeutic techniques and current psychiatric research for effective results.", 
    color: BRAND_ACCENT
  },
  { 
    id: 3,
    title: "Secure Telehealth Platform", 
    icon: FaLaptopMedical, 
    description: "Access confidential and convenient care from anywhere in Texas using our secure online system.", 
    color: BRAND_PRIMARY
  },
  { 
    id: 4,
    title: "Privacy and Compliance", 
    icon: FaLock, 
    description: "We maintain the highest standards of HIPAA compliance to ensure your data and sessions are fully protected.", 
    color: BRAND_SECONDARY
  },
];

// Animation for subtle pulse on the icon
const pulseVariant = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.9, 1],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Animation for initial card entry
const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// --- FeatureCard Component with Pulse Animation ---
const FeatureCard = ({ feature, i }) => (
  <motion.div
    key={feature.id} // Key must be static for the item identity in the grid
    // Use the initial stagger animation for the first load (ignored during shuffle)
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={itemVariants}
    // Styling for the static grid item
    className="p-6 rounded-3xl bg-gray-50/70 border border-gray-100 shadow-md flex flex-col items-start text-left w-full h-full"
  >
    <motion.div 
      style={{ color: feature.color, backgroundColor: `${feature.color}10` }}
      className="mb-4 p-4 rounded-xl"
      // Apply subtle pulse animation to the icon container
      variants={pulseVariant}
      animate="animate"
    >
      <feature.icon size={36} />
    </motion.div>
    
    <h3 className="font-black text-gray-950 text-xl mb-2 leading-tight">
      {feature.title}
    </h3>
    
    <p className="text-base text-gray-700 font-medium flex-grow">
      {feature.description}
    </p>
  </motion.div>
);


// --- Shuffling Grid Component (Handles the Desktop animation) ---
const ShufflingGrid = () => {
  const [currentFeatures, setCurrentFeatures] = useState(INITIAL_FEATURES);

  // Function to shift the cards (1->2, 2->3, 3->4, 4->1)
  const shuffleFeatures = useCallback(() => {
    setCurrentFeatures(prevFeatures => {
      // Shuffles the array: last item moves to the front
      const lastItem = prevFeatures[prevFeatures.length - 1];
      const newFeatures = [lastItem, ...prevFeatures.slice(0, prevFeatures.length - 1)];
      return newFeatures;
    });
  }, []);

  // Set up the automatic shuffling interval
  useEffect(() => {
    // Shuffles every 6.5 seconds
    const interval = setInterval(shuffleFeatures, 6500); 

    return () => clearInterval(interval);
  }, [shuffleFeatures]);

  // Define the grid positions for Framer Motion's layout animation
  // [1, 2]
  // [3, 4]
  const positions = [
    { gridArea: '1 / 1 / 2 / 2' }, // Top-Left (Index 0)
    { gridArea: '1 / 2 / 2 / 3' }, // Top-Right (Index 1)
    { gridArea: '2 / 1 / 3 / 2' }, // Bottom-Left (Index 2)
    { gridArea: '2 / 2 / 3 / 3' }, // Bottom-Right (Index 3)
  ];

  return (
    // Relative grid container with explicit row/column definitions and a fixed height
    <div 
      className="w-full relative grid grid-cols-2 grid-rows-2 gap-8" 
      style={{ minHeight: '400px' }} // Adjusted height for stability
    > 
      
      {currentFeatures.map((feature, i) => (
        <motion.div
          key={feature.id} // Key must be static (feature.id) for motion to track the element identity
          layout // Enables smooth position animation
          // Assign the grid position based on the element's current index in the shuffled array
          style={positions[i]} 
          transition={{ 
            type: "spring", 
            // MODIFIED: Reduced stiffness and increased damping for a gentler, slower movement
            stiffness: 50, 
            damping: 15, 
            duration: 1.8 // Longer duration for a more deliberate, non-rough slide
          }}
          className="absolute w-full h-full"
        >
          {/* Card content */}
          <FeatureCard feature={feature} i={i} />
        </motion.div>
      ))}
    </div>
  );
};


// --- Main Component ---
export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white pt-20 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text and Callout (No change) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 mb-6 tracking-tight">
              Why Choose <span style={{ color: BRAND_PRIMARY }}>GoodPlace?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg mb-10">
              We combine professional expertise with genuine compassion, delivering mental health care that is both **effective and deeply supportive.** Our commitment is your path to stability and growth.
            </p>

            <Link 
              href="/about"
              style={{ 
                backgroundColor: BRAND_ACCENT, 
                color: 'white',
                boxShadow: `0 8px 20px -5px ${BRAND_ACCENT}60` 
              }}
              className="px-10 py-5 rounded-2xl font-black text-xl transition transform hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Learn More About Our Approach
            </Link>
          </motion.div>

          {/* Right Column - Feature Grid Wrapper */}
          <div className="pt-8">
            {/* Mobile/Tablet: Standard 2x2 Grid (No Shuffle) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
              {INITIAL_FEATURES.map((feature, i) => (
                <FeatureCard key={feature.id} feature={feature} i={i} />
              ))}
            </div>

            {/* Desktop: Shuffling Grid (2x2 Auto-Shuffling) */}
            <div className="hidden lg:block">
              <ShufflingGrid />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}