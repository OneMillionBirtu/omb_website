"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImpactCards() {
  return (
    <div className="relative flex justify-center items-center w-full h-[500px]">
      {/* Top Right – Health */}
      <motion.div
        initial={{ opacity: 0, x: 150, y: -120 }}
        animate={{ opacity: 1, x: 60, y: -60 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute w-[360px] h-[220px] rounded-2xl shadow-lg overflow-hidden"
      >
        <Image
          src="/solar.jpg"
          className="w-full h-full object-cover"
          alt="Health"
          width={100}
          height={100}
        />
        <div className="absolute top-5 left-5 text-white text-xl font-semibold">
          Electrifying the
          <br />
          Health
        </div>

        <button className="absolute top-5 right-5 bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
          View More →
        </button>
      </motion.div>

      {/* Center Front – Education */}
      <motion.div
        initial={{ opacity: 0, x: -150, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-[420px] h-[260px] rounded-2xl shadow-xl overflow-hidden z-20"
      >
        <Image
          src="/Education.png"
          className="w-full h-full object-cover opacity-90"
          alt="education"
          width={100}
          height={100}
        />
        <div className="absolute top-5 left-5 text-white text-xl font-semibold">
          Powering the
          <br />
          Education
        </div>

        <button className="absolute top-5 right-5 bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
          View More →
        </button>
      </motion.div>

      {/* Bottom Right – Livelihood */}
      <motion.div
        initial={{ opacity: 0, x: 120, y: 180 }}
        animate={{ opacity: 1, x: 40, y: 100 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute w-[360px] h-[220px] rounded-2xl shadow-lg overflow-hidden"
      >
        <Image
          src="/livelihood.png"
          className="w-full h-full object-cover"
          alt="livelihood"
          width={100}
          height={100}
        />
        <div className="absolute top-5 left-5 text-white text-xl font-semibold">
          Empowering the
          <br />
          Livelihood
        </div>

        <button className="absolute top-5 right-5 bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
          View More →
        </button>
      </motion.div>
    </div>
  );
}
