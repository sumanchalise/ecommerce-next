"use client";
import {
  Button,
  FeaturedComponent,
  FollowUsFacebook,
  FollowUsInstagram,
} from "@/components";
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
      <FeaturedComponent />
      <FollowUsFacebook />
      <FollowUsInstagram />
      <BlogSection />
    </div>
  );
}

const HeroSection = () => {
  const settings = {
    customPaging: function () {
      return <div className="h-full w-full" />;
    },
    dotsClass: "slick-dots !flex justify-center gap-6 lg:gap-10",
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 1000,
    lazyLoading: true,
    dots: true,
    infinite: true,
    arrows: false,
    adaptiveHeight: true,
    swipeToSlide: true,
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
    <div className="testimonials relative flex h-[450px] flex-col overflow-x-clip md:h-[600px] lg:h-[800px]">
      <Slider ref={sliderRef} {...settings}>
        {bgImg.map(({ link, alt, id }) => (
          <div
            key={id}
            className="relative h-[450px] md:h-[600px] lg:h-[800px]"
          >
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

      <div className="absolute right-5 top-20 flex flex-col items-center gap-5 text-center md:right-20 md:top-[30%] md:items-start md:text-start lg:right-72 lg:gap-10">
        <h1 className=" font-JosefinSans text-4xl font-semibold text-white  md:text-5xl ">
          King&apos;s Day 2020!
        </h1>
        <p className="max-w-xs font-Mulish text-base text-white  md:max-w-sm md:text-lg">
          Our market starts at noon. You receive a 25% discount with the code
          SFG500 on selected wraps and ring slings.
        </p>
        <Link href="#" className="flex items-center gap-3">
          <h3 className="font-JosefinSans text-sm font-bold uppercase text-white">
            Shop all products
          </h3>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-yellow">
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
        <div className="flex h-16 w-16 items-center justify-center p-1 text-white">
          {<CheveronLeftIcon />}
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-[60%] flex h-10 w-10 items-center justify-center rounded-full md:top-[40%] lg:h-20 lg:w-20"
      >
        <div className="flex h-16 w-16 items-center justify-center p-1 text-white">
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
    <div className="grid grid-cols-1 justify-items-center gap-2 bg-cream px-5 py-14 text-center md:grid-cols-3 lg:grid-cols-3 lg:px-20 2xl:px-48">
      {works?.map((works) => {
        return (
          <div
            key={works.id}
            className="flex max-w-xs flex-col items-center justify-center gap-3"
          >
            <div className="h-20 w-20">{works.icon}</div>
            <h3 className="font-JosefinSans text-lg font-bold uppercase">
              {works.title}
            </h3>
            <p className="font-Mulish text-base">{works.desc}</p>
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
            <div className="relative h-[440px]">
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
              className={`absolute left-5 flex max-w-lg flex-col gap-2 bg-center text-white ${
                product.position == "bottom"
                  ? "bottom-[10%] px-3 md:bottom-[15%] md:left-3 lg:left-5 2xl:left-16"
                  : product.position == "right"
                  ? "bottom-[10%] px-3 md:bottom-[15%] md:left-3 lg:left-auto lg:right-10 lg:top-1/3"
                  : "bottom-[10%] px-3 md:bottom-[15%] md:left-3 lg:left-20 lg:top-1/3"
              }`}
            >
              <h3 className="font-JosefinSans text-3xl font-semibold lg:text-5xl">
                {product.title}
              </h3>
              <p className="font-Mulish text-base lg:max-w-sm lg:text-lg">
                {product.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link href="#" className="w-fit">
        <Button varient="primary">Shop all products</Button>
      </Link>
    </div>
  );
};

const BlogSection = () => {
  const blog = [
    {
      id: 1,
      image: "/assets/images/image14.png",
      alt: "Blog-image1",
      title: "Happy International Babywearing week!",
      desc: "Hear from experienced babywearing mamas...",
    },
    {
      id: 2,
      image: "/assets/images/image15.png",
      alt: "Blog-image2",
      title: "8 Tips for New Moms: Surviving the First Weeks",
      desc: " The first few weeks at home with a newborn baby can be a oller coaster—physically, emotionally, and mentally. Here are our uncut, unfiltered tips for new moms for surviving those first couple of weeks with your newborn.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-5 py-14 text-[#2B2B2B] lg:px-48">
      <h3 className="flex items-center justify-center py-5 text-center font-Mulish text-3xl capitalize md:text-4xl">
        popular articles from our parents magazine
      </h3>
      <div className="flex w-full flex-col items-start justify-center gap-8 pb-5 md:flex-row">
        {blog.map((blog) => (
          <div key={blog.id} className="w-full md:w-1/2">
            <div className="relative h-[440px]">
              <Image
                src={blog.image}
                alt={blog.alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
            <h3 className="pt-7 font-JosefinSans text-2xl capitalize">
              {blog.title}
            </h3>
            <p className="pt-1 font-Mulish text-base">{blog.desc}</p>
          </div>
        ))}
      </div>
      <Link href="#" className="w-fit">
        <Button varient="primary">read all articles</Button>
      </Link>
    </div>
  );
};
