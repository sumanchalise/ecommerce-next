"use client";
import { BreadCrumb, Button } from "@/components";
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
      <div className="flex gap-4 px-5 py-7 pb-10 lg:px-20 2xl:px-40">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center justify-center divide-y divide-darkblue">
            <div className="flex items-center justify-center p-2 uppercase">
              <div className="w-[600px] ">product</div>
              <div className="flex w-32 justify-center ">price</div>
              <div className="flex w-32 justify-center ">qty</div>
              <div className="flex w-32 justify-center ">subtotal</div>
              <div className="flex w-32 justify-center " />
            </div>
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
                  <div className="flex items-start justify-center py-5">
                    <div className="w-[600px]">
                      <div className="flex gap-5">
                        <div className="relative h-48 w-32">
                          <Image
                            src={basket.image}
                            fill
                            alt="image"
                            sizes="(max-width: 768px) 100vw"
                            className="object-cover"
                          />
                        </div>
                        <div className=" flex flex-col gap-2">
                          <div>{basket.title}</div>
                          <div className="text-gray-500">
                            reference:{" "}
                            <span className="uppercase text-gray-600">
                              {basket.reference}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3">
                              <TickIcon />
                            </div>
                            {basket.type}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3">
                              <TickIcon />
                            </div>
                            {basket.length}
                          </div>
                          <div className="text-sky underline underline-offset-2">
                            {basket.extra}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center ">
                      <div className="flex w-32 justify-center">
                        ${basket.price}
                      </div>
                      <div className="flex w-32 items-center justify-between border-2 border-darkgray px-4 py-2">
                        <div
                          className="flex h-5 w-3 cursor-pointer items-center justify-center"
                          onClick={handleDecrease}
                        >
                          <MinusIcon />
                        </div>
                        {quantity}
                        <div
                          className="flex h-5 w-4 cursor-pointer items-center justify-center"
                          onClick={handleIncrease}
                        >
                          <PlusIcon />
                        </div>
                      </div>
                      <div className="flex w-32 justify-center">
                        ${finalPrice}
                      </div>
                      <div className="flex w-32 justify-center">
                        <div className="h-3 w-3 stroke-2">
                          <CrossIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr className=" w-full border-2" />
          </div>
          <Link href="#" className="w-fit">
            <Button varient="primary">continue shopping</Button>
          </Link>
        </div>
        <div className="flex">summery</div>
      </div>
    </div>
  );
}
