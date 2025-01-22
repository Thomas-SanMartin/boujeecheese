"use client";

import { SessionProvider } from "next-auth/react";
import Navigation from "./Navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Navigation />
      {children}
    </SessionProvider>
  );
}
