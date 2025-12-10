import Navbar from "@/components/Navbar";
import React from "react";
import Homeback2 from "@/public/homeback2-sky.jpg";
import Homeback from "@/public/homeback2.jpg";
import Image from "next/image";
import knowldege from "@/public/hero-image.jpg";
import interview from "@/public/Livelihood_interview.jpg";
import incubation from "@/public/KaleWork.jpg";

import { ArrowRight, Lamp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import LivelihoodCard from "@/components/EDELCard";
import { LivelihoodSections } from "@/data/Edelcontent";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="border w-full lg:px-20 py-8 lg:py-16 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="self-stretch h-fit md:h-[522px] p-3 rounded-3xl inline-flex flex-col md:flex-row justify-between items-center overflow-hidden">
          <div className="md:w-[480px] self-stretch px-2 md:px-7 py-8 rounded-2xl inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch justify-start text-black w-10 md:w-full text-5xl md:text-6xl font-black leading-10 md:leading-[76.80px]">
                EDEL - Program
              </div>
              <div className="self-stretch justify-start text-black text-xl md:text-2xl font-bold  leading-7">
                Enabling DRE Ecosystem For Livelihoods in Ethiopia
              </div>
              <div className="self-stretch h-28 justify-start text-black text-base font-normal  leading-6">
                Program aimed to establish a robust Decentralized Renewable Energy (DRE) ecosystem
                in Ethiopia, focusing on livelihoods by integrating clean energy solutions across
                different sectors.
              </div>
            </div>
          </div>
          <div className="w-full md:w-[640px] flex flex-col md:flex-row justify-start items-center gap-3">
            <div className="flex-1 order-2 md:order-1 w-full h-fit md:h-[480px] inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
              <div
                className="self-stretch flex-1 px-4 py-8 md:px-4 md:py-6 md:h-auto bg-black/50 rounded-2xl flex flex-col justify-end items-start gap-4 overflow-hidden"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${incubation.src}) lightgray 10% / cover no-repeat`,
                }}
              >
                <div className="self-stretch justify-start text-white text-xl font-bold ">
                  Livelihood & <br className="hidden md:block" />
                  Finance
                </div>
                <Link href="#livelihood">
                  <div className="h-9 px-4 py-1 bg-amber-400 rounded-[38.55px] inline-flex justify-center items-center gap-2 overflow-hidden">
                    <div className="justify-start text-sm font-medium ">View More</div>
                    <div className="w-4 h-4 left-[5.96px] top-[5.96px] absolute bg-black" />
                  </div>
                </Link>
              </div>
              <div
                className="self-stretch flex-1 px-4 py-8 md:px-4 md:py-6 md:h-auto  bg-black/50 rounded-2xl flex flex-col justify-end items-start gap-4 overflow-hidden"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${incubation.src}) lightgray 10% / cover no-repeat`,
                }}
              >
                <div className="self-stretch justify-start text-white text-xl font-bold ">
                  Knowledge{" "}
                </div>
                <Link href="#knowledge">
                  <div className="h-9 px-4 py-1 bg-amber-400 rounded-[38.55px] inline-flex justify-center items-center gap-2 overflow-hidden">
                    <div className="justify-start text-sm font-medium ">View More</div>
                    <div className="w-4 h-4 left-[5.96px] top-[5.96px] absolute bg-black" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full  order-1 md:order-2 h-fit md:h-[480px] flex justify-start items-start gap-4 md:gap-3 overflow-hidden ">
              <div
                className="flex-1 self-stretch px-4 py-8 bg-black/50 rounded-2xl inline-flex flex-col justify-end items-start gap-6 md:gap-4 overflow-hidden"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${incubation.src}) lightgray 10% / cover no-repeat`,
                }}
              >
                <div className="self-stretch justify-start text-white text-xl font-bold ">
                  Incubation
                </div>
                <Link href="#incubation">
                  <div className="h-9 px-4 py-1 bg-amber-400 rounded-[38.55px] inline-flex justify-center items-center gap-2 overflow-hidden">
                    <div className="justify-start text-sm font-medium ">View More</div>
                    <div className="w-4 h-4 left-[5.96px] top-[5.96px] absolute bg-black" />
                  </div>
                </Link>
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
          className="self-stretch px-8 py-6 md:py-24  bg-zinc-900/80 inline-flex flex-col justify-center items-end gap-36"
          style={{
            background: `linear-gradient(0deg, rgba(14, 34, 25, 0.80) 0%, rgba(14, 34, 25, 0.80) 100%), url(${Homeback.src}) lightgray -140px -240px / 202.078% 151.165% no-repeat`,
          }}
        >
          <div className="self-stretch flex flex-col justify-center items-center md:gap-2">
            <div className=" w-full flex flex-col justify-center items-end gap-2.5">
              <div className="px-2.5 flex justify-center items-center gap-4">
                <div className="  justify-start text-amber-400 text-2xl md:text-3xl font-bold uppercase tracking-widest text-right">
                  WHAT DO WE DO in EDEL
                </div>
                <div className="w-12 outline-2  outline-amber-400" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
              <div className="w-full md:px-8 inline-flex flex-col md:flex-row justify-start items-center">
                <div className="hidden lg:block md:w-[622px] md:h-[538px] relative">
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
                    <div className="w-60 justify-start text-sm font-medium  leading-5">
                      Incubate and Accelerate Clean Energy Enterprises and Tech Innovators
                    </div>
                  </div>
                  <div className="px-5 py-3 left-[263px] top-[73px] absolute bg-white/60 rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.50)] inline-flex justify-center items-center gap-2">
                    <div className="w-60 justify-start text-sm font-medium  leading-5">
                      Assessing and Discovering problems in the livelihood
                    </div>
                  </div>
                  <div className="w-80 px-5 py-3 left-[228px] top-[457px] absolute bg-white/60 rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.50)] inline-flex justify-center items-center gap-2">
                    <div className="flex-1 justify-start text-sm font-medium  leading-5">
                      Leverage resources and expertise of financial institutions to provide
                      accessible financing solutions
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start md:gap-8 mt-6">
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
                    adipiscing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Key Components */}
      <section className="w-full py-8 px-4 md:px-20 md:py-16 bg-white flex flex-col justify-start items-center gap-8 md:gap-16">
        <div className="justify-start text-gray-800 text-2xl md:text-3xl font-bold uppercase ">
          KEY COMPONENTS
        </div>
        {/* components */}
        {LivelihoodSections.map((section, index) => (
          <LivelihoodCard key={index} {...section} />
        ))}
      </section>
      <div className="container mx-auto px-6 md:px-10 lg:px-16 mb-12">
        <div className="bg-amber-400 rounded-3xl p-8 md:p-10 lg:p-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center shadow-lg">
          <div className="space-y-6 text-slate-900">
            <div className="text-sm font-semibold tracking-[0.15em]">BUILD TOGETHER</div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Support
              <br />
              Our Programs
            </div>
            <p className="text-lg leading-relaxed text-slate-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#232433] text-white px-6 py-3 text-base font-semibold">
                Donate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#232433] text-[#232433] px-6 py-3 text-base font-semibold hover:bg-[#232433] hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div
            className="relative w-full overflow-hidden rounded-2xl bg-slate-100"
            style={{ aspectRatio: "16 / 10" }}
          >
            <Image src="/solar.jpg" alt="Program" fill className="object-cover" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
