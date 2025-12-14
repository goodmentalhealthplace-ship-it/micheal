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

// --- BRAND COLORS ---
const COLORS = {
  blue: "#1B3C6A",
  lightBg: "#F5FAF8",
  textDark: "#1A1A1A",
  textMuted: "#4F5F63",
};

const COMPANY_NAME = "GoodPlace Mental Health Services LLC";
const COMPANY_PHONE = "9523220768";
const COMPANY_EMAIL_USER = "admin@";
const COMPANY_EMAIL_DOMAIN = "goodplacementalhealthservices.com";
const COMPANY_ADDRESS =
  "600 Twelve Oaks Center Drive, Suite 207, Wayzata, MN, 55391";

export default function Footer() {
  return (
    <footer
      className="w-full py-16 border-t"
      style={{ backgroundColor: COLORS.lightBg }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 items-start">

        {/* BRAND */}
        <div className="text-center md:text-left">
          <Image
            src="/logo.png"
            width={260}
            height={60}
            alt={`${COMPANY_NAME} logo`}
            className="mb-6 mx-auto md:mx-0"
          />

          <p
            className="text-base leading-relaxed"
            style={{ color: COLORS.textMuted }}
          >
            A path to healing and a good place together. We are dedicated to
            compassionate, professional mental health care that supports long
            term wellbeing.
          </p>
        </div>

        {/* FOLLOW & SUBSCRIBE */}
        <div className="text-center md:text-left">
          <h3
            className="text-lg font-semibold mb-5"
            style={{ color: COLORS.blue }}
          >
            Follow & Subscribe
          </h3>

          <div className="flex justify-center md:justify-start gap-4">
            {[FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md text-lg text-[#1B3C6A]"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* CONTACT */}
        <div className="text-center md:text-left">
          <h3
            className="text-lg font-semibold mb-5"
            style={{ color: COLORS.blue }}
          >
            Contact
          </h3>

          <div className="space-y-4 text-base">
            <div>
              <p className="font-semibold text-[#1A1A1A]">Phone</p>
              <p style={{ color: COLORS.textMuted }}>
                {COMPANY_PHONE}
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1A1A1A]">Email</p>
              <p className="leading-relaxed" style={{ color: COLORS.textMuted }}>
                <span className="block">{COMPANY_EMAIL_USER}</span>
                <span className="block">{COMPANY_EMAIL_DOMAIN}</span>
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1A1A1A]">Address</p>
              <p
                className="leading-relaxed"
                style={{ color: COLORS.textMuted }}
              >
                {COMPANY_ADDRESS}
              </p>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center md:text-left">
          <h3
            className="text-lg font-semibold mb-5"
            style={{ color: COLORS.blue }}
          >
            Quick Links
          </h3>

          <ul className="space-y-3 text-base" style={{ color: COLORS.textMuted }}>
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/appointments" className="hover:underline">Book Appointment</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div
        className="mt-14 pt-6 border-t text-center text-sm"
        style={{ color: COLORS.textMuted }}
      >
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
