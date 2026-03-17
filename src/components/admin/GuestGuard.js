"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function GuestGuard({ children }) {
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (token) {
      router.replace("/admin");
    } else {
      setChecked(true);
    }
  }, [token, router]);

  if (!checked) return null;

  return <>{children}</>;
}
