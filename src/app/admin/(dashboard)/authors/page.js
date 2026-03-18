"use client";
import { useState } from "react";
import Pagination from "@/components/admin/Pagination";
import DeleteModal from "@/components/admin/DeleteModal";
import AddAuthorModal from "@/components/admin/AddAuthorModal";
import EditAuthorModal from "@/components/admin/EditAuthorModal";
import { useGetAuthors, useDeleteAuthor } from "@/hooks";
import showToast from "@/utils/showToast";

export default function AuthorsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const [showAddModal, setShowAddModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const { data, isLoading, isError } = useGetAuthors({
    page: currentPage,
    per_page: perPage,
  });

  const deleteMutation = useDeleteAuthor();

  const authors = data?.data || [];
  const meta = data?.meta || {};

  const handleDelete = () => {
    deleteMutation.mutate(deleteItem.id, {
      onSuccess: () => {
        showToast("success", "Author deleted successfully!");
        setDeleteItem(null);
      },
      onError: (err) => {
        showToast("error", err?.response?.data?.message || "Failed to delete author.");
      },
    });
  };

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Authors</h2>
        <button className="btn-add" onClick={() => setShowAddModal(true)}>
          <i className="fa fa-plus"></i> Add Author
        </button>
      </div>
      <div className="admin-table-wrapper">
        {isError ? (
          <p style={{ padding: "20px", textAlign: "center", color: "red" }}>Failed to load authors.</p>
        ) : (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Bio</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i}>
                      {Array.from({ length: 6 }).map((_, j) => (
                        <td key={j}><div className="skeleton-cell"></div></td>
                      ))}
                    </tr>
                  ))
                ) : authors.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ padding: "40px 20px", textAlign: "center", color: "#888" }}>No data found.</td>
                  </tr>
                ) : (
                  authors.map((author, index) => (
                    <tr key={author.id}>
                      <td>{(currentPage - 1) * perPage + index + 1}</td>
                      <td>
                        <div className="author-name-cell">
                          {author.profile_image_url ? (
                            <img src={author.profile_image_url} alt={author.name} className="author-avatar" />
                          ) : (
                            <div className="author-avatar-placeholder">
                              <i className="fa fa-user"></i>
                            </div>
                          )}
                          {author.name}
                        </div>
                      </td>
                      <td>{author.slug}</td>
                      <td><span className="text-truncate-cell">{author.bio || "-"}</span></td>
                      <td>
                        <span className={`badge-status ${author.is_active ? "badge-active" : "badge-inactive"}`}>
                          {author.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          <button className="btn-edit" title="Edit" onClick={() => setEditItem(author)}>
                            <i className="fa fa-pencil"></i>
                          </button>
                          <button className="btn-delete" title="Delete" onClick={() => setDeleteItem(author)}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {!isLoading && authors.length > 0 && (
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

      {showAddModal && <AddAuthorModal onClose={() => setShowAddModal(false)} />}
      {editItem && <EditAuthorModal author={editItem} onClose={() => setEditItem(null)} />}
      {deleteItem && (
        <DeleteModal
          title="Author"
          onClose={() => setDeleteItem(null)}
          onConfirm={handleDelete}
          isLoading={deleteMutation.isPending}
        />
      )}
    </div>
  );
}
