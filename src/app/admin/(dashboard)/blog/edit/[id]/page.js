"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Select from "react-select";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { useGetBlog, useGetAuthors, useGetCategories, useGetTags, useUpdateBlog } from "@/hooks";
import showToast from "@/utils/showToast";

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams();
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
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: blogData, isLoading: blogLoading } = useGetBlog(id);
  const { data: authorsData } = useGetAuthors({ page: 1, per_page: 100 });
  const { data: categoriesData } = useGetCategories({ page: 1, per_page: 100 });
  const { data: tagsData } = useGetTags({ page: 1, per_page: 100 });
  const updateBlog = useUpdateBlog();

  const authors = authorsData?.data || [];
  const categories = categoriesData?.data || [];
  const tags = tagsData?.data || [];

  const authorOptions = authors.map((a) => ({ value: a.id, label: a.name }));
  const tagOptions = tags.map((t) => ({ value: t.id, label: t.name }));
  const categoryOptions = categories.map((c) => ({ value: c.id, label: c.name }));
  const statusOptions = [
    { value: "published", label: "Published" },
    { value: "draft", label: "Draft" },
  ];

  const clearError = (field) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  useEffect(() => {
    if (blogData?.data && !loaded) {
      const blog = blogData.data;
      setTitle(blog.title || "");
      setSlug(blog.slug || "");
      setAuthorId(blog.author_id || blog.author?.id || "");
      setCategoryIds(blog.categories?.map((c) => c.id) || []);
      setTagIds(blog.tags?.map((t) => t.id) || []);
      setContent(blog.content || "");
      setMetaTitle(blog.meta_title || "");
      setMetaDescription(blog.meta_description || "");
      setStatus(blog.status || "published");
      setImagePreview(blog.banner_image_url || blog.banner_image || null);
      setLoaded(true);
    }
  }, [blogData, loaded]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(file);
      setImagePreview(URL.createObjectURL(file));
      clearError("bannerImage");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!slug.trim()) newErrors.slug = "Slug is required.";
    if (!imagePreview && !bannerImage) newErrors.bannerImage = "Banner image is required.";
    if (!content || content === "<p><br></p>") newErrors.content = "Content is required.";
    if (!authorId) newErrors.authorId = "Author is required.";
    if (categoryIds.length === 0) newErrors.categoryIds = "At least one category is required.";
    if (tagIds.length === 0) newErrors.tagIds = "At least one tag is required.";
    if (!metaTitle.trim()) newErrors.metaTitle = "Meta title is required.";
    if (!metaDescription.trim()) newErrors.metaDescription = "Meta description is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("author_id", authorId);
    formData.append("content", content);
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    formData.append("status", status);
    categoryIds.forEach((cid) => formData.append("category_ids[]", cid));
    tagIds.forEach((tid) => formData.append("tag_ids[]", tid));
    if (bannerImage) {
      formData.append("banner_image", bannerImage);
    }

    updateBlog.mutate(
      { id, formData },
      {
        onSuccess: () => {
          showToast("success", "Blog updated successfully!");
          router.push("/admin/blog");
        },
        onError: (err) => {
          showToast("error", err?.response?.data?.message || "Failed to update blog.");
        },
      }
    );
  };

  if (blogLoading) {
    return (
      <div className="admin-content">
        <p style={{ padding: "40px", textAlign: "center" }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Edit Blog</h2>
        <button className="btn-add" onClick={() => router.push("/admin/blog")}>
          <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="blog-form-wrapper">
        <form onSubmit={handleSubmit} noValidate>
          <div className="blog-form-grid">
            <div className="blog-form-main">
              <div className="form-card">
                <div className="form-row">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className={`form-control${errors.title ? " form-control-error" : ""}`}
                      placeholder="Enter blog title"
                      value={title}
                      onChange={(e) => { setTitle(e.target.value); clearError("title"); }}
                    />
                    {errors.title && <span className="field-error">{errors.title}</span>}
                  </div>
                  <div className="form-group">
                    <label>Slug</label>
                    <input
                      type="text"
                      className={`form-control${errors.slug ? " form-control-error" : ""}`}
                      placeholder="Enter blog slug"
                      value={slug}
                      onChange={(e) => { setSlug(e.target.value); clearError("slug"); }}
                    />
                    {errors.slug && <span className="field-error">{errors.slug}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label>Content</label>
                  <div className={errors.content ? "editor-error-wrapper" : ""}>
                    <RichTextEditor value={content} onChange={(val) => { setContent(val); clearError("content"); }} />
                  </div>
                  {errors.content && <span className="field-error">{errors.content}</span>}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Meta Title</label>
                    <input
                      type="text"
                      className={`form-control${errors.metaTitle ? " form-control-error" : ""}`}
                      placeholder="Enter meta title"
                      value={metaTitle}
                      onChange={(e) => { setMetaTitle(e.target.value); clearError("metaTitle"); }}
                    />
                    {errors.metaTitle && <span className="field-error">{errors.metaTitle}</span>}
                  </div>
                  <div className="form-group">
                    <label>Meta Description</label>
                    <input
                      type="text"
                      className={`form-control${errors.metaDescription ? " form-control-error" : ""}`}
                      placeholder="Enter meta description"
                      value={metaDescription}
                      onChange={(e) => { setMetaDescription(e.target.value); clearError("metaDescription"); }}
                    />
                    {errors.metaDescription && <span className="field-error">{errors.metaDescription}</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-form-sidebar">
              <div className="form-card">
                <div className="form-group">
                  <label>Banner Image</label>
                  <div
                    className={`banner-upload-area${errors.bannerImage ? " banner-upload-error" : ""}`}
                    onClick={() => document.getElementById("banner-input").click()}
                  >
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
                  {errors.bannerImage && <span className="field-error">{errors.bannerImage}</span>}
                </div>
                <div className="form-group">
                  <label>Author</label>
                  <div className={errors.authorId ? "select-error-wrapper" : ""}>
                    <Select
                      options={authorOptions}
                      value={authorOptions.find((o) => o.value === authorId) || null}
                      onChange={(selected) => { setAuthorId(selected ? selected.value : ""); clearError("authorId"); }}
                      placeholder="Select author"
                      classNamePrefix="react-select"
                      isClearable
                    />
                  </div>
                  {errors.authorId && <span className="field-error">{errors.authorId}</span>}
                </div>
                <div className="form-group">
                  <label>Categories</label>
                  <div className={errors.categoryIds ? "select-error-wrapper" : ""}>
                    <Select
                      isMulti
                      options={categoryOptions}
                      value={categoryOptions.filter((o) => categoryIds.includes(o.value))}
                      onChange={(selected) => { setCategoryIds(selected.map((s) => s.value)); clearError("categoryIds"); }}
                      placeholder="Select categories"
                      classNamePrefix="react-select"
                    />
                  </div>
                  {errors.categoryIds && <span className="field-error">{errors.categoryIds}</span>}
                </div>
                <div className="form-group">
                  <label>Tags</label>
                  <div className={errors.tagIds ? "select-error-wrapper" : ""}>
                    <Select
                      isMulti
                      options={tagOptions}
                      value={tagOptions.filter((o) => tagIds.includes(o.value))}
                      onChange={(selected) => { setTagIds(selected.map((s) => s.value)); clearError("tagIds"); }}
                      placeholder="Select tags"
                      classNamePrefix="react-select"
                    />
                  </div>
                  {errors.tagIds && <span className="field-error">{errors.tagIds}</span>}
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <Select
                    options={statusOptions}
                    value={statusOptions.find((o) => o.value === status) || statusOptions[0]}
                    onChange={(selected) => setStatus(selected.value)}
                    classNamePrefix="react-select"
                  />
                </div>
                <button type="submit" className="btn-save btn-save-full" disabled={updateBlog.isPending}>
                  {updateBlog.isPending ? "Updating..." : "Update Blog"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
