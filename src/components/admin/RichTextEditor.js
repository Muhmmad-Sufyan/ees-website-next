"use client";
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
];

export default function RichTextEditor({ value, onChange }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      placeholder="Write your content here..."
    />
  );
}
