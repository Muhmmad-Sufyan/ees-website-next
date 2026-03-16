"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "fa-dashboard" },
  { label: "Blog", href: "/admin/blog", icon: "fa-pencil-square-o" },
  { label: "Categories", href: "/admin/categories", icon: "fa-folder-open" },
  { label: "Tags", href: "/admin/tags", icon: "fa-tags" },
  { label: "Authors", href: "/admin/authors", icon: "fa-user" },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="admin-mobile-navbar">
        <h5>Admin Panel</h5>
        <button className="admin-menu-btn" onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h4>EHYA Admin</h4>
          <button className="sidebar-close-btn" onClick={closeSidebar}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                onClick={closeSidebar}
              >
                <i className={`fa ${item.icon}`}></i>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/admin/login" onClick={closeSidebar}>
              <i className="fa fa-sign-out"></i>
              Logout
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
