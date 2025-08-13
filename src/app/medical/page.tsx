'use client';

import { motion, easeOut, useInView } from "framer-motion";
import { useRef } from "react";
import MedicalAryndo from "../../../component/Medical";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const fullScopeServices = [
  {
    title: "Health Assessment Overview",
    items: [
      "Evaluate candidate's overall health",
      "Identify existing medical conditions",
      "Ensure physical capability for job requirements",
    ],
    image: "/Medical1.png",
  },
  {
    title: "Job-Specific Medical Check",
    items: [
      "Tailored examinations according to job type",
      "Prevent workplace health risks",
      "Reduce insurance claims and medical costs",
    ],
    image: "/Medical2.png",
  },
  {
    title: "Comprehensive Reporting",
    items: [
      "Detailed medical report for employer",
      "Recommendations for work suitability",
      "Support hiring decision-making process",
    ],
    image: "/Medical3.png",
  },
];

const coreServices = [
  {
    title: "Identify Health Risks Early",
    description: "Detect conditions that may interfere with job performance and ensure safety at the workplace.",
    image: "",
  },
  {
    title: "Ensure Physical Capability",
    description: "Confirm candidates can safely perform the tasks assigned to them without risk to themselves or others.",
    image: "",
  },
  {
    title: "Reduce Future Costs",
    description: "Lower insurance claims, workplace incidents, and other medical-related costs for the company.",
    image: "",
  },
];

const medicalExams = [
  "Hemoglobin test",
  "Blood sugar test",
  "Liver function test",
  "Complete blood count test",
  "Electrocardiogram (ECG)",
  "HBsAg test",
  "Urine test",
];

const PreEmploymentPage = () => {
  const refMedical = useRef(null);
  const isInViewMedical = useInView(refMedical, { once: true, amount: 0.3 });

  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.3 });

  const refServices = useRef(null);
  const isInViewServices = useInView(refServices, { once: true, amount: 0.3 });

  const refExams = useRef(null);


  return (
    <div className="overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative bg-[url('/bgMedical.jpg')] bg-cover bg-center h-[450px] flex justify-center items-center text-center">
        <div className="absolute inset-0 bg-[#000B45] opacity-30 z-0" />
        <motion.h1
          ref={refHero}
          variants={fadeUp}
          initial="hidden"
          animate={isInViewHero ? "visible" : "hidden"}
          className="z-10 text-white font-bold text-5xl max-w-3xl px-4"
        >
          Pre-employment Screening: The Medical Check Up of Your Candidate
        </motion.h1>
      </div>

      {/* Full-Scope Screening Section */}
      <section className="bg-gradient-to-r from-[#1E0F5A] to-[#24046B] px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-10"
        >
          Full-Scope Pre-employment Screening
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 max-w-4xl mx-auto leading-relaxed mb-14"
        >
          Companies perform pre-employment medical check-ups to ensure candidates are healthy and physically capable of performing their roles. This helps reduce risks, insurance claims, and ensures workplace safety and productivity.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fullScopeServices.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(255,255,255,0.3)" }}
              className="relative rounded-xl overflow-hidden transition-all cursor-pointer "
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              <div className="relative p-6 flex flex-col items-center ">
                <h3 className="text-xl font-bold text-white mb-4 text-center">{section.title}</h3>
                <ul className="list-none space-y-2 text-leftr">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-200">
                      <span className="inline-block w-3 h-3 bg-white rounded-full mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Benefits Section */}
      <div ref={refServices} className="bg-[#24046B] py-12 px-4">
        <motion.h2
          variants={slideLeft}
          initial="hidden"
          animate={isInViewServices ? "visible" : "hidden"}
          className="text-center text-2xl md:text-3xl font-bold text-white mb-10"
        >
          Benefits of Pre-employment Medical Check-up
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInViewServices ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {coreServices.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col p-6 rounded-xl overflow-hidden transition-all cursor-pointer"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              <div className="relative flex flex-col items-center text-center">
                <h3 className="text-lg md:text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm text-gray-200 mt-2 max-w-xs">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Types of Medical Exams Section */}
      <section ref={refExams} className="px-4 py-12 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-black mb-6"
        >
          Types of Pre-employment Medical Examinations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-700 mb-6"
        >
          Depending on the job type, candidates may undergo one or several of the following medical tests to ensure they are fit for the role:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="list-disc list-inside text-gray-700 space-y-2"
        >
          {medicalExams.map((exam, idx) => (
            <li key={idx}>{exam}</li>
          ))}
        </motion.ul>
      </section>
      
        <motion.section
        ref={refMedical}
        variants={fadeUp}
        initial="hidden"
        animate={isInViewMedical ? "visible" : "hidden"}
        className="px-6 py-12 md:px-20 md:py-16 bg-white text-center"
      >
        <div className="max-[400px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Medical Check Up Services</h1>
          <div className="w-full h-[400px]">
            <MedicalAryndo />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PreEmploymentPage;
