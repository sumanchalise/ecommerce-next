"use client";

import {
  Button,
  FeaturedComponent,
  FollowUsFacebook,
  InterestedOn,
  Typography,
} from "@/components";
import {
  BronzeStarIcon,
  CheveronDownIcon,
  CheveronLeftIcon,
  CheveronRightIcon,
  DiamondIcon,
  GoldStarIcon,
  HeartIcon,
  MinusIcon,
  PlatinumIcon,
  PlusIcon,
  ProhibitionIcon,
  SilverStarIcon,
  TickIcon,
  TruckIcon,
} from "@/icons";
import { ShareIcon } from "@/icons/ShareIcon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, createRef, useEffect, useState } from "react";
import Slider from "react-slick";

const Images = [
  { id: 1, src: "/assets/images/MysteryBox.png", alt: "Gift Image" },
  { id: 2, src: "/assets/images/giftImg1.png", alt: "Gift Image" },
  { id: 3, src: "/assets/images/giftImg2.png", alt: "Gift Image" },
  { id: 4, src: "/assets/images/giftImg3.png", alt: "Gift Image" },
];

const GiftOptions = [
  {
    id: 1,
    title: "Bronze Box - value aprox. $85",
    price: 85,
    reference: "YREVTSLPRO61",
    stock: 0,
    like: true,
    name: "Bronze",
    icon: <BronzeStarIcon />,
  },
  {
    id: 2,
    title: "Silver Box - value aprox. $140",
    price: 140,
    reference: "YREVTSLPRO62",
    stock: 10,
    like: true,
    name: "Silver",
    icon: <SilverStarIcon />,
  },
  {
    id: 3,
    title: "Gold Box - value aprox. $195",
    price: 195,
    reference: "YREVTSLPRO63",
    stock: 10,
    like: true,
    name: "Gold",
    icon: <GoldStarIcon />,
  },
  {
    id: 4,
    title: "Platinum Box - value aprox. $295",
    price: 295,
    reference: "YREVTSLPRO64",
    stock: 10,
    like: true,
    name: "Platinum",
    icon: <PlatinumIcon />,
  },
  {
    id: 5,
    title: "Diamond Box - value aprox. $350",
    price: 350,
    reference: "YREVTSLPRO65",
    stock: 10,
    like: true,
    name: "Diamond",
    icon: <DiamondIcon />,
  },
];

export default function Page() {
  return (
    <div>
      <Mysteryboxsection />
      <FeaturedComponent />
      <InterestedOn>you might be interested on</InterestedOn>
      <FollowUsFacebook />
    </div>
  );
}

const Mysteryboxsection = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedGift, setSelectedGift] = useState(
    GiftOptions[GiftOptions.length - 1]
  );

  const showAllOptions = () => {
    setShowOptions(!showOptions);
  };

  const hideOptions = () => {
    setShowOptions(false);
  };

  const handleOptionSelect = (
    option: SetStateAction<{
      id: number;
      title: string;
      price: number;
      reference: string;
      stock: number;
      like: boolean;
      name: string;
      icon: JSX.Element;
    }>
  ) => {
    setSelectedGift(option);
    hideOptions();
  };

  const [value, setValue] = useState<number>(1);

  const [like, setLike] = useState(false);

  const settings = {
    customPaging: function (i: number) {
      return (
        <div className="hidden h-20 w-20 md:flex ">
          <div className="relative hidden h-20 w-20 md:flex">
            <Image
              src={`/assets/images/image${i + 1}.png`}
              alt="hello"
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              quality={100}
            />
          </div>
        </div>
      );
    },
    dotsClass:
      "slick-dots !hidden 2xl:!flex absolute top-0 -left-24 flex-col h-96 overflow-y-auto overflow-x-visible !w-[90px]",
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

  const sliderRef = createRef<Slider>();

  const previousSlide = () => {
    sliderRef?.current && sliderRef?.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef?.current && sliderRef?.current?.slickNext();
  };

  useEffect(() => {
    setValue(1);
  }, [selectedGift]);

  return (
    <div>
      <div className="flex flex-col items-start justify-center gap-5 bg-lightgray px-2 py-14 md:flex-row lg:px-10">
        {/* Images */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <button
            onClick={previousSlide}
            className="relative left-0 top-[50%] z-20 h-7 w-7 rounded-full bg-white md:top-[40%] lg:top-[60%] lg:h-10 lg:w-10"
          >
            <div className="flex h-7 w-7 items-center justify-start text-black hover:text-secondary lg:h-10 lg:w-10">
              {<CheveronLeftIcon />}
            </div>
          </button>

          <div className="flex w-[90%] justify-center px-2 md:justify-end xl:w-[630px]">
            <div className="mystery relative left-0 h-[560px] w-[100%] lg:h-[700px] xl:h-[790px] xl:w-[526px]">
              <Slider ref={sliderRef} {...settings} className="flex flex-col">
                {Images.map((image) => (
                  <div
                    className="relative h-[560px] w-[100%] md:w-[355px] lg:h-[700px] xl:h-[790px] xl:w-[526px]"
                    key={image.id}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw"
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="relative right-0 top-[50%] z-20 h-7 w-7 rounded-full bg-white md:top-[40%] lg:top-[60%] lg:h-10 lg:w-10"
          >
            <div className="flex h-7 w-7 items-center justify-center hover:text-secondary lg:h-10 lg:w-10">
              {<CheveronRightIcon />}
            </div>
          </button>
        </div>

        <div className="flex w-full flex-col gap-2 px-5 md:w-1/2 lg:gap-6">
          <Typography varient="body1" color="darkgray">
            Home / Mystery Box
          </Typography>

          <Typography varient="heading2" color="dark">
            {`SFB Mystery box - ${selectedGift.name}`}
          </Typography>

          <div className="flex w-full justify-between xl:w-3/4">
            <div className="flex flex-col items-start">
              <Typography varient="social">${selectedGift.price}</Typography>
              <Typography varient="body1" color="darkgray">
                Tax Inc.
              </Typography>
            </div>

            {/*Stocked / out of Stock */}

            <div className="">
              <div className="flex items-center gap-2 ">
                {selectedGift.stock == 0 ? (
                  <div className="h-4 w-4 rotate-90 stroke-2 text-secondary">
                    <ProhibitionIcon />
                  </div>
                ) : (
                  <div className="h-4 w-4 stroke-2 text-sky">
                    <TickIcon />
                  </div>
                )}

                <Typography
                  varient="body1"
                  color={selectedGift.stock < 1 ? "secondary" : "sky"}
                >
                  {selectedGift.stock < 1 ? "Out of Stock" : "In Stock"}
                </Typography>
              </div>

              <Typography varient="body">
                Reference:{" "}
                <span className="font-semibold">{selectedGift.reference}</span>
              </Typography>
            </div>
          </div>

          {/* Truck icon */}
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 ">
              <TruckIcon />
            </div>

            <Typography varient="body1" color="dark">
              Netherlands, Belgium - ordered before 23:00,{" "}
              <span className="font-bold">shipped the same day!</span>
            </Typography>
          </div>

          {/* Link */}
          <div className="flex items-center gap-3">
            <div className="h-6 w-7">
              <ShareIcon />
            </div>
            <Link href="/gift">
              <Typography varient="body1" color="sky" className="underline">
                Send Link to a Friend
              </Typography>
            </Link>
          </div>

          {/* Option Box */}
          <div className="w-full xl:w-2/3">
            <div
              onClick={showAllOptions}
              className="flex items-center justify-between gap-5 border-2 border-darkgray px-5 py-3"
            >
              {/* for alignment */}
              <div className="flex w-full cursor-pointer items-center justify-center gap-2">
                <div className="h-10 w-10">{selectedGift.icon}</div>
                {selectedGift.title}
              </div>

              <div className="h-1 w-3 cursor-pointer">
                <CheveronDownIcon />
              </div>
            </div>

            {showOptions && (
              // {isClick && (
              <div className="absolute z-10 flex w-[90%] justify-center py-2 md:w-1/2 lg:w-1/4">
                <div className="flex flex-col items-start gap-2 ">
                  {GiftOptions?.map((option) => (
                    <div
                      key={option.id}
                      className="z-10 flex cursor-pointer items-center gap-2 "
                      onClick={() => handleOptionSelect(option)}
                    >
                      <div className="h-10 w-10 ">{option.icon}</div>
                      {option.title}
                    </div>
                  ))}
                  <div className="absolute left-0 top-0 h-full w-full bg-cream md:left-10 md:w-[80%] " />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-evenly gap-5 px-10 md:px-0 lg:justify-start">
            {/* increase decrease */}
            <div className="flex w-fit items-center border border-darkgray bg-white p-2">
              <div
                className="flex h-5 w-3 items-center justify-center text-darkgray hover:cursor-pointer"
                onClick={() => value > 1 && setValue(value - 1)}
              >
                <MinusIcon />
              </div>
              <p className="w-14 text-center text-lg">{value}</p>
              <div
                className="flex h-5 w-4 items-center justify-center text-darkgray hover:cursor-pointer"
                onClick={() =>
                  value < selectedGift.stock && setValue(value + 1)
                }
              >
                <PlusIcon />
              </div>
            </div>

            {/* Button */}
            <Link
              href={selectedGift.stock < 1 ? "/notify" : "/basket"}
              className="order-last col-span-2"
            >
              <Button varient="product">
                {selectedGift.stock < 1
                  ? "NOTIFY WHEN AVAILABLE"
                  : "ADD TO CART"}
              </Button>
            </Link>

            {/* Like */}
            <div
              onClick={() => setLike(!like)}
              className={clsx(
                "h-10 w-10 rounded-full border-2 border-darkgray p-2 text-dark hover:cursor-pointer lg:order-last",
                {
                  "border-secondary bg-secondary text-white": like,
                  "hover:bg-darkgray": !like,
                }
              )}
            >
              <HeartIcon />
            </div>
          </div>

          <Typography varient="body1" className="max-w-xl">
            Order the Mystery Box you like, receive a e-mail with a form. By
            filling out this form, we get to know you more and hear your
            preferences. With this information, we hope to surprise you with a
            box that will definitely be a match for you.
          </Typography>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col items-center justify-center gap-5 px-5 py-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start gap-5 ">
            <Typography
              varient="heading4"
              color="sky"
              className="underline underline-offset-8"
            >
              Description
            </Typography>

            <Typography varient="heading3"> More about product</Typography>
          </div>

          <Typography varient="body" className="max-w-sm">
            Thank you for being interested in our Mystery Box! Are you up for a
            surprise or maybe a challenge?
          </Typography>

          <Typography varient="body" className="max-w-3xl">
            Our Mystery Boxes are for everyone, available in 5 different sizes.
            Do you have a hard time choosing a wrap or color or are you a thrill
            seeker who loves surprises? We are going to do best wee can to make
            the nicest and most beautiful Mystery Box ever, fitted for you.
            Order the Mystery Box you like, receive a e-mail with a form. By
            filling out this form, we get to know you more and hear your
            preferences. With this information, we hope to surprise you with a
            box that will dfinitely be a match for you.
          </Typography>

          <Typography varient="body" className="max-w-3xl">
            With the Mystery Box more valur than what you have paid is
            guranteed!
          </Typography>

          <div className="flex flex-col items-start gap-2 ">
            {GiftOptions?.map((option) => (
              <div key={option.id} className="z-10 flex items-center gap-2 ">
                <div className="h-10 w-10">{option.icon}</div>
                {option.title}
              </div>
            ))}
          </div>

          <Typography varient="body" className="max-w-3xl">
            Returning is possible, at your own costs. This has to be the whole
            box, not parts of it.
          </Typography>
        </div>
      </div>
    </div>
  );
};
