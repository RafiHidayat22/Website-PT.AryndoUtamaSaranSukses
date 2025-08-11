'use client'

import { motion, easeOut, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import PortofolioAryndo from "../../../component/Portofolio";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};



const Page = () => {

  const refSupplySolution = useRef(null);
  const isInViewSupplySolution = useInView(refSupplySolution, { once: true, amount: 0.3});

  const refStrategic = useRef(null);
  const isInViewStrategic = useInView(refStrategic, {once: true, amount: 0.3})

  const refClients = useRef(null);
  const isInViewClients = useInView(refClients, { once: true, amount: 0.3 });
  return (
    <>
    <div className="overflow-x-hidden">
        <div className="relative bg-[url('/bgSupply.png')] bg-cover bg-center h-[400px] flex justify-center items-center text-center">
            <div className="absolute inset-0 bg-[#000B45] opacity-30 z-0" />
            <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-white font-bold text-5xl"
            >
            Supply & Rental Equipment
            </motion.h1>
      </div>
    

    <section className="px-4 py-12 max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center text-black mb-10"
            >
              Your Supply Chain Evolution Begins with Us
            </motion.h1>
    
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.h3
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-black text-center max-w-xl leading-relaxed"
              >
                Partner with Aryndo to transform your supply chain through innovative, efficient, and reliable solutions tailored for the energy, oil & gas, and industrial sectors
              </motion.h3>
            </div>
    </section>

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
        <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md hover:shadow-xl transition-all"
        >
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
        </motion.div>

        {/* Card 2 */}
        <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md hover:shadow-xl transition-all"
        >
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
        </motion.div>

        {/* Card 3 */}
        <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md hover:shadow-xl transition-all"
        >
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
        </motion.div>
    </motion.div>
    </div>


            

    <div className="px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-black mb-10"
      >
        Your Supply Chain Evolution Begins with Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {[
          {
            title: "Power Equipment",
            desc: "Engines, generators, compressors, and electric motors with ratings from 3 kVA to 2000 kVA, powered by world-class brands such as Cummins, Perkins, Doosan, Caterpillar, Mitsubishi, and Kirloskar",
            bg: "/bgPower.png",
          },
          {
            title: "Tubular",
            desc: "Tubular Drill pipe, Heavey Weight Drill Pipe, casing, tubing, pup joints, rotary kelly and cross over stabilizer etc",
            bg: "/bgTubular.png",
          },
          {
            title: "Spare part & Accessories",
            desc: "Supplier Drilling Accessories and Parts, Dies and Inserts, Float Valves, etc",
            bg: "/bgSpare.png",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-cover bg-center w-full h-[300px] flex flex-col justify-end rounded-[15px] overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0" />
            <div className="z-10 p-4 text-white">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-justify mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

        <div
        ref={refStrategic}
        className="bg-[#24046B] py-12 px-4"
        >
        <motion.h2
            variants={slideLeft}
            initial="hidden"
            animate={isInViewStrategic ? "visible" : "hidden"}
            className="text-center text-2xl md:text-3xl font-bold text-white mb-10"
        >
            Supplier Personal Protective Equipment (PPE)
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
            { icon: "/iconGlove.png", label: "Safety Gloves" },
            { icon: "/iconShoes.png", label: "Safety Shoes" },
            { icon: "/iconEar.png", label: "Ear Protection" },
            { icon: "/iconWear.png", label: "Wearpack" },
            { icon: "/iconHelm.png", label: "Safety Helmet" },
            { icon: "/iconEyeProtect.png", label: "Eye Protection" },
            ].map((item, i) => (
            <motion.div
                key={i}
                className="w-full h-[180px] bg-[#331a86] rounded-xl shadow-lg flex flex-col justify-center items-center text-white text-center px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.1 }}
            >
                <Image
                src={item.icon}
                alt={`icon-${i}`}
                width={60}
                height={60}
                />
                <p className="text-lg md:text-xl font-bold text-white py-2">{item.label}</p>
            </motion.div>
            ))}
        </div>
        </div>
        
        {/* Portofolio Section */}
      <motion.section
        ref={refClients}
        variants={fadeUp}
        initial="hidden"
        animate={isInViewClients ? "visible" : "hidden"}
        className="px-6 py-12 md:px-20 md:py-16 bg-white text-center"
      >
        <div className="max-[400px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Portofolio</h1>
          <h3 className="text-lg md:text-xl text-gray-600 mb-10">
              A Collection of Our Most Impactful Projects Across Various Industries
          </h3>
          <div className="w-full h-[400px]">
            <PortofolioAryndo />
          </div>
        </div>
      </motion.section>

    </div>
    </>

  )
}

export default Page