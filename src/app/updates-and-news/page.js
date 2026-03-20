"use client";

import { useState } from "react";
import Link from "next/link";
import { useGetPublicBlogs } from "@/hooks";
import "@/styles/home.css";
import "@/styles/updates-news.css";

function formatDate(dateStr) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default function UpdatesAndNews() {
  const [page, setPage] = useState(1);
  const perPage = 8;

  const { data, isLoading } = useGetPublicBlogs({ page, per_page: perPage });
  const blogs = data?.data || [];
  const meta = data?.meta || {};
  const totalPages = meta.last_page || 1;
  const total = meta.total || 0;

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="news-hero">
        <div className="container">
          <div className="news-hero-content">
            <span className="news-hero-label">Stay Informed</span>
            <h1 className="news-hero-title">
              Updates & <em>News</em>
            </h1>
            <p className="news-hero-desc">
              Stay up to date with the latest news, insights, and updates from
              Ehya Education. Explore our stories of impact and innovation.
            </p>
            <ul className="news-hero-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Updates & News</li>
            </ul>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="latest-news-section news-grid-section">
        <div className="container">
          <div className="news-grid-header">
            <h2>
              Latest <em>Updates</em> & News
            </h2>
            {total > 0 && (
              <span className="news-grid-count">
                Showing {(page - 1) * perPage + 1}-
                {Math.min(page * perPage, total)} of {total} updates
              </span>
            )}
          </div>

          <div className="row">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div className="col-lg-3 col-md-6" key={i}>
                    <div className="latest-news-card">
                      <div className="latest-news-card-img skeleton-img"></div>
                      <div className="latest-news-card-body">
                        <div className="skeleton-text" style={{ width: "60%", height: 12, marginBottom: 10 }}></div>
                        <div className="skeleton-text" style={{ width: "90%", height: 16, marginBottom: 8 }}></div>
                        <div className="skeleton-text" style={{ width: "40%", height: 12 }}></div>
                      </div>
                    </div>
                  </div>
                ))
              : blogs.length === 0
              ? (
                <div className="col-12">
                  <div className="news-empty">
                    <i className="fa fa-newspaper-o"></i>
                    <h3>No updates yet</h3>
                    <p>Check back later for updates and news.</p>
                  </div>
                </div>
              )
              : blogs.map((blog) => (
                  <div className="col-lg-3 col-md-6" key={blog.id}>
                    <div className="latest-news-card">
                      <div className="latest-news-card-img">
                        <img src={blog.banner_image_url} alt={blog.title} />
                        {blog.categories?.[0] && (
                          <span
                            className="latest-news-badge"
                            style={{ backgroundColor: "#075154" }}
                          >
                            {blog.categories[0].name}
                          </span>
                        )}
                      </div>
                      <div className="latest-news-card-body">
                        <p className="latest-news-date">
                          <i className="fa fa-calendar-o"></i>{" "}
                          {formatDate(blog.published_at)}
                        </p>
                        <h4 className="latest-news-card-title">{blog.title}</h4>
                        <Link
                          href={`/updates-and-news/${blog.slug}`}
                          className="latest-news-read-more"
                        >
                          READ MORE <i className="fa fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="news-pagination">
              <button
                className={`news-pagination-btn ${page === 1 ? "disabled" : ""}`}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                <i className="fa fa-angle-left"></i>
              </button>

              {getPageNumbers().map((p, i) =>
                p === "..." ? (
                  <span className="news-pagination-dots" key={`dots-${i}`}>
                    ...
                  </span>
                ) : (
                  <button
                    key={p}
                    className={`news-pagination-btn ${page === p ? "active" : ""}`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                className={`news-pagination-btn ${page === totalPages ? "disabled" : ""}`}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                <i className="fa fa-angle-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
