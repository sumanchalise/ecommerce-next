"use client";
import { FacebookIcon, LikeIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const FollowUsFacebook = () => {
  const follow = [
    {
      imagelink: "/assets/images/image10.png",
      alt: "Blog image",
      icon: <FacebookIcon />,
      followers: "14571",
      title: "Please Follow Us",
      link: "https://www.facebook.com",
      page: "@SlingsForBabies",
    },
    {
      imagelink: "/assets/images/image11.png",
      alt: "Blog image",
      icon: <FacebookIcon />,
      followers: "14571",
      title: "Please Follow Us",
      link: "https://www.facebook.com",
      page: "@SlingsForBabies",
    },
    {
      imagelink: "/assets/images/image12.png",
      alt: "Blog image",
      icon: <FacebookIcon />,
      followers: "14571",
      title: "Please Follow Us",
      link: "https://www.facebook.com",
      page: "@SlingsForBabies",
    },
    {
      imagelink: "/assets/images/image13.png",
      alt: "Blog image",
      icon: <FacebookIcon />,
      followers: "14571",
      title: "Please Follow Us",
      link: "https://www.facebook.com",
      page: "@SlingsForBabies",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const handleMouseEnter = (index: any) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {follow?.map(
        ({ imagelink, alt, icon, followers, title, link, page }, index) => (
          <div
            key={index}
            className="relative h-[25vh] lg:h-[45vh]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <Image
              src={imagelink}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              quality={100}
            />
            {hoverIndex === index && (
              <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center gap-4 bg-[#22374A] font-Mulish text-white">
                <div className="h-14 w-14">{icon}</div>
                <div className="font-JosefinSans text-2xl">{followers}</div>
                <div className="text-base ">{title}</div>
                <Link href={link}>
                  <div className="text-base">{page}</div>
                </Link>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export const FollowUsInstagram = () => {
  const follow = [
    {
      imagelink: "/assets/images/image6.png",
      alt: "Blog image",
      icon: <LikeIcon />,
      followers: "14920",
      title: "Likes",
      link: "https://www.instagram.com",
      page: "@SlingsForBabies",
    },
    {
      imagelink: "/assets/images/image7.png",
      alt: "Blog image",
      icon: <LikeIcon />,
      followers: "14920",
      title: "Likes",
      link: "https://www.instagram.com",
      page: "@SlingsForBabies",
    },
    {
      imagelink: "/assets/images/image8.png",
      alt: "Blog image",
      icon: <LikeIcon />,
      followers: "14920",
      title: "Likes",
      link: "https://www.instagram.com",
      page: "@SlingsForBabies",
    },
    {
      imagelink: "/assets/images/image9.png",
      alt: "Blog image",
      icon: <LikeIcon />,
      followers: "14920",
      title: "Likes",
      link: "https://www.instagram.com",
      page: "@SlingsForBabies",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const handleMouseEnter = (index: any) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {follow?.map(
        ({ imagelink, alt, icon, followers, title, link, page }, index) => (
          <div
            key={index}
            className="relative h-[25vh] lg:h-[45vh]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <Image
              src={imagelink}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              quality={100}
            />
            {hoverIndex === index && (
              <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center gap-4 bg-[#C2463B] font-Mulish text-white">
                <div className="h-14 w-14">{icon}</div>
                <div className="font-JosefinSans text-2xl">{followers}</div>
                <div className="text-base ">{title}</div>
                <Link href={link}>
                  <div className="text-base">{page}</div>
                </Link>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};
