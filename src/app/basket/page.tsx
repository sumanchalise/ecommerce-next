"use client";
import { BreadCrumb, Button, Typography } from "@/components";
import { CrossIcon, MinusIcon, PlusIcon, TickIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [basket, setBasket] = useState([
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
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [discount, setDiscount] = useState(10);
  // const discountAmt = 100;

  // const discountPercentage = 10;
  // const calculatedDiscount = (totalPrice - discountPercentage);

  const grandTotal = totalPrice - discount;

  useEffect(() => {
    const calculatedTotalPrice = basket.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(calculatedTotalPrice);
  }, [basket]);

  const handleDecrease = (itemId: number) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncrease = (itemId: number) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <div>
      <BreadCrumb title="Shopping basket" desc="" path="Home / Basket" />
      <div className="flex flex-col gap-10 px-5 py-7 pb-10 lg:px-10 xl:flex-row xl:gap-2 xl:px-5 2xl:gap-10 2xl:px-40">
        <div className="flex flex-col gap-5">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="hidden w-full items-center justify-center uppercase md:flex">
              <Typography
                varient="heading6"
                className="w-[400px] md:w-[600px] lg:w-full "
              >
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
              {basket.map((item) => {
                const {
                  id,
                  image,
                  title,
                  reference,
                  type,
                  length,
                  extra,
                  price,
                  quantity,
                } = item;
                const finalPrice = price * quantity;

                return (
                  <div key={id}>
                    <div className="flex flex-col items-start justify-center gap-5 py-5 md:flex-row md:gap-0">
                      <div className="w-full">
                        <div className="flex w-full gap-3 md:px-0">
                          <div className="relative h-36 w-32 lg:h-48">
                            <Image
                              src={image}
                              fill
                              alt="image"
                              sizes="(max-width: 768px) 100vw"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Typography varient="body1" className="font-medium">
                              {title}
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
                                {reference}
                              </Typography>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3">
                                <TickIcon />
                              </div>
                              <Typography varient="body">{type}</Typography>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3">
                                <TickIcon />
                              </div>
                              <Typography varient="body">{length}</Typography>
                            </div>
                            <Typography
                              varient="body"
                              className="text-sky underline underline-offset-2"
                            >
                              {extra}
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
                          <Typography varient="body">${price}</Typography>
                        </div>
                        <div className="flex w-24 items-center justify-between border-2 border-darkgray px-2 py-2 md:px-3 lg:w-32 lg:px-4">
                          <div
                            className="flex h-5 w-3 cursor-pointer items-center justify-center"
                            onClick={() => handleDecrease(item.id)}
                          >
                            <MinusIcon />
                          </div>
                          <Typography varient="body">{quantity}</Typography>
                          <div
                            className="flex h-5 w-4 cursor-pointer items-center justify-center"
                            onClick={() => handleIncrease(item.id)}
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
        <div className="flex h-96 justify-center">
          <div className="flex flex-col items-start justify-start gap-5 border-2 border-darkgray p-5">
            <Typography varient="heading6">order summery</Typography>
            <Typography varient="body1">Got a discount code?</Typography>
            <div className="flex border-2 border-darkgray p-1">
              <input
                type="text"
                className="px-2 outline-none"
                placeholder="Enter your code"
              />
              <button className="leading-wider flex items-center justify-center gap-1 rounded-full border-2 border-darkblue px-3 py-1">
                <span className="font-Mulish font-bold uppercase text-darkblue">
                  apply
                </span>
                <div className="h-2 w-3 text-sky">
                  <TickIcon />
                </div>
              </button>
            </div>
            <div className="flex w-full flex-col gap-2 capitalize">
              <div className="flex items-center justify-between text-gray-500">
                <Typography varient="body">sub total:</Typography>
                <Typography varient="body">${totalPrice.toFixed(2)}</Typography>
              </div>
              <div className="flex items-center justify-between">
                <Typography varient="body">discount:</Typography>
                <Typography varient="body">${discount}</Typography>
              </div>
              <hr className="w-full border-darkgray" />
              <div className="flex w-full items-center justify-between ">
                <Typography varient="heading6">grand total:</Typography>
                <Typography varient="body">${grandTotal}</Typography>
              </div>
            </div>
            <Button varient="cart">proceed to checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
