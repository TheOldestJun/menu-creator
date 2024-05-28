"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/store";

export default function Providers({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <Provider store={storeRef.current}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
