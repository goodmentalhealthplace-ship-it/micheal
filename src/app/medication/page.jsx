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
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-semibold mb-12"
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
            At GoodPlace Mental Health Services LLC, medication decisions are
            never rushed. Care is guided by clinical expertise, patient safety,
            and long term wellbeing.
          </motion.p>
        </div>
      </section>

    </main>
  );
}
