"use client";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, categories }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header categories={categories} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
