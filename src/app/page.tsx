"use client";
import { FollowUsFacebook, FollowUsInstagram } from "@/components/FollowUs";
import {
  ArrowIcon,
  CheveronLeftIcon,
  CheveronRightIcon,
  PlantStarIcon,
  ScrollIcon,
  SecurityIcon,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";
import Slider from "react-slick";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <ProductSection />
      <NameWaiting />
      <FollowUsSection />
      <BlogSection />
    </div>
  );
}

const HeroSection = () => {
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 7000,
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
  ];

  const sliderRef = createRef<Slider>();

  const previousSlide = () => {
    sliderRef?.current && sliderRef?.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef?.current && sliderRef?.current?.slickNext();
  };

  return (
    <div className="relative flex h-[80vh] flex-col overflow-x-clip">
      <Slider ref={sliderRef} {...settings}>
        {bgImg.map(({ link, alt, id }) => (
          <div key={id} className="relative h-[80vh]">
            <Image
              src={link}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              quality={100}
            />
            <div className="absolute h-full w-full bg-black/10" />
          </div>
        ))}
      </Slider>

      <div className="absolute right-5 top-1/4 flex flex-col gap-5 md:right-20 lg:right-56 lg:gap-10">
        <div className="font-JosefinSans text-5xl font-semibold text-white ">
          King's Day 2020!
        </div>
        <div className="max-w-sm font-Mulish text-lg text-white">
          Our market starts at noon. You receive a 25% discount with the code
          SFG500 on selected wraps and ring slings.
        </div>
        <Link href="#" className="flex items-center gap-3">
          <div className="font-JosefinSans text-sm font-bold uppercase text-white">
            Shop all products
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#ffc84a]">
            <div className="h-3 w-5  text-[#0E3C30]">
              <ArrowIcon />
            </div>
          </div>
        </Link>
      </div>

      <button
        onClick={previousSlide}
        className="absolute left-5 top-[60%] flex h-10 w-10 items-center justify-center rounded-full md:top-[40%] lg:h-20 lg:w-20"
      >
        <div className="flex h-16 w-16 items-center justify-center p-1">
          {<CheveronLeftIcon />}
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-[60%] flex h-10 w-10 items-center justify-center rounded-full md:top-[40%] lg:h-20 lg:w-20"
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
    <div className="grid grid-cols-1 justify-items-center gap-2 bg-[#f8f2ec] px-5 py-14 text-center md:grid-cols-3 lg:grid-cols-3 lg:px-20 2xl:px-48">
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

const ProductSection = () => {
  const Products = [
    {
      id: "1",
      alt: "Product",
      image: "/assets/images/image2.png",
      title: "Woven Wraps",
      desc: "Woven wraps for children provide extreme comfort of carrying a baby in many ways!",
      col: 1,
      position: "bottom",
    },
    {
      id: "2",
      alt: "Product",
      image: "/assets/images/image16.png",
      title: "Ring Sling",
      desc: "Ring Slings are simple to use baby carriers suitable for newborn to toddler. ",
      col: 2,
      position: "right",
    },
    {
      id: "3",
      alt: "Product",
      image: "/assets/images/image17.png",
      title: "Soft Structured Carrier",
      desc: "The soft structured baby carrier has its own structure with padding, fabrics, straps and other accessories. ",
      col: 2,
      position: "left",
    },
    {
      id: "4",
      alt: "Product",
      image: "/assets/images/image5.png",
      title: "Accessories",
      desc: "Accessorize your Ergobaby Carrier with matching Infant Inserts, Weather Covers and more.",
      col: 1,
      position: "bottom",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-14">
      <div className="gris-cols-1 relative grid w-full gap-4 px-5 pb-10 md:grid-cols-2 lg:grid-cols-3 lg:px-20 2xl:px-40">
        {Products.map((product, id) => (
          <div
            key={id}
            className={`relative gap-2 ${
              product.col === 2 ? "lg:col-span-2" : "null"
            }`}
          >
            <div className="relative h-[45vh]">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className=" object-cover"
                quality={100}
              />
              <div className="absolute h-full w-full  bg-black/30" />
            </div>

            <div
              className={`absolute flex max-w-lg flex-col gap-2 bg-center text-white ${
                product.position == "bottom"
                  ? "bottom-[10%] left-5 px-3 md:bottom-[15%] md:left-3 lg:left-5 2xl:left-16"
                  : product.position == "right"
                  ? "bottom-[10%] left-5 px-3 md:bottom-[15%] md:left-3 lg:left-auto lg:right-20 lg:top-1/3"
                  : "bottom-[10%] left-5 px-3 md:bottom-[15%] md:left-3 lg:left-20 lg:top-1/3"
              }`}
            >
              <div className="font-JosefinSans text-3xl font-semibold lg:text-5xl">
                {product.title}
              </div>
              <div className="font-Mulish text-base lg:max-w-sm lg:text-lg">
                {product.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="#">
        <button className="flex h-14 w-64 items-center justify-center rounded-full border-2 border-[#2B2B2B] font-JosefinSans text-sm font-bold uppercase text-[#2B2B2B]">
          Shop all products
        </button>
      </Link>
    </div>
  );
};

const FollowUsSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center py-14 text-center font-Mulish text-4xl">
        Follow us on Facebook @SlingsForBabies
      </div>
      <FollowUsInstagram />
      <FollowUsFacebook />
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-5 py-14 text-[#2B2B2B] lg:px-48">
      <div className="py-5 font-JosefinSans text-base font-semibold uppercase">
        popular articles from our parents magazine
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-8 pb-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="relative h-[45vh]">
            <Image
              src="/assets/images/image14.png"
              alt="Blog image"
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              quality={100}
            />
          </div>
          <div className="pt-7 font-JosefinSans text-2xl capitalize">
            Happy International Babywearing week!
          </div>
          <div className="pt-1 font-Mulish text-base">
            Hear from experienced babywearing mamas...
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative h-[45vh]">
            <Image
              src="/assets/images/image15.png"
              alt="Blog image"
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              quality={100}
            />
          </div>
          <div className="pt-7 font-JosefinSans text-2xl capitalize">
            8 Tips for New Moms: Surviving the First Weeks
          </div>
          <div className="pt-1 font-Mulish text-base">
            The first few weeks at home with a newborn baby can be a roller
            coaster—physically, emotionally, and mentally. Here are our uncut,
            unfiltered tips for new moms for surviving those first couple of
            weeks with your newborn.
          </div>
        </div>
      </div>
      <button className="flex h-14 w-64 items-center justify-center rounded-full border-2 border-[#2B2B2B] font-JosefinSans text-sm font-bold uppercase text-[#2B2B2B]">
        read all articles
      </button>
    </div>
  );
};

const NameWaiting = () => {
  return (
    <div>
      <div>hello</div>
    </div>
  );
};
