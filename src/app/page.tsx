'use client';

import Image from "next/image";
import ClientAryndo from '../../component/Client';
import { motion, easeOut, useInView } from "framer-motion";
import { useRef } from "react";
import CardSlider from "../../component/cardSlide";
import AcrAryndo from "../../component/acredited";



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const slideDown = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const Page = () => {
  // Ref & inView untuk tiap section
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.3 });

  const refWeAre = useRef(null);
  const isInViewWeAre = useInView(refWeAre, { once: true, amount: 0.3 });

  const refAccredited = useRef(null);
  const isInViewAccredited = useInView(refAccredited, { once: true, amount: 0.3 });

  const refOurService = useRef(null);
  const isInViewOurService = useInView(refOurService, { once: true, amount: 0.3 });

  const refTrainingHub = useRef(null);
  const isInViewTrainingHub = useInView(refTrainingHub, { once: true, amount: 0.1 });

  const refSupplySolution = useRef(null);
  const isInViewSupplySolution = useInView(refSupplySolution, { once: true, amount: 0.1 });

    const refDrilling = useRef(null);
  const isInViewDrilling = useInView(refDrilling, { once: true, amount: 0.1 });

  const refMedical = useRef(null);
  const isInViewMedical = useInView(refMedical, { once: true, amount: 0.1 });

  const refClients = useRef(null);
  const isInViewClients = useInView(refClients, { once: true, amount: 0.1 });

  return (
    <>
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        ref={refHero}
        variants={fadeUp}
        initial="hidden"
        animate={isInViewHero ? "visible" : "hidden"}
        className="relative bg-[url('/bgHome.png')] bg-cover bg-center h-screen"
      >
        <div className="absolute inset-0 bg-[#000B45] opacity-30 z-0" />
        <div className="relative z-10 h-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 text-white p-5 md:p-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInViewHero ? "visible" : "hidden"}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold">Empowering the Energy</h1>
            <h1 className="text-5xl font-bold">
              Workforce with World-Class Oil & Gas Training
            </h1>
            <h3 className="text-2xl mt-4">Training services which provided international accreditation and local accreditation </h3>
            <h3 className="text-2xl">IADC, IWCF, OPITO, NEBOSH, IOSH, LEEA, BNSP, KEMNAKER, DINAS PERHUBUNGAN and Internal House Programs.</h3>
            <button className="mt-6 px-6 py-2 bg-[#EE4312] text-white rounded-2xl shadow hover:bg-[#d6360c] transition">
              <a href="#ourService">Explore Our Services</a>
            </button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInViewHero ? "visible" : "hidden"}
            className="relative w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] p-5 md:p-0"
          >
            <Image
              src="/personHome.png"
              alt="Person"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* We Are Aryndo Section */}
      <motion.div
        ref={refWeAre}
        variants={slideDown}
        initial="hidden"
        animate={isInViewWeAre ? "visible" : "hidden"}
        className="bg-white"
      >
        <h1 className="text-2xl md:text-4xl text-black text-center font-bold py-8">
          We Are Aryndo Utama
        </h1>
        <div className="relative bg-[url('/bgHome2.png')] bg-cover bg-center h-[475px]">
          <div className="absolute inset-0 bg-gray-900 opacity-30 z-0" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInViewWeAre ? "visible" : "hidden"}
            className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-4 h-full text-center md:text-left overflow-hidden py-12 md:py-0"
          >
            <Image
              src="/personHome2.png"
              alt="image"
              width={300}
              height={300}
              className="object-contain max-h-full w-[200px] h-auto md:w-[300px]"
            />
            <h3 className="text-white max-w-xl text-lg md:text-2xl leading-relaxed">
              Your trusted partner in oil & gas training and recruitment, based in Jakarta with capasity to deliver training in all indonesia area and abroad We offer  various type of training course, IADC & IWCF, NEBOSH, IOSH, LEEA-certified courses, OPITO-approved offshore safety training, and national certifications BNSP, Dinas Perhubungan & Kemnaker for the energy and construction sectors.
            </h3>
          </motion.div>
        </div>
      </motion.div>

      {/* Accredited Training Provider Section */}
      <motion.div
        ref={refAccredited}
        variants={fadeUp}
        initial="hidden"
        animate={isInViewAccredited ? "visible" : "hidden"}
        className="flex flex-col justify-center items-center bg-white px-4 pb-8"
      >
        <h1 className="text-black text-2xl md:text-4xl font-bold py-8 text-center">
          Accredited Training Provider
        </h1>
      <AcrAryndo/>
      </motion.div>

{/* Our Service Section */}
<motion.div
  ref={refOurService}
  variants={slideLeft}
  initial="hidden"
  animate={isInViewOurService ? "visible" : "hidden"}
  className="bg-[#24046B] py-12 px-4"
>
  <h1 id="ourService" className="text-center text-white text-3xl font-bold mb-2">
    Our Service
  </h1>

  <CardSlider/>
</motion.div>


      {/* Training Hub Section */}
      <motion.div
        ref={refTrainingHub}
        variants={slideLeft}
        initial="hidden"
        animate={isInViewTrainingHub ? "visible" : "hidden"}
        className="w-full"
      >
        <div className="bg-white py-12 px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-10">
            World-Class Oil & Gas Training Hub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col">
              <Image
                src="/iconTrain.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-black">
                Training & Manpower Services
              </h3>
              <p className="text-sm text-gray-700 mt-2 max-w-xs">
                Our programs meet both international and national standards— ensuring credibility and industry alignment.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col">
              <Image
                src="/iconTailored.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-black">
                Tailored Training Solutions
              </h3>
              <p className="text-sm text-gray-700 mt-2 max-w-xs">
                We customize every course to match your operational goals and workforce needs.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col">
              <Image
                src="/iconDriven.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-black">
                Driven by Excellence
              </h3>
              <p className="text-sm text-gray-700 mt-2 max-w-xs">
                We uphold quality and professionalism in every session to deliver impactful, real-world learning.
              </p>
            </div>
          </div>
        </div>

        {/* Supply Solutions Section */}
        <div
          ref={refSupplySolution}
          className="bg-[#24046B] py-12 px-4"
        >
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            animate={isInViewSupplySolution ? "visible" : "hidden"}
            className="text-center text-2xl md:text-3xl font-bold text-white mb-10"
          >
            Efficient Strategic Supply Solutions
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInViewSupplySolution ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Card 1 */}
            <div className="flex flex-col">
              <Image
                src="/iconSwift.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Swift & On-Time Delivery
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xs">
                We ensure every order arrives promptly, minimizing delays and maximizing operational efficiency.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col">
              <Image
                src="/iconCompe.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Competitive & Transparent Pricing
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xs">
                Our pricing model offers great value with full transparency—no hidden fees, just smart investment.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col">
              <Image
                src="/iconDedicated.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Dedicated to Exceptional Service
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xs">
                We go beyond expectations, delivering responsive and personalized support at every step.
              </p>
            </div>
          </motion.div>
        </div>
        {/*Drilling and Logging*/}
        <div
          ref={refDrilling}
          className="bg-white py-12 px-4"
        >
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            animate={isInViewDrilling ? "visible" : "hidden"}
            className="text-center text-2xl md:text-3xl font-bold text-black mb-10"
          >
            Professional Drilling & Mud Logging Solutions
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInViewDrilling ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Card 1 */}
            <div className="flex flex-col">
              <Image
                src="/iconAnalyst.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-black">
                Accurate Subsurface Analysis
              </h3>
              <p className="text-sm text-gray-700 mt-2 max-w-xs">
                Mud logging provides precise insights into subsurface formations, helping operators make informed drilling decisions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col">
              <Image
                src="/iconRealTime.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-black">
                Real-Time Drilling Monitoring
              </h3>
              <p className="text-sm text-gray-700 mt-2 max-w-xs">
                Continuous analysis of drilling mud samples allows for efficient monitoring of drilling parameters, ensuring safety and operational efficiency.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col">
              <Image
                src="/iconExplore.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-black">
                Cost-Effective Exploration
              </h3>
              <p className="text-sm text-gray-700 mt-2 max-w-xs">
                By detecting hydrocarbons and assessing formation characteristics early, mud logging supports smarter, more economical exploration and production strategies.
              </p>
            </div>
          </motion.div>
        </div>


        {/* Medical Check Up */}
        <div
          ref={refMedical}
          className="bg-[#24046B] py-12 px-4"
        >
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            animate={isInViewMedical ? "visible" : "hidden"}
            className="text-center text-2xl md:text-3xl font-bold text-white mb-10"
          >
            Comprehensive Medical Check-Up Services
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInViewMedical ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Card 1 */}
            <div className="flex flex-col">
              <Image
                src="/iconHealth.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Thorough Health Assessment
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xs">
                Pre-employment medical check-ups provide an in-depth assessment of candidates’ health, ensuring they are fit for their assigned roles.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col">
              <Image
                src="/iconAssurance.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Workplace Safety Assurance
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xs">
                Screening identifies potential health risks that could affect job performance, supporting a safe and efficient work environment.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col">
              <Image
                src="/iconRisk.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Risk Mitigation & Cost Efficiency
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-xs">
                Early detection of health concerns helps reduce insurance claims and medical-related expenses, optimizing workforce management.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Clients Section */}
      <motion.section
        ref={refClients}
        variants={fadeUp}
        initial="hidden"
        animate={isInViewClients ? "visible" : "hidden"}
        className="px-6 py-12 md:px-20 md:py-16 bg-white text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Clients</h1>
          <h3 className="text-lg md:text-xl text-gray-600 mb-10">
            Partnered with Leading Companies to Optimize Business Operations
          </h3>
          <div>
            <ClientAryndo />
          </div>
        </div>
      </motion.section>

      </div>
    </>
  );
};

export default Page;
