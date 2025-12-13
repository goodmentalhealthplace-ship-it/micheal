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

// UPDATED: Data for the FAQ section (focused on Psychotherapy)
const psychotherapyFAQItems = [
  {
    question: "What therapeutic styles do you offer?",
    answer: "Our therapists are trained in various evidence-based modalities, including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), trauma-informed care, and psychodynamic approaches. We match the style to your needs.",
  },
  {
    question: "How long is a typical session?",
    answer: "Standard psychotherapy sessions are typically 45 to 50 minutes long, allowing focused time to explore issues and practice new skills.",
  },
  {
    question: "How often do I need to attend therapy?",
    answer: "Most individuals begin with weekly sessions to establish momentum and trust. The frequency is determined collaboratively based on your needs and treatment goals.",
  },
  {
    question: "What is the goal of the first few sessions?",
    answer: "The initial sessions focus on building rapport, conducting a thorough assessment of your history and concerns, and collaboratively defining clear, measurable goals for your therapy journey.",
  },
  {
    question: "Can I do therapy and medication management here?",
    answer: "Yes, we offer integrated care. We strongly encourage combining medication management with therapy and our providers coordinate closely for a holistic approach.",
  },
  {
    question: "Do you offer couples or family therapy?",
    answer: "While our core focus is individual therapy, we can provide referrals to trusted partners who specialize in couples and family modalities based on your requirements.",
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


export default function PsychotherapyPage() {
    // State for the accordion 
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <main className="bg-white text-[#1A1A1A]">
      {/* HERO SECTION - UPDATED CONTENT & IMAGE */}
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
              Evidence-Based Psychotherapy
              <span className="block text-[#2FA36B] mt-2">
                Find Clarity, Build Skills, Transform Life.
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#6B7280] max-w-xl">
              Our expert therapists offer confidential, personalized sessions to help you
              explore challenges, change negative patterns, and develop effective coping strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/psychotherapy.png" // UPDATED IMAGE
              alt="Therapist and patient in a counseling session"
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
          The Therapeutic Process
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Goal Setting & Assessment",
              text: "We begin by establishing a safe space, understanding your core issues, and collaboratively setting clear, measurable goals for positive change.",
              image: "/psychotherapy1.png", // UPDATED IMAGE PATH
            },
            {
              title: "Skill Building",
              text: "You will learn practical, evidence-based tools (like CBT or DBT techniques) to manage intense emotions, challenge negative thoughts, and improve relationships.",
              image: "/psychotherapy2.png", // UPDATED IMAGE PATH
            },
            {
              title: "Long-Term Integration",
              text: "We work to integrate new insights and skills into your daily life, ensuring sustainable emotional growth and resilience long after therapy concludes.",
              image: "/psychotherapy3.png", // UPDATED IMAGE PATH
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


      {/* BOOK APPOINTMENT (LEFT) & PSYCHOTHERAPY FAQ (RIGHT ACCORDION) */}
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
                      Ready to Begin? Book Your Session
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
                          Schedule Your Session
                      </h3>
                      <p className="text-[#6B7280] mb-8 text-lg">
                          Choose a time that works best for you and begin your journey to emotional wellness.
                      </p>
                      <Link
                          href="/book-appointment"
                          className="inline-block bg-[#1F4FD8] text-white px-8 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition shadow-lg"
                      >
                          Schedule Now
                      </Link>
                  </div>
              </motion.div>

              {/* RIGHT SIDE: PSYCHOTHERAPY FAQ ACCORDION (6 QUESTIONS) */}
              <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-10 lg:mt-0"
              >
                  <h2 className="text-3xl font-semibold mb-8 text-[#1A1A1A]">
                      Psychotherapy FAQs
                  </h2>

                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-lg">
                      {psychotherapyFAQItems.map((item, index) => (
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
                  Psychotherapy is just one part of our holistic care model. Discover other ways we can support your well-being.
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