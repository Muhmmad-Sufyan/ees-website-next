"use client";
import { useRouter, useParams } from "next/navigation";
import { useGetBlog } from "@/hooks";

export default function ViewBlogPage() {
  const router = useRouter();
  const { id } = useParams();
  const { data: blogData, isLoading } = useGetBlog(id);
  const blog = blogData?.data;

  if (isLoading) {
    return (
      <div className="admin-content">
        <p style={{ padding: "40px", textAlign: "center" }}>Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="admin-content">
        <p style={{ padding: "40px", textAlign: "center", color: "#888" }}>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="admin-content blog-view-page">
      <div className="admin-table-header">
        <h2>View Blog</h2>
        <button className="btn-add" onClick={() => router.push("/admin/blog")}>
          <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>

      <div className="blog-view-wrapper">
        <div className="blog-view-card">
          {blog.banner_image_url && (
            <div className="blog-view-banner">
              <img src={blog.banner_image_url} alt={blog.title} />
            </div>
          )}

          <div className="blog-view-body">
            <h1 className="blog-view-title">{blog.title}</h1>
            <div className="blog-view-meta">
              <span className="blog-view-meta-item">
                <i className="fa fa-user"></i> {blog.author?.name || "-"}
              </span>
              <span className="blog-view-meta-item">
                <i className="fa fa-calendar"></i> {blog.published_at?.split("T")[0] || blog.created_at?.split("T")[0] || "-"}
              </span>
              <span className={`badge-status ${blog.status === "published" ? "badge-published" : "badge-draft"}`}>
                {blog.status}
              </span>
            </div>

            <div className="blog-view-info-row">
              <div className="blog-view-info-item">
                <span className="blog-view-info-label">Slug</span>
                <span className="blog-view-info-value">{blog.slug}</span>
              </div>
              <div className="blog-view-info-item">
                <span className="blog-view-info-label">Meta Title</span>
                <span className="blog-view-info-value">{blog.meta_title || "-"}</span>
              </div>
              <div className="blog-view-info-item">
                <span className="blog-view-info-label">Meta Description</span>
                <span className="blog-view-info-value">{blog.meta_description || "-"}</span>
              </div>
            </div>

            <div className="blog-view-info-row">
              <div className="blog-view-info-item">
                <span className="blog-view-info-label">Categories</span>
                <div className="blog-view-tags">
                  {blog.categories?.length > 0
                    ? blog.categories.map((cat) => (
                        <span key={cat.id} className="blog-view-tag blog-view-tag-category">{cat.name}</span>
                      ))
                    : <span className="blog-view-info-value">-</span>}
                </div>
              </div>
              <div className="blog-view-info-item">
                <span className="blog-view-info-label">Tags</span>
                <div className="blog-view-tags">
                  {blog.tags?.length > 0
                    ? blog.tags.map((tag) => (
                        <span key={tag.id} className="blog-view-tag">{tag.name}</span>
                      ))
                    : <span className="blog-view-info-value">-</span>}
                </div>
              </div>
            </div>

            <div className="blog-view-divider"></div>

            <div className="blog-view-content-section">
              <h3>Content</h3>
              <div
                className="blog-view-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
