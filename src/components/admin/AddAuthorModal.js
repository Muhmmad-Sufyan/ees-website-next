"use client";
import { useState, useRef } from "react";
import { useCreateAuthor } from "@/hooks";
import showToast from "@/utils/showToast";

export default function AddAuthorModal({ onClose }) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [bio, setBio] = useState("");
  const [isActive, setIsActive] = useState("1");
  const [imagePreview, setImagePreview] = useState(null);
  const fileRef = useRef(null);
  const createAuthor = useCreateAuthor();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("bio", bio);
    formData.append("is_active", isActive);
    if (fileRef.current?.files[0]) {
      formData.append("profile_image", fileRef.current.files[0]);
    }

    createAuthor.mutate(formData, {
      onSuccess: () => {
        showToast("success", "Author created successfully!");
        onClose();
      },
      onError: (err) => {
        showToast("error", err?.response?.data?.message || "Failed to create author.");
      },
    });
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>Add Author</h3>
          <button className="admin-modal-close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="admin-modal-body">
            <div className="form-group" style={{ textAlign: "center" }}>
              <div
                className="image-upload-area"
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
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter author name"
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
                  placeholder="Enter author slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />
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
              <select
                className="form-control"
                value={isActive}
                onChange={(e) => setIsActive(e.target.value)}
              >
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
          </div>
          <div className="admin-modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save" disabled={createAuthor.isPending}>
              {createAuthor.isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
