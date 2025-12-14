"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

// Define the primary brand color for easy maintenance
const BRAND_COLOR_HOVER = "hover:text-[#FFAA00]";
const BRAND_COLOR_TEXT = "text-[#FFAA00]";
const HEADER_HEIGHT_CLASS = "h-[70px]";

export default function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const go = (route) => {
    router.push(route);
    setOpenMenu(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // --- UPDATED NAVIGATION ITEMS ---
  const desktopNavItems = [
    { name: "Home", route: "/" },
    {
      name: "Services",
      menuName: "services",
      subItems: [
        { name: "Medication Management", route: "/medication" },
        { name: "Psychiatry Evaluation", route: "/evaluation" },
        { name: "Psychotherapy", route: "/therapy" },
        { name: "Telepsychiatry", route: "/telepsychiatry" },
      ],
    },
    {
      name: "About",
      menuName: "about",
      subItems: [
        { name: "Our Team", route: "/team" },
        { name: "FAQ", route: "/faq" },
      ],
    },
    {
      name: "Conditions",
      menuName: "conditions",
      subItems: [
        { name: "Anxiety", route: "/anxiety" },
        { name: "Depression", route: "/depression" },
        { name: "ADHD", route: "/adhd" },
        { name: "OCD", route: "/ocd" },
        { name: "Bipolar Disorder", route: "/bipolar" },
        { name: "PTSD", route: "/ptsd" },
      ],
    },
    // --- NEW BLOG ITEM INSERTED HERE ---
    { name: "Blog", route: "/blog" },
    // -----------------------------------
    { name: "Insurances", route: "/insurances" },
    { name: "Appointments", route: "/appointments" },
    { name: "Contact", route: "/contact" },
  ];

  const isActive = (route) => router.pathname === route;

  return (
    // Sticky REMOVED here
    <header
      ref={headerRef}
      className={`w-full bg-white shadow-lg z-[9999] ${HEADER_HEIGHT_CLASS}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between h-full">
        
        {/* LOGO */}
        <button onClick={() => go("/")} className="flex items-center gap-2 focus:outline-none">
          <Image src="/logo.png" width={280} height={50} alt="Logo" priority />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-semibold text-base">
          {desktopNavItems.map((item) => (
            <React.Fragment key={item.name}>
              {item.subItems ? (
                <div className="relative">
                  <button
                    onClick={() => toggleMenu(item.menuName)}
                    className={`flex items-center gap-1 transition focus:outline-none 
                      ${BRAND_COLOR_HOVER} 
                      ${openMenu === item.menuName ? BRAND_COLOR_TEXT : ""}`}
                  >
                    {item.name}
                    <IoChevronDown
                      className={`transition-transform duration-300 ${
                        openMenu === item.menuName ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMenu === item.menuName && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white z-[10000] shadow-2xl border border-gray-100 rounded-lg py-2 min-w-48">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => go(subItem.route)}
                          className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition
                            ${BRAND_COLOR_HOVER}
                            ${isActive(subItem.route) ? BRAND_COLOR_TEXT : ""}`}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => go(item.route)}
                  className={`transition focus:outline-none
                    ${BRAND_COLOR_HOVER}
                    ${isActive(item.route) ? BRAND_COLOR_TEXT : ""}`}
                >
                  {item.name}
                </button>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* MOBILE BURGER */}
        <button
          className="lg:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoClose className={BRAND_COLOR_TEXT} /> : <IoMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-white shadow-xl px-6 py-4 space-y-2 text-gray-700 font-semibold z-[9998] overflow-y-auto">
          {desktopNavItems.map((item) => (
            <div key={`mobile-${item.name}`}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.menuName)}
                    className="flex justify-between items-center w-full py-2 hover:bg-gray-50 rounded"
                  >
                    {item.name}
                    <IoChevronDown
                      className={`transition-transform duration-300 ${
                        openMenu === item.menuName ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMenu === item.menuName && (
                    <div className="pl-4 space-y-1 py-1 border-l-2 border-[#FFAA00]">
                      {item.subItems.map((subItem) => (
                        <button
                          key={`mobile-${subItem.name}`}
                          onClick={() => go(subItem.route)}
                          className={`block w-full text-left py-1 text-sm text-gray-600 hover:bg-gray-50 rounded px-2
                            ${BRAND_COLOR_HOVER}
                            ${isActive(subItem.route) ? BRAND_COLOR_TEXT : ""}`}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => go(item.route)}
                  className={`block w-full text-left py-2 hover:bg-gray-50 rounded px-2
                    ${isActive(item.route) ? BRAND_COLOR_TEXT : ""}`}
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}