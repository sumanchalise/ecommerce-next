import { SadSmileyIcon } from "@/icons/SadSmileyIcon";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 font-Mulish">
      <div className=" h-10 w-10 ">
        <SadSmileyIcon />
      </div>
      <div className="max-w-sm text-center font-JosefinSans text-4xl font-semibold  capitalize leading-[50px] md:max-w-lg ">
        the page you are looking for doesn't exist :(
      </div>
      <div className="text-base font-medium">
        We apologize for the inconvinence...
      </div>
      <Link
        href="/"
        className="pt-5 text-base capitalize text-blue-500 underline hover:text-yellow"
      >
        back to home page
      </Link>
    </div>
  );
}
