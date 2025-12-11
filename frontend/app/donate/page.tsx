"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { z } from "zod";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";

import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FindUsSection from "@/components/Findus";

const donate = () => (
  <div>
    <Navbar />

    {/* Hero - Areas of Work */}
    <section className="container mx-auto px-6 md:px-10 lg:px-16 pt-12 lg:pt-16 lg:pr-30 lg:pb-10">
      <div className="flex items-center justify-start mb-10 lg:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-900 mr-4">
          DONATE
        </h3>
        <div className="w-14 h-[3px] rounded-2xl bg-emerald-900" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 lg:gap-8 lg:items-end">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-emerald-900 flex flex-col text-center lg:text-left lg:items-end">
            Donate to our &nbsp;
            <br className="sm:hidden lg:block" />
            Mission
          </h1>
          <p className="text-xl font-semibold leading-relaxed text-slate-700 max-w-xl flex flex-col items-center lg:items-start lg:w-[76%] ">
            Your support transforms lives and builds <br />
            sustainable futures across Ethiopia.
          </p>
        </div>
        <div className="relative w-full flex justify-center overflow-hidden rounded-2xl shadow-lg bg-slate-100">
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
        <div className="flex items-center justify-end mb-12 gap-2">
          <div className="w-12 h-0.75 bg-emerald-900 rounded-2xl" />
          <h3 className="text-4xl font-semibold text-emerald-900 mr-4">WHY DONATE?</h3>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start pb-12">
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-md bg-slate-100 order-2 lg:order-1"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image src="/solar.jpg" alt="MSMEs" fill className="object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6 text-lg leading-relaxed text-slate-700">
            <div className="mb-7 mt-5">
              <h3 className="text-5xl font-bold text-black">Make a lasting impact</h3>
            </div>
            <p>
              Every contribution to OMB directly supports farmers, health workers, students, and
              entrepreneurs across Ethiopia. Your support doesn&apos;t just provide aid it builds
              builds capacity, creates opportunities, and enables communities to drive their own
              development.
            </p>
            <p>
              Every contribution to OMB directly supports farmers, health workers, students, and
              entrepreneurs across Ethiopia. Your support doesn&apos;t just provide aid it builds
              capacity, creates opportunities, and enables communities to drive their own
              development.
            </p>
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
                  <Button className="w-full sm:w-auto bg-[#0a5c30] hover:bg-[#084a27] text-white px-6 py-3 text-lg font-semibold">
                    Fill a Form
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <p className="text-xl font-semibold text-slate-900">Crowd Funds:</p>
                  <Button className="w-full sm:w-auto bg-[#f5a623] hover:bg-[#e59612] text-[#0a5c30] px-6 py-3 text-lg font-semibold border-0">
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
        <Button className="bg-[#232433] text-white flex items-center p-6 pl-12 text-lg font-normal">
          Contact Us
          <ArrowRight size={30} className="ml-1" />
        </Button>
        <Button className="bg-[#013D23] text-white p-6 text-lg flex items-center font-normal">
          Learn about Us
          <ArrowRight size={30} className="ml-1" />
        </Button>
      </div>
    </div>

    <Footer />
  </div>
);

export default donate;
