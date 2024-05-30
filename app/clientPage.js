"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Plate from "./components/mainMenu/Plate";
import Menu from "./components/mainMenu/Menu";
import Back from "./components/shop-list/Back";
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
        opacity: 1,
        duration: 2,
        x: 0,
        ease: "power4.out",
      }
    );
    tl.fromTo(
      ".shop-animation",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 0.8,
        duration: 2,
        x: 0,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 container mx-auto gap-6 mt-6">
        <div className="menu-animation w-full h-full flex items-center justify-center opacity-0">
          <Image
            src="/dishes/menu.webp"
            alt="plate background image"
            width="450"
            height="640"
            className="rounded-3xl"
          />
        </div>

        <div className="shop-animation w-full h-full flex justify-center relative opacity-0">
          <div className="container bg-[url('/dishes/shop-list-bg.webp')] rounded-3xl mx-auto max-w-[450px]">
            <Typography className="text-3xl font-caveat text-center text-black">
              Список покупок
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientPage;
