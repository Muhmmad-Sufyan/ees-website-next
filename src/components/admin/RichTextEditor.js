"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: "" }, { align: "center" }, { align: "right" }, { align: "justify" }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
    ],
  },
};

const formats = [
  "header",
  "bold", "italic", "underline", "strike",
  "color", "background",
  "align",
  "list",
  "blockquote", "code-block",
  "link", "image",
  "indent",
  "width", "height", "style",
];

function ImageResizePopup({ image, onClose, onSave }) {
  const [width, setWidth] = useState(image?.getAttribute("width") || image?.naturalWidth || "");
  const [height, setHeight] = useState(image?.getAttribute("height") || image?.naturalHeight || "");

  const handleSave = () => {
    onSave(width, height);
    onClose();
  };

  return (
    <div className="image-resize-overlay" onClick={onClose}>
      <div className="image-resize-popup" onClick={(e) => e.stopPropagation()}>
        <div className="image-resize-header">
          <h4>Edit Image Size</h4>
          <button className="admin-modal-close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="image-resize-body">
          <div className="image-resize-row">
            <div className="image-resize-field">
              <label>Width (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Auto"
              />
            </div>
            <div className="image-resize-field">
              <label>Height (px)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Auto"
              />
            </div>
          </div>
        </div>
        <div className="image-resize-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save" onClick={handleSave}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default function RichTextEditor({ value, onChange }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      if (e.target.tagName === "IMG" && container.contains(e.target)) {
        setSelectedImage(e.target);
      }
    };

    // Hide tooltip by default, show only on link hover
    const handleMouseOver = (e) => {
      if (e.target.tagName === "A" && e.target.closest(".ql-editor")) {
        const tooltip = container.querySelector(".ql-tooltip");
        if (tooltip && !tooltip.classList.contains("ql-editing")) {
          tooltip.classList.remove("ql-hidden");
          tooltip.classList.add("tooltip-hover-show");
        }
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === "A" && e.target.closest(".ql-editor")) {
        setTimeout(() => {
          const tooltip = container.querySelector(".ql-tooltip");
          if (tooltip && !tooltip.matches(":hover") && !tooltip.classList.contains("ql-editing")) {
            tooltip.classList.remove("tooltip-hover-show");
            tooltip.classList.add("ql-hidden");
          }
        }, 200);
      }
    };

    // Hide tooltip on initial click (Quill shows it on click by default)
    const handleEditorClick = (e) => {
      if (e.target.tagName === "A" && e.target.closest(".ql-editor")) {
        const tooltip = container.querySelector(".ql-tooltip");
        if (tooltip && !tooltip.classList.contains("ql-editing")) {
          tooltip.classList.add("ql-hidden");
          tooltip.classList.remove("tooltip-hover-show");
        }
      }
    };

    // Handle tooltip mouse leave
    const observeTooltip = () => {
      const tooltip = container.querySelector(".ql-tooltip");
      if (tooltip) {
        tooltip.addEventListener("mouseleave", () => {
          if (!tooltip.classList.contains("ql-editing")) {
            tooltip.classList.remove("tooltip-hover-show");
            tooltip.classList.add("ql-hidden");
          }
        });
      }
    };

    document.addEventListener("click", handleClick);
    container.addEventListener("mouseover", handleMouseOver);
    container.addEventListener("mouseout", handleMouseOut);
    container.addEventListener("click", handleEditorClick);
    setTimeout(observeTooltip, 500);

    return () => {
      document.removeEventListener("click", handleClick);
      container.removeEventListener("mouseover", handleMouseOver);
      container.removeEventListener("mouseout", handleMouseOut);
      container.removeEventListener("click", handleEditorClick);
    };
  }, []);

  const handleSave = (width, height) => {
    if (selectedImage) {
      if (width) {
        selectedImage.setAttribute("width", width);
        selectedImage.style.width = width + "px";
      } else {
        selectedImage.removeAttribute("width");
        selectedImage.style.width = "";
      }
      if (height) {
        selectedImage.setAttribute("height", height);
        selectedImage.style.height = height + "px";
      } else {
        selectedImage.removeAttribute("height");
        selectedImage.style.height = "";
      }
      // Trigger onChange so the parent gets updated HTML
      const editor = containerRef.current?.querySelector(".ql-editor");
      if (editor && onChange) {
        onChange(editor.innerHTML);
      }
    }
  };

  return (
    <div ref={containerRef}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your content here..."
      />
      {selectedImage && (
        <ImageResizePopup
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
