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
      <BreadCrumb title="Sign-In" desc="" path="Home / Login" />
      <div className="flex flex-col items-center gap-10 px-5 py-14">
        <Typography varient="heading5" center>
          SIGN-IN TO YOUR ACCOUNT:
        </Typography>

        <div className="flex w-full flex-col items-center justify-center gap-10">
          <div className="flex w-full max-w-sm flex-col items-center gap-5 text-gray-250 lg:max-w-[610px]">
            <div className="flex w-full flex-col items-start lg:flex-row lg:items-center">
              <Typography varient="body1" className="w-28">
                Email:
              </Typography>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none lg:w-[490px]"
              />
            </div>
            <div className="flex w-full flex-col items-start lg:flex-row lg:items-center">
              <Typography varient="body1" className="w-28">
                Password:
              </Typography>
              <div className="flex w-full items-center justify-center rounded-md border-2 border-gray-300 px-3 leading-tight text-gray-700 lg:w-[490px]">
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
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <Button varient="login" disabled={isDisabled}>
              SIGN IN
            </Button>
            <Link href="#">
              <Typography varient="body1" color="sky" className="underline">
                Forgot your password?
              </Typography>
            </Link>
            <div className="flex items-center justify-center gap-2 pt-4 font-JosefinSans">
              <Typography varient="heading5" center>
                no account?
              </Typography>
              <Link href="/signup">
                <Typography
                  varient="body1"
                  color="sky"
                  center
                  className="underline"
                >
                  Create new!
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
