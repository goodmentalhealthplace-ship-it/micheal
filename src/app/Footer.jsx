"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

// --- BRAND COLORS (FROM LOGO) ---
const COLORS = {
  blue: "#1B3C6A",
  green: "#4CAF50",
  lightBg: "#F5FAF8",
  textDark: "#1A1A1A",
  textMuted: "#5F6F73",
};

const COMPANY_NAME = "GoodPlace Mental Health Services LLC";
const COMPANY_PHONE = "9523220768";
const COMPANY_EMAIL = "admin@goodplacementalhealthservices.com";
const COMPANY_ADDRESS =
  "600 Twelve Oaks Center Drive, Suite 207, Wayzata, MN, 55391";

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t" style={{ backgroundColor: COLORS.lightBg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND + TAGLINE */}
        <div className="md:col-span-1 text-center md:text-left">
          <Image
            src="/logo.png"
            width={260}
            height={60}
            alt={`${COMPANY_NAME} logo`}
            className="mb-6 mx-auto md:mx-0"
          />

          <p className="text-sm leading-relaxed" style={{ color: COLORS.textMuted }}>
            A path to healing and a good place together. We are dedicated to
            compassionate, professional mental health care that supports
            long-term wellbeing.
          </p>
        </div>

        {/* FOLLOW & SUBSCRIBE */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4" style={{ color: COLORS.blue }}>
            Follow & Subscribe
          </h3>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xl">
            <span className="p-3 rounded-full bg-white shadow text-red-600">
              <FaYoutube />
            </span>
            <span className="p-3 rounded-full bg-white shadow text-blue-600">
              <FaFacebookF />
            </span>
            <span className="p-3 rounded-full bg-white shadow text-pink-500">
              <FaInstagram />
            </span>
            <span className="p-3 rounded-full bg-white shadow text-blue-700">
              <FaLinkedinIn />
            </span>
            <span className="p-3 rounded-full bg-white shadow text-black">
              <FaTiktok />
            </span>
            <span className="p-3 rounded-full bg-white shadow text-black">
              <FaXTwitter />
            </span>
          </div>

          <p className="text-xs mt-3" style={{ color: COLORS.textMuted }}>
            Social pages coming soon
          </p>
        </div>

        {/* CONTACT */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4" style={{ color: COLORS.blue }}>
            Contact
          </h3>

          <p className="text-sm font-medium">Phone</p>
          <p className="mb-3 text-sm">{COMPANY_PHONE}</p>

          <p className="text-sm font-medium">Email</p>
          <p className="mb-3 text-sm">{COMPANY_EMAIL}</p>

          <p className="text-sm font-medium">Address</p>
          <p className="text-sm leading-relaxed">
            {COMPANY_ADDRESS}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4" style={{ color: COLORS.blue }}>
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/appointments">Book Appointment</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t text-center text-xs" style={{ color: COLORS.textMuted }}>
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
