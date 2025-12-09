import Navbar from "@/components/Navbar";
import React from "react";
import Homeback2 from "@/public/homeback2-sky.jpg";
import Homeback from "@/public/homeback2.jpg";
import Image from "next/image";
import knowldege from "@/public/hero-image.jpg";
import interview from "@/public/Livelihood_interview.jpg";
import incubation from "@/public/KaleWork.jpg";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="border w-full pl-20 pr-16 py-16 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="self-stretch h-[522px] p-3 rounded-3xl inline-flex justify-between items-center overflow-hidden">
          <div className="w-[480px] self-stretch px-7 py-8 rounded-2xl inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch justify-start text-black text-6xl font-black font-['Lato'] leading-[76.80px]">
                EDEL - Program
              </div>
              <div className="self-stretch justify-start text-black text-2xl font-bold font-['Lato'] leading-7">
                Enabling DRE Ecosystem For Livelihoods in Ethiopia
              </div>
              <div className="self-stretch h-28 justify-start text-black text-base font-normal  leading-6">
                Program aimed to establish a robust Decentralized Renewable Energy (DRE) ecosystem
                in Ethiopia, focusing on livelihoods by integrating clean energy solutions across
                different sectors.
              </div>
            </div>
          </div>
          <div className="w-[616.87px] flex justify-start items-center gap-3">
            <div className="flex-1 h-[480px] inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
              <div className="self-stretch flex-1 px-4 py-6 bg-black/50 rounded-2xl flex flex-col justify-end items-start gap-4 overflow-hidden">
                <div className="self-stretch justify-start text-white text-xl font-bold ">
                  Livelihood &<br />
                  Finance
                </div>
                <div className="h-9 px-4 py-1 bg-amber-400 rounded-[38.55px] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="justify-start text-Text---Header text-sm font-normal ">
                    View More
                  </div>
                  <div className="w-4 h-4 left-[5.96px] top-[5.96px] absolute bg-black" />
                </div>
              </div>
              <div className="self-stretch flex-1 px-4 py-6 bg-black/50 rounded-2xl flex flex-col justify-end items-start gap-4 overflow-hidden">
                <div className="self-stretch justify-start text-white text-xl font-bold ">
                  Knowledge{" "}
                </div>
                <div className="h-9 px-4 py-1 bg-amber-400 rounded-[38.55px] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="justify-start text-Text---Header text-sm font-normal ">
                    View More
                  </div>
                  <div className="w-4 h-4 left-[5.96px] top-[5.96px] absolute bg-black" />
                </div>
              </div>
            </div>
            <div className="flex-1 h-[480px] flex justify-start items-start gap-3 overflow-hidden ">
              <div
                className="flex-1 self-stretch px-4 py-6 bg-black/50 rounded-2xl inline-flex flex-col justify-end items-start gap-4 overflow-hidden"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${Homeback2.src}) lightgray 50% / cover no-repeat`,
                }}
              >
                <div className="self-stretch justify-start text-white text-xl font-bold ">
                  Incubation
                </div>
                <div className="h-9 px-4 py-1 bg-amber-400 rounded-[38.55px] inline-flex justify-center items-center gap-2 overflow-hidden">
                  <div className="justify-start text-Text---Header text-sm font-normal ">
                    View More
                  </div>
                  <div className="w-4 h-4 left-[5.96px] top-[5.96px] absolute bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What do we do in EDEL */}
      <section>
        {/* The wave */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* IMAGE */}
            <pattern id="bgImage" patternUnits="objectBoundingBox" width="1" height="1">
              <image
                href={Homeback2.src}
                width="1440"
                height="490"
                x=""
                y=""
                style={{ objectFit: "cover" }}
                preserveAspectRatio="xMidYMin slice"
              />
            </pattern>

            {/* GRADIENT */}
            <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(14, 34, 25, 0.8)" />
              <stop offset="100%" stopColor="rgba(14, 34, 25, 0.8)" />
            </linearGradient>

            {/* CLIP SHAPE */}
            <clipPath id="waveShape">
              <path
                d="M 0,500 L 0,187 C 178.1333 203.4 356.2666 219.8 520,197 
                  C 683.7333 174.2 833.0666 112.2 984,104 
                  C 1134.9333 95.8 1287.4666 141.4 1440,187 
                  L 1440,500 L 0,500 Z"
              />
            </clipPath>
          </defs>

          <g transform="translate(1440 0) scale(-1 1)" clipPath="url(#waveShape)">
            {/* background image */}
            <rect width="1440" height="500" fill="url(#bgImage)" />

            {/* overlay gradient */}
            <rect width="1440" height="500" fill="url(#overlay)" />
          </g>
        </svg>
        {/* the what do we do */}
        <div
          className="self-stretch px-8 py-24  bg-zinc-900/80 inline-flex flex-col justify-center items-end gap-36"
          style={{
            background: `linear-gradient(0deg, rgba(14, 34, 25, 0.80) 0%, rgba(14, 34, 25, 0.80) 100%), url(${Homeback.src}) lightgray -140px -240px / 202.078% 151.165% no-repeat`,
          }}
        >
          <div className="self-stretch flex flex-col justify-center items-center gap-2">
            <div className=" w-full flex flex-col justify-center items-end gap-2.5">
              <div className="px-2.5  flex justify-center items-center gap-4">
                <div className="  justify-start text-amber-400 text-3xl font-bold uppercase tracking-widest">
                  WHAT DO WE DO in EDEL
                </div>
                <div className="w-12 outline-2  outline-amber-400" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
              <div className="w-full px-8 inline-flex justify-start items-center">
                <div className="w-[622px] h-[538px] relative">
                  <Image
                    className="w-80 h-50 left-0 -top-px absolute bg-blend-overlay rounded-3xl shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]"
                    src={interview}
                    alt="placeholder"
                  />
                  <div className="w-80 h-50 left-0 -top-px absolute bg-black/30 rounded-3xl shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]" />
                  <Image
                    className="w-96 h-56 left-[181px] top-[130px] absolute rounded-3xl shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]"
                    src={incubation}
                    alt="placeholder"
                    width={100}
                    height={100}
                  />
                  <div className="w-96 h-56 left-[181px] top-[130px] absolute bg-black/40 rounded-3xl shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]" />
                  <Image
                    className="w-80 h-44 left-px top-[329px] absolute rounded-3xl shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]"
                    src={knowldege}
                    alt="placeholder"
                    width={100}
                    height={100}
                  />
                  <div className="w-80 h-50 left-0 top-[329px] absolute bg-black/30 rounded-3xl shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)]" />

                  <div className="px-5 py-3 -left-9 top-[274px] absolute bg-white/60 rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.50)] inline-flex justify-center items-center gap-2">
                    <div className="w-60 justify-start text-Text---Header text-sm font-medium font-['Lato'] leading-5">
                      Incubate and Accelerate Clean Energy Enterprises and Tech Innovators
                    </div>
                  </div>
                  <div className="px-5 py-3 left-[263px] top-[73px] absolute bg-white/60 rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.50)] inline-flex justify-center items-center gap-2">
                    <div className="w-60 justify-start text-Text---Header text-sm font-medium font-['Lato'] leading-5">
                      Assessing and Discovering problems in the livelihood
                    </div>
                  </div>
                  <div className="w-80 px-5 py-3 left-[228px] top-[457px] absolute bg-white/60 rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.50)] inline-flex justify-center items-center gap-2">
                    <div className="flex-1 justify-start text-Text---Header text-sm font-medium font-['Lato'] leading-5">
                      Leverage resources and expertise of financial institutions to provide
                      accessible financing solutions
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-8  mt-6">
                  <div className="self-stretch justify-start text-white text-base font-normal leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo
                    diam libero vitae erat.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo
                    diam libero vitae erat.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo
                    diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis
                    viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    <br />
                    <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
                    eros dolor interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut
                    commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                    libero vitae erat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Key Components */}
      <section className="w-full px-20 py-16 bg-white flex flex-col justify-start items-center gap-16">
        <div className="justify-start text-gray-800 text-3xl font-bold uppercase ">
          KEY COMPONENTS
        </div>
        {/* components */}
        <div>
          <div className="px-9 py-12 rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,82,41,0.80)] outline  -outline-offset-1 outline-neutral-200 inline-flex justify-start items-center gap-12">
            <div className="flex-1  inline-flex flex-col justify-start items-start gap-3">
              <div className=" flex flex-col justify-start items-start">
                <div className=" flex flex-col justify-start items-start gap-4">
                  <div className=" inline-flex justify-center items-center gap-3">
                    <div className="w-16 h-16 relative bg-linear-to-br from-emerald-900 to-emerald-800 rounded-full">
                      <div className="w-8 h-8 left-4 top-4 absolute">
                        <div className="w-7 h-3.5 left-[2.67px] top-[9.33px] absolute outline  outline-offset-[-1.33px] outline-neutral-50" />
                        <div className="w-2 h-2 left-[21.33px] top-[9.33px] absolute outline  outline-offset-[-1.33px] outline-neutral-50" />
                      </div>
                    </div>
                    <div className="flex-1 justify-start text-black text-3xl font-bold leading-10">
                      Livelihood Innovation
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
                    <div className="self-stretch opacity-60 justify-start text-black text-base font-normal leading-6">
                      Transform livelihoods by deploying 56 decentralized renewable energy (DRE)
                      technologies across 10 applications in 56 pilot sites, with 10% user
                      co-financing to drive ownership and sustainability.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex-1 inline-flex flex-col justify-start items-center gap-2.5">
                  <div className="self-stretch justify-start text-black text-base font-normal leading-6">
                    [An Info graphics showing how it is done]
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="inline-flex flex-col justify-center items-center gap-2.5">
                  <div className="w-60 opacity-80 justify-start text-black text-lg font-medium leading-7">
                    [Title]
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2.5">
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline  outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline  outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col justify-center items-center gap-2.5">
                  <div className="w-60 opacity-80 justify-start text-black text-lg font-medium leading-7">
                    [Title]
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2.5">
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-3">
                      <div className="w-4 h-4 relative">
                        <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                        <div className="w-2 h-1.5 left-1.5 top-[2.67px] absolute outline outline-offset-[-0.67px] outline-green-600" />
                      </div>
                      <div className="w-48 h-6 justify-center text-neutral-500 text-base font-normal font-['Inter'] leading-6">
                        [lorem ipsum]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[45%] h-[461px] px-2.5 py-11 bg-black/20 rounded-[20px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
