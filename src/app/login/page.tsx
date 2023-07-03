import { BreadCrumb } from "@/components";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <BreadCrumb title="Sign-In" desc="" path="Home / Login" />
      <div className="flex flex-col gap-10 py-14">
        <div className="flex flex-col items-center justify-center gap-10 px-2 ">
          <div className="flex flex-col items-center justify-center  font-JosefinSans text-lg uppercase">
            sign-in your account:
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 px-5">
          <div className="flex w-full flex-col items-center justify-start gap-5 text-middlegray lg:justify-center">
            <div className="flex flex-col items-start  gap-5 lg:flex-row  lg:items-center ">
              <label className="w-32 text-lg">Email:</label>
              <input
                type="email"
                placeholder="Email"
                required
                className=" w-96 rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none  lg:w-[530px]"
              />
            </div>
            <div className="flex flex-col items-start  gap-5 lg:flex-row lg:items-center ">
              <label className="w-32 text-lg">Password:</label>
              <input
                type="password"
                placeholder="Enter Password"
                required
                className=" w-96 rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none  lg:w-[530px]"
              />
            </div>
          </div>
          <div className="flex w-96 flex-col items-center justify-center gap-3">
            <button className="font-mulish w-full rounded-full bg-yellow py-4 text-base font-medium uppercase tracking-wider">
              sign in
            </button>
            <Link href="#" className="text-lg text-sky underline">
              Forget your password?
            </Link>
            <div className="flex items-center justify-center gap-2 pt-4 font-JosefinSans">
              <div className="text-base uppercase">no account?</div>
              <Link href="/signup" className="text-lg text-sky underline">
                Create new!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
