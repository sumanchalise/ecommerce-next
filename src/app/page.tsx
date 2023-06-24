"use client";
import {
  ArrowIcon,
  CheveronLeftIcon,
  CheveronRightIcon,
  PlantStarIcon,
  ScrollIcon,
  SecurityIcon,
} from "@/icons";
import Image from "next/image";
import { createRef } from "react";
import Slider from "react-slick";

export default function Page() {
  return (
    <div className="">
      <HeroSection />
      <WorkSection />
    </div>
  );
}

const HeroSection = () => {
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 1000,
    lazyLoading: true,
    dots: true,
    infinite: true,
  };

  const bgImg = [
    { id: "1", link: "/assets/images/bg-herosec1.png", alt: "bg-image1" },
    { id: "2", link: "/assets/images/bg-herosec2.png", alt: "bg-image2" },
    { id: "3", link: "/assets/images/bg-herosec3.png", alt: "bg-image3" },
    { id: "4", link: "/assets/images/bg-herosec4.png", alt: "bg-image4" },
    { id: "5", link: "/assets/images/bg-herosec5.png", alt: "bg-image5" },
  ];

  const sliderRef = createRef<Slider>();

  const previousSlide = () => {
    sliderRef?.current && sliderRef?.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef?.current && sliderRef?.current?.slickNext();
  };

  return (
    <div className="relative flex flex-col">
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {bgImg.map(({ link, alt, id }) => (
            <div key={id} className="h-[80vh]">
              <Image
                src={link}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-overlay absolute h-full w-full bg-black/50 bg-blend-overlay" />

      <div className="absolute right-5 top-1/4 flex flex-col gap-5 md:right-20 lg:right-56 lg:gap-10">
        <div className="font-JosefinSans text-5xl font-semibold text-white ">
          King's Day 2020!
        </div>
        <div className="max-w-sm font-Mulish text-lg text-white">
          Our market starts at noon. You receive a 25% discount with the code
          SFG500 on selected wraps and ring slings.
        </div>
        <div className="flex items-center gap-3">
          <div className="font-JosefinSans text-sm font-bold uppercase text-white">
            Shop all products
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#ffc84a]">
            <div className="h-3 w-5  text-[#0E3C30]">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={previousSlide}
        className="absolute left-5 top-[60%] flex h-10 w-10 items-center justify-center rounded-full md:top-[40%] lg:h-20 lg:w-20 "
      >
        <div className="flex h-16 w-16 items-center justify-center p-1">
          {<CheveronLeftIcon />}
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-[60%] flex h-10 w-10 items-center justify-center rounded-full md:top-[40%] lg:h-20 lg:w-20 "
      >
        <div className="flex h-16 w-16 items-center justify-center p-1">
          {<CheveronRightIcon />}
        </div>
      </button>
    </div>
  );
};

const WorkSection = () => {
  const works = [
    {
      id: "1",
      icon: <PlantStarIcon />,
      title: "BEST PRODUCTS WORLDWIDE",
      desc: "We know what to look for when we select baby carriers for our online store.",
    },
    {
      id: "2",
      icon: <ScrollIcon />,
      title: "BREATHABLE, STYLISH MATERIALS",
      desc: "It's made from machine-washable, breathable air mesh, and comes in colors you actually want to wear.",
    },
    {
      id: "3",
      icon: <SecurityIcon />,
      title: "SECURE CHECKOUT",
      desc: "We accept PayPal, MasterCard, Visa, and et al.: names you know and trust!",
    },
  ];
  return (
    <div className="grid grid-cols-1 justify-items-center bg-[#F8F2EC] px-5 py-10 text-center md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-48">
      {works?.map((works) => {
        return (
          <div
            key={works.id}
            className="flex max-w-xs flex-col items-center justify-center gap-3"
          >
            <div className="h-20 w-20">{works.icon}</div>
            <div className="font-JosefinSans text-lg font-bold uppercase">
              {works.title}
            </div>
            <div className="font-Mulish text-base">{works.desc}</div>
          </div>
        );
      })}
    </div>
  );
};
