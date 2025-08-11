'use client';

import { useState } from "react";
import {motion} from "framer-motion"


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
        { name: "Operator Unit Perawatan Sumur", button: true },
        { name: "Pengawas Perawatan Sumur", button: true },
      ],
    },
    { title: "Migas K3", subItems: [
        { name: "Ahli K3 Umum", button: true },
        { name: "Operator K3 Migas", button: true },
        { name: "Pengawas K3 Migas", button: true },
        { name: "Pengawas Utama K3 Migas", button: true },
        { name: "Auditor SMK3 Operator Gas Tester", button: true },
        { name: "Ahli K3 Listrik", button: true },
      ], 
    },
    { title: "Safety/ programs", subItems: [
        { name: "Pengawas Utama K3 Migas", button: true },
        { name: "H2S", button: true },
        { name: "Fire Fighting", button: true },
        { name: "Working at Height", button: true },
        { name: "Operator Alat Angkat dan Angkut", button: true },
        { name: "Juru Ikat (Rigger)", button: true },
        { name: "Inspektur Crane", button: true },
        { name: "Juru Las (Welder)", button: true },
        { name: "Forklift", button: true },
        { name: "Scaffolding", button: true },
        { name: "Authorized Gas Tester", button: true },
        { name: "Ahli Fluida Pengeboran", button: true },
        { name: "Mud Logger", button: true },
    ] },
    { title: "Aryndo Utama Internal house Training", subItems: [
        { name: "Basic Safety Training", button: true },
        { name: "Basic Sea Survival", button: true },
        { name: "BOSIET (Basic offshore Safety Induction and Emergency Training)", button: true },
        { name: "HUET (Helicopter Underwater Escape Training)", button: true },
        { name: "OERTM (Offshore Emergency Rescue Team Member)", button: true },
        { name: "OFTM (Offshore Fire Team Member)", button: true },
        { name: "Helicopter Refueling", button: true },
        { name: "Offshore Emergency Helideck Team Member (OEHTM)", button: true },
        { name: "Basic First Aid and CPR", button: true },
        { name: "Basic Fire Fighting", button: true },
    ] },
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
    subItems: [{
      name: "This course fulfills IWCF requirements for Surface and Combined Stack qualifications. It targets critical position holders and follows an IWCF-approved curriculum. Participants will gain comprehensive knowledge of well control theory and practical skills for handling well control situations. Upon passing the exam, candidates receive IWCF Level 3 or 4 certification, valid for two years.",
      button:true,
    }
    ]
  }
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
                      Register Now
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
                      Register Now
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
                      Register Now
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
