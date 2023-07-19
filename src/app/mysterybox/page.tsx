import {
  FeaturedComponent,
  FollowUsFacebook,
  InterestedOn,
} from "@/components";

export default function page() {
  return (
    <div>
      <Mysteryboxsection />
      <FeaturedComponent />
      <InterestedOn>you might be interested on</InterestedOn>
      <FollowUsSection />
    </div>
  );
}

const Mysteryboxsection = () => {
  return (
    <div className="flex bg-lightgray px-40 py-7">
      <div className="w-1/2 bg-red-500">image</div>
      <div className="w-1/2 bg-blue-500">
        <div className="div">a</div>
        <div className="div">v</div>
        <div className="div">b</div>
        <div className="div">n</div>
        <div className="div">m</div>
        <div className="div">b</div>
        <div className="div">a</div>
        <div className="div">h</div>
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
