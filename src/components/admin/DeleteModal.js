"use client";

export default function DeleteModal({ title, onClose, onConfirm, isLoading }) {
  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal admin-modal-sm" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-header">
          <h3>Delete {title}</h3>
          <button className="admin-modal-close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="admin-modal-body" style={{ textAlign: "center" }}>
          <i className="fa fa-exclamation-triangle" style={{ fontSize: "40px", color: "#e53935", marginBottom: "16px", display: "block" }}></i>
          <p style={{ fontSize: "15px", color: "#333", margin: 0 }}>
            Are you sure you want to delete this {title.toLowerCase()}?
          </p>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "8px" }}>
            This action cannot be undone.
          </p>
        </div>
        <div className="admin-modal-footer">
          <button type="button" className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn-delete-confirm" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
