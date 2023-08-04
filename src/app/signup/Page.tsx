"use client";
import { BreadCrumb, Button, Typography } from "@/components";
import { EyeClosedIcon, EyeOpenIcon } from "@/icons";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isHidden, setIsHidden] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div>
      <BreadCrumb
        title="Create an Account"
        desc=""
        path="Home / create an account"
      />
      <div className="flex flex-col items-center justify-center gap-10 px-2 py-14">
        <Typography varient="heading5" center>
          create your own account:
        </Typography>
        <div className="flex w-full flex-col items-center justify-center gap-10">
          <div className="flex w-full max-w-sm flex-col items-center gap-5 text-gray-250 lg:max-w-[650px]">
            <div className="flex w-full flex-col items-start lg:flex-row lg:items-center">
              <Typography varient="body1" className="w-32">
                Social title:
              </Typography>
              <div className="flex w-full items-start gap-5 lg:w-[600px]">
                <div className="flex gap-2">
                  <input type="radio" value="Mr." name="social-title" />
                  <Typography varient="body1">Mr.</Typography>
                </div>
                <div className="flex gap-2">
                  <input type="radio" value="Ms." name="social-title" />
                  <Typography varient="body1">Ms.</Typography>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start lg:flex-row lg:items-center">
              <Typography varient="body1" className="w-32">
                First Name:
              </Typography>
              <input
                type="text"
                placeholder="Your First Name"
                required
                className="w-full rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none lg:w-[600px]"
              />
            </div>

            <div className="flex w-full flex-col items-start lg:flex-row lg:items-center">
              <Typography varient="body1" className="w-32">
                Last Name:
              </Typography>
              <input
                type="text"
                placeholder="Your Last Name"
                required
                className="w-full rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none lg:w-[600px]"
              />
            </div>
            <div className="flex w-full flex-col items-start lg:flex-row lg:items-center">
              <Typography varient="body1" className="w-32">
                Email:
              </Typography>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none lg:w-[600px]"
              />
            </div>
            <div className="flex w-full flex-col items-start lg:flex-row lg:items-center">
              <Typography varient="body1" className="w-32">
                Password:
              </Typography>
              <div className="flex w-full items-center justify-center rounded-md border-2 border-gray-300 px-3 leading-tight text-gray-700 lg:w-[600px]">
                <input
                  type={isHidden ? "password" : "text"}
                  placeholder="Enter Password"
                  required
                  className="w-full py-2 leading-tight text-gray-700 focus:outline-none"
                />
                <div
                  onClick={() => setIsHidden(!isHidden)}
                  className={clsx("h-4 w-5 cursor-pointer", {
                    hidden: isHidden,
                  })}
                >
                  <EyeOpenIcon />
                </div>
                <div
                  onClick={() => setIsHidden(!isHidden)}
                  className={clsx("h-4 w-5 cursor-pointer", {
                    hidden: !isHidden,
                  })}
                >
                  <EyeClosedIcon />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start lg:flex-row lg:items-center">
              <Typography varient="body1" className="w-32">
                Birthdate:
              </Typography>
              <input
                type="date"
                placeholder="MM/DD/YYYY"
                required
                className="w-full rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none lg:w-[600px]"
              />
            </div>
          </div>
          <div className="flex w-full max-w-md flex-col items-start gap-5 text-gray-250 lg:max-w-[430px] ">
            <label className="flex items-start justify-start">
              <input type="checkbox" className="mr-4 h-5 w-6" />
              <Typography varient="body1">
                Receive offers from our partners
              </Typography>
            </label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-4 h-5 w-6 " />
                <Typography varient="body1">
                  Sign up for our newsletter
                </Typography>
              </label>
              <Typography varient="body" className="max-w-md pl-10">
                You may unsubscribe at any moment. For that purpose, please find
                contact into the legal notice
              </Typography>
            </div>
            <Button varient="login" disabled={isDisabled}>
              create an account
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Typography varient="heading5">already have an account?</Typography>
            <Link href="/login">
              <Typography
                varient="body1"
                color="sky"
                center
                className="underline"
              >
                log in!
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
