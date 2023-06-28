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
      <h3 className="font-JosefinSans text-2xl">Delivery price</h3>
      <p className="font-Mulish text-base font-normal">
        We ship our products to most countries in the World
      </p>
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
          <p className="text-md pt-2 font-normal">
            Belgium, Netherlands, Germany
          </p>
          <h3 className="text-lg font-bold">$4.95</h3>
          <h4 className="text-base text-sky">FREE from $90</h4>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-12">
          <div className="flex h-12 w-20">
            <EuIcon />
          </div>
          <p className="text-md pt-2 font-normal">European Union</p>
          <h3 className="text-lg font-bold">$9.95</h3>
          <h4 className="text-base text-sky">FREE from $150</h4>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-10">
          <div className="h-12 w-20 p-1">
            <WorldwideIcon />
          </div>
          <p className="text-md pt-2 font-normal">Worldwide</p>
          <h3 className="text-lg font-bold">$24</h3>
          <h4 className="text-base text-sky">FREE from $200</h4>
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
    <div className="flex flex-col items-center justify-center gap-5 bg-darkblue py-8">
      <h2 className="font-JosefinSans text-base font-semibold uppercase text-white">
        Our most valuable brands
      </h2>
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
    { id: "1", title: "Wraps", link: "#" },
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
          <h3 className="font-JosefinSans text-base font-semibold uppercase">
            About
          </h3>
          <h4 className="flex flex-col pt-1">
            {about.map((about, id) => (
              <ul key={id}>
                <li>
                  <Link
                    href={about.link}
                    className="font-Mulish text-base font-normal capitalize leading-7"
                  >
                    {about.title}
                  </Link>
                </li>
              </ul>
            ))}
          </h4>
        </div>
        <div>
          <h3 className="font-JosefinSans text-base font-semibold uppercase">
            shop
          </h3>
          <h4 className="flex flex-col pt-1">
            {shop.map((shop, id) => (
              <ul key={id}>
                <li>
                  <Link
                    href={shop.link}
                    className="font-Mulish text-base font-normal capitalize leading-7"
                  >
                    {shop.title}
                  </Link>
                </li>
              </ul>
            ))}
          </h4>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="pb-8 font-JosefinSans text-base font-semibold uppercase">
            Join the SFB Community
          </h3>
          <button className="rounded-full bg-blue-500 px-10 py-3 font-bold uppercase text-white">
            Sign Up for Newsletters
          </button>

          <div className="flex items-center gap-3 pt-7">
            <div className="h-7 w-7">
              <MysteryBoxIcon />
            </div>
            <h4 className="font-Mulish text-sm font-bold uppercase">
              try our mistery box
            </h4>
            <div className="h-3 w-5">
              <ArrowIcon />
            </div>
          </div>
          <p className="max-w-xs pl-10 pt-2 font-Mulish text-sm font-normal leading-6">
            We surprise you with a box that will definitely be a match for you.
          </p>
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
