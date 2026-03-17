"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "@/store/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <StoreProvider>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </StoreProvider>
    );
  }

  return (
    <StoreProvider>
      <Header />
      {children}
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </StoreProvider>
  );
}
