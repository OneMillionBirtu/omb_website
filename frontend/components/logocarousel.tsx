"use client";

import React, { useEffect, useRef } from "react";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image, { StaticImageData } from "next/image";

type LogoCarouselProps = {
  logos: (string | StaticImageData)[];
};

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: { perView: 6, spacing: 32 },
  });

  const timeout = useRef<number | null>(null);
  const AUTO_PLAY_DELAY = 3000;

  useEffect(() => {
    const slider = instanceRef.current as KeenSliderInstance | null;
    if (!slider) return;

    const play = () => {
      if (timeout.current) window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => {
        slider.next();
      }, AUTO_PLAY_DELAY);
    };

    play();
    slider.on("slideChanged", play);

    const onEnter = () => {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
        timeout.current = null;
      }
    };

    const onLeave = () => {
      play();
    };

    const sliderEl = slider.container;
    sliderEl.addEventListener("pointerenter", onEnter);
    sliderEl.addEventListener("pointerleave", onLeave);

    return () => {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
        timeout.current = null;
      }
      sliderEl.removeEventListener("pointerenter", onEnter);
      sliderEl.removeEventListener("pointerleave", onLeave);
    };
  }, [instanceRef]);

  return (
    <div className="  w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider flex items-center justify-center">
        {logos.map((src, i) => (
          <div key={i} className="keen-slider__slide flex justify-center items-center">
            <Image src={src} alt={`logo-${i}`} width={160} height={80} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
