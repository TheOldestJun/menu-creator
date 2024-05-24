import "./globals.css";
import Providers from "./providers";
import Layout from "./components/layout";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Че бум хавать?",
  description: "Генератор меню на неделю",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
