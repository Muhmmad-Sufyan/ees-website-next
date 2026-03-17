"use client";
import { useState } from "react";
import { useCreateTag } from "@/hooks";
import showToast from "@/utils/showToast";

export default function AddTagModal({ onClose }) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const createTag = useCreateTag();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTag.mutate(
      { name, slug },
      {
        onSuccess: () => {
          showToast("success", "Tag created successfully!");
          onClose();
        },
        onError: (err) => {
          showToast("error", err?.response?.data?.message || "Failed to create tag.");
        },
      }
    );
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>Add Tag</h3>
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
            <button type="submit" className="btn-save" disabled={createTag.isPending}>
              {createTag.isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
