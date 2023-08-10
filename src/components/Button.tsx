import clsx from "clsx";
import { ReactEventHandler, ReactNode } from "react";

interface props {
  varient?: "footer" | "login" | "primary" | "cart" | "product";
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
        "font-mulish flex h-14 cursor-pointer items-center justify-center rounded-full text-base ",
        {
          "border-2 border-dark px-10 py-3 font-JosefinSans text-sm font-bold uppercase":
            varient == "primary",
          "w-fit bg-sky px-10 py-4 font-JosefinSans font-bold uppercase text-white":
            varient == "footer",
          "w-full max-w-sm bg-yellow py-3 font-medium uppercase tracking-wider lg:w-[610px]":
            varient === "login",
          "h-auto w-full max-w-sm bg-yellow p-3 font-medium uppercase":
            varient === "cart",
          "w-80 bg-yellow px-10 py-3 tracking-widest lg:w-fit":
            varient === "product",
        }
      )}
    >
      {children}
    </button>
  );
};
