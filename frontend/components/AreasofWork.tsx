"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
  key: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

const sections: Section[] = [
  {
    key: "livelihood",
    title: "Livelihood",
    image: "/livelihood.png",
    description:
      "We deploy decentralized renewable energy (DRE) technologies like solar pumps and cold storage for agriculture and power tools for MSMEs. We co-design solutions, facilitate financing, and incubate local enterprises to boost productivity, incomes, and job creation.",
    link: "/ourwork/livelihood",
  },
  {
    key: "health",
    title: "Health",
    image: "/Health2.jpg",
    description:
      "We solar-electrify rural health clinics, provide energy-efficient medical equipment, and support digitalization. This ensures reliable power for lighting, vaccine refrigeration, and medical devices, directly improving maternal and child healthcare outcomes and saving lives in underserved communities. ",
    link: "/ourwork/health",
  },
  {
    key: "education",
    title: "Education",
    image: "/Education2.png",
    description:
      "We work to power rural schools with clean energy, enabling digital learning tools, lighting for evening classes, and a better learning environment. This supports educational outcomes and community development after hours..",
    link: "/ourwork/education",
  },
];

export default function AreasOfWork() {
  const [selected, setSelected] = useState<string | null>(null);

  const expand = (key: string) => setSelected(key);
  const collapse = () => setSelected(null);

  return (
    <div className="relative h-108 lg:h-144 overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        {/* DEFAULT GRID VIEW */}
        {selected === null && (
          <motion.div
            key="grid"
            className="flex flex-wrap md:gap-4 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* TOP TWO CARDS */}
            <div className="flex gap-4 w-full">
              {sections.slice(0, 2).map((sec) => (
                <motion.div
                  key={sec.key}
                  layout
                  onClick={() => expand(sec.key)}
                  className="rounded-xl overflow-hidden shadow-lg relative lg:h-64 w-1/2 h-48 cursor-pointer"
                  style={{
                    background: `
                          linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
                          url(${sec.image}) center / cover no-repeat
                        `,
                  }}
                >
                  <div className="p-6 flex flex-col justify-end h-full">
                    <h4 className="text-white text-2xl font-semibold mb-2">{sec.title}</h4>
                    <button className="px-4 w-fit py-2 bg-amber-400 text-black rounded-4xl">
                      Learn more
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM CARD */}
            {(() => {
              const sec = sections[2];
              return (
                <motion.div
                  key={sec.key}
                  layout
                  onClick={() => expand(sec.key)}
                  className="rounded-xl overflow-hidden shadow-lg relative lg:h-64 w-full h-48 cursor-pointer"
                  style={{
                    background: `
                          linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
                          url(${sec.image}) center / cover no-repeat
                        `,
                  }}
                >
                  <div className="p-6 flex flex-col justify-end h-full">
                    <h4 className="text-white text-2xl font-semibold mb-2">{sec.title}</h4>
                    <button className="px-4  w-fit py-2 bg-amber-400 text-black rounded">
                      Learn more
                    </button>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}

        {/* EXPANDED VIEW */}
        {selected !== null && (
          <motion.div
            key="expanded"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{
              background: `
                    linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
                    url(${sections.find((s) => s.key === selected)!.image}) center / cover no-repeat
                  `,
            }}
          >
            <div className="p-8 text-white flex flex-col justify-end h-full">
              <h2 className="text-4xl font-bold mb-4">
                {sections.find((s) => s.key === selected)!.title}
              </h2>

              <p className="max-w-xl mb-6">
                {sections.find((s) => s.key === selected)!.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={sections.find((s) => s.key === selected)!.link}
                  className="px-4 py-2 bg-amber-400 text-black rounded-xl"
                >
                  Read More
                </a>

                <button onClick={collapse} className="px-4 py-2 bg-gray-200 text-black rounded-xl">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
