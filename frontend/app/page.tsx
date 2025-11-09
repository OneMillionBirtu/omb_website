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
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-primary-foreground animate-fade-in lg:pl-14">
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

      {/* content section: responsive two-column layout */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* left column - copy-friendly, responsive */}
            <div className="max-w-xl mx-auto lg:mx-0">
              <h3 className="text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6 font-['Roboto']">
                We bring light to the livelihood
              </h3>
              <p className="text-zinc-600 text-base leading-7 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.
                <br />
                <br />
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </p>
              <div>
                <button className="px-6 py-3 bg-amber-400 text-black rounded-md font-medium">
                  Learn more
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="hidden lg:block w-5 h-12 border-l-2 border-emerald-900"></div>
                <div className="text-emerald-900 text-sm lg:text-base font-bold uppercase tracking-widest">
                  Know About us
                </div>
              </div>
            </div>

            {/* right column - responsive cards area. On small screens cards stack; on lg screens they overlap using absolute positioning */}
            <div className="w-full">
              <div className="relative w-full lg:h-[420px]">
                {/* Main large card - centered on lg */}
                <div className="relative lg:absolute lg:left-6 lg:top-20 w-full sm:w-80 lg:w-80 h-56 bg-emerald-900/30 rounded-[28px] shadow-lg p-5 flex flex-col justify-between overflow-hidden mb-6 lg:mb-0">
                  <div className="h-8 px-3.5 py-1 bg-amber-400 rounded-full inline-flex justify-center items-center gap-2 overflow-hidden w-max">
                    <div className="text-xs font-normal">View More</div>
                    <div className="w-5 h-4 relative rotate-45">
                      <div className="w-3.5 h-3.5 bg-black absolute left-[5.68px] top-[5.68px]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-white text-xl font-bold">Empowering the</div>
                    <div className="text-white text-4xl lg:text-5xl font-bold">Livelihood</div>
                  </div>
                </div>

                {/* Top right small card */}
                <div className="relative lg:absolute lg:right-0 lg:top-0 w-full sm:w-72 h-48 bg-amber-400/10 rounded-[28px] p-4 inline-flex justify-start items-start gap-2 overflow-hidden mb-4 lg:mb-0">
                  <div className="flex-1 self-stretch inline-flex flex-col justify-between items-end">
                    <div className="h-7 px-3 py-1 bg-amber-400 rounded-full inline-flex justify-center items-center gap-1.5 w-max">
                      <div className="text-xs">View More</div>
                    </div>
                    <div className="self-stretch text-white">
                      <div className="text-base font-bold">Powering the</div>
                      <div className="text-3xl font-bold">Education</div>
                    </div>
                  </div>
                </div>

                {/* Bottom right small card */}
                <div className="relative lg:absolute lg:right-6 lg:bottom-0 w-full sm:w-72 h-48 bg-amber-400/10 rounded-[28px] p-4 inline-flex justify-start items-start gap-2 overflow-hidden">
                  <div className="flex-1 self-stretch inline-flex flex-col justify-between items-end">
                    <div className="h-7 px-3 py-1 bg-amber-400 rounded-full inline-flex justify-center items-center gap-1.5 w-max">
                      <div className="text-xs">View More</div>
                    </div>
                    <div className="self-stretch text-white">
                      <div className="text-base font-bold">Electrifying the</div>
                      <div className="text-3xl font-bold">Health</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
