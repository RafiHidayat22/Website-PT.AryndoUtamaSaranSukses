'use client';

import { motion, easeOut, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "../../../component/ContactForm";

import Image from "next/image";

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: easeOut },
  }),
};

const Page = () => {
  const refContact = useRef(null);
  const isInContact = useInView(refContact, { once: true, amount: 0.3 });

  const refFormContact = useRef(null);
  const isInFormContact = useInView(refFormContact, { once: true, amount: 0.3 });

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="relative bg-[url('/bgContact.png')] bg-cover bg-center h-[400px] flex justify-center items-center text-center">
          <div className="absolute inset-0 bg-[#000B45] opacity-30 z-0" />
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-white font-bold text-5xl"
          >
            Contact
          </motion.h1>
        </div>

        {/* Supply Solutions Section */}
        <div ref={refFormContact} className="bg-white py-12 px-4">
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            animate={isInFormContact ? "visible" : "hidden"}
            className="text-center text-2xl md:text-3xl font-bold text-black mb-10"
          >
            We will be happy to help you
          </motion.h2>
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Contact */}
        <motion.div
          ref={refContact}
          variants={slideLeft}
          initial="hidden"
          animate={isInFormContact ? "visible" : "hidden"}
          className="w-full"
        >
          <div ref={refContact} className="bg-[#24046B] py-12 px-4">
            <motion.h2
              variants={slideLeft}
              initial="hidden"
              animate={isInContact ? "visible" : "hidden"}
              className="text-center text-2xl md:text-3xl font-bold text-white mb-10"
            >
              Contact Us
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInContact ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-8 max-w-6xl mx-auto my-2"
            >
              {/* Card 1 */}
              <motion.div
                custom={0}
                variants={cardFadeUp}
                initial="hidden"
                animate={isInContact ? "visible" : "hidden"}
                className="flex items-center"
              >
                <Image
                  src="/iconLoc.png"
                  alt="icon"
                  width={60}
                  height={60}
                  className="mx-3"
                />
                <div className="flex flex-col">
                  <h2 className="text-med md:text-lg text-white text-justify font-bold">
                    Address
                  </h2>
                  <h3 className="text-sm md:text-med text-white text-justify">
                    Jl. Mawar No.19, RT.03/RW.04, Mustikasari, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17157
                  </h3>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                custom={1}
                variants={cardFadeUp}
                initial="hidden"
                animate={isInContact ? "visible" : "hidden"}
                className="flex items-center"
              >
                <Image
                  src="/iconPhone.png"
                  alt="icon"
                  width={60}
                  height={60}
                  className="mx-3"
                />
                <div className="flex flex-col">
                  <h2 className="text-med md:text-lg text-white text-justify font-bold">
                    Phone
                  </h2>
                  <h3 className="text-sm md:text-med text-white text-justify">
                    +62882003813401
                  </h3>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                custom={2}
                variants={cardFadeUp}
                initial="hidden"
                animate={isInContact ? "visible" : "hidden"}
                className="flex items-center"
              >
                <Image
                  src="/iconWA.png"
                  alt="icon"
                  width={60}
                  height={60}
                  className="mx-3"
                />
                <div className="flex flex-col">
                  <h2 className="text-med md:text-lg text-white text-justify font-bold">
                    Whatsapp
                  </h2>
                  <h3 className="text-sm md:text-med text-white text-justify">
                    +62882003813401
                  </h3>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                custom={3}
                variants={cardFadeUp}
                initial="hidden"
                animate={isInContact ? "visible" : "hidden"}
                className="flex items-center"
              >
                <Image
                  src="/iconEmail.png"
                  alt="icon"
                  width={60}
                  height={60}
                  className="mx-3"
                />
                <div className="flex flex-col">
                  <h2 className="text-med md:text-lg text-white text-justify font-bold">
                    Email
                  </h2>
                  <h3 className="text-sm md:text-med text-white text-justify">
                    info@aryndoutama.com
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </>
  );
};

export default Page;
