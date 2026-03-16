"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "@/store/StoreProvider";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <StoreProvider>{children}</StoreProvider>;
  }

  return (
    <StoreProvider>
      <Header />
      {children}
      <Footer />
    </StoreProvider>
  );
}
