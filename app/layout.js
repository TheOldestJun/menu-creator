import "./globals.css";
import Providers from "./providers";
import Layout from "./components/layout";
import prisma from "@/prisma";

import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: "400",
  subsets: ["cyrillic", "cyrillic-ext"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "Че бум хавать?",
  description: "Генератор меню на неделю",
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
};

const getProps = async () => {
  try {
    const categories = await prisma.category.findMany();
    return { categories };
  } catch (error) {
    console.log(error);
  }
};

export default async function RootLayout({ children }) {
  const { categories } = await getProps();
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${caveat.variable} font-caveat`}>
        <Providers>
          <Layout categories={categories}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
