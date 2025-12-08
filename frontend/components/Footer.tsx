"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#013D23] text-white">
      <div className="container mx-auto px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 justify-center ">
          <div className="flex flex-col gap-4 md:gap-6 items-center ">
            <div className="w-48 h-28 md:w-48 md:h-24 relative">
              <Image src="/Omb_Eng_Yellow.svg" alt="OMB logo" fill className="object-contain" />
            </div>
            <p className=" text-base text-white text-center">
              Empowering Ethiopian livelihoods through climate-smart technologies.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="https://www.linkedin.com/company/one-million-birtu">
                <FaLinkedinIn />
              </Link>
              <Link href="https://www.linkedin.com/company/one-million-birtu">
                <FaFacebookF />
              </Link>
              <Link href="https://www.linkedin.com/company/one-million-birtu">
                <FaTwitter />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <h5 className="text-xl font-semibold ">Quick Links</h5>
            <ul className="text-lg space-y-2 text-center text-white/90">
              <li>
                <Link
                  href="/"
                  className="inline-block border-b-0 hover:border-b-2 hover:border-white/90 transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-block border-b-0 hover:border-b-2 hover:border-white/90 transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/ourwork"
                  className="inline-block border-b-0 hover:border-b-2 hover:border-white/90 transition-all"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block border-b-0 hover:border-b-2 hover:border-white/90 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 mt-4 items-center">
            <h5 className="text-xl font-semibold">Birtu Insights</h5>
            <ul className="text-lg space-y-2 text-center text-white/90">
              <li>
                <Link
                  href="/news"
                  className="inline-block border-b-0 hover:border-b-2 hover:border-white/90 transition-all"
                >
                  News & Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="inline-block border-b-0 hover:border-b-2 hover:border-white/90 transition-all"
                >
                  Resources & Publications
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 mt-4">
            <h5 className="text-xl font-semibold text-center ">Contact us</h5>
            <address className="not-italic  text-lg flex flex-col items-center  text-white/90">
              <div className="flex flex-col  items-center">
                <a href="mailto:info@onemillionbirtu.org" className="">
                  info@onemillionbirtu.org
                </a>
                <a href="tel:+2511122334455" className="">
                  +2511122334455
                </a>
              </div>
              <div className="flex flex-col  items-center mt-4">
                <span>Bole Medhanialem</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-base text-white/80 text-center">
          © 2025 One Million Birtu (OMB). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
