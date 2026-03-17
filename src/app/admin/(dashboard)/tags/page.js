"use client";
import { useState } from "react";
import Pagination from "@/components/admin/Pagination";
import AddTagModal from "@/components/admin/AddTagModal";
import EditTagModal from "@/components/admin/EditTagModal";
import DeleteModal from "@/components/admin/DeleteModal";
import { useGetTags, useDeleteTag } from "@/hooks";
import showToast from "@/utils/showToast";

export default function TagsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const [showAddModal, setShowAddModal] = useState(false);
  const [editTag, setEditTag] = useState(null);
  const [deleteTag, setDeleteTag] = useState(null);

  const { data, isLoading, isError } = useGetTags({
    page: currentPage,
    per_page: perPage,
  });

  const deleteTagMutation = useDeleteTag();

  const tags = data?.data || [];
  const meta = data?.meta || {};

  const handleDelete = () => {
    deleteTagMutation.mutate(deleteTag.id, {
      onSuccess: () => {
        showToast("success", "Tag deleted successfully!");
        setDeleteTag(null);
      },
      onError: (err) => {
        showToast("error", err?.response?.data?.message || "Failed to delete tag.");
      },
    });
  };

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Tags</h2>
        <button className="btn-add" onClick={() => setShowAddModal(true)}>
          <i className="fa fa-plus"></i> Add Tag
        </button>
      </div>
      <div className="admin-table-wrapper">
        {isLoading ? (
          <p style={{ padding: "20px", textAlign: "center" }}>Loading...</p>
        ) : isError ? (
          <p style={{ padding: "20px", textAlign: "center", color: "red" }}>Failed to load tags.</p>
        ) : (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tags.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ padding: "40px 20px", textAlign: "center", color: "#888" }}>No data found.</td>
                  </tr>
                ) : (
                  tags.map((tag, index) => (
                    <tr key={tag.id}>
                      <td>{(currentPage - 1) * perPage + index + 1}</td>
                      <td>{tag.name}</td>
                      <td>{tag.slug}</td>
                      <td>
                        <div className="actions">
                          <button className="btn-edit" title="Edit" onClick={() => setEditTag(tag)}>
                            <i className="fa fa-pencil"></i>
                          </button>
                          <button className="btn-delete" title="Delete" onClick={() => setDeleteTag(tag)}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {tags.length > 0 && (
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

      {showAddModal && <AddTagModal onClose={() => setShowAddModal(false)} />}
      {editTag && <EditTagModal tag={editTag} onClose={() => setEditTag(null)} />}
      {deleteTag && (
        <DeleteModal
          title="Tag"
          onClose={() => setDeleteTag(null)}
          onConfirm={handleDelete}
          isLoading={deleteTagMutation.isPending}
        />
      )}
    </div>
  );
}
