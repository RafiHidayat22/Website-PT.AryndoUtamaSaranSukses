'use client';

import { useState } from "react";
import {motion} from "framer-motion"
import Link from "next/link";


const Training = () => {
  const [openMain, setOpenMain] = useState("Migas Pemboran");
  const [openSub, setOpenSub] = useState("Operator Lantai Bor (OLB)");

const dataLocalAccreditaion = [
  {
    title: "Migas Pemboran",
    subItems: [
      { name: "Operator Lantai Bor (OLB)", button: true },
      { name: "Operator Menara Bor (OMB)", button: true },
      { name: "Juru Bor (JB)", button: true },
      { name: "Ahli Pengendali Bor (APB)", button: true },
    ],
  },
  {
    title: "Migas Perawatan Sumur",
    subItems: [
      { name: "Operator Lantai Perawatan Sumur (OLPS)", button: true },
      { name: "Operator Menara Perawatan Sumur (OMPS)", button: true },
      { name: "Operator Unit Perawatan Sumur (OUPS)", button: true },
      { name: "Ahli Pengendali Perawatan Sumur (APPS)", button: true },
    ],
  },
  {
    title: "Migas K3",
    subItems: [
      { name: "Ahli K3 Migas", button: true },
      { name: "Pengawas K3 Migas", button: true },
      { name: "Operator K3 Migas", button: true },
      { name: "Ahli K3 Listrik", button: true },
      { name: "Teknisi K3 Listrik", button: true },
      { name: "Authorized Gas Tester", button: true },
    ],
  },
  {
    title: "BNSP",
    subItems: [
      { name: "Inspector Scaffolding", button: true },
      { name: "Pembantu Operator Scaffolding", button: true },
      { name: "Petugas Penanganan Bahaya Gas H2S", button: true },
      { name: "Teknisi Ruang Terbatas", button: true },
      { name: "Bekerja Pada Ketinggian Level 1", button: true },
      { name: "Bekerja Pada Ketinggian Level 2", button: true },
      { name: "Juru Ikat (Rigger)", button: true },
      { name: "Operator Forklift", button: true },
      { name: "Juru Las (Welder)", button: true },
      { name: "Ahli Hygiene Industri Muda", button: true },
      { name: "Ahli Hygiene Industri Madya", button: true },
      { name: "Ahli Hygiene Industri Utama", button: true },
      { name: "Training Of Trainer", button: true },
    ],
  },
  {
    title: "KEMENAKER",
    subItems: [
      { name: "Ahli K3 Umum", button: true },
      { name: "SKP & Lisensi AK3U", button: true },
      { name: "Auditor SMK3", button: true },
      { name: "Petugas P3K", button: true },
      { name: "Supervisor Perancah", button: true },
      { name: "Teknisi K3 Ruang Terbatas", button: true },
      { name: "Tenaga Kerja Pada Ketinggian Tingkat 1 (TKPK)", button: true },
      { name: "Tenaga Kerja Bangunan Tinggi Tingkat 1 (TKBT)", button: true },
      { name: "Teknisi Deteksi Gas Ruang Terbatas", button: true },
      { name: "Operator Overhead Crane Kelas III", button: true },
      { name: "Petugas K3 Penyelamat Ruang Terbatas", button: true },
      { name: "Ahli K3 Muda Lingkungan Kerja", button: true },
      { name: "Regu Penanggulangan Kebakaran (Kelas C)", button: true },
    ],
  },
  {
    title: "Inhouse Training",
    subItems: [
      { name: "Helicopter Landing Officer", button: true },
      { name: "Helideck Assistant", button: true },
      { name: "Helicopter Refuelling", button: true },
      { name: "Advanced Fire Fighting", button: true },
      { name: "H2S Awareness", button: true },
      { name: "Offshore Emergency Response Team Members", button: true },
      { name: "Manual Handling", button: true },
      { name: "Defensive Driving Training", button: true },
      { name: "Basic Sea Survival", button: true },
      { name: "Basic Safety Training", button: true },
      { name: "Basic Fire Fighting", button: true },
      { name: "Basic First Aid", button: true },
      { name: "Rigging Slinging & Lifting", button: true },
      { name: "Fire Fighting Member / Leader", button: true },
      { name: "Beam Pump Operation", button: true },
      { name: "Beam Pump Downhole Assembly Function", button: true },
    ],
  },
];

const dataIADC = [
  {
    title: "IADC Behavior-Based Safety (BBS)",
    subItems: [
      {
        name: "Behavior-Based Safety (BBS) is a safety approach that focuses from the bottom up (front-line employees), with top-down support from safety leaders.",
        button: true,
      },
    ],
  },
  {
    title: "IADC RigPass",
    subItems: [
      {
        name: "Completion of the IADC RigPass program confirms that personnel have met the basic requirements defined by safety and training professionals in the drilling industry, regardless of the rig’s location.",
        button: true,
      },
      { name: "IADC Rig Pass", button: true },
    ],
  },
  {
    title: "IADC Stuck Pipe Prevention",
    subItems: [
      {
        name: "This training is designed to address preventive measures to avoid stuck pipe incidents or at least reduce their frequency. Participants will understand the importance of best practices in all aspects of the well construction process.",
        button: true,
      },
    ],
  },
  {
    title: "IADC H2S Awareness",
    subItems: [
      {
        name: "This course is designed for all personnel at risk of exposure to Hydrogen Sulfide (H2S) in the workplace. Upon completion, participants will be able to respond appropriately in the event of an H2S leak emergency.",
        button: true,
      },
    ],
  },
  {
    title: "IADC Permit-to-Work (PTW)",
    subItems: [
      {
        name: "This course is intended for those in charge of work units to ensure a safe system of work for maintenance or short-term projects with previously identified hazards. A permit-to-work system helps prevent significant risk to workers and fulfills legal obligations under occupational health and safety laws.",
        button: true,
      },
    ],
  },
  {
    title: "IWCF & IADC WELLSHARP",
    subItems: [
      { name: "IWCF Well Control for Surface BOP Level 2", button: true },
      { name: "IWCF Well Control for Combined Surface/Subsea BOP Level 2", button: true },
      { name: "IWCF Well Control for Surface BOP Level 3,4", button: true },
      { name: "IWCF Well Control for Combined Surface/Subsea BOP Level 3,4", button: true },
      { name: "IWCF Well Intervention Wireline Level 2", button: true },
      { name: "IWCF Well Intervention Coiled Tubing Level 2", button: true },
      { name: "IWCF Well Intervention Snubbing Level 2", button: true },
      { name: "IWCF Well Intervention Coiled Tubing Level 3&4", button: true },
      { name: "IWCF Well Intervention Wireline Level 3&4", button: true },
      { name: "IWCF Well Intervention Snubbing Level 3&4", button: true },
      { name: "IADC Well Sharp/Well Control for Surface BOP Introductory Level", button: true },
      { name: "IADC WellSharp/Well Control for Combined Surface/Subsea Introductory Level", button: true },
      { name: "IADC Well Sharp/Well Control for Surface BOP Driller Level", button: true },
      { name: "IADC Well Sharp/Well Control for Combined Surface/Subsea Driller Level", button: true },
      { name: "IADC Well Sharp/Well Control for Surface BOP Supervisor Level", button: true },
      { name: "IADC WellSharp/Well Control for Combined Surface/Subsea Supervisor Level", button: true },
      { name: "IADC/Well Services Wireline", button: true },
      { name: "IADC/Well Services Coiled Tubing", button: true },
      { name: "IADC/Well Services Snubbing", button: true },
      { name: "IADC/Well Services Oil and Gas Operator Representative (OGO)", button: true },
      { name: "IADC/Well Services Work Over", button: true },
      { name: "Hydrogen Sulfide (H2S) & SCBA Awareness", button: true },
      { name: "Stuck Pipe Prevention, Hole Cleaning and Fishing Tools", button: true },
      { name: "Rig Inspection and Maintenance", button: true },
      { name: "Fire Safety", button: true },
      { name: "Confined Space and Rescue Training", button: true },
      { name: "Authorized Gas Tester", button: true },
      { name: "Train the Trainer (TOT)", button: true },
      { name: "Drops and Scaffolding", button: true },
      { name: "Working On Heights", button: true },
      { name: "Crane Lifting Operation", button: true },
    ],
  },
  {
    title: "ECSI",
    subItems: [
      { name: "First Aid", button: true },
      { name: "Advanced First Aid, CPR, And AED", button: true },
    ],
  },
  {
    title: "DROPS",
    subItems: [
      { name: "DROPS", button: true },
      { name: "DROPPED OBJECTS", button: true },
      { name: "DROPS AWARENESS", button: true },
    ],
  },
  {
    title: "IOSH",
    subItems: [
      { name: "IOSH Managing Safely", button: true },
      { name: "IOSH Working Safely", button: true },
    ],
  },
  {
    title: "HSI",
    subItems: [
      { name: "Basic First Aid", button: true },
      { name: "CPR/AED", button: true },
      { name: "Wildness First Aid", button: true },
      { name: "Bloodborne Pathogens", button: true },
      { name: "Emergency Oxygen Admin", button: true },
      { name: "Child/Babysitting Safety", button: true },
      { name: "Pediatrics", button: true },
      { name: "Combination CPR / AED and First Aid", button: true },
      { name: "Advanced First Aid", button: true },
    ],
  },
  {
    title: "NASP-IASP",
    subItems: [
      { name: "NASP 10 hour Course for General Industry", button: true },
      { name: "NASP 30 hour Course for General Industry", button: true },
      { name: "NASP 10 Hours for Constructions", button: true },
      { name: "NASP 30 Hours for Constructions", button: true },
      { name: "Occupational Safety & Health Basic", button: true },
      { name: "Diploma Occupational Safety & Health Advanced", button: true },
      { name: "Diploma Occupational Safety and Health Supervisor", button: true },
      { name: "Diploma Safety Awareness Courses/HAZWOPER Awareness", button: true },
      { name: "Safety Awareness Courses/ Lockout Tagout", button: true },
      { name: "Safety Awareness Courses/ Back Safety", button: true },
      { name: "Safety Awareness Courses/Egress Fire Safety", button: true },
      { name: "Safety Awareness Courses/ Ergonomics", button: true },
      { name: "Safety Awareness Courses/Machine Guarding", button: true },
    ],
  },
  {
    title: "AOSH",
    subItems: [
      { name: "First Aid - Level 2 Award in Emergency First Aid at Work", button: true },
      { name: "First Aid - Level 3 Award in First Aid at Work", button: true },
      { name: "First Aid - Level 3 Award in Paediatric First Aid", button: true },
      { name: "Health & Safety - Level 2 Award in Health & Safety at Work Place", button: true },
      { name: "Health & Safety - Level 3 Award in Health & Safety at Work Place", button: true },
      { name: "Health & Safety - Level 4 Award in Health & Safety at Work Place", button: true },
      { name: "Health & Safety - Level 2 Award in Manual Handling - Principles and Practices", button: true },
      { name: "Health & Safety - Manual Handling Train The Trainer", button: true },
      { name: "Health & Safety - Level 2 Award in Risk Assessment", button: true },
      { name: "Health & Safety - Level 3 Award in Risk Assessment", button: true },
      { name: "Health & Safety - Level 2 Award in COSHH", button: true },
      { name: "Health & Safety - Level 3 Award in Emergency Rescue from Confined Space", button: true },
      { name: "Health & Safety - Stress Management", button: true },
      { name: "Health & Safety - Accident Investigation", button: true },
      { name: "Health & Safety - Job Safety Analysis", button: true },
      { name: "Fire Safety - Level 1 Award in Fire Safety Awareness", button: true },
      { name: "Fire Safety - Level 2 Award in Fire Safety Principles", button: true },
      { name: "Fire Safety - Level 3 Award in Fire Safety Risk Assessment And Control", button: true },
      { name: "Food Safety - Level 2 Award in Food Safety Catering", button: true },
      { name: "Food Safety - Level 2 Award in Food Safety Manufacturing", button: true },
      { name: "Food Safety - Level 2 Award in Food Safety Retail", button: true },
      { name: "Food Safety - Level 2 Award in HACCP based Food Safety System in Manufacturing", button: true },
      { name: "Food Safety - Level 2 Award in Principles of HACCP", button: true },
      { name: "Food Safety - Level 3 Award in Food Safety Supervision for Catering", button: true },
      { name: "Food Safety - Level 3 Award in Food Safety Supervision for Manufacturing", button: true },
      { name: "Food Safety - Level 3 Award in Food Safety Retail", button: true },
      { name: "Food Safety - Level 4 Award in Managing Food Safety in Catering", button: true },
      { name: "Food Safety - Level 4 Award in Food Safety Management for Manufacturing", button: true },
      { name: "Environmental Protection- Level 2 Award in Environmental Principles & Best Practices", button: true },
      { name: "Environmental Protection- Level 3 Award in Environmental Management Certified", button: true },
      { name: "Certified Master Trainer (TOT)", button: true },
      { name: "Working on Height", button: true },
      { name: "H2S", button: true },
      { name: "Confined Space", button: true },
      { name: "Authorized Gas Tester", button: true },
      { name: "Drops and Scaffolding", button: true },
      { name: "International managing safely", button: true },
      { name: "COVID -19 Safety Awareness", button: true },
      { name: "Person in charge in work", button: true },
      { name: "HSE Supervisor", button: true },
    ],
  },
  {
    title: "OPITO BOSIET",
    subItems: [
      { name: "BOSIET + TSBB", button: true },
      { name: "T-BOSIET", button: true },
      { name: "T-BOSIET + EBS", button: true },
      { name: "T-BOSIET + TSBB", button: true },
      { name: "T-BOSIET + EBS + TSBB", button: true },
      { name: "FOET", button: true },
      { name: "FOET + TSBB", button: true },
      { name: "T-FOET", button: true },
      { name: "T-FOET + EBS", button: true },
      { name: "T-FOET + TSBB", button: true },
      { name: "HUET", button: true },
      { name: "T-HUET", button: true },
      { name: "T-HUET + EBS", button: true },
      { name: "TSBB", button: true },
    ],
  },
];

const dataManpowerProvision = [
  {
    title: "Importance of Skilled Personnel",
    subItems: [
      {
        name: "The importance of well-trained, motivated, skilled, safety-oriented personnel with a teamwork attitude to crew and operate drilling units cannot be stressed enough.",
        button: true,
      },
      {
        name: "No matter how well-engineered, well-equipped, and well maintained a drilling unit is, it will not perform any better than the crew who manage, operate, and maintain it.",
        button: true,
      },
    ],
  },
  {
    title: "High-Skill Manpower Provision",
    subItems: [
      {
        name: "We provide high-skill manpower sourcing for oil and gas and drilling activities. We deploy skilled professionals for onshore and offshore projects across multiple disciplines.",
        button: true,
      },
    ],
  },
  {
    title: "Our Expertise Includes",
    subItems: [
      { name: "Personnel Selection (Review of Resume, testimonial, certificates & licenses)", button: true },
      { name: "Visa Applications", button: true },
      { name: "Travel arrangement (ticket bookings, Letter of Guarantee, etc.)", button: true },
      { name: "Organizing medical examinations and certifications", button: true },
      { name: "Organizing safety training and certifications", button: true },
      { name: "Inspecting/testing certification (Conducting Welder Qualifications Test)", button: true },
    ],
  },
  {
    title: "Available Manpower Positions",
    subItems: [
      { name: "Drilling Crews", button: true },
      { name: "Geologist", button: true },
      { name: "Directional Driller", button: true },
      { name: "Drilling Superintendent", button: true },
      { name: "Rig Manager", button: true },
      { name: "Senior Tool Pusher / Night Tour Pusher", button: true },
      { name: "Rig Mechanic", button: true },
      { name: "Rig Electrician", button: true },
      { name: "Driller / Assistant Driller", button: true },
      { name: "Derrickhand", button: true },
      { name: "Floor Man", button: true },
      { name: "Chief Mechanic", button: true },
      { name: "Chief Electrician", button: true },
      { name: "Mechanic", button: true },
      { name: "Electrician", button: true },
      { name: "Assistant Mechanic", button: true },
      { name: "Assistant Electrician", button: true },
      { name: "2nd Engineer (Drilling Ship)", button: true },
      { name: "3rd Engineer (Drilling Ship)", button: true },
      { name: "Motorman", button: true },
      { name: "Welder", button: true },
      { name: "Chief Painter", button: true },
      { name: "Painter", button: true },
      { name: "Safety Officer", button: true },
      { name: "HSE Assistant", button: true },
      { name: "Medic", button: true },
      { name: "Radio Operator", button: true },
      { name: "Interpreter", button: true },
      { name: "Material Man / Store Keeper", button: true },
    ],
  },
];



  return (
    <>
    <div className="relative bg-[url('/bgTrain.png')] bg-cover bg-center h-[400px] flex justify-center items-center text-center px-2">
        <div className="absolute inset-0 bg-[#000B45] opacity-30 z-0"/>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-white font-bold text-5xl"
        >
          Training & Manpower Services
        </motion.h1>
    </div>

    <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center my-8 text-black px-2"
        >
        BNSP & LOCAL ACCREDITATION
    </motion.h1>



    <div className="bg-[#180060] text-white p-4 w-full border border-white/20 ">
      {dataLocalAccreditaion.map((main) => (
        <div key={main.title} className="border-b border-white/20 py-2">
          {/* Main Category */}
          <button
            className="flex items-center gap-2 text-lg font-semibold"
            onClick={() =>
              setOpenMain(openMain === main.title ? "" : main.title)
            }
          >
            <span className="text-orange-500 text-xl font-bold">
              {openMain === main.title ? "−" : "+"}
            </span>
            {main.title}
          </button>

          {/* Sub Items */}
          {openMain === main.title && main.subItems.length > 0 && (
            <div className="ml-8 mt-2 border border-white/40 rounded-md overflow-hidden">
              {main.subItems.map((sub) => (
                <div
                  key={sub.name}
                  className="flex items-center justify-between border-b border-white/20 px-3 py-2 last:border-b-0"
                >
                  <button
                    className="flex items-center gap-2 text-sm  text-left whitespace-normal"
                    onClick={() =>
                      setOpenSub(openSub === sub.name ? "" : sub.name)
                    }
                  >
                    <span className="text-orange-500 font-bold flex-shrink-0">
                      {openSub === sub.name ? "−" : "+"}
                    </span>
                    {sub.name}
                  </button>
                  {sub.button && openSub === sub.name && (
                    <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md">
                      <Link href='/Contact'>Register Now</Link>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold text-center my-8 text-black"
      >
      INTERNATIONAL TRAINING PROGRAMS
    </motion.h1>

      <div className="bg-white text-black p-4 w-full  border border-black/20">
      {dataIADC.map((main) => (
        <div key={main.title} className="border-b border-black/20 py-2">
          {/* Main Category */}
          <button
            className="flex items-center gap-2 text-lg font-semibold"
            onClick={() =>
              setOpenMain(openMain === main.title ? "" : main.title)
            }
          >
            <span className="text-orange-500 text-xl font-bold">
              {openMain === main.title ? "−" : "+"}
            </span>
            {main.title}
          </button>

          {/* Sub Items */}
          {openMain === main.title && main.subItems.length > 0 && (
            <div className="ml-8 mt-2 border border-black/40 rounded-md overflow-hidden">
              {main.subItems.map((sub) => (
                <div
                  key={sub.name}
                  className="flex items-center justify-between border-b border-black/20 px-3 py-2 last:border-b-0"
                >
                  <button
                    className="flex items-center gap-2 text-sm  text-left whitespace-normal"
                    onClick={() =>
                      setOpenSub(openSub === sub.name ? "" : sub.name)
                    }
                  >
                    <span className="text-orange-500 font-bold flex-shrink-0">
                      {openSub === sub.name ? "−" : "+"}
                    </span>
                    {sub.name}
                  </button>
                  {sub.button && openSub === sub.name && (
                    <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md">
                      <Link href='/Contact'>Register Now</Link>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

        <motion.h1
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold text-center my-8 text-black"
      >
      MANPOWER SERVICES
    </motion.h1>

    <div className="bg-[#180060] text-white p-4 w-full border border-white/20 ">
      {dataManpowerProvision.map((main) => (
        <div key={main.title} className="border-b border-white/20 py-2">
          {/* Main Category */}
          <button
            className="flex items-center gap-2 text-lg font-semibold"
            onClick={() =>
              setOpenMain(openMain === main.title ? "" : main.title)
            }
          >
            <span className="text-orange-500 text-xl font-bold">
              {openMain === main.title ? "−" : "+"}
            </span>
            {main.title}
          </button>

          {/* Sub Items */}
          {openMain === main.title && main.subItems.length > 0 && (
            <div className="ml-8 mt-2 border border-white/40 rounded-md overflow-hidden">
              {main.subItems.map((sub) => (
                <div
                  key={sub.name}
                  className="flex items-center justify-between border-b border-white/20 px-3 py-2 last:border-b-0"
                >
                  <button
                    className="flex items-center gap-2 text-sm  text-left whitespace-normal"
                    onClick={() =>
                      setOpenSub(openSub === sub.name ? "" : sub.name)
                    }
                  >
                    <span className="text-orange-500 font-bold flex-shrink-0">
                      {openSub === sub.name ? "−" : "+"}
                    </span>
                    {sub.name}
                  </button>
                  {sub.button && openSub === sub.name && (
                    <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md">
                      <Link href='/Contact'>Register Now</Link>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    </>
  );
};

export default Training;
