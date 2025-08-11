'use client'

import Image from "next/image"
import {motion} from 'framer-motion'

const page = () => {
  return (
    <>
    <div className="overflow-x-hidden">
      {/* Section Header */}
      <div className="relative bg-[url('/bgAbout.png')] bg-cover bg-center h-[400px] flex justify-center items-center">
        <div className="absolute inset-0 bg-[#000B45] opacity-30 z-0" />
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-white font-bold text-5xl"
        >
          About Us
        </motion.h1>
      </div>

      {/* Section Content */}
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-black mb-10"
        >
          Shaping the Future with Aryndo
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/bgAbout2.png"
              alt="About image"
              width={300}
              height={300}
              className="object-contain w-[200px] md:w-[300px] h-auto rounded"
            />
          </motion.div>

          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-black text-justify max-w-xl leading-relaxed"
          >
            PT. Aryndo Utama Sarana Sukses is a trusted provider of onshore/offshore drilling and geothermal services, committed to delivering high-quality, cost-efficient solutions while upholding global HSE standards and supporting workforce development through training and career opportunities in Indonesia and abroad.
          </motion.h3>
        </div>
      </section>

    <section className=" bg-[#24046B] py-16 px-6 md:px-20 flex flex-col items-center space-y-16">
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center space-y-4"
      >
        <h1 className="text-2xl md:text-2xl font-bold text-[#EE4312]">
          Certified and Recognized Training Programs
        </h1>
        <h3 className="text-base md:text-l font-light">
          Our programs are nationally and internationally accredited, ensuring compliance with global industry standards across well control, safety certifications, and technical skills development.
        </h3>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center space-y-4"
      >
        <h1 className="text-2xl md:text-2xl font-bold text-[#EE4312]">
          Custom Learning Solutions
        </h1>
        <h3 className="text-base md:text-l font-light">
          We design customized training to meet your organization’s operational needs—enhancing workforce capability, safety, and performance in the field.
        </h3>
      </motion.div>
    </section>

    <section className="text-white flex flex-col items-center px-4 py-8 bg-white space-y-16">
      
      {/* Vision & Mission */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[300px] w-full rounded-lg overflow-hidden shadow-lg"
        >
          <div className="bg-[url('/bgVision.png')] bg-cover bg-center h-full p-8 flex flex-col justify-center backdrop-brightness-50">
            <div className="absolute inset-0 bg-black opacity-30 z-0" />
            <h2 className="z-10 text-3xl font-bold mb-2">Vision</h2>
            <p className="z-10 text-base leading-relaxed">
              To be a well-established brand in the oil and gas industries with
              innovative simplicity, ethics, and integrity.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[300px] w-full rounded-lg overflow-hidden shadow-lg"
        >
          <div className="bg-[url('/bgMission.png')] bg-cover bg-center h-full p-8 flex flex-col justify-center backdrop-brightness-50">
            <div className="absolute inset-0 bg-black opacity-30 z-0" />
            <h2 className="z-10 text-3xl font-bold mb-2">Mission</h2>
            <p className="z-10 text-base leading-relaxed">
              Set up quality systems to accompany our customers in the management of change.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-[url('/bgValues.png')] bg-cover bg-center p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4">Values</h2>
        <p className="text-base mb-8 max-w-4xl">
          We treat with respect our clients & customers, our suppliers, our partners. Protect the environment and create a culture of progressive improvement.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Value 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black/40 p-4 rounded-md flex-1 min-h-[150px]"
          >
            <h3 className="text-lg font-semibold mb-2">Respect for Stakeholders</h3>
            <p className="text-sm leading-relaxed">
              We value and maintain professional relationships with clients,
              customers, suppliers, and partners through mutual respect and
              integrity.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/40 p-4 rounded-md flex-1 min-h-[150px]"
          >
            <h3 className="text-lg font-semibold mb-2">Environmental Protection</h3>
            <p className="text-sm leading-relaxed">
              We operate responsibly with a commitment to sustainability and
              environmental care.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black/40 p-4 rounded-md flex-1 min-h-[150px]"
          >
            <h3 className="text-lg font-semibold mb-2">Continuous Improvement</h3>
            <p className="text-sm leading-relaxed">
              We strive for ongoing growth by enhancing our processes, skills, and services.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>

    <div className="relative z-20 text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black">Why Aryndo?</h1>
    </div>

   <section className="relative text-white py-16 overflow-hidden">
      {/* Title */}

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/bgAbout3.png')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-[#000B45] opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2">Talent Solutions for Oil & Gas</h3>
            <p>We address the growing talent gap in the industry by connecting companies with qualified professionals.</p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2">Beyond Certification</h3>
            <p>We go further than just passing exams—ensuring candidates truly grasp the material.</p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2">Deep Market Expertise</h3>
            <p>Our team understands the complexity of the Oil & Gas sector, ensuring the right talent fit for your needs.</p>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2">Practical Application Focus</h3>
            <p>Training is designed to prepare candidates for real-world well control challenges on the job.</p>
          </motion.div>
        </div>
      </div>
    </section>

    </div>
    </>
  )
}

export default page