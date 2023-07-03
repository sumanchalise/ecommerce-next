import { BreadCrumb } from "@/components";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <BreadCrumb
        title="Create an Account"
        desc=""
        path="Home / create an account"
      />
      <div className="flex flex-col items-center justify-center gap-10 px-2 py-14">
        <div className="flex flex-col items-center justify-center  font-JosefinSans text-lg uppercase">
          create your own account:
        </div>
        <div className="flex w-full flex-col items-center justify-start gap-5 text-middlegray lg:justify-center">
          <div className="flex flex-col items-start  gap-5 py-2 lg:flex-row lg:items-center">
            <label className="w-32 text-lg">Social title:</label>
            <div className="flex w-96 items-start gap-5 lg:w-[600px]">
              <div className="flex gap-2 text-lg">
                <input type="radio" value="Mr." name="social-title" />
                <span>Mr.</span>
              </div>
              <div className="flex gap-2 text-lg">
                <input type="radio" value="Ms." name="social-title" />
                <span>Ms.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            <label className="w-32 text-lg">First&nbsp;Name:</label>
            <input
              type="text"
              placeholder="First Name"
              required
              className=" w-96 rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none  lg:w-[600px]"
            />
          </div>

          <div className="flex flex-col items-start  gap-5 lg:flex-row lg:items-center ">
            <label className="w-32 text-lg">Last&nbsp;Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              required
              className=" w-96 rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none  lg:w-[600px]"
            />
          </div>
          <div className="flex flex-col items-start  gap-5 lg:flex-row  lg:items-center ">
            <label className="w-32 text-lg">Email:</label>
            <input
              type="email"
              placeholder="Email"
              required
              className=" w-96 rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none  lg:w-[600px]"
            />
          </div>
          <div className="flex flex-col items-start  gap-5 lg:flex-row lg:items-center ">
            <label className="w-32 text-lg">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              className=" w-96 rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none  lg:w-[600px]"
            />
          </div>
          <div className="flex flex-col items-start  gap-5 lg:flex-row lg:items-center ">
            <label className="w-32 text-lg">Birthdate:</label>
            <input
              type="date"
              placeholder="MM/DD/YYYY"
              required
              className=" w-96 rounded-md border-2 border-gray-300 px-3 py-2 leading-tight text-gray-700 focus:outline-none  lg:w-[600px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-8">
          <label>
            <input type="checkbox" className="mr-4 h-5 w-6" />
            Receive offers from our partners
          </label>
          <div className="flex flex-col gap-2">
            <label>
              <input type="checkbox" className="mr-4 h-5 w-6 " />
              Sign up for our newsletter
            </label>
            <div className="div max-w-md pl-10 text-xs">
              You may unsubscribe at any moment. For that purpose, please find
              contact into the legal notice
            </div>
          </div>
          <button className="font-mulish w-full rounded-full bg-yellow py-4 text-base font-medium uppercase tracking-wider">
            create an account
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 font-JosefinSans ">
          <div className="text-base uppercase">already have an account?</div>
          <Link href="/login" className="text-lg text-sky underline">
            log in!
          </Link>
        </div>
      </div>
    </div>
  );
}
