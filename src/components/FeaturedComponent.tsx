import { ArrowIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export const FeaturedComponent = () => {
  return (
    <div>
      <div className="flex flex-col-reverse items-center justify-center gap-5 bg-cream py-14 text-[#2B2B2B] md:flex-row md:px-5 lg:gap-20 xl:gap-52">
        <div className="flex w-full items-center justify-center md:w-1/2 md:justify-end">
          <div className="flex max-w-md flex-col justify-center gap-5 px-10 md:px-0">
            <h2 className="max-w-lg font-JosefinSans text-4xl font-semibold xl:text-5xl">
              Find your perfect baby carrier!
            </h2>
            <p className="max-w-sm font-Mulish text-lg lg:max-w-md">
              Babywearing is an amazing parenting tool but it can be
              overwhelming as a first time parent or caregiver. Our aim is to
              make your babywearing journey easy and enjoyable!
            </p>
            <Link href="#" className="flex items-center gap-3">
              <div className="font-JosefinSans text-sm font-bold uppercase ">
                Shop all products
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-sky">
                <div className="h-3 w-5 text-white">
                  <ArrowIcon />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-[440px] w-full md:max-w-xl xl:max-w-2xl">
            <div className="relative h-[440px]">
              <Image
                src="/assets/images/image6.png"
                alt="Featured Image"
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 bg-darkblue py-14 text-white md:flex-row md:px-5 lg:gap-20 xl:gap-52  xl:py-0">
        <div className="h-[440px] w-full md:max-w-md xl:h-full xl:w-[440px]">
          <div className="relative h-[440px] xl:h-[550px]">
            <Image
              src="/assets/images/image7.png"
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
    </div>
  );
};
