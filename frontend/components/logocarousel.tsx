"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Logoipsum from "@/public/Logos/Logoipsum.svg";
import Image from "next/image";

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="w-full">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Image src={Logoipsum} alt="Logoipsum" className="w-48 h-auto" />
          </div>
          <div>
            <Image src={Logoipsum} alt="Logoipsum" className="w-48 h-auto" />
          </div>
          <div>
            <Image src={Logoipsum} alt="Logoipsum" className="w-48 h-auto" />
          </div>
          <div>
            <Image src={Logoipsum} alt="Logoipsum" className="w-48 h-auto" />
          </div>
          <div>
            <Image src={Logoipsum} alt="Logoipsum" className="w-48 h-auto" />
          </div>
          <div>
            <Image src={Logoipsum} alt="Logoipsum" className="w-48 h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel;
