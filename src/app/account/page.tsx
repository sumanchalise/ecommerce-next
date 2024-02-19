import { BreadCrumb } from "@/components";
import {
  AddressIcon,
  FavoritesIcon,
  HandPenIcon,
  HistoryIcon,
  InformationIcon,
  LoveIcon,
  MailIcon,
  TimerSmallIcon,
} from "@/icons";
import Link from "next/link";

export default function Page() {
  const account = [
    {
      id: 1,
      name: "Information",
      icon: <InformationIcon />,
      infoicon: <MailIcon />,
      link: "/information",
    },
    {
      id: 2,
      name: "Address",
      icon: <AddressIcon />,
      infoicon: <HandPenIcon />,
      link: "/address",
    },
    {
      id: 3,
      name: "Favorites",
      icon: <FavoritesIcon />,
      infoicon: <LoveIcon />,
      link: "/favorites",
    },
    {
      id: 4,
      name: "Order History",
      icon: <HistoryIcon />,
      infoicon: <TimerSmallIcon />,
      link: "/history",
    },
  ];
  return (
    <div>
      <BreadCrumb title="Your Account" desc="" path="Home / Account" />
      <div className="grid grid-cols-2 items-center justify-center gap-10 px-10 py-14 md:grid-cols-4 lg:px-40 2xl:px-80">
        {account.map((account) => (
          <Link
            href={account.link}
            key={account.id}
            className=" group flex h-48 w-44 flex-col items-center justify-center gap-2 hover:text-secondary"
          >
            <div className="flex h-40 w-40 items-center justify-center border-2 border-dashed border-gray-250 p-10 group-hover:border-secondary">
              {account.icon}
            </div>
            <div className="flex items-center justify-center gap-1 object-contain">
              <div className="flex h-4 w-6 items-center">
                {account.infoicon}
              </div>
              <div className="font-Mulish text-lg">{account.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
