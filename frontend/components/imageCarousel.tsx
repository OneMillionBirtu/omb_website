"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type ImageCarouselProps = {
  images: string[];
  interval?: number;
};

export default function ImageCarousel({ images, interval = 4000 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [interval, next]);

  return (
    <div className="relative w-full h-96 md:h-108 lg:h-144 flex justify-center overflow-hidden rounded-2xl shadow-lg bg-slate-100">
      {/* Image wrapper */}
      <div className="relative w-full h-full">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={images[index]} alt="carousel" fill className="object-cover" priority />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-6">
        <Button
          onClick={prev}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-emerald-900 shadow-md hover:bg-emerald-900 hover:text-amber-400 cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Button
          onClick={next}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-emerald-900 shadow-md hover:bg-emerald-900 hover:text-amber-400 cursor-pointer"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
