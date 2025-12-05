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
            <div className="flex flex-wrap gap-4 py-8">
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
                className="rounded-xl overflow-hidden shadow-lg relative lg:h-64 lg:w-152 h-48 w-full"
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
            <div
              className="rounded-xl overflow-hidden h-64 lg:h-128 order-2 lg:order-3 "
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/solar.jpg') center / cover no-repeat",
              }}
            />
            <div className="flex flex-col justify-center order-3 lg:order-4">
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
              <button className="px-4 py-2 bg-amber-400 text-black rounded">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <div className="px-16 pb-16 bg-white ">
        <div className="p-8 flex  bg-amber-400 text-black rounded-2xl gap-4 ">
          <div className="flex sm:flex-col">
            <p className="text-xl">BUILD TOGETHER</p>
            <p className="text-6xl font-bold my-4">Support Our Programs</p>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-black text-amber-400 rounded ">Donate</button>
              <button className="px-4 py-2 bg-amber-400 text-black rounded border-2 border-black">
                Learn more
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/solar.jpg"
              alt="Mrs. Kechine"
              width={420}
              height={420}
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
