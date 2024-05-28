"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ClientPage = () => {
  const component = useRef(null);
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
      <div className="fixed inset-0 -z-10">
        <Image
          src="/dishes/background.webp"
          alt="background image"
          width="1920"
          height="1272"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <Image
          src="/dishes/menu.webp"
          alt="background image"
          width="450"
          height="640"
          className="rounded-lg opacity-0 menu-animation fixed -z-8 mt-2 md:ml-[185px] mx-auto "
        />
      </div>
    </>
  );
};

export default ClientPage;
