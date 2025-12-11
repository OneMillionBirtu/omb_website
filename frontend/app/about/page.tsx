"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/public/about-us.jpg";
import Image from "next/image";

import Yohannes from "@/public/team/yohannes.png";
import Rahwa from "@/public/team/rahwa.png";
import Bisrat from "@/public/team/Bisrat.png";
import Henok from "@/public/team/Henok.png";
import Nuhamin from "@/public/team/nuhamin.png";
import Misgana from "@/public/team/Misgana.png";
import Yoseph from "@/public/team/joseph.jpg";

import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import OurSupporters from "@/components/ourSupporters";

const Page = () => {
  return (
    <>
      <div>
        <Navbar />

        <main className="w-full">
          <section
            className="w-full h-100 md:h-[640px] bg-cover bg-center flex items-center px-24"
            style={{
              backgroundImage: `
      linear-gradient(188deg, rgba(35,37,54,0) 36.12%, rgba(0,80,46,0.5) 72.5%, rgba(0,80,46,0.5) 96.89%, rgba(0,80,46,0.5) 101.62%),
      linear-gradient(320deg, rgba(0,80,46,0) 22.61%, rgba(0,80,46,0.43) 44.19%, rgba(0,80,46,0.9) 65.77%, #00502E 79.44%, #00502E 97.57%),
      linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%),
      url(${aboutImage.src})
    `,
            }}
          >
            <span className="text-4xl md:text-6xl font-bold w-2xl text-white leading-12 text-center md:text-left md:leading-18">
              We Exist To Create <br />
              Solutions <br /> With an Impact
            </span>
          </section>
          <section className=" px-4 md:px-16 py-16 inline-flex flex-col justify-center items-center gap-8 md:gap-16">
            <div className="w-full flex justify-start items-center gap-4">
              <div className="w-10 md:w-20 h-0 origin-top-left outline-2 -outline-offset-1 outline-gray-800"></div>
              <div className="origin-top-left  justify-start text-gray-800 md:text-2xl font-bold  uppercase tracking-widest">
                Know about us
              </div>
              <div className="w-16 h-0 origin-top-left rotate-90 outline -outline-offset-1 outline-gray-800"></div>
            </div>
            <div className="w-full px-6 md:px-12 inline-flex flex-col md:flex-row justify-start items-start gap-12 md:gap-24">
              <div className="inline-flex flex-col justify-start items-start gap-10 md:gap-16">
                <div className="justify-start text-gray-800 text-3xl md:text-5xl font-bold leading-10 md:leading-[57.60px]">
                  We are a <br />
                  non-governmental <br />
                  organization
                </div>
                <div className="px-7 py-3 bg-amber-400 rounded backdrop-blur-2xl inline-flex justify-center items-center gap-2.5">
                  <div className="text-right justify-start text-black text-base font-medium ">
                    Learn more
                  </div>
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
                <div className="justify-start text-gray-800 text-xl font-bold leading-8">
                  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                  risus tristique posuere.
                </div>
                <div className="opacity-70 justify-start text-gray-800 text-base font-normal leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim
                  elementum tristique.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim
                  elementum tristique.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim
                  elementum tristique.
                </div>
              </div>
            </div>
          </section>
          {/* Mission,Vision */}
          <section className="w-full flex flex-col items-center justify-center relative ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F7AD1A"
                d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,208C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
            <div
              className="absolute w-80 md:w-[720px] md:h-80 lg:w-[1060px] h-44 lg:h-100 bg-black top-[-25]  d lg:top-0 rounded-3xl"
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
            <div className="w-full px-8 md:px-28 pt-32 pb-32 bg-[#F7AD1A] inline-flex flex-col justify-start items-center gap-24">
              <div className="inline-flex  flex-col md:flex-rowjustify-start items-center gap-16 md:gap-24">
                <div className="w-full flex gap-4 flex-col">
                  <div className="justify-start text-gray-800 text-base font-bold  uppercase tracking-widest">
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
              <div className="inline-flex flex-col md:flex-row justify-start items-center gap-16 md:gap-24">
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
          </section>
          {/* Our Team */}
          <section
            id="our-team"
            className="w-full py-10 md:py-20 inline-flex flex-col justify-center items-center gap-16"
          >
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="w-full text-center justify-start text-gray-800 text-3xl md:text-5xl font-bold  leading-[57.60px]">
                Meet our team
              </div>
              <div className="w-full opacity-80 text-center justify-start text-zinc-600 text-base font-normal  leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.
              </div>
            </div>
            <div className="w-full inline-flex justify-center items-center gap-12 flex-wrap content-center">
              <div className="inline-flex flex-col justify-start items-center gap-3">
                <Image
                  className=" w-32 h-32 md:w-60 md:h-60 rounded-full"
                  src={Yohannes}
                  alt="Yohannes Bushra"
                  width={240}
                  height={240}
                />
                <div className="flex flex-col justify-start items-center gap-5">
                  <div className="w-40 flex flex-col justify-center items-center">
                    <div className="text-center justify-start text-gray-800 text-xl font-medium  leading-8">
                      Yohannes Bushra
                    </div>
                    <div className="opacity-60 justify-start text-gray-800 text-xs font-medium  leading-5">
                      Chief Executive Officer
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <FaFacebook className="w-7 h-7 text-gray-800" />
                    <FaTwitter className="w-7 h-7 text-gray-800" />
                    <FaLinkedinIn className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-center gap-3">
                <Image
                  className=" w-32 h-32 md:w-60 md:h-60 rounded-full"
                  src={Rahwa}
                  alt="Rahwa Aregawi"
                  width={240}
                  height={240}
                />
                <div className="flex flex-col justify-start items-center gap-3">
                  <div className="w-40 flex flex-col justify-center items-center">
                    <div className="text-center justify-start text-gray-800 text-xl font-medium  leading-8">
                      Rahwa Aregawi
                    </div>
                    <div className="opacity-60 justify-start text-gray-800 text-xs font-medium  leading-5">
                      Program Manager
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <FaFacebook className="w-7 h-7 text-gray-800" />
                    <FaTwitter className="w-7 h-7 text-gray-800" />
                    <FaLinkedinIn className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-center gap-3">
                <Image
                  className=" w-32 h-32 md:w-60 md:h-60 rounded-full"
                  src={Bisrat}
                  alt="Bisrat Genene"
                  width={240}
                  height={240}
                />
                <div className="flex flex-col justify-start items-center gap-3">
                  <div className="w-40 flex flex-col justify-center items-center">
                    <div className="text-center justify-start text-gray-800 text-xl font-medium  leading-8">
                      Bisrat Genene
                    </div>
                    <div className="opacity-60 justify-start text-gray-800 text-xs font-medium  leading-5">
                      Project Coordinator
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <FaFacebook className="w-7 h-7 text-gray-800" />
                    <FaTwitter className="w-7 h-7 text-gray-800" />
                    <FaLinkedinIn className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-center gap-3">
                <Image
                  className=" w-32 h-32 md:w-60 md:h-60 rounded-full"
                  src={Henok}
                  alt="Henok Tsegaye"
                  width={240}
                  height={240}
                />
                <div className="flex flex-col justify-start items-center gap-3">
                  <div className="w-40 flex flex-col justify-center items-center">
                    <div className="text-center justify-start text-gray-800 text-xl font-medium  leading-8">
                      Henok Tsegaye
                    </div>
                    <div className="opacity-60 justify-start text-gray-800 text-xs font-medium  leading-5">
                      Project Coordinator
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <FaFacebook className="w-7 h-7 text-gray-800" />
                    <FaTwitter className="w-7 h-7 text-gray-800" />
                    <FaLinkedinIn className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-center gap-3">
                <Image
                  className=" w-32 h-32 md:w-60 md:h-60 rounded-full"
                  src={Nuhamin}
                  alt="Nuhamin Abate"
                  width={240}
                  height={240}
                />
                <div className="flex flex-col justify-start items-center gap-3">
                  <div className="w-40 flex flex-col justify-center items-center">
                    <div className="text-center justify-start text-gray-800 text-xl font-medium  leading-8">
                      Nuhamin Abate
                    </div>
                    <div className="opacity-60 justify-start text-gray-800 text-xs font-medium  leading-5">
                      Project Officer
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <FaFacebook className="w-7 h-7 text-gray-800" />
                    <FaTwitter className="w-7 h-7 text-gray-800" />
                    <FaLinkedinIn className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-center gap-3">
                <Image
                  className=" w-32 h-32 md:w-60 md:h-60 rounded-full"
                  src={Misgana}
                  alt="Misgana Belete"
                  width={240}
                  height={240}
                />
                <div className="flex flex-col justify-start items-center gap-3">
                  <div className="w-40 flex flex-col justify-center items-center">
                    <div className="text-center justify-start text-gray-800 text-xl font-medium  leading-8">
                      Misgana Belete
                    </div>
                    <div className="opacity-60 justify-start text-gray-800 text-xs font-medium  leading-5">
                      Project Officer
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <FaFacebook className="w-7 h-7 text-gray-800" />
                    <FaTwitter className="w-7 h-7 text-gray-800" />
                    <FaLinkedinIn className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-center gap-3">
                <Image
                  className=" w-32 h-32 md:w-60 md:h-60 rounded-full"
                  src={Yoseph}
                  alt="Yoseph Asfaw"
                  width={240}
                  height={240}
                />
                <div className="flex flex-col justify-start items-center gap-3">
                  <div className="w-40 flex flex-col justify-center items-center">
                    <div className="text-center justify-start text-gray-800 text-xl font-medium  leading-8">
                      Yoseph Asfaw
                    </div>
                    <div className="opacity-60 justify-start text-gray-800 text-xs font-medium  leading-5">
                      Project Officer
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <FaFacebook className="w-7 h-7 text-gray-800" />
                    <FaTwitter className="w-7 h-7 text-gray-800" />
                    <FaLinkedinIn className="w-7 h-7 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>
            <OurSupporters />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
