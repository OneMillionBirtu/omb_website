import Navbar from "@/components/Navbar";
import React from "react";
import Homeback2 from "@/public/homeback2.jpg";
import Footer from "@/components/Footer";
import Image from "next/image";
import Students from "@/public/Education.png";
import DairyFarmer from "@/public/dairyFarmer.jpg";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="self-stretch px-16 py-24 inline-flex flex-col justify-center items-center gap-8 mb-48">
        <div className="self-stretch flex justify-start items-center gap-6">
          <div className="w-20 h-0 origin-top-left outline-2 -outline-offset-1 outline-gray-800"></div>
          <div className="origin-top-left  justify-start text-gray-800 text-2xl font-bold  uppercase tracking-widest">
            WHO WE ARE
          </div>
          <div className="w-16 h-0 origin-top-left rotate-90 outline -outline-offset-1 outline-gray-800"></div>
        </div>
        <div className="w-full px-16 inline-flex justify-between items-center">
          <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-10">
            <div className="self-stretch justify-start text-gray-800 text-5xl font-bold  leading-[57.60px]">
              Our Founding
            </div>
            <div className="flex gap-12 justify-center items-center text-justify ">
              <div className="w-[90%] justify-center text-zinc-600 text-base font-normal  leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam libero
                vitae erat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam libero
                vitae erat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat.
              </div>
              <Image
                className="w-[80%] h-auto rounded-[20px]"
                src={DairyFarmer}
                alt="Dairy Farmer"
              />
            </div>
          </div>
        </div>
        <div className="w-full px-16 py-16 flex flex-col justify-start items-start gap-6">
          <div className="inline-flex justify-start items-center gap-14">
            <div className="w-full h-96 inline-flex flex-col justify-start items-start gap-10">
              <div className="self-stretch text-right justify-start text-gray-800 text-5xl font-bold  leading-[57.60px]">
                Our Whys
              </div>
              <div className="flex gap-6 h-auto justify-center items-center text-justify ">
                <Image
                  className="w-auto h-90 rounded-[20px]"
                  src={Students}
                  alt="Students learning"
                />
                <div className="self-stretch text-justify justify-start text-zinc-600 text-base font-normal  leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam
                  libero vitae erat.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam
                  libero vitae erat.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                  libero vitae erat.Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat.
                </div>
              </div>
              <div className="self-stretch text-justify justify-start text-zinc-600 text-base font-normal  leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam libero
                vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo
                diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.eros dolor
                interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam
                libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full flex gap-0 flex-col items-center justify-center relative ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F7AD1A"
              d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,208C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <div
            className="absolute w-[1060px] h-100 bg-black top-0 rounded-3xl"
            style={{
              background: `url('/about-us.jpg') center / cover no-repeat`,
              backgroundColor: "rgba(0,0,0,0.5)",
              backgroundBlendMode: "multiply",
            }}
          >
            <a
              title="about"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUIcmlja3JvbGygBwE%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="
            absolute inset-0 flex justify-center items-center
            cursor-pointer
          "
            >
              <div
                className="
              w-14 h-14 md:w-20 md:h-20
              bg-white/90 rounded-full flex items-center justify-center
            "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-8 md:h-8 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
          </div>
          <div className="w-full px-28 py-32 bg-[#F7AD1A] inline-flex flex-col justify-start items-center gap-24">
            <div className="inline-flex justify-start items-center gap-24">
              <div className="w-full flex gap-4 flex-col">
                <div className="justify-start text-gray-800 text-xl font-bold  uppercase tracking-widest">
                  Our Approaches
                </div>
                <div className="justify-start text-gray-800 text-3xl font-bold  leading-10">
                  We make sure to provide inclusive care for children with special needs
                </div>
                <div className="opacity-80 justify-start text-gray-800 text-base font-normal  leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-2.5">
                <div className="flex-1 h-10 justify-start text-gray-800 text-3xl font-bold  leading-10">
                  [An Info Graphics Here]
                </div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-24">
              <div className="flex gap-4 flex-col ">
                <div className="justify-start text-gray-800 text-base font-bold  uppercase tracking-widest">
                  our mission
                </div>
                <div className=" justify-start text-gray-800 text-3xl font-bold  leading-10">
                  We make sure to provide inclusive care for children with special needs
                </div>
                <div className=" opacity-70 justify-start text-gray-800 text-base font-normal  leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </div>
              </div>

              <div className="flex gap-4 flex-col">
                <div className="justify-start text-gray-800 text-base font-bold  uppercase tracking-widest">
                  our Vision
                </div>
                <div className=" justify-start text-gray-800 text-3xl font-bold  leading-10">
                  Provide more inclusive care to children around the world
                </div>
                <div className=" opacity-70 justify-start text-gray-800 text-base font-normal  leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-16 px-8 text-center"
          style={{
            background: `linear-gradient(0deg, rgba(14, 34, 25, 0.90) 100%, rgba(14, 34, 25, 0.90) 100%), url(${Homeback2.src}) lightgray center no-repeat`,
          }}
        >
          <h4 className="text-3xl md:text-4xl text-amber-400 font-bold mb-8">OUR TARGETS</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* when content is found, duplicate 4x and replace text */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-emerald-900/40 backdrop-blur-sm rounded-xl p-6 text-white text-left flex flex-col items-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-700/50 flex items-center justify-center">
                    {/* placeholder icon */}
                    <div className="w-8 h-8 bg-amber-400 rounded-full" />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-2 text-amber-400">4597+</div>
                <div className="font-semibold mb-2">Improved women esteem</div>
                <p className="text-sm text-white/80">
                  contrary to popular belief, Lorem Ipsum is not simply random text. contrary to
                  popular belief, Lorem Ipsum is not simply random text.
                </p>
              </div>
            ))}
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
    </>
  );
};

export default page;
