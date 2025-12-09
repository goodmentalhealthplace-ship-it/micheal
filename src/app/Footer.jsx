"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const websiteUrl = "https://growthfairness.com";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${websiteUrl}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${websiteUrl}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${websiteUrl}&text=Check%20out%20this%20website`;

  return (
    <footer className="w-full bg-[#F4F9FA] text-[#1A1A1A] py-16 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* COLUMN 1 — CENTERED ON MOBILE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image 
            src="/logoweb.png" 
            width={280} 
            height={60} 
            alt="GrowthFairness Logo"
            className="mb-6"
          />

          <p className="text-gray-600 mb-3">Secured & Verified by:</p>

          <div className="flex items-center gap-4 mb-8">
            <Image src="/logo1.png" width={120} height={60} alt="Security Logo 1" />
            <Image src="/logo2.png" width={120} height={60} alt="Security Logo 2" />
          </div>

          <h3 className="text-lg font-semibold mb-3">Share This Website</h3>

          <div className="flex gap-4 text-2xl">
            <a 
              href={facebookShare} 
              target="_blank" 
              className="p-3 rounded-full bg-[#3b5998] text-white hover:opacity-80 transition"
            >
              <FaFacebookF />
            </a>
            <a 
              href={whatsappShare} 
              target="_blank" 
              className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp />
            </a>
            <a 
              href={twitterShare}
              target="_blank"
              className="p-3 rounded-full bg-[#1DA1F2] text-white hover:opacity-80 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* COLUMN 2 — CONTACT INFO (CENTERED ON MOBILE) */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-[#FFAA00]">
            GrowthFairness Psychiatry, PLLC.
          </h3>

          <p className="mb-1 text-gray-700 font-medium">Call / Text:</p>
          <a href="tel:8324496276" className="block mb-4 hover:text-[#FFAA00] transition-colors">
            832-449-6276
          </a>

          <p className="mb-1 text-gray-700 font-medium">Fax:</p>
          <a href="fax:7135541811" className="block mb-4 hover:text-[#FFAA00] transition-colors">
            713-554-1811
          </a>

          <p className="mb-1 text-gray-700 font-medium">Email:</p>
          <a href="mailto:info@growthfairness.com" className="block mb-4 hover:text-[#FFAA00] transition-colors">
            info@growthfairness.com
          </a>

          <p className="mb-1 text-gray-700 font-medium">Business Address:</p>
          <a 
            href="https://maps.google.com/?q=12337+Jones+Road+Houston+Texas+77070"
            target="_blank"
            rel="noopener noreferrer"
            className="block leading-relaxed hover:text-[#FFAA00] transition-colors"
          >
            12337 Jones Road,<br />
            Houston, Texas 77070
          </a>
        </div>

        {/* COLUMNS 3 & 4 — HORIZONTAL ON MOBILE */}
        {/* We use px-2 to ensure text doesn't hit the screen edges on very small devices */}
        <div className="flex flex-row md:contents gap-2 sm:gap-8 px-2 md:px-0">
          
          {/* COLUMN 3 — QUICK LINKS */}
          <div className="flex-1 text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#FFAA00]">Quick Links</h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              <li><Link href="/" className="hover:text-[#FFAA00]">Home</Link></li>
              <li><Link href="/team" className="hover:text-[#FFAA00]">Team</Link></li>
              <li><Link href="/services" className="hover:text-[#FFAA00]">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFAA00]">Contact</Link></li>
              <li><Link href="/appointments" className="hover:text-[#FFAA00]">Book Appointment</Link></li>
              <li><Link href="/forms" className="hover:text-[#FFAA00]">Patient Forms</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 — OUR SERVICES */}
          <div className="flex-1 text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#FFAA00]">Our Services</h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              <li><Link href="/medication" className="hover:text-[#FFAA00]">Medication Management</Link></li>
              <li><Link href="/evaluation" className="hover:text-[#FFAA00]">Psychiatric Evaluation</Link></li>
              <li><Link href="/therapy" className="hover:text-[#FFAA00]">Psychotherapy</Link></li>
              <li><Link href="/telepsychiatry" className="hover:text-[#FFAA00]">Telepsychiatry</Link></li>
            </ul>
          </div>

        </div>

      </div>

      <div className="text-center text-gray-600 text-sm mt-12 border-t border-gray-200 pt-8">
        © {new Date().getFullYear()} GrowthFairness Psychiatry, PLLC. All Rights Reserved.
      </div>
    </footer>
  );
}