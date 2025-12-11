import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ImageCarousel from "@/components/imageCarousel";

const LivelihoodPage = () => {
  const Images = ["/cox.jpg", "/livelihood.png", "/solar.jpg"];

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <main className="flex flex-col gap-20 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-6 md:px-10 lg:px-16 pt-12 lg:pt-16">
          <div className="flex items-center justify-end mb-8 lg:mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-900 mr-4">
              LIVELIHOOD
            </h3>
            <div className="w-14 h-[3px] rounded-2xl bg-emerald-900" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ImageCarousel images={Images} />

            <div className="flex flex-col gap-6 lg:gap-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-emerald-900">
                Energizing Farms <br />& Enterprises
              </h1>
              <p className="text-xl leading-relaxed text-slate-700 max-w-xl">
                We transform agriculture and small business through clean energy solutions that
                increase productivity, resilience, and income for underserved communities.
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

          <Tabs defaultValue="agriculture" className="mt-6 w-full ">
            <TabsList className="flex w-full bg-transparent p-0 gap-2">
              <TabsTrigger
                value="agriculture"
                className="flex-1 rounded-full border border-slate-200 px-4 py-4 text-xl font-semibold data-[state=active]:border-emerald-700 data-[state=active]:text-emerald-800 data-[state=active]:shadow-sm"
              >
                Agriculture
              </TabsTrigger>
              <TabsTrigger
                value="msmes"
                className="flex-1 rounded-full border border-slate-200 px-4 py-4 text-xl font-semibold data-[state=active]:border-emerald-700 data-[state=active]:text-emerald-800 data-[state=active]:shadow-sm"
              >
                MSMEs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="agriculture" className="mt-10">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
                <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                  <div>
                    <h3 className="text-3xl font-semibold text-emerald-800">Agriculture</h3>
                    <div className="mt-2 h-[3px] w-[15%] bg-emerald-800" />
                  </div>
                  <p>
                    Agriculture is the backbone of Ethiopia&apos;s economy, yet over 95% of
                    smallholders rely on rain-fed farming, leaving them vulnerable. We bridge this
                    gap by integrating Decentralized Renewable Energy (DRE) to power climate-smart
                    solutions across the value chain. Our work begins by identifying critical energy
                    gaps with farmers and cooperatives. We then co-design and pilot tailored
                    technologies such as solar water pumps for reliable irrigation, moving farmers
                    beyond unpredictable rainfall.
                  </p>
                  <p>
                    We deploy solar-powered cold storage units to drastically reduce post-harvest
                    losses, allowing farmers to store produce and sell at better prices. For
                    livestock and dairy farmers, we introduce solutions like solar milking machines
                    and solar-powered butter churners to enhance hygiene and efficiency. Beyond
                    piloting, we ensure these solutions are scalable and sustainable. We conduct
                    value chain analysis and develop viable business models for each technology. We
                    partner with financial institutions to create affordable loan products, making
                    these technologies accessible. Simultaneously, we incubate and support local
                    Clean Energy Enterprises (CEEs) that can manufacture, customize, install, and
                    maintain these solutions, building local supply and expertise. Through our EDEL
                    program, we aim to deploy dozens of these DRE technologies, transforming
                    agricultural productivity from a challenge of scarcity to one of abundance,
                    increasing incomes, and building resilience against climate change for
                    smallholder farmers.
                  </p>
                  <p>
                    Through our EDEL program, we aim to deploy dozens of these DRE technologies,
                    transforming agricultural productivity from a challenge of scarcity to one of
                    abundance, increasing incomes, and building resilience against climate change
                    for smallholder farmers.
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
                    <div className="mt-2 h-[3px] w-[15%] bg-emerald-800" />
                  </div>
                  <p>
                    Micro, Small, and Medium Enterprises (MSMEs) are engines of job creation and
                    local economic growth, yet they are constrained by unreliable energy and limited
                    access to finance. Many rely on costly, polluting diesel generators or simply
                    close when the sun sets.
                  </p>
                  <p>
                    Our mission is to unlock the productive potential of these enterprises with
                    clean, reliable power. We work with entrepreneurs in sectors like services and
                    manufacturing, providing solar-powered toolkits tailored to their needs. This
                    includes solar barber kits for hairdressers, solar sewing machines for tailors,
                    and solar refrigerators for shop owners and cafes, enabling them to operate
                    longer hours, reduce costs, and improve their services.
                  </p>
                  <p>
                    Our approach is holistic. We don&apos;t just supply technology; we build the
                    ecosystem for it to thrive. We collaborate with grassroots organizations to
                    identify motivated entrepreneurs and understand their specific challenges. We
                    then facilitate connections to financing through partnerships with banks and
                    microfinance institutions, developing loan products with manageable terms. To
                    ensure supply and maintenance, we incubate and accelerate local solar
                    enterprises, building their capacity to serve the MSME market effectively.
                  </p>
                  <p>
                    Furthermore, we capture and share learnings, creating benchmarking documents and
                    case studies (like our study on solar-powered barbershops) to guide replication.
                    By addressing energy access, finance, and local capacity together, we empower
                    MSMEs to grow, create sustainable jobs—especially for women and youth—and become
                    pillars of vibrant, resilient local economies..
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Explore banner + support card */}
        <section className="space-y-8">
          <div className="bg-[#0b5a32] text-white py-14 px-6 md:px-10 lg:px-16 text-center">
            <div className="text-2xl md:text-3xl lg:text-3xl font-semibold leading-tight">
              Explore Our Program Working
              <br />
              Livelihood
            </div>
            <Link href="/ourprograms/EDEL">
              <Button className="mt-6 bg-amber-400 text-emerald-900 hover:bg-emerald-900 hover:text-amber-400 hover:border-amber-400 cursor-pointer hover:border px-6 py-3 text-lg font-semibold">
                EDEL - Program
              </Button>
            </Link>
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
                  Your partnership fuels innovation, scales solutions, and empowers communities to
                  build a resilient, energy-secure future.
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
