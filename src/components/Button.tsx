import clsx from "clsx";
import { ReactEventHandler, ReactNode } from "react";

interface props {
  varient?: "footer" | "login" | "primary";
  disabled?: boolean;
  children?: ReactNode;
  onClick?: ReactEventHandler;
}

export const Button = ({
  onClick,
  disabled = false,
  children,
  varient = "footer",
}: props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "font-mulish flex h-14 cursor-pointer items-center justify-center rounded-full text-base font-medium",
        {
          "border-2 border-dark p-3 px-10 ": varient == "primary",
          "w-fit bg-sky px-10 py-4 font-JosefinSans font-bold uppercase text-white":
            varient == "footer",
          "w-full max-w-sm bg-yellow py-3 uppercase tracking-wider lg:w-[610px]":
            varient === "login",
        }
      )}
    >
      {children}
    </button>
  );
};
