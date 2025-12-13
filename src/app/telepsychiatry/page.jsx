"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Import Lucide icons 
import { CalendarCheck, Repeat2, UserPlus, ChevronDown } from "lucide-react"; 
import { useState } from "react"; 

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Data for the "Ways to Get Started" cards (Links remain /appointments)
const gettingStartedItems = [
  {
    title: "Initial Evaluation",
    text: "Schedule your first comprehensive psychiatric evaluation to discuss your needs and medication options.",
    Icon: CalendarCheck, 
    link: "/appointments", 
  },
  {
    title: "Transfer Care",
    text: "Seamlessly transfer your existing medication records and continue your care with our specialists.",
    Icon: Repeat2, 
    link: "/appointments", 
  },
  {
  title: "Book a Follow-up",
    text: "If you are a returning patient, easily book a new monitoring or follow-up appointment at your convenience.",
    Icon: UserPlus, 
    link: "/appointments", 
  },
];

// UPDATED: Data for the FAQ section (focused on Telepsychiatry)
const telepsychiatryFAQItems = [
  {
    question: "What equipment do I need for telepsychiatry?",
    answer: "You only need a reliable internet connection, a computer, tablet, or smartphone, and a private space where you feel comfortable speaking openly and confidentially.",
  },
  {
    question: "Is telepsychiatry effective as in-person care?",
    answer: "Yes, numerous studies confirm that telepsychiatry is equally effective as in-person care for a wide range of conditions, offering comparable outcomes in diagnosis, treatment, and ongoing management.",
  },
  {
    question: "How is my privacy protected during a session?",
    answer: "We use HIPAA-compliant, encrypted video conferencing platforms to ensure all sessions are private and secure, meeting the highest standards for patient confidentiality.",
  },
  {
    question: "Can prescriptions be sent remotely?",
    answer: "Yes, your provider can electronically send prescriptions directly to your preferred pharmacy following your virtual appointment, ensuring convenient medication access.",
  },
  {
    question: "Are telehealth services covered by insurance?",
    answer: "Coverage varies by plan and location. We recommend checking with your insurance provider, but most major plans now cover virtual mental health appointments.",
  },
  {
    question: "Can I receive medication and therapy via telepsychiatry?",
    answer: "Yes, telepsychiatry allows us to provide full service care, including psychiatric evaluation, medication management, and remote psychotherapy sessions.",
  },
];

// Reusable Accordion Item Component (UNCHANGED)
const AccordionItem = ({ item, isOpen, onClick }) => (
    <div className="border-b border-[#E5E7EB] last:border-b-0">
        <button
            className="flex justify-between items-center w-full py-4 text-left font-medium text-lg text-[#1A1A1A] hover:text-[#2FA36B] transition"
            onClick={onClick}
        >
            {item.question}
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2FA36B]' : 'rotate-0'}`} />
        </button>
        {isOpen && (
            <div className="pb-4 text-[#6B7280] leading-relaxed transition-all duration-300 ease-in-out">
                {item.answer}
            </div>
        )}
    </div>
);


export default function TelepsychiatryPage() {
    // State for the accordion 
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <main className="bg-white text-[#1A1A1A]">
      {/* HERO SECTION - UPDATED CONTENT & IMAGE */}
      <section className="relative bg-[#F0F9FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={slideUp}
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Virtual Telepsychiatry Services
              <span className="block text-[#1F4FD8] mt-2">
                Expert Care, Delivered to Your Home.
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#6B7280] max-w-xl">
              Receive confidential, high-quality psychiatric evaluations, medication 
              management, and therapy through a secure video platform, eliminating travel and wait times.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/tele.png" // UPDATED IMAGE
              alt="Telepsychiatry consultation on a screen"
              width={520}
              height={520}
              className="rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO - UPDATED CONTENT AND IMAGES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-semibold text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={slideUp}
        >
          Benefits of Virtual Care
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Unmatched Accessibility",
              text: "Get consistent care regardless of your location, making it ideal for busy schedules, rural areas, or mobility limitations.",
              image: "/tele1.png", // UPDATED IMAGE PATH
            },
            {
              title: "Privacy and Security",
              text: "All sessions are conducted on HIPAA-compliant, encrypted platforms, guaranteeing the highest level of confidentiality and privacy.",
              image: "/tele2.png", // UPDATED IMAGE PATH
            },
            {
              title: "Integrated Follow-Up",
              text: "Easily attend routine medication checks and follow-up therapy sessions from the comfort and privacy of your own home.",
              image: "/tele3.png", // UPDATED IMAGE PATH
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white hover:shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={slideUp}
            >
              {/* LARGE CARD IMAGE */}
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONDITIONS WE TREAT - UNCHANGED */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-semibold mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={slideUp}
        >
          Conditions We Treat
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Anxiety Disorders",
              image: "/condition-anxiety-hero.jpg",
              description:
                "Medication strategies to reduce persistent worry, panic, and physical tension while supporting emotional balance.",
            },
            {
              title: "Depression",
              image: "/depression.png",
              description:
                "Evidence based treatment plans focused on mood stability, energy, and improved daily functioning.",
            },
            {
              title: "Bipolar Disorder",
              image: "/bipolar.png",
              description:
                "Careful mood stabilization with close monitoring to support long term emotional regulation.",
            },
            {
              title: "Schizophrenia",
              image: "/schizophrenia.png",
              description:
                "Structured psychiatric care focused on symptom control, clarity, and functional improvement.",
            },
            {
              title: "ADHD",
              image: "/adhd.png",
              description:
                "Targeted medication options to support focus, impulse control, and executive functioning.",
            },
            {
              title: "Post Traumatic Stress Disorder",
              image: "/ptsd.png",
              description:
                "Thoughtful medication management to support nervous system regulation and symptom relief.",
            },
          ].map((condition, index) => (
            <motion.div
              key={index}
              className="border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white hover:shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              variants={slideUp}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={condition.image}
                  alt={condition.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">
                  {condition.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {condition.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WAYS TO GET STARTED - UNCHANGED LINKS */}
      <section className="bg-[#EAF6F0] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-16 text-[#1A1A1A]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={slideUp}
          >
            Your Path to Care
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {gettingStartedItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 border-2 border-transparent hover:border-[#2FA36B] shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                variants={slideUp}
              >
                <div className="flex justify-center mb-6">
                  {/* Using the imported Icon component */}
                  <div className="bg-[#F0F9FF] p-4 rounded-full">
                    <item.Icon 
                        className="text-[#2FA36B]" 
                        size={60} 
                        strokeWidth={1.5} 
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-3 text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="text-center text-[#6B7280] mb-6">
                  {item.text}
                </p>
                {/* Link points to /appointments */}
                <Link
                    href={item.link}
                    className="block w-full text-center bg-[#2FA36B] text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition shadow-md"
                >
                    Start Here
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* BOOK APPOINTMENT (LEFT) & TELEPSYCHIATRY FAQ (RIGHT ACCORDION) */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
              
              {/* LEFT SIDE: HOW TO BOOK APPOINTMENT CARD */}
              <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
              >
                  <h2 className="text-3xl font-semibold mb-8 text-[#1A1A1A]">
                      Book Your Virtual Appointment
                  </h2>

                  <div className="max-w-md mx-auto lg:mx-0 bg-[#F0F9FF] border border-[#E5E7EB] rounded-2xl p-8 text-center shadow-xl">
                      <Image
                          src="/appointment.png"
                          alt="Book an appointment"
                          width={250}
                          height={250}
                          className="mx-auto mb-6"
                      />
                      
                      <h3 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">
                          Schedule Your Telehealth Session
                      </h3>
                      <p className="text-[#6B7280] mb-8 text-lg">
                          Experience expert care from your home. Find a convenient time slot today.
                      </p>
                      <Link
                          href="/book-appointment"
                          className="inline-block bg-[#1F4FD8] text-white px-8 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition shadow-lg"
                      >
                          Schedule Now
                      </Link>
                  </div>
              </motion.div>

              {/* RIGHT SIDE: TELEPSYCHIATRY FAQ ACCORDION (6 QUESTIONS) */}
              <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-10 lg:mt-0"
              >
                  <h2 className="text-3xl font-semibold mb-8 text-[#1A1A1A]">
                      Telepsychiatry FAQs
                  </h2>

                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-lg">
                      {telepsychiatryFAQItems.map((item, index) => (
                          <AccordionItem 
                              key={index}
                              item={item}
                              isOpen={openIndex === index}
                              onClick={() => handleAccordionClick(index)}
                          />
                      ))}
                  </div>
              </motion.div>

          </div>
      </section>

      {/* FINAL CTA SECTION - UNCHANGED */}
      <section className="py-20 bg-[#EAF6F0] text-center">
          <motion.div
              className="max-w-3xl mx-auto px-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={slideUp}
          >
              <h2 className="text-4xl font-extrabold mb-4 text-[#1A1A1A]">
                  Explore Comprehensive Mental Health Services
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                  Telepsychiatry is one method for accessing our full range of care, including therapy and medication management.
              </p>
              {/* This link points to /services */}
              <Link
                  href="/services"
                  className="inline-block bg-[#2FA36B] text-white px-10 py-4 rounded-xl font-medium text-lg hover:bg-opacity-90 transition shadow-lg transform hover:scale-[1.02]"
              >
                  View Other Services
              </Link>
          </motion.div>
      </section>

    </main>
  );
}