// import heroImage from "hero-image.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-hero h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/home_plow.png"
            alt="Ethiopian farmers using climate-smart technology"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>

        <div className="relative container mx-auto px-4 flex h-full items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-primary-foreground animate-fade-in">
            <h1 className="text-4xl lg:text-4xl font-bold mb-6 leading-tight">
              Empowering Livelihoods Through Climate-Smart Technologies
            </h1>
            <h2 className="hidden sm:block text-lg sm:text-xl md:text-3xl mb-6 text-primary-foreground/90 leading-relaxed">
              Building sustainable markets and resilient communities across Ethiopia
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 bg-amber-400 text-green-900">
                Our Work
              </Button>
              <Button size="lg" className="text-lg px-8 bg-amber-400 text-green-900">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* decorative squiggle between hero and next section */}
      <section className="bg-white pt-0">
        <div className="relative h-40 md:h-56 lg:h-72 overflow-hidden">
          <Image
            src="/squiggle.png"
            alt="decorative squiggle"
            fill
            className="object-contain object-top opacity-100"
            priority
          />
        </div>
      </section>

      {/* next placeholder section with white background */}
      <div className="self-stretch px-12 pt-16 pb-28 inline-flex justify-start items-start gap-6 overflow-hidden">
        <div className="flex justify-start items-start gap-24">
          <div className="flex justify-center items-center gap-8">
            <div className="w-[600px] inline-flex flex-col justify-center items-end gap-6">
              <div className="w-[540px] px-6 flex flex-col justify-center items-start gap-10">
                <div className="self-stretch justify-start text-gray-800 text-5xl font-bold font-['Roboto'] leading-[57.60px]">
                  We bring light to the livelihood
                </div>
                <div className="self-stretch justify-start text-zinc-600 text-base font-normal font-['Roboto'] leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique.
                  <br />
                  <br />
                  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                  libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                  Nunc ut sem vitae risus tristique posuere.
                </div>
                <div className="px-8 py-4 bg-amber-400 rounded backdrop-blur-2xl inline-flex justify-center items-center gap-2.5">
                  <div className="text-right justify-start text-black text-base font-medium font-['Roboto']">
                    Learn more
                  </div>
                </div>
              </div>
              <div className="w-12 h-[600px] origin-top-left -rotate-90 flex flex-col justify-start items-center gap-3">
                <div className="w-0 h-12 origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-emerald-900"></div>
                <div className="origin-top-left rotate-90 justify-start text-emerald-900 text-2xl font-bold font-['Roboto'] uppercase tracking-widest">
                  Know About us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[540px] h-[528.88px] relative">
          <div className="w-72 h-48 px-4 py-6 left-[230.29px] top-[10.60px] absolute bg-amber-400/10 rounded-[34.31px] inline-flex justify-start items-start gap-2 overflow-hidden">
            <div className="flex-1 self-stretch inline-flex flex-col justify-between items-end">
              <div className="h-7 px-3 py-[3.15px] bg-amber-400 rounded-[31.46px] inline-flex justify-center items-center gap-1.5 overflow-hidden">
                <div className="justify-start text-Text---Header text-xs font-normal font-['Inter_Display']">
                  View More
                </div>
                <div className="w-3 h-3 left-[4.87px] top-[4.87px] absolute bg-black"></div>
              </div>
              <div className="self-stretch justify-start">
                <span className="text-white text-base font-bold font-['Roboto']">
                  Powering the
                  <br />
                </span>
                <span className="text-white text-5xl font-bold font-['Roboto']">Education</span>
              </div>
            </div>
          </div>
          <div className="w-72 h-48 px-4 py-6 left-[238.24px] top-[327.45px] absolute bg-amber-400/10 rounded-[34.31px] inline-flex justify-start items-start gap-2 overflow-hidden">
            <div className="flex-1 self-stretch inline-flex flex-col justify-between items-end">
              <div className="h-7 px-3 py-[3.15px] bg-amber-400 rounded-[31.46px] inline-flex justify-center items-center gap-1.5 overflow-hidden">
                <div className="justify-start text-Text---Header text-xs font-normal font-['Inter_Display']">
                  View More
                </div>
                <div className="w-3 h-3 left-[4.87px] top-[4.87px] absolute bg-black"></div>
              </div>
              <div className="self-stretch justify-start">
                <span className="text-white text-base font-bold font-['Roboto']">
                  Electrifying the
                  <br />
                </span>
                <span className="text-white text-5xl font-bold font-['Roboto']">Health</span>
              </div>
            </div>
          </div>
          <div className="w-80 h-60 px-4 py-6 left-[15.88px] top-[147.97px] absolute bg-emerald-900/30 rounded-[34.94px] shadow-[21.83823585510254px_0px_18.125736236572266px_-5.095588207244873px_rgba(0,0,0,0.10)] inline-flex flex-col justify-between items-end overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-end gap-20">
              <div className="h-8 px-3.5 py-1 bg-amber-400 rounded-[36.70px] inline-flex justify-center items-center gap-2 overflow-hidden">
                <div className="justify-start text-Text---Header text-xs font-normal font-['Inter_Display']">
                  View More
                </div>
                <div className="w-5 h-4 relative origin-top-left rotate-45 overflow-hidden">
                  <div className="w-3.5 h-3.5 left-[5.68px] top-[5.68px] absolute bg-black"></div>
                </div>
              </div>
              <div className="self-stretch justify-start">
                <span className="text-white text-xl font-bold font-['Roboto']">
                  Empowering the <br />
                </span>
                <span className="text-white text-6xl font-bold font-['Roboto']">Livelihood</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
