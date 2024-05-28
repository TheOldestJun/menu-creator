"use client";
import Image from "next/image";

const ClientPage = () => {
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
      <div className="fixed inset-0 -z-8 mt-[90px] ml-[185px]">
        <Image
          src="/dishes/menu.webp"
          alt="background image"
          width="450"
          height="640"
          className="rounded-lg"
        />
      </div>
    </>
  );
};

export default ClientPage;
