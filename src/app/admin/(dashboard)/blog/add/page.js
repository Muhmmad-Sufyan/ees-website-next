"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { useGetAuthors, useGetCategories, useGetTags, useCreateBlog } from "@/hooks";
import showToast from "@/utils/showToast";

export default function AddBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);
  const [tagIds, setTagIds] = useState([]);
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [status, setStatus] = useState("published");
  const [bannerImage, setBannerImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { data: authorsData } = useGetAuthors({ page: 1, per_page: 100 });
  const { data: categoriesData } = useGetCategories({ page: 1, per_page: 100 });
  const { data: tagsData } = useGetTags({ page: 1, per_page: 100 });
  const createBlog = useCreateBlog();

  const authors = authorsData?.data || [];
  const categories = categoriesData?.data || [];
  const tags = tagsData?.data || [];

  const tagOptions = tags.map((t) => ({ value: t.id, label: t.name }));
  const categoryOptions = categories.map((c) => ({ value: c.id, label: c.name }));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("author_id", authorId);
    formData.append("content", content);
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    formData.append("status", status);
    categoryIds.forEach((id) => formData.append("category_ids[]", id));
    tagIds.forEach((id) => formData.append("tag_ids[]", id));
    if (bannerImage) {
      formData.append("banner_image", bannerImage);
    }

    createBlog.mutate(formData, {
      onSuccess: () => {
        showToast("success", "Blog created successfully!");
        router.push("/admin/blog");
      },
      onError: (err) => {
        showToast("error", err?.response?.data?.message || "Failed to create blog.");
      },
    });
  };

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Add New Blog</h2>
        <button className="btn-add" onClick={() => router.push("/admin/blog")}>
          <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="blog-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="blog-form-grid">
            <div className="blog-form-main">
              <div className="form-card">
                <div className="form-row">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter blog title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Slug</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter blog slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Content</label>
                  <RichTextEditor value={content} onChange={setContent} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Meta Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter meta title"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Meta Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter meta description"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-form-sidebar">
              <div className="form-card">
                <div className="form-group">
                  <label>Banner Image</label>
                  <div className="banner-upload-area" onClick={() => document.getElementById("banner-input").click()}>
                    {imagePreview ? (
                      <img src={imagePreview} alt="Banner" className="banner-upload-preview" />
                    ) : (
                      <div className="banner-upload-placeholder">
                        <i className="fa fa-image"></i>
                        <span>Click to upload</span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    id="banner-input"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="form-group">
                  <label>Author</label>
                  <select
                    className="form-control"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    required
                  >
                    <option value="">Select Author</option>
                    {authors.map((a) => (
                      <option key={a.id} value={a.id}>{a.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Categories</label>
                  <Select
                    isMulti
                    options={categoryOptions}
                    value={categoryOptions.filter((o) => categoryIds.includes(o.value))}
                    onChange={(selected) => setCategoryIds(selected.map((s) => s.value))}
                    placeholder="Select categories"
                    classNamePrefix="react-select"
                  />
                </div>
                <div className="form-group">
                  <label>Tags</label>
                  <Select
                    isMulti
                    options={tagOptions}
                    value={tagOptions.filter((o) => tagIds.includes(o.value))}
                    onChange={(selected) => setTagIds(selected.map((s) => s.value))}
                    placeholder="Select tags"
                    classNamePrefix="react-select"
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
                <button type="submit" className="btn-save btn-save-full" disabled={createBlog.isPending}>
                  {createBlog.isPending ? "Publishing..." : "Publish Blog"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
