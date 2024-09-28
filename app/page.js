"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("custom", {
      username,
      password,
      redirect: false,
    });

    if (result.error) {      
      console.log(result.error);
    } else {
     
      router.push("/home");
    }
  };

  return (
    <>
  
      <div className="flex flex-col items-center justify-center h-screen">
        <Image src={logo} width={500}/>
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-black text-3xl text-center mb-3">Login</h1>
          <div>
            <label
              for="username"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                name="username"
                id="username"
                className="block w-full rounded-md border-0 py-3 font-xl pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div>
          <label
              for="username"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Password
            </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            className="block w-full rounded-md border-0 py-3 font-xl pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="***********"
          />
          </div>
          <button
            type="submit"
            className="rounded-full bg-orange-500 text-white px-2.5 mt-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-500"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
