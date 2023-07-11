import { CrossIcon, TickIcon } from "@/icons";
import Image from "next/image";
import { ReactNode } from "react";

export const InterestedOn = ({ children }: { children: ReactNode }) => {
  const deals = [
    {
      id: 1,
      title: "Yaro flex back panel pussycat fluffy silver beige...",
      image: "/assets/images/image2.png",
      alt: "Top Selling image",
      price: "$45.00",
      from: "50.00",
      stock: true,
    },
    {
      id: 2,
      title: "Yaro flex back panel pussycat",
      image: "/assets/images/image5.png",
      alt: "Top Selling image",
      price: "$45.00",
      from: "50.00",
      stock: true,
    },
    {
      id: 3,
      title: "Yaro flex back panel pussycat fluffy silver beige...",
      image: "/assets/images/image11.png",
      alt: "Top Selling image",
      price: "$45.00",
      from: "50.00",
      stock: false,
    },
    {
      id: 4,
      title: "Yaro flex back panel pussycat fluffy silver beige...",
      image: "/assets/images/image6.png",
      alt: "Top Selling image",
      price: "$45.00",
      from: "50.00",
      stock: true,
    },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center gap-7 py-14">
      <div className="font-JosefinSans text-sm font-semibold uppercase md:text-base">
        {children}
      </div>
      <div className="grid grid-cols-2 items-start justify-center gap-3 px-2 lg:grid-cols-4 lg:px-5 2xl:px-40 ">
        {deals.map((deal) => (
          <div
            className="flex w-[200px] flex-col justify-center gap-3 font-Mulish text-base md:w-full lg:leading-7 2xl:leading-10"
            key={deal.id}
          >
            <div className="relative h-[260px] w-[170px] cursor-pointer md:h-[400px] md:w-full lg:h-[541px]">
              <Image
                src={deal.image}
                alt={deal.alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="font-JosefinSans text-base">{deal.title}</div>
            <div className="flex flex-col justify-between font-Mulish text-lg md:flex-row">
              <div className="flex gap-2">
                From:
                <span className="hidden line-through md:flex">{deal.from}</span>
                <span className="text-secondary">{deal.price}</span>
              </div>
              <div className="flex items-center gap-1 ">
                {deal.stock ? (
                  <div className="flex items-center gap-2 text-sky">
                    <div className="flex h-1 w-3 items-center">
                      <TickIcon />
                    </div>
                    <p>In Stock</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-secondary">
                    <div className="flex h-3 w-3 stroke-2">
                      <CrossIcon />
                    </div>
                    <p>Not In Stock</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
