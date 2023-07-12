import {
  FeaturedComponent,
  FollowUsFacebook,
  InterestedOn,
} from "@/components";

export default function page() {
  return (
    <div>
      <FeaturedComponent />
      <InterestedOn>you might be interested on</InterestedOn>
      <FollowUsSection />
    </div>
  );
}

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
