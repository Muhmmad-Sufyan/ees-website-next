"use client";
import { useState, useRef } from "react";
import Select from "react-select";
import { useUpdateAuthor } from "@/hooks";
import showToast from "@/utils/showToast";

export default function EditAuthorModal({ author, onClose }) {
  const [name, setName] = useState(author.name || "");
  const [slug, setSlug] = useState(author.slug || "");
  const [bio, setBio] = useState(author.bio || "");
  const [isActive, setIsActive] = useState(author.is_active ? "1" : "0");
  const [imagePreview, setImagePreview] = useState(author.profile_image || null);
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);
  const updateAuthor = useUpdateAuthor();

  const clearError = (field) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      clearError("image");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!slug.trim()) newErrors.slug = "Slug is required.";
    if (!imagePreview && !fileRef.current?.files[0]) newErrors.image = "Profile image is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("bio", bio);
    formData.append("is_active", isActive);
    if (fileRef.current?.files[0]) {
      formData.append("profile_image", fileRef.current.files[0]);
    }

    updateAuthor.mutate(
      { id: author.id, formData },
      {
        onSuccess: () => {
          showToast("success", "Author updated successfully!");
          onClose();
        },
        onError: (err) => {
          showToast("error", err?.response?.data?.message || "Failed to update author.");
        },
      }
    );
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>Edit Author</h3>
          <button className="admin-modal-close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="admin-modal-body">
            <div className="form-group" style={{ textAlign: "center" }}>
              <div
                className={`image-upload-area${errors.image ? " banner-upload-error" : ""}`}
                onClick={() => fileRef.current?.click()}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="image-upload-preview" />
                ) : (
                  <div className="image-upload-placeholder">
                    <i className="fa fa-camera"></i>
                    <span>Upload Image</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileRef}
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              {errors.image && <span className="field-error">{errors.image}</span>}
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className={`form-control${errors.name ? " form-control-error" : ""}`}
                  placeholder="Enter author name"
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
                  placeholder="Enter author slug"
                  value={slug}
                  onChange={(e) => { setSlug(e.target.value); clearError("slug"); }}
                />
                {errors.slug && <span className="field-error">{errors.slug}</span>}
              </div>
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                className="form-control"
                placeholder="Enter author bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={2}
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <Select
                options={[
                  { value: "1", label: "Active" },
                  { value: "0", label: "Inactive" },
                ]}
                value={isActive === "1" ? { value: "1", label: "Active" } : { value: "0", label: "Inactive" }}
                onChange={(selected) => setIsActive(selected.value)}
                classNamePrefix="react-select"
              />
            </div>
          </div>
          <div className="admin-modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save" disabled={updateAuthor.isPending}>
              {updateAuthor.isPending ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
