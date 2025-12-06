import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const LivelihoodPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <main className="flex flex-col gap-20 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-6 md:px-10 lg:px-16 pt-12 lg:pt-16">
          <div className="flex items-center justify-end mb-8 lg:mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-900 mr-4">
              EDUCATION
            </h3>
            <div className="w-14 h-[3px] rounded-2xl bg-emerald-900" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div
              className="relative w-full flex justify-center overflow-hidden rounded-2xl shadow-lg bg-slate-100"
              // style={{ aspectRatio: "3 /3" }}
            >
              <Image
                width={700}
                height={700}
                src="/cox.jpg"
                alt="Livelihood hero"
                // fill
                className="object-fit"
                priority
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-6">
                <div className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-emerald-900 shadow-md">
                  <ArrowLeft className="h-5 w-5" />
                </div>
                <div className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-emerald-900 shadow-md">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-emerald-900">
                [ A catchy
                <br />
                Tagline Here]
              </h1>
              <p className="text-lg leading-relaxed text-slate-700 max-w-xl">
                We help our partners move from vision to execution by combining strategic insight
                with hands-on delivery. Our work spans program implementation, investment
                facilitation, and institutional capacity development, bridging the gap between ideas
                and impact.
              </p>
            </div>
          </div>
        </section>

        {/* What do we do + tabs */}
        <section className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-[3px] bg-slate-700" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800">
              WHAT DO WE DO?
            </h2>
          </div>
          <div className="border-b border-slate-200" />

          <Tabs defaultValue="agriculture" className="mt-6">
            <TabsList className="flex w-full max-w-xl bg-transparent p-0 gap-2">
              <TabsTrigger
                value="agriculture"
                className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-lg font-semibold data-[state=active]:border-emerald-700 data-[state=active]:text-emerald-800 data-[state=active]:shadow-sm"
              >
                Agriculture
              </TabsTrigger>
              <TabsTrigger
                value="msmes"
                className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-lg font-semibold data-[state=active]:border-emerald-700 data-[state=active]:text-emerald-800 data-[state=active]:shadow-sm"
              >
                MSMEs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="agriculture" className="mt-10">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
                <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                  <div>
                    <h3 className="text-3xl font-semibold text-emerald-800">Agriculture</h3>
                    <div className="mt-1 h-[3px] w-28 bg-emerald-800" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo
                    diam libero vitae erat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo
                    diam libero vitae erat.
                  </p>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis
                    viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis
                    viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                </div>

                <div
                  className="relative w-full overflow-hidden rounded-2xl shadow-md bg-slate-100"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image src="/livelihood.png" alt="Agriculture" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="msmes" className="mt-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
                <div
                  className="relative w-full overflow-hidden rounded-2xl shadow-md bg-slate-100 order-2 lg:order-1"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image src="/solar.jpg" alt="MSMEs" fill className="object-cover" />
                </div>
                <div className="order-1 lg:order-2 space-y-6 text-lg leading-relaxed text-slate-700">
                  <div>
                    <h3 className="text-3xl font-semibold text-emerald-800">MSMEs</h3>
                    <div className="mt-1 h-[3px] w-20 bg-emerald-800" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis
                    viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                  <p>
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                    libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Explore banner + support card */}
        <section className="space-y-8">
          <div className="bg-[#0b5a32] text-white py-14 px-6 md:px-10 lg:px-16 text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Explore Our Program Working
              <br />
              Livelihood
            </div>
            <Button className="mt-6 bg-amber-400 text-emerald-900 hover:bg-amber-500 px-6 py-3 text-lg font-semibold">
              EDEL - Program
            </Button>
          </div>

          <div className="container mx-auto px-6 md:px-10 lg:px-16">
            <div className="bg-amber-400 rounded-3xl p-8 md:p-10 lg:p-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center shadow-lg">
              <div className="space-y-6 text-slate-900">
                <div className="text-sm font-semibold tracking-[0.15em]">BUILD TOGETHER</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Support
                  <br />
                  Our Programs
                </div>
                <p className="text-lg leading-relaxed text-slate-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique.
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LivelihoodPage;
