"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Import Lucide icons 
import { CalendarCheck, Repeat2, UserPlus, ChevronDown } from "lucide-react"; 
import { useState } from "react"; // Needed for accordion state

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Data for the "Ways to Get Started" cards
const gettingStartedItems = [
  {
    title: "Initial Evaluation",
    text: "Schedule your first comprehensive psychiatric evaluation to discuss your needs and medication options.",
    Icon: CalendarCheck, 
    // Link updated to /appointments
    link: "/appointments", 
  },
  {
    title: "Transfer Care",
    text: "Seamlessly transfer your existing medication records and continue your care with our specialists.",
    Icon: Repeat2, 
    // Link updated to /appointments
    link: "/appointments", 
  },
  {
  title: "Book a Follow-up",
    text: "If you are a returning patient, easily book a new monitoring or follow-up appointment at your convenience.",
    Icon: UserPlus, 
    // Link updated to /appointments
    link: "/appointments", 
  },
];

// Data for the "Why Choose Us" Accordion with six questions
const whyChooseUsItems = [
  {
    question: "Is your care truly personalized?",
    answer: "Yes, every treatment plan, including medication, is tailored based on a comprehensive assessment of your symptoms, history, and life context. We prioritize individualized care over a one-size-fits-all approach.",
  },
  {
    question: "Do you focus on safety first?",
    answer: "Absolutely. Medication management is always guided by the highest standards of clinical expertise. We monitor effectiveness and side effects closely to ensure long-term patient safety and well-being.",
  },
  {
    question: "Can I combine medication with therapy?",
    answer: "We strongly encourage combining medication management with psychotherapy, as this is often the most effective approach. We collaborate closely with your therapist or can recommend one if needed.",
  },
  {
    question: "What is your approach to prescribing?",
    answer: "Our approach is conservative and evidence-based. We start with the minimum effective dose and focus on medications with proven efficacy and safety profiles for your specific condition. We discuss all options thoroughly with you.",
  },
  {
    question: "Are your services available remotely?",
    answer: "We offer comprehensive telehealth services, allowing you to manage your medication and attend follow-ups from the convenience and privacy of your home, ensuring continuity of care.",
  },
  {
    question: "How do you manage refills and communication?",
    answer: "We use a secure, integrated patient portal for easy scheduling, refill requests, and secure communication with your provider, streamlining the administrative aspects of your care.",
  },
];

// Reusable Accordion Item Component
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


export default function MedicationManagementPage() {
    // State for the accordion (only one can be open at a time)
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <main className="bg-white text-[#1A1A1A]">
      {/* HERO SECTION - UNCHANGED */}
      <section className="relative bg-[#EAF6F0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={slideUp}
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Medication Management
              <span className="block text-[#2FA36B] mt-2">
                Safe. Personalized. Evidence Based.
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#6B7280] max-w-xl">
              Our medication management services support mental health through
              careful evaluation, responsible prescribing, and ongoing
              psychiatric monitoring tailored to each individual.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/medication-hero.png"
              alt="Medication management care"
              width={520}
              height={520}
              className="rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO - HEADING CENTERED */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-semibold text-center" // ADDED text-center
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={slideUp}
        >
          What Medication Management Includes
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Evaluation",
              text: "A full psychiatric assessment to determine whether medication is appropriate and which options best align with your symptoms and history.",
              image: "/doctor-consultation.png",
            },
            {
              title: "Personalized Prescriptions",
              text: "Medication plans tailored to your diagnosis, response, and lifestyle, with thoughtful dose adjustments over time.",
              image: "/prescription-care.png",
            },
            {
              title: "Ongoing Monitoring",
              text: "Regular follow ups to track effectiveness, manage side effects, and support long term stability and safety.",
              image: "/doctor-consultation.png",
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

      {/* CONDITIONS WE TREAT - HEADING CENTERED */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-semibold mb-12 text-center" // ADDED text-center
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

      {/* WAYS TO GET STARTED - UNCHANGED */}
      <section className="bg-[#F0F9FF] py-20">
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
                  <div className="bg-[#EAF6F0] p-4 rounded-full">
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


      {/* NEW SECTION: BOOK APPOINTMENT (LEFT) & WHY CHOOSE US (RIGHT ACCORDION) */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
              
              {/* LEFT SIDE: HOW TO BOOK APPOINTMENT CARD (heading is intentionally left-aligned here) */}
              <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
              >
                  <h2 className="text-3xl font-semibold mb-8 text-[#1A1A1A]">
                      How to Book Your Appointment
                  </h2>

                  <div className="max-w-md mx-auto lg:mx-0 bg-[#EAF6F0] border border-[#E5E7EB] rounded-2xl p-8 text-center shadow-xl">
                      <Image
                          src="/appointment.png"
                          alt="Book an appointment"
                          width={250}
                          height={250}
                          className="mx-auto mb-6"
                      />
                      
                      <h3 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">
                          Ready to Start?
                      </h3>
                      <p className="text-[#6B7280] mb-8 text-lg">
                          Choose a time that works best for you and begin your care journey
                          with confidence.
                      </p>
                      <Link
                          href="/book-appointment"
                          className="inline-block bg-[#1F4FD8] text-white px-8 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition shadow-lg"
                      >
                          Schedule Now
                      </Link>
                  </div>
              </motion.div>

              {/* RIGHT SIDE: WHY CHOOSE US ACCORDION */}
              <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-10 lg:mt-0"
              >
                  <h2 className="text-3xl font-semibold mb-8 text-[#1A1A1A]">
                      Why Choose Us
                  </h2>

                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-lg">
                      {whyChooseUsItems.map((item, index) => (
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
                  Medication management is just one part of our holistic care model. Discover other ways we can support your well-being.
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