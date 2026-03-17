"use client";
import { useState } from "react";
import { useUpdateTag } from "@/hooks";
import showToast from "@/utils/showToast";

export default function EditTagModal({ tag, onClose }) {
  const [name, setName] = useState(tag.name || "");
  const [slug, setSlug] = useState(tag.slug || "");
  const updateTag = useUpdateTag();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTag.mutate(
      { id: tag.id, data: { name, slug } },
      {
        onSuccess: () => {
          showToast("success", "Tag updated successfully!");
          onClose();
        },
        onError: (err) => {
          showToast("error", err?.response?.data?.message || "Failed to update tag.");
        },
      }
    );
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>Edit Tag</h3>
          <button className="admin-modal-close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="admin-modal-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter tag name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Slug</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter tag slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="admin-modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save" disabled={updateTag.isPending}>
              {updateTag.isPending ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
