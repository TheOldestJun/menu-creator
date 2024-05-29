"use client";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

export default function Layout({ children, categories }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header categories={categories} />

      <main className="flex-grow">
        <div className="fixed inset-0 -z-10">
          <Image
            src="/dishes/background.webp"
            alt="background image"
            width="1920"
            height="1272"
            className="w-full h-full object-cover"
          />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
