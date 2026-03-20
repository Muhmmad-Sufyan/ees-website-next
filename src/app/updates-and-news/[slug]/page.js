"use client";

import { use } from "react";
import Link from "next/link";
import { useGetPublicBlogBySlug } from "@/hooks";
import "@/styles/updates-news.css";

function formatDate(dateStr) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default function BlogDetailPage({ params }) {
  const { slug } = use(params);
  const { data, isLoading } = useGetPublicBlogBySlug(slug);
  const blog = data?.data || null;

  if (isLoading) {
    return (
      <div className="blog-detail-section">
        <div className="blog-detail-hero">
          <div className="news-skeleton-img" style={{ height: "100%" }}></div>
        </div>
        <div className="container">
          <div className="blog-detail-container">
            <div className="blog-detail-card">
              <div style={{ padding: 40 }}>
                <div className="news-skeleton-text" style={{ width: "70%", height: 28, marginBottom: 20 }}></div>
                <div className="news-skeleton-text" style={{ width: "40%", height: 14, marginBottom: 30 }}></div>
                <div className="news-skeleton-text" style={{ width: "100%", height: 14, marginBottom: 10 }}></div>
                <div className="news-skeleton-text" style={{ width: "100%", height: 14, marginBottom: 10 }}></div>
                <div className="news-skeleton-text" style={{ width: "80%", height: 14, marginBottom: 10 }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail-section">
        <div style={{ padding: "120px 0", textAlign: "center" }}>
          <div className="news-empty">
            <i className="fa fa-exclamation-circle"></i>
            <h3>Blog not found</h3>
            <p>The article you are looking for does not exist.</p>
          </div>
          <Link href="/updates-and-news" className="blog-detail-back">
            <i className="fa fa-arrow-left"></i> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-section">
      {/* Hero Image */}
      <div className="blog-detail-hero">
        <img src={blog.banner_image_url} alt={blog.title} />
        <div className="blog-detail-hero-overlay"></div>
      </div>

      {/* Content Card */}
      <div className="container">
        <div className="blog-detail-container">
          <div className="blog-detail-card">
            {/* Header */}
            <div className="blog-detail-header">
              <ul className="blog-detail-breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li>
                  <Link href="/updates-and-news">News</Link>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>
                </li>
                <li className="active">{blog.title}</li>
              </ul>

              <h1 className="blog-detail-title">{blog.title}</h1>

              <div className="blog-detail-meta">
                {blog.author && (
                  <span className="blog-detail-meta-item">
                    <i className="fa fa-user"></i>
                    <strong>{blog.author.name}</strong>
                  </span>
                )}
                <span className="blog-detail-meta-item">
                  <i className="fa fa-calendar-o"></i>
                  {formatDate(blog.published_at)}
                </span>
                {blog.categories?.length > 0 && (
                  <div className="blog-detail-categories">
                    {blog.categories.map((cat) => (
                      <span className="blog-detail-category" key={cat.id}>
                        {cat.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div
              className="blog-detail-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="blog-detail-tags">
                <span className="blog-detail-tags-label">Tags:</span>
                {blog.tags.map((tag) => (
                  <span className="blog-detail-tag" key={tag.id}>
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <Link href="/updates-and-news" className="blog-detail-back">
            <i className="fa fa-arrow-left"></i> Back to News
          </Link>
        </div>
      </div>
    </div>
  );
}
