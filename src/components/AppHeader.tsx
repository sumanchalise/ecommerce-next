import {
  BasketIcon,
  ChatBubbleIcon,
  CheveronDownIcon,
  CrossIcon,
  MysteryBoxIcon,
  SearchIcon,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";

export const AppHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-14">
        <div className="flex items-center gap-5">
          <div className="flex w-80 items-center justify-between rounded-full border-2 border-gray-400 px-5 py-2">
            <input
              type="text"
              placeholder="Search"
              className=" leading-tight text-gray-700 focus:outline-none"
            />
            <div className="h-6 w-6">
              <SearchIcon />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-5 w-6">
              <ChatBubbleIcon />
            </div>
            <div>Help Me</div>
          </div>
          <div>Blog</div>
        </div>
        <Link href="/">
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
        <div className="flex items-center gap-7">
          <div className="flex items-center justify-center gap-2">
            <div>English</div>
            <div className="h-2 w-4">
              <CheveronDownIcon />
            </div>
          </div>
          <div>My Account</div>
          <div className="flex items-center justify-center gap-3">
            <div className="h-8 w-7">
              <BasketIcon />
            </div>
            <div>Basket(3)</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 py-3 text-lg ">
        <div className="flex items-center justify-center gap-1">
          <div>Wraps</div>
          <div className="h-1 w-3">
            <CheveronDownIcon />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div>Carriers</div>
          <div className="h-1 w-3">
            <CheveronDownIcon />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div>Accessories</div>
          <div className="h-1 w-3">
            <CheveronDownIcon />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div>For You</div>
          <div className="h-1 w-3">
            <CheveronDownIcon />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div>Kids</div>
          <div className="h-1 w-3">
            <CheveronDownIcon />
          </div>
        </div>
        <div>Sale</div>
        <div>New</div>
        <div className="flex items-center justify-center gap-1">
          <div className="h-7 w-7">
            <MysteryBoxIcon />
          </div>
          <div>Mystery Box</div>
        </div>
      </div>
      <div className="relative mt-2 flex items-center justify-center bg-[#22374A] py-2 pr-4 text-white">
        <div className="flex items-center justify-center">
          Free Shipping This Week Only!
        </div>
        <div className="absolute right-7 flex h-4 w-4 justify-end">
          <CrossIcon />
        </div>
      </div>
    </div>
  );
};
