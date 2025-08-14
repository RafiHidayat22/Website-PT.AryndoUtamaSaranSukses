'use client';

import { motion, easeOut, useInView } from "framer-motion";
import { useRef } from "react";
import DrillingAryndo from "../../../component/drillingSlide";

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
    title: "Data Acquisition & Interpretation",
    items: [
      "Continuous mudlogging",
      "Drilling data acquisition",
      "Formation pressure monitoring",
      "Rock cutting analysis",
      "Gas chromatography & oil show monitoring",
    ],
    image: "/iconData.jpg",
  },
  {
    title: "Well Design & Evaluation",
    items: [
      "Well location mapping",
      "Geological drilling design",
      "Kick & loss management",
      "Deviation survey",
      "Drilling performance evaluation",
    ],
    image: "/iconEval.jpg",
  },
  {
    title: "R&D & Equipment",
    items: [
      "Design & manufacturing of logging tools",
      "Customized sensors and instruments",
      "Innovative data transformation software",
      "Reliable field deployment",
    ],
    image: "/bgResearch.jpg",
  },
];

const coreServices = [
  {
    title: "Accurate Subsurface Analysis",
    description: "Provides precise insights into subsurface formations, helping operators make informed drilling decisions.",
    image: "",
  },
  {
    title: "Real-Time Drilling Monitoring",
    description: "Continuous analysis of drilling mud samples ensures safety and operational efficiency.",
    image: "",
  },
  {
    title: "Cost-Effective Exploration",
    description: "Early detection of hydrocarbons and formation issues supports smarter and more economical exploration strategies.",
    image: "",
  },
];

const formationData = [
  {
    title: "Mud Log Data",
    items: [
      "Lithology",
      "Drilling Data",
      "Gas Chromatography data",
      "Mud Data",
      "Oil Show",
      "Deviation Survey",
      "Bit Data",
      "Kick & Loss",
      "Flow",
      "Stuck",
    ],
    image: "/bgLog.jpg",
  },
  {
    title: "Pressure Log Data",
    items: [
      "d-exponent and dc",
      "Pore Pressure Estimation",
      "ECD",
      "Fracture Gradient",
      "Total Gas",
      "Delta Temperature",
      "Lithology",
    ],
    image: "/bgMud.jpg",
  },
  {
    title: "Formation Analysis",
    items: [
      "Continuous well record",
      "Interpretation of collected rock cuttings",
      "Integrated mudlog insights",
      "Support for drilling decision-making",
    ],
    image: "/bgFormation.jpg",
  },
];

const MudLoggingPage = () => {
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.3 });

  const refServices = useRef(null);
  const isInViewServices = useInView(refServices, { once: true, amount: 0.3 });

  const refdrilling = useRef(null);
  const isInViewdrilling = useInView(refdrilling, { once: true, amount: 0.3 });

  const refBenefits = useRef(null);


  return (
    <div className="overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative bg-[url('/bgDrilling.jpg')] bg-cover bg-center h-[450px] flex justify-center items-center text-center">
        <div className="absolute inset-0 bg-[#000B45] opacity-30 z-0" />
        <motion.h1
          ref={refHero}
          variants={fadeUp}
          initial="hidden"
          animate={isInViewHero ? "visible" : "hidden"}
          className="z-10 text-white font-bold text-5xl max-w-3xl px-4"
        >
          Advanced Mud Logging Services for Efficient Oil & Gas Exploration
        </motion.h1>
      </div>

      {/* Full-Scope Mud Logging Section */}
      <section className="bg-gradient-to-r from-[#1E0F5A] to-[#24046B] px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-10"
        >
          Full-Scope Mud Logging Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 max-w-4xl mx-auto leading-relaxed mb-14"
        >
          From well location mapping, geological drilling design, data acquisition, transformation, interpretation, and evaluation, to R&D and manufacturing of logging equipment – our services cover the entire mud logging spectrum for efficient and precise oil & gas exploration.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fullScopeServices.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(255,255,255,0.3)" }}
              className="relative rounded-xl overflow-hidden transition-all cursor-pointer"
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              <div className="relative p-6 flex flex-col items-center">
                <h3 className="text-xl font-bold text-white mb-4 text-center">{section.title}</h3>
                <ul className="list-none space-y-2 text-left">
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

      {/* Core Mud Logging Services */}
      <div ref={refServices} className="bg-[#24046B] py-12 px-4">
        <motion.h2
          variants={slideLeft}
          initial="hidden"
          animate={isInViewServices ? "visible" : "hidden"}
          className="text-center text-2xl md:text-3xl font-bold text-white mb-10"
        >
          Our Core Mud Logging Services
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

      {/* Intro Section */}
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-black mb-8"
        >
          Unlocking Subsurface Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          Mud logging is an essential tool in oil and gas exploration, providing valuable information about subsurface formations, hydrocarbon presence, and drilling performance. Our services enable operators to make informed, efficient, and cost-effective decisions during drilling and production.
        </motion.p>
      </section>

      {/* Benefits Section */}
      <section ref={refBenefits} className="px-4 py-12 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-black mb-8"
        >
          Why Choose Our Mud Logging Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          Our team ensures precise, real-time, and cost-effective solutions, allowing oil and gas operators to optimize production, reduce operational risks, and make data-driven decisions confidently.
        </motion.p>
      </section>

      {/* Drilling & Formation Data Section */}
      <section className="bg-gray-50 px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-black mb-8"
        >
          Comprehensive Drilling & Formation Data
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          In addition to the mudlog, we construct Drilling Data logs and Formation Pressure logs, recording both direct measurements and interpreted values such as pore pressure. Basic surface logging collects rock cuttings during drilling for further interpretation, ensuring a continuous and comprehensive record of the well.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {formationData.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative p-6 rounded-xl overflow-hidden cursor-pointer transition-all"
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

              <motion.section
        ref={refdrilling}
        variants={fadeUp}
        initial="hidden"
        animate={isInViewdrilling ? "visible" : "hidden"}
        className="px-6 py-4 md:px-20 md:py-4 bg-white text-center"
      >
        <div className="max-[400px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Mud Logging Services</h1>
          <div className="w-full h-[400px] py-4">
            <DrillingAryndo />
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default MudLoggingPage;
