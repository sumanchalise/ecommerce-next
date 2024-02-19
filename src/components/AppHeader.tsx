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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Typography } from "./Typography";

export const AppHeader = () => {
  const router = useRouter();
  const [offer, setOffer] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState<number[]>([]);
  const menuItems = [
    {
      id: 1,
      title: "Wraps",
      link: "/wraps",
      subitems: [
        { id: 1, title: "Stretchy Wrap", link: "/stretchywrap" },
        { id: 2, title: "Faro Flex", link: "#" },
        { id: 3, title: "Storchenwiege", link: "#" },
        { id: 4, title: "Madura", link: "#" },
        { id: 5, title: "Marsupia", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Carriers",
      link: "#",
      subitems: [
        { id: 1, title: "My Sol", link: "#" },
        { id: 2, title: "Bandoline", link: "#" },
        { id: 3, title: "Tula", link: "#" },
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
    { id: 6, title: "sale", link: "/sale" },
    { id: 7, title: "New", link: "/new" },
    {
      id: 8,
      title: "Mystery Box",
      link: "/mysterybox",
      icon: <MysteryBoxIcon />,
    },
  ];

  const Language = [
    { id: 100, lang: "English", action: "#" },
    { id: 101, lang: "English - AUS", action: "#" },
    { id: 102, lang: "English - India", action: "#" },
    { id: 103, lang: "English - UK", action: "#" },
    { id: 104, lang: "English - US", action: "#" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div>
      <div className="flex px-8 xl:px-14">
        {/* search and help shown in lg:device only */}
        <div className="hidden w-full items-center justify-start gap-5 lg:flex">
          <div className="flex w-80 items-center justify-between rounded-full border-2 border-gray-400 px-5 py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full leading-tight text-gray-700 focus:outline-none"
            />
            <div className="h-6 w-6 hover:cursor-pointer hover:text-secondary">
              <SearchIcon />
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center justify-center gap-2 hover:text-secondary"
          >
            <div className="h-5 w-6">
              <ChatBubbleIcon />
            </div>
            <h3>Help&nbsp;Me</h3>
          </Link>
          <Link href="#" className=" hover:text-secondary">
            Blog
          </Link>
        </div>
        {/* hamburger menu */}
        <div className="relative flex w-full items-center justify-start  gap-1  lg:hidden">
          <div
            className="w-6 cursor-pointer hover:text-secondary"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <MenuIcon />
          </div>
          <p className="text-lg font-medium">Menu</p>
        </div>
        {/* side menu */}
        <div
          className={clsx(
            "fixed left-0 top-0 z-40 flex min-h-screen w-full transition duration-700 ease-in-out",
            {
              "-translate-x-full ": !isNavOpen,
              "translate-x-0 ": isNavOpen,
            }
          )}
        >
          <div
            className="absolute top-0 flex min-h-screen w-full bg-darkblue/20"
            onClick={() => setIsNavOpen(false)}
          />
          <div className="z-50 flex min-h-screen w-8/12 flex-col items-start justify-start bg-white px-10 py-5 align-top md:w-1/2 lg:w-2/5">
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
                className="flex flex-col gap-1 overflow-y-auto pt-4 capitalize leading-7 transition-all duration-300 ease-out"
                onClick={() => {
                  if (item.link == "#") {
                    const tmpList = submenuOpen;
                    const openMenuIndex = submenuOpen.indexOf(item.id);
                    let newOpenMenuList = submenuOpen;

                    if (openMenuIndex > -1) {
                      tmpList.splice(openMenuIndex, 1);
                      newOpenMenuList = [...tmpList];
                    } else newOpenMenuList = [...tmpList, item.id];
                    setSubmenuOpen(newOpenMenuList);
                  } else {
                    router.push(item.link);
                    setIsNavOpen(false);
                  }
                }}
              >
                <Link
                  href={item.link}
                  className="flex items-center justify-start gap-1  hover:text-secondary"
                >
                  <div className="font-mulish flex gap-1 text-xl font-semibold leading-7">
                    {item.icon && (
                      <div className="h-6 w-6">
                        <MysteryBoxIcon />
                      </div>
                    )}
                    {item.title}
                  </div>
                  {item.subitems ? (
                    <div className="h-2 w-4">
                      <CheveronDownIcon />
                    </div>
                  ) : (
                    ""
                  )}
                </Link>

                <div
                  className={`flex flex-col gap-1 overflow-hidden transition-all duration-1000 ease-in-out `}
                  style={{
                    maxHeight: submenuOpen.includes(item.id)
                      ? `calc(${item?.subitems?.length}*3rem)`
                      : "0rem",
                  }}
                >
                  {item.subitems?.map((subitem) => (
                    <Link
                      className="font-mulish pl-5 pt-1 text-lg font-medium leading-7 hover:text-secondary "
                      href={subitem.link}
                      key={subitem.id}
                      onClick={() => {
                        setIsNavOpen(false);
                      }}
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="#"
              className="font-mulish pt-4 text-xl font-semibold leading-7 hover:text-secondary"
            >
              Language
            </Link>
            <Link
              href="#"
              className=" font-mulish pt-4 text-xl font-semibold leading-7 hover:text-secondary"
            >
              Blog
            </Link>
            <Link
              href="#"
              className=" font-mulish pt-4 text-xl font-semibold leading-7 hover:text-secondary"
            >
              My Account
            </Link>
            <Link
              href="#"
              className="font-mulish flex items-center gap-2 pt-4 text-xl font-semibold leading-7 hover:text-secondary"
            >
              <div className="h-5 w-6">
                <ChatBubbleIcon />
              </div>
              <h3>Help&nbsp;Me</h3>
            </Link>
          </div>
        </div>
        {/* logo image */}
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
        {/* language basket shown in large device only */}
        <div className=" hidden w-full items-center justify-end gap-7 leading-7 lg:flex">
          <div className="group flex cursor-pointer items-center justify-center gap-1">
            <div className="flex items-center justify-center gap-1 hover:text-secondary">
              <h3>English</h3>
              <div className="h-2 w-4">
                <CheveronDownIcon />
              </div>
            </div>
            <div className="absolute z-20 mt-48 hidden flex-col rounded-md bg-lightgray px-5 py-3 font-JosefinSans shadow-lg group-hover:flex">
              {Language.map((item, id) => (
                <div
                  className=" hover:cursor-pointer hover:text-secondary"
                  key={id}
                >
                  {item.lang}
                </div>
              ))}
            </div>
          </div>

          <Link href="/account" className="hover:text-secondary">
            My&nbsp;Account
          </Link>
          <Link
            href="/basket"
            className="flex items-center justify-center hover:text-secondary"
          >
            <div className="h-8 w-7 ">
              <BasketIcon />
            </div>
            <h3>Basket(3)</h3>
          </Link>
        </div>
        {/* saerch icon for sm and ms device */}
        <div className="flex w-full items-center justify-end gap-5 lg:hidden">
          <div className="hidden w-60 items-center justify-center gap-1 rounded-full border-2 border-gray-400 px-3 py-2 md:flex lg:hidden">
            <input
              type="text"
              placeholder="Search"
              className=" overflow-hidden leading-tight text-gray-700 focus:outline-none"
            />
            <div className="h-6 w-8 hover:cursor-pointer hover:text-secondary">
              <SearchIcon />
            </div>
          </div>
          <div
            className="h-6 w-6 cursor-pointer hover:text-secondary md:hidden"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
            }}
          >
            <SearchIcon />
          </div>
          <Link href="#" className="h-8 w-7 hover:text-secondary">
            <BasketIcon />
          </Link>
        </div>
      </div>
      {/* search field for sm devices */}
      <div
        className={clsx("fixed top-0 z-20 min-h-screen w-full ", {
          hidden: !isSearchOpen,
        })}
      >
        <div
          className="absolute top-0 min-h-screen w-full bg-darkblue/50"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        <div className="relative left-0 right-0 top-20 mx-auto flex w-72 items-center justify-between gap-1 rounded-full border-2 border-darkblue/80 bg-white px-3 py-2 ">
          <input
            type="text"
            placeholder="Search"
            className="overflow-hidden text-lg leading-tight text-gray-700 focus:outline-none"
          />
          <div className="flex h-6 w-8 justify-center hover:cursor-pointer hover:text-secondary">
            <SearchIcon />
          </div>
        </div>
      </div>
      {/* menu list for large device */}
      <div className="mb-2 hidden items-center justify-center gap-10 overflow-hidden py-3 font-Mulish text-lg lg:flex">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col items-start justify-start gap-1 capitalize"
          >
            <div className="flex items-center justify-center gap-1 hover:text-secondary">
              <Link
                href={item.link}
                className="font-mulish flex gap-1 text-lg leading-7"
              >
                {item.icon && (
                  <div className="h-7 w-7">
                    <MysteryBoxIcon />
                  </div>
                )}

                {item.title}
              </Link>
              {item.subitems && (
                <div className="h-2 w-4">
                  <CheveronDownIcon />
                </div>
              )}
            </div>

            <div
              className={`absolute z-50 mt-7 hidden min-w-[100px] flex-col gap-1 rounded-md bg-lightgray px-6 py-4 shadow-lg ${
                item.subitems && "group-hover:flex"
              }`}
            >
              {item.subitems?.map((subitem) => (
                <Link
                  className="font-mulish text-lg leading-7 hover:text-secondary"
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
      {/* offer section */}
      {offer && (
        <div className="relative flex items-center justify-center bg-darkblue py-2 text-white">
          <Typography varient="body"> Free Shipping This Week Only</Typography>
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
