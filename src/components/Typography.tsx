import clsx from "clsx";
import React, { ReactNode } from "react";

const varientsMapping = {
  heading1: "h1",
  heading2: "h2",
  social: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  body1: "p",
  body: "p",
};

interface TypographyProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  as?: string;
  varient?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "social"
    | "body1"
    | "body";
  color?:
    | "dark"
    | "sky"
    | "secondary"
    | "lightgray"
    | "darkgray"
    | "yellow"
    | "lightblue"
    | "darkblue"
    | "cream";
  center?: boolean;
}

export const Typography: React.FunctionComponent<TypographyProps> = ({
  varient = "heading1",
  as,
  children,
  className,
  color,

  center = false,
  ...rest
}) => {
  const Component = as ? as : varient ? varientsMapping[varient] : "p";

  const classNames = clsx(
    {
      "text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl":
        varient === "heading1",
      "text-2xl font-semibold lg:leading-10 lg:text-4xl":
        varient === "heading2",
      "py-10 text-2xl lg:text-4xl": varient === "social",
      "text-lg font-normal lg:text-2xl lg:leading-10 ": varient === "heading3",
      "font-semibold lg:font-bold lg:leading-10 text-base lg:text-lg":
        varient === "heading4",
      "text-sm font-normal lg:text-base font-semibold uppercase":
        varient === "heading5",
      "text-base lg:text-lg lg:leading-7": varient === "body1",
      "text-sm lg:text-base ": varient === "body",
      "font-josefin":
        varient === "heading1" ||
        varient === "heading2" ||
        varient === "heading3" ||
        varient === "heading4" ||
        varient === "heading5",
      "font-mulish":
        varient === "body1" || varient === "body" || varient === "social",
      "text-center": center,
      "text-dark": color === "dark",
      "text-sky": color === "sky",
      "text-secondary": color === "secondary",
      "text-lightgray": color === "lightgray",
      "text-darkgray": color === "darkgray",
      "text-cream": color === "cream",
      "text-yellow": color === "yellow",
      "text-lightblue": color === "lightblue",
      "text-darkblue": color === "darkblue",
    },
    `${className ? className : ""}`
  );

  return (
    <div className={classNames}>
      <Component {...rest}>{children}</Component>
    </div>
  );
};
