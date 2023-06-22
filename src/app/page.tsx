import { PlantStarIcon, ScrollIcon, SecurityIcon } from "@/icons";

export default function page() {
  return (
    <div className="">
      <HeroSection />
      <WorkSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="h-[80vh] bg-red-500">
      <div>hello</div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center bg-[#F8F2EC] px-5 py-10 text-center md:grid-cols-2 md:px-20 lg:grid-cols-3 lg:px-48">
      <div className="flex max-w-xs flex-col items-center justify-center gap-3">
        <div className="h-20 w-20">
          <PlantStarIcon />
        </div>
        <div className="font-JosefinSans text-lg font-bold uppercase">
          BEST PRODUCTS WORLDWIDE
        </div>
        <div className="font-Mulish text-base">
          We know what to look for when we select baby carriers for our online
          store.
        </div>
      </div>
      <div className="flex max-w-xs flex-col items-center justify-center gap-3">
        <div className="h-20 w-20">
          <ScrollIcon />
        </div>
        <div className="font-JosefinSans text-lg font-bold uppercase">
          BREATHABLE, STYLISH MATERIALS
        </div>
        <div className="font-Mulish text-base">
          It’s made from machine-washable, breathable air mesh, and comes in
          colors you actually want to wear.
        </div>
      </div>
      <div className="flex max-w-xs flex-col items-center justify-center gap-3">
        <div className="h-20 w-20">
          <SecurityIcon />
        </div>
        <div className="font-JosefinSans text-lg font-bold uppercase">
          SECURE CHECKOUT
        </div>
        <div className="font-Mulish text-base">
          We accept PayPal, MasterCard, Visa, and et al.: names you know and
          trust!
        </div>
      </div>
    </div>
  );
};
