"use client";
import { FacebookIcon, LikeIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {follow?.map(
        ({ imagelink, alt, icon, followers, title, link, page }, index) => (
          <div key={index} className="group relative h-[250px]  lg:h-[440px]">
            <Image
              src={imagelink}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              quality={100}
            />
            <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center gap-4 bg-darkblue/80 font-Mulish text-white opacity-0 transition delay-100 duration-300 ease-in-out group-hover:opacity-100">
              <div className="h-14 w-14">{icon}</div>
              <div className="font-JosefinSans text-2xl">{followers}</div>
              <div className="text-base ">{title}</div>
              <Link href={link}>
                <div className="text-base">{page}</div>
              </Link>
            </div>
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

  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {follow?.map(
        ({ imagelink, alt, icon, followers, title, link, page }, index) => (
          <div key={index} className="group relative h-[250px] lg:h-[440px]">
            <Image
              src={imagelink}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
              quality={100}
            />
            <div className="absolute z-50 flex h-full w-full flex-col items-center justify-center gap-4 bg-red/70 font-Mulish text-white opacity-0 transition delay-100 duration-300 ease-in-out group-hover:opacity-100">
              <div className="h-14 w-14">{icon}</div>
              <div className="font-JosefinSans text-2xl">{followers}</div>
              <div className="text-base ">{title}</div>
              <Link href={link}>
                <div className="text-base">{page}</div>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};
