"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Pad from "./components/mainMenu/Pad";
import ShopList from "./components/shop-list/ShopList";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const ClientPage = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".menu-animation",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 0.8,
        duration: 2,
        x: 0,
        ease: "back.out",
      }
    );
    tl.fromTo(
      ".shop-animation",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 0.8,
        duration: 1,
        x: 0,
        ease: "back.out",
      }
    );
  }, []);
  return (
    <>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 container mx-auto gap-6 mt-6">
        <Pad className="menu-animation w-full h-full flex items-center justify-center opacity-0 relative" />
        <ShopList className="shop-animation w-full h-full flex justify-center relative opacity-0" />
      </div>
    </>
  );
};

export default ClientPage;
