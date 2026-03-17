"use client";
import { useState } from "react";
import Pagination from "@/components/admin/Pagination";
import DeleteModal from "@/components/admin/DeleteModal";
import { useGetBlogs, useDeleteBlog } from "@/hooks";
import showToast from "@/utils/showToast";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const [deleteItem, setDeleteItem] = useState(null);

  const { data, isLoading, isError } = useGetBlogs({
    page: currentPage,
    per_page: perPage,
  });

  const deleteMutation = useDeleteBlog();

  const blogs = data?.data || [];
  const meta = data?.meta || {};

  const handleDelete = () => {
    deleteMutation.mutate(deleteItem.id, {
      onSuccess: () => {
        showToast("success", "Blog deleted successfully!");
        setDeleteItem(null);
      },
      onError: (err) => {
        showToast("error", err?.response?.data?.message || "Failed to delete blog.");
      },
    });
  };

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Blog Posts</h2>
        <button className="btn-add">
          <i className="fa fa-plus"></i> Add New Post
        </button>
      </div>
      <div className="admin-table-wrapper">
        {isLoading ? (
          <p style={{ padding: "20px", textAlign: "center" }}>Loading...</p>
        ) : isError ? (
          <p style={{ padding: "20px", textAlign: "center", color: "red" }}>Failed to load blogs.</p>
        ) : (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ padding: "40px 20px", textAlign: "center", color: "#888" }}>No data found.</td>
                  </tr>
                ) : (
                  blogs.map((blog, index) => (
                    <tr key={blog.id}>
                      <td>{(currentPage - 1) * perPage + index + 1}</td>
                      <td>{blog.title}</td>
                      <td>{blog.author?.name || "-"}</td>
                      <td>{blog.category?.name || "-"}</td>
                      <td>{blog.created_at?.split("T")[0] || "-"}</td>
                      <td>
                        <span className={`badge-status ${blog.status === "published" ? "badge-published" : "badge-draft"}`}>
                          {blog.status}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          <button className="btn-edit" title="Edit">
                            <i className="fa fa-pencil"></i>
                          </button>
                          <button className="btn-delete" title="Delete" onClick={() => setDeleteItem(blog)}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {blogs.length > 0 && (
              <Pagination
                currentPage={meta.current_page || currentPage}
                totalPages={meta.last_page || 1}
                perPage={perPage}
                totalItems={meta.total || 0}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>

      {deleteItem && (
        <DeleteModal
          title="Blog"
          onClose={() => setDeleteItem(null)}
          onConfirm={handleDelete}
          isLoading={deleteMutation.isPending}
        />
      )}
    </div>
  );
}
