import { FollowUsFacebook } from "@/components";
import { ArrowIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Mysteryboxsection />
      {/* <FeaturedComponent />
      <InterestedOn>you might be interested on</InterestedOn>
      <FollowUsSection /> */}
    </div>
  );
}

const Mysteryboxsection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-red-500 py-14 md:flex-row md:px-5 lg:gap-20">
      <div className="h-[440px] w-full md:max-w-lg xl:h-full">
        <div className="relative h-[440px] lg:w-[526px] xl:h-[790px]">
          <Image
            src="/assets/images/MysteryBox.png"
            alt="Featured Image"
            fill
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
      <div className="flex max-w-md flex-col justify-center gap-5 px-10 md:px-0">
        <h2 className="max-w-lg font-JosefinSans text-4xl font-semibold xl:text-5xl">
          Parents know parenthood best
        </h2>
        <p className="max-w-sm font-Mulish text-lg lg:max-w-md">
          We&apos;re parents too, and we know how overwhelming it can feel to
          shop for baby products. That&apos;s why SFB was born—to create a
          no-brainer shopping experience for the next generation of parents
          where you can buy quality products at a price that actually makes
          sense.
        </p>
        <Link href="#" className="flex items-center gap-3">
          <h3 className="font-JosefinSans text-sm font-bold uppercase ">
            Shop all products
          </h3>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-yellow">
            <div className="h-3 w-5 text-[#0E3C30]">
              <ArrowIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const FollowUsSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center py-14 text-center font-Mulish text-3xl md:text-4xl">
        Follow us on Facebook @SlingsForBabies
      </div>
      <FollowUsFacebook />
    </div>
  );
};
