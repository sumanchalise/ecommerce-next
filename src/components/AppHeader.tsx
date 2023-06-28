"use client";
import {
  BasketIcon,
  ChatBubbleIcon,
  CheveronDownIcon,
  CrossIcon,
  MenuIcon,
  MysteryBoxIcon,
  SearchIcon,
} from "@/icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const AppHeader = () => {
  const [offer, setOffer] = useState(true);
  const menuItems = [
    {
      id: 1,
      title: "Wraps",
      link: "#",
      subitems: [
        { id: 1, title: "half", link: "#" },
        { id: 2, title: "full", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Carriers",
      link: "#",
      subitems: [
        { id: 1, title: "half", link: "#" },
        { id: 2, title: "full", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Accessories",
      link: "#",
      subitems: [
        { id: 1, title: "half", link: "#" },
        { id: 2, title: "full", link: "#" },
      ],
    },
    {
      id: 4,
      title: "For you",
      link: "#",
      subitems: [
        { id: 1, title: "half", link: "#" },
        { id: 2, title: "full", link: "#" },
      ],
    },
    {
      id: 5,
      title: "Kids",
      link: "#",
      subitems: [
        { id: 1, title: "new born", link: "#" },
        { id: 2, title: "full", link: "#" },
      ],
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <div className="flex   px-8 xl:px-14">
        <div className="hidden w-full items-center justify-start gap-5 lg:flex">
          <div className="flex w-80 items-center justify-between rounded-full border-2 border-gray-400 px-5 py-2">
            <input
              type="text"
              placeholder="Search"
              className=" leading-tight text-gray-700 focus:outline-none"
            />
            <div className="h-6 w-6 hover:cursor-pointer hover:text-red">
              <SearchIcon />
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center justify-center gap-2 hover:text-red"
          >
            <div className="h-5 w-6">
              <ChatBubbleIcon />
            </div>
            <h3>Help&nbsp;Me</h3>
          </Link>
          <Link href="#" className=" hover:text-red">
            Blog
          </Link>
        </div>
        <div className="relative flex w-full  items-center justify-start lg:hidden">
          <div
            className="w-6 cursor-pointer hover:text-red"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <MenuIcon />
          </div>
        </div>
        <div
          className={clsx(
            "fixed left-0 top-0 z-50 flex w-full transition duration-700 ease-in-out",
            {
              "-translate-x-full ": !isNavOpen,
              "translate-x-0 ": isNavOpen,
            }
          )}
        >
          <div
            className="flex min-h-screen w-full bg-darkblue/20"
            onClick={() => setIsNavOpen(false)}
          >
            <div className="flex min-h-screen w-8/12 flex-col justify-start overflow-hidden bg-white px-10 py-5 align-top md:w-1/2">
              <Link href="/" className=" w-36 ">
                <div className="relative h-24 w-44">
                  <Image
                    src="/assets/images/Logo.png"
                    fill
                    alt="Logo"
                    sizes="(max-width: 768px) 100vw"
                    className="object-contain"
                  />
                </div>
              </Link>
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col items-start justify-start gap-1 pt-5 capitalize leading-7"
                >
                  <div className="flex items-center justify-center gap-1  hover:text-red">
                    <Link
                      href={item.link}
                      className="font-mulish text-2xl font-semibold leading-7"
                    >
                      {item.title}
                    </Link>
                    <div className="h-2 w-4">
                      <CheveronDownIcon />
                    </div>
                  </div>

                  <div className="hidden flex-col gap-1 group-hover:flex">
                    {item.subitems?.map((subitem) => (
                      <Link
                        className="font-mulish pt-1 text-lg font-medium leading-7 hover:text-red"
                        href={subitem.link}
                        key={subitem.id}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <Link href="/" className="relative h-24 w-44">
            <Image
              src="/assets/images/Logo.png"
              fill
              alt="Logo"
              sizes="(max-width: 768px) 100vw"
              className="object-contain"
            />
          </Link>
        </div>

        <div className="hidden w-full items-center justify-end gap-7 leading-7 lg:flex">
          <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-red">
            <h3>English</h3>
            <div className="h-2 w-4">
              <CheveronDownIcon />
            </div>
          </div>
          <Link href="#" className="hover:text-red">
            My&nbsp;Account
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center hover:text-red"
          >
            <div className="h-8 w-7 ">
              <BasketIcon />
            </div>
            <h3>Basket(3)</h3>
          </Link>
        </div>
        <div className="flex w-full items-center justify-end gap-5 lg:hidden">
          <div className="hidden w-60 items-center justify-center gap-1 rounded-full border-2 border-gray-400 px-3 py-2 md:flex lg:hidden">
            <input
              type="text"
              placeholder="Search"
              className=" overflow-hidden leading-tight text-gray-700 focus:outline-none"
            />
            <div className="h-6 w-8 hover:cursor-pointer hover:text-red">
              <SearchIcon />
            </div>
          </div>
          <Link href="#" className="h-6 w-6 hover:text-red md:hidden">
            <SearchIcon />
          </Link>
          <Link href="#" className="h-8 w-7 hover:text-red">
            <BasketIcon />
          </Link>
        </div>
      </div>
      <div className="mb-2 hidden items-center justify-center gap-10 overflow-hidden py-3 font-Mulish text-lg lg:flex">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col items-start justify-start gap-1 capitalize"
          >
            <div className="flex items-center justify-center gap-1 hover:text-red">
              <Link href={item.link} className="font-mulish text-lg leading-7">
                {item.title}
              </Link>
              <div className="h-1 w-3">
                <CheveronDownIcon />
              </div>
            </div>

            <div className="absolute z-50 mt-7  hidden min-w-[100px] flex-col gap-1 bg-white p-4 shadow-lg group-hover:flex">
              {item.subitems?.map((subitem) => (
                <Link
                  className="font-mulish text-lg leading-7 hover:text-red"
                  href={subitem.link}
                  key={subitem.id}
                >
                  {subitem.title}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <Link href="#" className="text-lg leading-7  hover:text-red">
          Sale
        </Link>
        <Link href="#" className="text-lg leading-7 hover:text-red">
          New
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center gap-1 hover:text-red"
        >
          <div className="h-7 w-7">
            <MysteryBoxIcon />
          </div>
          <p>Mystery Box</p>
        </Link>
      </div>

      {offer && (
        <div className="relative flex items-center justify-center bg-darkblue py-2 text-white">
          <div className="flex items-center justify-center">
            Free Shipping This Week Only!
          </div>
          <div
            className="absolute right-7 flex h-4 w-4 cursor-pointer justify-end"
            onClick={() => setOffer(false)}
          >
            <CrossIcon />
          </div>
        </div>
      )}
    </div>
  );
};
