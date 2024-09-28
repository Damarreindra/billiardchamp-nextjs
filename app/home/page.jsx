"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import ball from "@/public/images/balls.png";
import Carousel from "@/components/Carousel/Carousel";
import Menu from "@/components/Menu/Menu";
import { useSelector } from "react-redux";
import { getAllUsers } from "@/lib/redux/slices/userSlice";
import { useDispatch } from "react-redux";

function Home() {
  const { allUsers,status, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers()); 
  }, [dispatch]);


  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  return (
      <div className="flex flex-col flex-wrap justify-center gap-6 max-w-6xl mx-auto mt-5">
        <Image src={logo} width={350} className="relative mx-auto z-10" />
        <Carousel users={allUsers}/>
        <Menu/>
  
      </div>
  );
}

export default Home;
