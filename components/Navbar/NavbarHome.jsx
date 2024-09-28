import React from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Image from "next/image";

const NavbarHome = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-20">
          <form class="max-w-sm mx-auto">
            <label
              for="email-address-icon"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  {" "}
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>{" "}
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/portofolio"
            className="px-6 py-3 font-bold rounded-full text-white bg-green-500 hover:bg-green-600 transition duration-300"
          >
            My Portofolio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
