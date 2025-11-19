import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Navbar />

      {/* Hero - Areas of Work */}
      <header
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 80, 46, 0.90) 35.58%, rgba(0, 0, 0, 0.72) 100%), url('/wateringMan.png') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="container mx-auto px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-2 items-start">
            {/* Left copy */}
            <div className="flex  flex-col text-white max-w-lg lg:pr-8">
              <div className="flex items-center gap-3 mb-16">
                <div className="w-12 h-0.5 bg-amber-400" />
                <div className="uppercase text-4xl text-amber-400 tracking-widest font-semibold">
                  Areas of Work
                </div>
              </div>
            </div>
            {/* lg:h-64 lg:w-74 h-48 */}
            {/* Right cards - overlapping */}
            <div className="flex flex-wrap gap-4 py-8">
              <div className="flex gap-4 w-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Programs section - alternating layout */}
      <section className="bg-white">
        <div className="flex flex-col container mx-auto px-16 py-16 gap-6">
          <div className="flex items-center justify-end mb-12">
            <h3 className="text-4xl font-semibold text-emerald-900 mr-4">OUR PROGRAMS</h3>
            <div className="w-12 h-0.5 bg-emerald-900" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-26 gap-12">
            {/* Program item 1 - image right */}
            <div className="flex flex-col gap-2 justify-center">
              <h4 className="text-4xl font-semibold text-gray-900 mb-4">
                Enabling DRE Ecosystem for Livelihoods in Ethiopia (EDEL)
              </h4>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Porro vero at quae eaque delectus eius excepturi, provident voluptates, alias
                repudiandae possimus labore iure soluta velit natus quia fuga? Repudiandae, modi.
              </p>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum trisident voluptates, aliaspossimus labore iure soluta velit natus
                quia fuga? Repudiandae, modi.
              </p>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Porro vero at quae eaque delectus eius excepturi, provident voluptates, alias
                repudiandae possimus labore iure soluta velit natus quia fuga? Repudiandae, modi.
              </p>
              <button className="px-4 py-2 bg-amber-400 text-black rounded ">Learn more</button>
            </div>
            <div
              className="rounded-xl overflow-hidden h-64 lg:h-128 "
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/solar.jpg') center / cover no-repeat",
              }}
            />
          </div>
        </div>
      </section>

      {/* Electrify banner */}
      <section className="container mx-auto px-16 py-12">
        <div
          className="rounded-xl overflow-hidden relative h-56 md:h-72"
          style={{
            background:
              "linear-gradient( rgba(0,0,0,0.25), rgba(0,0,0,0.25) ), url('/livelihood.png') center / cover no-repeat",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-8">
                You can contribute to Electrify Ethiopia by 2030
              </h2>
              <button className="px-6 py-2 bg-amber-400 text-black rounded">Donate →</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
