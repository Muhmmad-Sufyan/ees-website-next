"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "fa-dashboard" },
  { label: "Blog", href: "/admin/blog", icon: "fa-pencil-square-o" },
  { label: "Categories", href: "/admin/categories", icon: "fa-folder-open" },
  { label: "Tags", href: "/admin/tags", icon: "fa-tags" },
  { label: "Authors", href: "/admin/authors", icon: "fa-user" },
];

export default function Sidebar({ sidebarOpen, closeSidebar }) {
  const pathname = usePathname();

  return (
    <>
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
