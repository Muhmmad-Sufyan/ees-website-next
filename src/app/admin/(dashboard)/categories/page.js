"use client";
import { useState } from "react";
import Pagination from "@/components/admin/Pagination";
import DeleteModal from "@/components/admin/DeleteModal";
import AddCategoryModal from "@/components/admin/AddCategoryModal";
import EditCategoryModal from "@/components/admin/EditCategoryModal";
import { useGetCategories, useDeleteCategory } from "@/hooks";
import showToast from "@/utils/showToast";

export default function CategoriesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const [showAddModal, setShowAddModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const { data, isLoading, isError } = useGetCategories({
    page: currentPage,
    per_page: perPage,
  });

  const deleteMutation = useDeleteCategory();

  const categories = data?.data || [];
  const meta = data?.meta || {};

  const handleDelete = () => {
    deleteMutation.mutate(deleteItem.id, {
      onSuccess: () => {
        showToast("success", "Category deleted successfully!");
        setDeleteItem(null);
      },
      onError: (err) => {
        showToast("error", err?.response?.data?.message || "Failed to delete category.");
      },
    });
  };

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Categories</h2>
        <button className="btn-add" onClick={() => setShowAddModal(true)}>
          <i className="fa fa-plus"></i> Add Category
        </button>
      </div>
      <div className="admin-table-wrapper">
        {isLoading ? (
          <p style={{ padding: "20px", textAlign: "center" }}>Loading...</p>
        ) : isError ? (
          <p style={{ padding: "20px", textAlign: "center", color: "red" }}>Failed to load categories.</p>
        ) : (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ padding: "40px 20px", textAlign: "center", color: "#888" }}>No data found.</td>
                  </tr>
                ) : (
                  categories.map((cat, index) => (
                    <tr key={cat.id}>
                      <td>{(currentPage - 1) * perPage + index + 1}</td>
                      <td>{cat.name}</td>
                      <td>{cat.slug}</td>
                      <td>{cat.description || "-"}</td>
                      <td>
                        <span className={`badge-status ${cat.is_active ? "badge-active" : "badge-inactive"}`}>
                          {cat.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          <button className="btn-edit" title="Edit" onClick={() => setEditItem(cat)}>
                            <i className="fa fa-pencil"></i>
                          </button>
                          <button className="btn-delete" title="Delete" onClick={() => setDeleteItem(cat)}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {categories.length > 0 && (
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

      {showAddModal && <AddCategoryModal onClose={() => setShowAddModal(false)} />}
      {editItem && <EditCategoryModal category={editItem} onClose={() => setEditItem(null)} />}
      {deleteItem && (
        <DeleteModal
          title="Category"
          onClose={() => setDeleteItem(null)}
          onConfirm={handleDelete}
          isLoading={deleteMutation.isPending}
        />
      )}
    </div>
  );
}
