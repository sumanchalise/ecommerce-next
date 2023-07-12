import {
  ArrowIcon,
  BelgiumFlagIcon,
  EuIcon,
  GermanyFlagIcon,
  MysteryBoxIcon,
  NetherlandFlagIcon,
  WorldwideIcon,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { Typography } from "./Typography";

export const AppFooter = () => {
  return (
    <div className="flex flex-col">
      <DeliverySection />
      <BrandSection />
      <FooterSection />
    </div>
  );
};

const DeliverySection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-cream py-16">
      <Typography varient="heading3">Delivery price</Typography>
      <Typography varient="body">
        We ship our products to most countries in the World
      </Typography>
      <div className="flex flex-col items-center justify-center gap-20 px-5 pt-12 text-center font-Mulish md:flex-row">
        <div className="flex flex-col gap-2 px-3">
          <div className="flex items-center justify-center gap-5">
            <div className="h-12 w-16">
              <BelgiumFlagIcon />
            </div>
            <div className="h-12 w-16">
              <NetherlandFlagIcon />
            </div>
            <div className="h-12 w-16">
              <GermanyFlagIcon />
            </div>
          </div>
          <Typography varient="body"> Belgium, Netherlands, Germany</Typography>
          <Typography varient="heading4">$4.95</Typography>
          <Typography varient="body" color="sky">
            FREE from $90
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-12">
          <div className="flex h-12 w-20">
            <EuIcon />
          </div>
          <Typography varient="body">European Union</Typography>
          <Typography varient="heading4">$9.95</Typography>
          <Typography varient="body" color="sky">
            FREE from $150
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-10">
          <div className="h-12 w-20 p-1">
            <WorldwideIcon />
          </div>
          <Typography varient="body">Worldwide</Typography>
          <Typography varient="heading4">$24</Typography>
          <Typography varient="body" color="sky">
            FREE from $200
          </Typography>
        </div>
      </div>
    </div>
  );
};

const BrandSection = () => {
  const brands = [
    { id: "1", alt: "brand1", image: "/assets/images/brand1.png" },
    { id: "2", alt: "brand2", image: "/assets/images/brand2.png" },
    { id: "3", alt: "brand3", image: "/assets/images/brand3.png" },
    { id: "4", alt: "brand4", image: "/assets/images/brand4.png" },
    { id: "5", alt: "brand5", image: "/assets/images/brand5.png" },
    { id: "6", alt: "brand6", image: "/assets/images/brand6.png" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-darkblue py-8 transition-colors duration-700 ease-linear hover:bg-secondary">
      <Typography varient="heading6" className="text-white">
        our most valuable brands
      </Typography>
      <div className="flex items-center justify-center gap-2 pb-10 pt-3 md:gap-5 lg:gap-20 xl:gap-32">
        {brands?.map((brand, id) => (
          <div key={id} className="relative h-12 w-14 md:h-20 md:w-24">
            <Image
              src={brand.image}
              fill
              alt={brand.alt}
              sizes="(max-width: 768px) 100vw"
              className="object-contain"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterSection = () => {
  const about = [
    { id: "1", title: "Specials", link: "#" },
    { id: "2", title: "New Products", link: "#" },
    { id: "3", title: "Best Sellers", link: "#" },
    { id: "4", title: "Contact Us", link: "#" },
    { id: "5", title: "About us", link: "#" },
    { id: "6", title: "Conditions of Use", link: "#" },
    { id: "7", title: "Shipping and Returns", link: "#" },
    { id: "8", title: "FAQ", link: "#" },
  ];
  const shop = [
    { id: "1", title: "Wraps", link: "/wraps" },
    { id: "2", title: "Carriers", link: "#" },
    { id: "3", title: "Accessories", link: "#" },
    { id: "4", title: "For You", link: "#" },
    { id: "5", title: "Kids", link: "#" },
    { id: "6", title: "Sale", link: "#" },
    { id: "7", title: "New", link: "#" },
  ];
  return (
    <div className="w-full divide-y divide-gray-300 px-5 lg:px-32 2xl:px-80">
      <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-3">
        <div>
          <Typography varient="heading6">about</Typography>
          <h4 className="flex flex-col pt-1">
            {about.map((about, id) => (
              <ul key={id}>
                <li>
                  <Link
                    href={about.link}
                    className="font-Mulish text-base font-normal capitalize leading-7 hover:text-secondary"
                  >
                    {about.title}
                  </Link>
                </li>
              </ul>
            ))}
          </h4>
        </div>
        <div>
          <Typography varient="heading6">shop</Typography>
          <h4 className="flex flex-col pt-1">
            {shop.map((shop, id) => (
              <ul key={id}>
                <li>
                  <Link
                    href={shop.link}
                    className="font-Mulish text-base font-normal capitalize leading-7 hover:text-secondary"
                  >
                    {shop.title}
                  </Link>
                </li>
              </ul>
            ))}
          </h4>
        </div>
        <div className="col-span-2 flex flex-col gap-7 md:col-span-1">
          <Typography varient="heading6">Join the SFB Community</Typography>
          <Button varient="footer">Sign Up for Newsletters</Button>

          <div className="flex flex-col">
            <Link
              href="/mysterybox"
              className="flex items-center gap-3 hover:text-secondary"
            >
              <div className="h-10 w-7">
                <MysteryBoxIcon />
              </div>
              <Typography varient="heading6">try our mystery box</Typography>
              <div className="h-3 w-5">
                <ArrowIcon />
              </div>
            </Link>
            <Typography
              varient="body"
              className="max-w-xs pl-10 font-light leading-6"
            >
              We surprise you with a box that will definitely be a match for
              you.
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between py-3 md:flex-row">
        <div className="relative h-16 w-96">
          <Image
            src="/assets/images/Visa.png"
            fill
            alt="Visa Card"
            sizes="(max-width: 768px) 100vw"
            className="object-contain"
            quality={100}
          />
        </div>
        <div className="relative h-10 w-64">
          <Image
            src="/assets/images/Visa2.png"
            fill
            alt="Visa Card"
            sizes="(max-width: 768px) 100vw"
            className="object-contain"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};
