"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function MedicationManagementPage() {
  return (
    <main className="bg-white text-[#1A1A1A]">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#EAF6F0]">
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
              Our medication management services are designed to support your
              mental health with careful evaluation, ongoing monitoring, and
              compassionate psychiatric care tailored to your needs.
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

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-semibold"
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
              text: "A detailed psychiatric assessment to determine whether medication is appropriate and which options align with your symptoms and history.",
              image: "/doctor-consultation.png",
            },
            {
              title: "Personalized Prescriptions",
              text: "Medication plans are tailored to your diagnosis, response, and lifestyle, with careful dose adjustments over time.",
              image: "/prescription-care.png",
            },
            {
              title: "Ongoing Monitoring",
              text: "Regular follow ups to track effectiveness, manage side effects, and ensure long term safety and stability.",
              image: "/doctor-consultation.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-lg transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={slideUp}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-[#1F4FD8] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.h2
            className="text-3xl font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={slideUp}
          >
            Care You Can Trust
          </motion.h2>

          <motion.p
            className="mt-6 max-w-2xl text-lg opacity-90"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={slideUp}
          >
            At GoodPlace Mental Health Services LLC, medication is never rushed.
            Every decision is guided by clinical expertise, patient safety, and
            your long term wellbeing.
          </motion.p>
        </div>
      </section>

    </main>
  );
}
