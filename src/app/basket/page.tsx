"use client";
import { BreadCrumb, Button, Typography } from "@/components";
import { CrossIcon, MinusIcon, PlusIcon, TickIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const basket = [
    {
      id: 1,
      image: "/assets/images/image1.png",
      alt: "image",
      title: "Yaro flex back panel pussycat fluffy silver beige",
      price: 300.0,
      reference: "YREVTSLPRO65",
      length: "68cm",
      type: "100% cotton max text length example...",
      extra: "view all specifications",
      quantity: 1,
    },
    {
      id: 2,
      image: "/assets/images/image2.png",
      alt: "image",
      title: "Yaro flex back panel pussycat fluffy silver beige",
      price: 300.0,
      reference: "YREVTSLPRO65",
      length: "68cm",
      type: "100% cotton max text length example...",
      extra: "view all specifications",
      quantity: 1,
    },
    {
      id: 3,
      image: "/assets/images/image5.png",
      alt: "image",
      title: "Yaro flex back panel pussycat fluffy silver beige",
      price: 300.0,
      reference: "YREVTSLPRO65",
      length: "68cm",
      type: "100% cotton max text length example...",
      extra: "view all specifications",
      quantity: 1,
    },
  ];

  return (
    <div>
      <BreadCrumb title="Shopping basket" desc="" path="Home / Basket" />
      <div className="flex flex-col gap-4 px-5 py-7 pb-10 lg:px-10 xl:flex-row 2xl:px-40">
        <div className="flex flex-col gap-5">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="hidden w-full items-center justify-center uppercase md:flex">
              <Typography varient="heading6" className="w-[400px] lg:w-full">
                product
              </Typography>
              <div className="flex w-20 flex-col items-center md:w-24 lg:w-32">
                <Typography
                  varient="heading6"
                  className="flex w-24 justify-center lg:w-32"
                >
                  price
                </Typography>
              </div>
              <div className="flex w-20 flex-col items-center md:w-24 lg:w-32">
                <Typography
                  varient="heading6"
                  className="flex w-24 justify-center lg:w-32"
                >
                  qty
                </Typography>
              </div>
              <div className="flex w-20 flex-col items-center md:w-24 lg:w-32">
                <Typography
                  varient="heading6"
                  className="flex w-24 justify-center lg:w-32"
                >
                  subtotal
                </Typography>
              </div>
              <div className="flex w-20 flex-col items-center md:w-24 lg:w-32">
                <Typography
                  varient="heading6"
                  className="flex w-24 justify-center lg:w-32"
                ></Typography>
              </div>
            </div>
            <hr className="hidden w-full border-darkblue md:flex" />
            <div className="flex w-full flex-col gap-2 divide-y divide-darkgray">
              {basket.map((basket) => {
                const [quantity, setQuantity] = useState(basket.quantity);

                const handleDecrease = () => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                };

                const handleIncrease = () => {
                  setQuantity(quantity + 1);
                };
                const finalPrice = basket.price * quantity;

                return (
                  <div key={basket.id}>
                    <div className="flex flex-col items-start justify-center gap-5 py-5 md:flex-row md:gap-0">
                      <div className="w-full">
                        <div className="flex w-full gap-2 px-5 md:px-0">
                          <div className="relative h-36 w-32 lg:h-48">
                            <Image
                              src={basket.image}
                              fill
                              alt="image"
                              sizes="(max-width: 768px) 100vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Typography varient="body1" className="font-medium">
                              {basket.title}
                            </Typography>
                            <div className="flex gap-1">
                              <Typography
                                varient="body1"
                                className="capitalize text-gray-500"
                              >
                                reference:
                              </Typography>
                              <Typography
                                varient="body1"
                                className="text-gray-800"
                              >
                                {basket.reference}
                              </Typography>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3">
                                <TickIcon />
                              </div>
                              <Typography varient="body">
                                {basket.type}
                              </Typography>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3">
                                <TickIcon />
                              </div>
                              <Typography varient="body">
                                {basket.length}
                              </Typography>
                            </div>
                            <Typography
                              varient="body"
                              className="text-sky underline underline-offset-2"
                            >
                              {basket.extra}
                            </Typography>
                          </div>
                        </div>
                      </div>

                      <div className="flex w-full items-center justify-between md:w-auto md:justify-center">
                        <div className="flex w-20 flex-col items-center md:w-24 lg:w-32">
                          <Typography
                            varient="body"
                            className="flex capitalize md:hidden"
                          >
                            price
                          </Typography>
                          <Typography varient="body">
                            ${basket.price}
                          </Typography>
                        </div>
                        <div className="flex w-24 items-center justify-between border-2 border-darkgray px-2 py-2 md:px-3 lg:w-32 lg:px-4">
                          <div
                            className="flex h-5 w-3 cursor-pointer items-center justify-center"
                            onClick={handleDecrease}
                          >
                            <MinusIcon />
                          </div>
                          <Typography varient="body">{quantity}</Typography>
                          <div
                            className="flex h-5 w-4 cursor-pointer items-center justify-center"
                            onClick={handleIncrease}
                          >
                            <PlusIcon />
                          </div>
                        </div>
                        <div className="flex w-20 flex-col items-center md:w-24 lg:w-32">
                          <Typography
                            varient="body"
                            className="flex capitalize md:hidden"
                          >
                            price
                          </Typography>
                          <Typography varient="body">${finalPrice}</Typography>
                        </div>
                        <div className="flex w-20 justify-center md:w-24 lg:w-32">
                          <div className="h-3 w-3 stroke-2">
                            <CrossIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="w-full border-darkgray" />
          </div>
          <Link href="/wraps" className="w-fit">
            <Button varient="primary">continue shopping</Button>
          </Link>
        </div>
        <div>
          <div className="flex flex-col items-start justify-start border p-4">
            <div className="uppercase">order summery</div>
            <div className="div">got a discount code?</div>
            <div className="flex border">
              <input type="text" className="" placeholder="Enter your code" />
              <button>apply</button>
            </div>
            <div className="flex">sub total:</div>
            <div className="flex">discount:</div>
            <div className="flex">grand total:</div>
            <Button varient="login">proceed to checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
