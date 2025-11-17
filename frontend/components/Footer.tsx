"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#013D23] text-white">
      <div className="container mx-auto px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="w-32 h-16 relative">
              <Image src="/logowhite.png" alt="OMB logo" fill className="object-contain" />
            </div>
            <p className="mt-4 text-sm text-white/90">
              Empowering Ethiopian livelihoods through climate-smart technologies.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="facebook" className="text-white/90">
                fb
              </a>
              <a href="#" aria-label="twitter" className="text-white/90">
                tw
              </a>
              <a href="#" aria-label="linkedin" className="text-white/90">
                in
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-semibold mb-4">Quick Links</h5>
            <ul className="text-sm space-y-2 text-white/90">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold mb-4">Birtu Insights</h5>
            <ul className="text-sm space-y-2 text-white/90">
              <li>
                <Link href="/news">News & Articles</Link>
              </li>
              <li>
                <Link href="/resources">Resources & Publications</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold mb-4">Contact us</h5>
            <address className="not-italic text-sm text-white/90">
              Bole Medhanialem
              <br />
              Addis Ababa, Ethiopia
              <br />
              <br />
              <a href="tel:+2511122334455">+2511122334455</a>
              <br />
              <a href="mailto:info@ombEthiopia.org">info@ombEthiopia.org</a>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-sm text-white/80 text-center">
          © 2025 Organization for Market Building (OMB). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
