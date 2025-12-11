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
      "We support low-income households in accessing economic opportunities through skills development, market linkages, and sustainable income-generating models designed to enhance long-term stability and resilience.",
    link: "/ourwork/livelihood",
  },
  {
    key: "health",
    title: "Health",
    image: "/solar.jpg",
    description:
      "Our work in health focuses on strengthening community-based healthcare systems, improving service delivery, and empowering local institutions to advance public health outcomes at scale.",
    link: "/ourwork/health",
  },
  {
    key: "education",
    title: "Education",
    image: "/solar.jpg",
    description:
      "Education initiatives aim to expand access to quality learning resources, enhance teaching capacity, and equip learners with the skills needed to thrive in an evolving global landscape.",
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
