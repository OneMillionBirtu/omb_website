"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import Link from "next/link";

const donate = () => (
  <div>
    <Navbar />

    {/* Hero - Areas of Work */}
    <section className="container mx-auto px-6 md:px-10 lg:px-16 pt-12 lg:pt-16 lg:pr-30 lg:pb-10">
      <div className="flex items-center justify-start mb-10 lg:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-900">DONATE</h3>
        <div className="w-16 h-1 rounded-2xl bg-emerald-900" />
      </div>

      <div className="flex flex-col gap-12 lg:flex-row justify-between items-center ">
        <div className="flex order-2 md:order-1 flex-col gap-6 lg:gap-8 lg:items-start w-full">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight text-emerald-900 flex flex-col lg:text-left lg:items-end">
            Donate to our Mission
          </h1>
          <p className="text-xl font-semibold leading-relaxed text-slate-700  ">
            Your support transforms lives and builds <br />
            sustainable futures across Ethiopia.
          </p>
        </div>
        <div className="relative order-1 md:order-2 w-full flex justify-center overflow-hidden rounded-2xl shadow-lg bg-slate-100">
          <Image
            width={700}
            height={700}
            src="/donate.jpg"
            alt="Livelihood hero"
            // fill
            className="object-fit"
            priority
          />
        </div>
      </div>
    </section>

    <section className="bg-white lg:pt-18">
      <div className="flex flex-col container mx-auto px-6 lg:px-16 py-16 gap-6">
        <div className="flex items-center justify-end lg:mb-12 gap-2">
          <div className="w-12 h-0.75 bg-emerald-900 rounded-2xl" />
          <h3 className="text-2xl md:text-4xl font-semibold text-emerald-900 mr-4">WHY DONATE?</h3>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start md:pb-12">
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-md bg-slate-100 order-2 lg:order-1"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image src="/solar.jpg" alt="MSMEs" fill className="object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6 text-lg leading-relaxed text-slate-700">
            <div className="mb-7 mt-5">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Make a lasting impact
              </h3>
            </div>
            Your donation is more than a gift of energy; it&apos;s an investment in human potential.
            It powers a solar pump that turns a subsistence farm into a thriving business. It lights
            a clinic where life-saving surgeries can happen anytime.
            <br />
            <br />
            It fuels a small enterprise that employs a young entrepreneur. By supporting OMB, you
            enable our holistic approach that combines technology, financing, and capacity building
            to create systemic, sustainable change. You help us reach our goal of impacting one
            million lives by 2030, building a future where every Ethiopian community has the clean
            energy foundation to prosper with dignity.
          </div>
        </div>
        <div className="pt-12">
          <div className="flex items-center justify-start mb-12 gap-2">
            <h3 className="text-4xl font-semibold text-emerald-900 mr-4">Ways to donate</h3>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
            <div className="space-y-5 text-lg leading-relaxed text-slate-800">
              <h4 className="text-3xl md:text-4xl font-bold text-slate-900">Direct Transfer</h4>
              <p className="text-lg">
                Traditional <span className="font-semibold">BANK TRANSFER</span> to our Organization
                Bank Account
              </p>
              <p className="text-lg">Below are the details:</p>

              <div className="space-y-3 text-lg">
                <p>
                  <span className="text-slate-700">Bank:</span>{" "}
                  <span className="font-semibold text-slate-900">ZEMEN BANK ETHIOPIA</span>
                </p>
                <p>
                  <span className="text-slate-700">Payee:</span>{" "}
                  <span className="text-slate-900">ONE MILLION BIRTU</span>
                </p>
                <p>
                  <span className="text-slate-700">ACCOUNT NO :</span>{" "}
                  <span className="font-semibold tracking-wide">XXXX-XXXX-XXXX-XXXX-XXX</span>
                </p>
                <p>
                  <span className="text-slate-700">BIC/SWIFT:</span>{" "}
                  <span className="font-semibold tracking-wide">XXXX-XXXX-XXX-XX</span>
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-3xl md:text-4xl font-bold text-slate-900">OTHER:</h4>

              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-slate-900">Project Based</p>
                  <Button className=" w-fit bg-[#0a5c30] hover:bg-[#084a27] text-white px-6 py-3 text-lg font-semibold">
                    Fill a Form
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <p className="text-xl font-semibold text-slate-900">Crowd Funds:</p>
                  <Button className="  bg-[#f5a623] hover:bg-[#e59612] text-[#0a5c30] px-6 py-3 text-lg font-semibold border-0">
                    gofundme
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="w-full bg-amber-400 flex flex-col items-center justify-center py-12 px-16 gap-6 text-center">
      <h1 className="text-4xl font-semibold">Have Questions?</h1>
      <p className="text-2xl text-[#013D23] lg:w-1/2 md:w-3/4 sm:w-full">
        We would love to hear from you!
      </p>
      <div className="flex gap-4">
        <Link href="/contact">
          <Button className="bg-[#232433] text-white flex items-center p-6 pl-12 text-lg font-normal">
            Contact Us
            <ArrowRight size={30} className="ml-1" />
          </Button>
        </Link>
        <Link href="/about">
          <Button className="bg-[#013D23] text-white p-6 text-lg flex items-center font-normal">
            Learn about Us
            <ArrowRight size={30} className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>

    <Footer />
  </div>
);

export default donate;
