import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              <h1 className="lg:text-7xl text-6xl md:text-5xl font-bold mb-6">
                [A catchy Tagline Here]
              </h1>
              <p className=" mb-6 text-amber-400">
                We help our partners move from vision to execution by combining strategic insight
                with hands-on delivery. Our work spans program implementation, investment
                facilitation, and institutional capacity development, bridging the gap between ideas
                and impact.
              </p>
            </div>
            {/* lg:h-64 lg:w-74 h-48 */}
            {/* Right cards - overlapping */}
            <div className="flex border flex-wrap gap-4 h-144">
              <div className="flex gap-4 w-full">
                <div
                  key="livelihood"
                  className="rounded-xl overflow-hidden shadow-lg relative lg:h-64 w-1/2 h-48"
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/livelihood.png') center / cover no-repeat",
                  }}
                >
                  <div className="p-6 flex flex-col justify-end h-full">
                    <div>
                      <h4 className="text-white text-2xl font-semibold mb-2">Livelihood</h4>
                    </div>
                    <div className="mt-2">
                      <button className="px-4 py-2 bg-amber-400 text-black rounded-4xl">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  key="health"
                  className="rounded-xl overflow-hidden shadow-lg relative lg:h-64 w-1/2 h-48"
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/solar.jpg') center / cover no-repeat",
                  }}
                >
                  <div className="p-6 flex flex-col justify-end h-full">
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-2xl">Health </h4>
                    </div>
                    <div className="mt-2">
                      <button className="px-4 py-2 bg-amber-400 text-black rounded-2xl">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                key="education"
                className="rounded-xl border-amber-300 border  overflow-hidden shadow-lg relative lg:h-64 lg:w-full w-full"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/solar.jpg') center / cover no-repeat",
                }}
              >
                <div className="p-6 flex flex-col justify-end h-full">
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-2xl">Education </h4>
                  </div>
                  <div className="mt-2">
                    <button className="px-4 py-2 bg-amber-400 text-black rounded">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Programs section - alternating layout */}
      <section className="bg-white">
        <div className="flex flex-col container mx-auto px-16 py-16 gap-6">
          <div className="flex items-center justify-end mb-12">
            <h3 className="text-4xl font-semibold text-emerald-900 mr-4">OUR PROGRAMS</h3>
            <div className="w-12 h-0.75 rounded-2xl bg-emerald-900" />
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

            <hr className="lg:hidden border-amber-400 my-12"></hr>

            {/* Program item 2 - image left (swap on small screens) */}
          </div>
        </div>
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
    </div>
  );
}
