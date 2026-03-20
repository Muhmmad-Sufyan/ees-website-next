"use client";
import { useState } from "react";
import Select from "react-select";
import { useUpdateCategory } from "@/hooks";
import showToast from "@/utils/showToast";

export default function EditCategoryModal({ category, onClose }) {
  const [name, setName] = useState(category.name || "");
  const [slug, setSlug] = useState(category.slug || "");
  const [description, setDescription] = useState(category.description || "");
  const [isActive, setIsActive] = useState(category.is_active ?? true);
  const [errors, setErrors] = useState({});
  const updateCategory = useUpdateCategory();

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
    updateCategory.mutate(
      { id: category.id, data: { name, slug, description, is_active: isActive } },
      {
        onSuccess: () => {
          showToast("success", "Category updated successfully!");
          onClose();
        },
        onError: (err) => {
          showToast("error", err?.response?.data?.message || "Failed to update category.");
        },
      }
    );
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>Edit Category</h3>
          <button className="admin-modal-close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="admin-modal-body">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className={`form-control${errors.name ? " form-control-error" : ""}`}
                  placeholder="Enter category name"
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
                  placeholder="Enter category slug"
                  value={slug}
                  onChange={(e) => { setSlug(e.target.value); clearError("slug"); }}
                />
                {errors.slug && <span className="field-error">{errors.slug}</span>}
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                placeholder="Enter category description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <Select
                options={[
                  { value: true, label: "Active" },
                  { value: false, label: "Inactive" },
                ]}
                value={isActive ? { value: true, label: "Active" } : { value: false, label: "Inactive" }}
                onChange={(selected) => setIsActive(selected.value)}
                classNamePrefix="react-select"
              />
            </div>
          </div>
          <div className="admin-modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save" disabled={updateCategory.isPending}>
              {updateCategory.isPending ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
