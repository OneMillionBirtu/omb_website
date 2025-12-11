// import heroImage from "hero-image.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ExternalLink } from "lucide-react";
import Head from "next/head";
import Homeback2 from "@/public/homeback2-sky.jpg";
import OurSupporters from "@/components/ourSupporters";

import AreasOfWork from "@/components/AreasofWork";

export const metadata = {
  title: "One Million Birtu | Empowering Communities in Ethiopia",
  description: "One Million Birtu is a community initiative empowering Ethiopian women and youth.",
  openGraph: {
    title: "One Million Birtu",
    description: "Empowering Ethiopian communities through impactful initiatives.",
    url: "https://onemillionbirtu.org/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>One Million Birtu | Empowering Communities in Ethiopia</title>
        <meta
          name="description"
          content="One Million Birtu is an NGO  dedicated to Empowering Livelihoods Through Climate-Smart Technologies"
        />
        <link rel="canonical" href="https://onemillionbirtu.org/" />
        <meta property="og:title" content="One Million Birtu" />
        <meta
          property="og:description"
          content="Empowering Livelihoods Through Climate-Smart Technologies"
        />
        <meta property="og:url" content="https://onemillionbirtu.org/" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
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
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Empowering the Under served through Climate Smart Technologies
                </h1>
                <h2 className="hidden sm:block text-base md:text-2xl mb-6 text-primary-foreground/90 leading-relaxed">
                  Building sustainable markets and resilient communities across Ethiopia
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="text-lg px-8 bg-amber-400 text-green-900">
                    Our Work
                  </Button>
                  <Button size="lg" className="text-lg px-8 bg-white text-green-900">
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
          <section className="bg-white pb-18">
            <div className="container mx-auto px-18">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* left column - copy-friendly, responsive */}
                <div className="max-w-xl mx-auto lg:mx-0">
                  <div className="mt-8 flex items-center gap-4 pb-8">
                    <div className="w-8 md:w-16 h-0 origin-top-left outline-2 -outline-offset-1 outline-gray-800"></div>
                    <div className="text-emerald-900 text-md lg:text-3xl font-bold uppercase tracking-widest">
                      About us
                    </div>
                  </div>
                  <h3 className="text-5xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                    We bring light to the livelihood
                  </h3>
                  <p className="text-zinc-600 text-base leading-7 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique.
                    <br />
                    <br />
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                    libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                    imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                  <div>
                    <button className="px-6 py-3 bg-amber-400 text-black rounded-md font-medium">
                      Learn more
                    </button>
                  </div>
                </div>

                {/* right column - responsive cards area. On small screens cards stack; on lg screens they overlap using absolute positioning */}
                {/* <RotatingCards /> */}
                {/* <ImpactCards /> */ <AreasOfWork />}
              </div>
            </div>
          </section>

          {/* second decorative squiggle */}

          {/* testimonial / our why's section with gradient over background image */}
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
          <section
            className=""
            style={{
              background:
                "linear-gradient(0deg, rgba(14, 34, 25, 0.80), rgba(14, 34, 25, 0.80)), url('/homeback2.jpg') center / cover no-repeat",
            }}
          >
            <div className="container mx-auto px-18 py-20">
              <div className="flex justify-end">
                <div className="text-amber-400 font-bold tracking-widest text-3xl">OUR WHYs</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
                <div className="flex justify-center lg:justify-start">
                  <div className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-xl overflow-hidden bg-white/0 shadow-lg">
                    <Image
                      src="/kechine.png"
                      alt="Mrs. Kechine"
                      width={720}
                      height={720}
                      className="object-cover w-full h-full rounded-xl"
                      priority
                    />
                  </div>
                </div>

                <div className="text-white">
                  <blockquote className="text-lg md:text-xl leading-relaxed">
                    “I was terrified giving birth in the dark. I worried for myself and my baby. The
                    nurses did their best, but my baby died during my travel for hours to another
                    hospital... I still think about my baby to this day.”
                  </blockquote>

                  <div className="mt-6 text-amber-400 text-3xl font-semibold">— Mrs. Kechine</div>
                  <div className="text-white/90">Oda Nabe Health Center Patient</div>

                  <div className="mt-8">
                    <button className="px-6 py-2 border border-amber-400 text-amber-400 rounded-md">
                      Read more
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-20 text-center">
                <h4 className="text-3xl md:text-4xl text-amber-400 font-bold mb-8">OUR TARGETS</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-emerald-900/40 backdrop-blur-sm rounded-xl p-6 text-white text-left flex flex-col items-center"
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-700/50 flex items-center justify-center">
                          <div className="w-8 h-8 bg-amber-400 rounded-full" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold mb-2 text-amber-400">4597+</div>
                      <div className="font-semibold mb-2">Improved women esteem</div>
                      <p className="text-sm text-white/80">
                        contrary to popular belief, Lorem Ipsum is not simply random text.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Our Programs section (separate, light background) */}
          <section className="bg-gray-50">
            <div className="container mx-auto px-16 py-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-0.5 bg-emerald-900" />
                <h3 className="text-3xl font-bold text-emerald-900">OUR PROGRAMS</h3>
              </div>

              <p className="max-w-2xl text-gray-700 mb-8">
                Comprehensive programs driving sustainable change across Ethiopia
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden shadow-lg relative h-64"
                    style={{
                      background:
                        "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/solar.jpg') center / cover no-repeat",
                    }}
                  >
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Enabling DRE Ecosystem For Livelihoods in Ethiopia (EDEL)
                        </h4>
                        <p className="text-white/90 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          varius enim in eros.
                        </p>
                      </div>
                      <div className="mt-4">
                        <button className="px-4 py-2 bg-amber-400 text-black rounded">
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Latest Updates section */}
          <section
            className="relative"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 80, 46, 0.90) 35.58%, rgba(0, 0, 0, 0.72) 100%), url('/wateringMan.png') lightgray 50% / cover no-repeat",
            }}
          >
            <div className="container mx-auto px-6 py-16 text-center text-white">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-10 h-0.5 bg-amber-400 rounded-2xl" />
                <h3 className="text-3xl font-semibold mb-2 text-amber-400">LATEST UPDATES</h3>
                <div className="w-10 h-0.5 bg-amber-400 rounded-2xl" />
              </div>
              <p className="mb-8">Stay informed about our work and impact across Ethiopia</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 text-left shadow-md">
                    <div className="flex">
                      <Calendar className="w-4 h-4 text-gray-400 inline-block mr-2" />
                      <div className="text-xs text-gray-500 mb-2">March 2025</div>
                    </div>
                    <h4 className="font-semibold mb-2 text-black">
                      Climate-Smart Agriculture Success Stories
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Discover how our farmers are adapting to climate change and increasing yields
                      by 200% using innovative techniques.
                    </p>
                    <button className="flex items-center gap-2 px-4 py-3 bg-amber-400 text-black rounded text-sm">
                      Read More
                      <ExternalLink className="inline-block font-light" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <button className="px-6 py-3 bg-amber-400 text-black rounded">
                  View All Resources →
                </button>
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

          {/* Supporters row */}
          <div className="py-20">
            <OurSupporters />
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}
