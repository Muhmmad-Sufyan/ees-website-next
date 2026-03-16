"use client";

import Sidebar from "@/components/admin/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-wrapper">
      {/* Mobile Top Navbar */}
      <div className="admin-mobile-navbar">
        <h5>Admin Panel</h5>
        <button
          className="admin-menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className={`fa ${sidebarOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <main className="admin-main">{children}</main>
    </div>
  );
}
