import React from "react";
import logo from "@/public/images/logo.png"
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
         
          <Link
            href="/login"
            className="px-6 py-3 font-bold rounded-full text-white bg-green-500 hover:bg-green-600 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;