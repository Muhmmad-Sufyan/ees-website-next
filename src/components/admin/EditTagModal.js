"use client";
import { useState } from "react";
import { useUpdateTag } from "@/hooks";
import showToast from "@/utils/showToast";

export default function EditTagModal({ tag, onClose }) {
  const [name, setName] = useState(tag.name || "");
  const [slug, setSlug] = useState(tag.slug || "");
  const [errors, setErrors] = useState({});
  const updateTag = useUpdateTag();

  const clearError = (field) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!slug.trim()) newErrors.slug = "Slug is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
        <form onSubmit={handleSubmit} noValidate>
          <div className="admin-modal-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className={`form-control${errors.name ? " form-control-error" : ""}`}
                placeholder="Enter tag name"
                value={name}
                onChange={(e) => { setName(e.target.value); clearError("name"); }}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Slug</label>
              <input
                type="text"
                className={`form-control${errors.slug ? " form-control-error" : ""}`}
                placeholder="Enter tag slug"
                value={slug}
                onChange={(e) => { setSlug(e.target.value); clearError("slug"); }}
              />
              {errors.slug && <span className="field-error">{errors.slug}</span>}
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
