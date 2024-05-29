"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import Plate from "./components/menu/Plate";
import Menu from "./components/menu/Menu";

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
  }, []);
  return (
    <>
      <Plate className="rounded-lg opacity-0 menu-animation fixed -z-8 mt-2 md:ml-[185px] mx-auto ">
        <Menu />
      </Plate>
    </>
  );
};

export default ClientPage;
