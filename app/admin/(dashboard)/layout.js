import Sidebar from "@/components/admin/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
