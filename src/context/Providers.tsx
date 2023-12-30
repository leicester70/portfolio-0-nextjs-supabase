"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import dotenv from "dotenv";
import { createContext } from "react";
import { Session } from "@supabase/auth-helpers-nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}
export const SessionContext = createContext<Session | null>(null);

export function Providers({ children }: Props) {
  // session context here too (not best practices?)
  dotenv.config();
  return (
    <>
      <Provider store={store}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemesProvider>
        </NextUIProvider>
        <ToastContainer />
      </Provider>
    </>
  );
}
