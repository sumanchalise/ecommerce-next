import { BreadCrumb } from "@/components";
import { InterestedOn } from "@/components/InterestedOn";
import { TickIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const display = [
    {
      id: 1,
      title: "Woven Wrap",
      image: "/assets/images/image18.png",
      alt: "Woven Wrap",
    },
    {
      id: 2,
      title: "Stretchy Wrap",
      image: "/assets/images/image1.png",
      alt: "Stretchy Wrap",
    },
    {
      id: 3,
      title: "Ring Sling",
      image: "/assets/images/image2.png",
      alt: "Ring Sling",
    },
    {
      id: 4,
      title: "Baby Wrap",
      image: "/assets/images/image5.png",
      alt: "Baby Wrap",
    },
  ];
  const topsellings = [
    {
      id: 1,
      title: "Yaro flex back panel pussycat fluffy silver beige",
      image: "/assets/images/image1.png",
      alt: "Top Selling image",
      price: "$45.00",
      stock: "in stock",
    },
    {
      id: 2,
      title: "Yaro flex back panel pussycat",
      image: "/assets/images/image2.png",
      alt: "Top Selling image",
      price: "$56.00",
      stock: "in stock",
    },
    {
      id: 3,
      title: "Yaro flex back panel pussycat fluffy silver beige...",
      image: "/assets/images/image5.png",
      alt: "Top Selling image",
      price: "$41.00",
      stock: "in stock",
    },
    {
      id: 4,
      title: "Yaro flex back panel pussycat fluffy silver beige...",
      image: "/assets/images/image6.png",
      alt: "Top Selling image",
      price: "$108.00",
      stock: "in stock",
    },
  ];
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
    <div className="flex flex-col items-center justify-center">
      <BreadCrumb
        title="Wraps"
        desc="In our webshop you will find a complete collection of tipical Dutch baby carriers. Whether you are looking for a Stretchy Wrap, Woven Wrap, Mai Tai, Ringsling or Click Carriers."
        path="Home / Wraps"
      />
      <div className="grid grid-cols-2 items-start justify-center gap-10 px-5 py-14 md:grid-cols-4 md:gap-20 lg:w-2/3 lg:px-5 2xl:w-1/2">
        {display.map((display) => (
          <Link
            href="#"
            className="flex flex-col items-center justify-center gap-4"
            key={display.id}
          >
            <div className="relative h-28 w-28 md:h-40 md:w-40">
              <Image
                src={display.image}
                alt={display.alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
            <p className="font-Mulish text-base">{display.title}</p>
          </Link>
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-7 bg-cream py-14">
        <div className="font-JosefinSans text-sm font-semibold uppercase md:text-base">
          top selling products in this category
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-3 px-2 lg:grid-cols-4 lg:px-5 2xl:px-40 ">
          {topsellings.map((sellings) => (
            <div
              className="flex w-[200px] flex-col justify-center gap-3 font-Mulish text-base md:w-full lg:leading-7 2xl:leading-10"
              key={sellings.id}
            >
              <div className="relative h-[260px] w-[170px] cursor-pointer md:h-[400px] md:w-full lg:h-[541px]">
                <Image
                  src={sellings.image}
                  alt={sellings.alt}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div>{sellings.title}</div>
              <div className="flex flex-col justify-between md:flex-row">
                <div>From: {sellings.price}</div>
                <div className="flex items-center gap-1 text-sky">
                  <div className="flex h-1 w-3 items-center">
                    <TickIcon />
                  </div>
                  <p>{sellings.stock}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex w-full flex-col items-center justify-center gap-7 py-14">
        <div className="font-JosefinSans text-sm font-semibold uppercase md:text-base">
          todays deals
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
                  <span className="hidden line-through md:flex">
                    {deal.from}
                  </span>
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
      </div> */}
      <InterestedOn> todays Deals</InterestedOn>
      <div className="flex max-w-5xl flex-col gap-5 px-5 py-14 md:px-10">
        <div
          className="text-center font-JosefinSans text-3xl font-medium leading-10 md:text-5xl md:leading-[60px]
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit (Category SEO
          text here)
        </div>
        <div className="font-Mulish text-base leading-7 md:text-lg">
          <p>
            We're parents too, and we know how overwhelming it can feel to shop
            for baby products. That's why Colugo was born to create a no-brainer
            shopping experience for the next generation of parents where you can
            buy quality products at a price that actually makes sense.
          </p>
          <p>
            We're parents too, and we know how overwhelming it can feel to shop
            for baby products. That's why Colugo was born- to create a
            no-brainer shopping experience for the next generation of parents
            where you can buy quality products at a price that actually makes
            sense.
            <br />
          </p>
          <p>
            We're parents too, and we know how overwhelming it can feel to shop
            for baby products. That's why Colugo was born--to create a
            no-brainer shopping experience for the next generation of parents
            where you can buy quality products at a price that actually makes
            sense. <br />
            <br />
          </p>
          <p>
            We're parents too, and we know how overwhelming it can feel to shop
            for baby products. That's why Colugo was born to create a no-brainer
            shopping experience for the next generation of parents where you can
            buy quality products at a price that actually makes sense.
          </p>

          <p>
            We're parents too, and we know how overwhelming it can feel to shop
            for baby products. That's why Colugo was born- to create a
            no-brainer shopping experience for the next generation of parents
            where you can buy quality products at a price that actually makes
            sense.
          </p>

          <p>
            We're parents too, and we know how overwhelming it can feel to shop
            for baby products. That's why Colugo was born- to create a
            no-brainer shopping experience for the next generation of parents
            where you can buy quality products at a price that actually makes
            sense.
          </p>
        </div>
      </div>
    </div>
  );
}
