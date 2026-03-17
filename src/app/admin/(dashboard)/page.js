"use client";
import { useGetDashboardStats } from "@/hooks";

export default function AdminDashboard() {
  const { data, isLoading } = useGetDashboardStats();
  const stats = data?.data || {};

  const cards = [
    { icon: "fa fa-file-text", label: "Total Blogs", count: stats.total_blogs ?? 0, color: "#2196f3" },
    { icon: "fa fa-folder", label: "Total Categories", count: stats.total_categories ?? 0, color: "#4caf50" },
    { icon: "fa fa-tags", label: "Total Tags", count: stats.total_tags ?? 0, color: "#ff9800" },
    { icon: "fa fa-users", label: "Total Authors", count: stats.total_authors ?? 0, color: "#9c27b0" },
  ];

  return (
    <div className="admin-content">
      <h2>Dashboard</h2>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="dashboard-card">
              <i className={card.icon} style={{ color: card.color }}></i>
              <h5>{card.label}</h5>
              <p>{isLoading ? "..." : card.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
