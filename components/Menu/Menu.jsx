import React from "react";
import billiard from "@/public/images/billiard.png";
import history from "@/public/images/history.png";
import player from "@/public/images/player.png";
import podium from "@/public/images/podium.png";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  const menuItem = [
    { name: "Let's Play Some", image: billiard, link: "/add-game" },
    { name: "History", image: history, link: "/history" },
    { name: "Leaderboard", image: podium, link: "/leaderboard" },
    { name: "Add Player", image: player, link: "/add-player" },
  ];
  return (
    <>
      <div className="flex flex-col justify-center gap-4 p-5">
        {menuItem.map((item, index) => {
          return (
            <Link 
              href={item.link}
              key={index}
              className="flex border-0 shadow-2xl rounded  min-h-20 flex-row items-center"
            >
              <Image width={80} height={80} src={item.image} />
              <p className="font-extrabold ml-2 text-xl">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
