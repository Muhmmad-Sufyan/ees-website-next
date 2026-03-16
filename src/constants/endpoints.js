// Relative paths — baseURL is set in api-helper.js

// ========================
// Admin Auth
// ========================
export const ADMIN_LOGIN = "/admin/login";
export const ADMIN_LOGOUT = "/admin/logout";

// ========================
// Admin Authors
// ========================
export const ADMIN_AUTHORS = "/admin/authors";
export const ADMIN_AUTHOR_DETAIL = (id) => `/admin/authors/${id}`;

// ========================
// Admin Categories
// ========================
export const ADMIN_CATEGORIES = "/admin/categories";
export const ADMIN_CATEGORY_DETAIL = (id) => `/admin/categories/${id}`;

// ========================
// Admin Tags
// ========================
export const ADMIN_TAGS = "/admin/tags";
export const ADMIN_TAG_DETAIL = (id) => `/admin/tags/${id}`;

// ========================
// Admin Blogs
// ========================
export const ADMIN_BLOGS = "/admin/blogs";
export const ADMIN_BLOG_DETAIL = (id) => `/admin/blogs/${id}`;

// ========================
// Public Authors
// ========================
export const PUBLIC_AUTHORS = "/authors";
export const PUBLIC_AUTHOR_BY_SLUG = (slug) => `/authors/${slug}`;

// ========================
// Public Blogs
// ========================
export const PUBLIC_BLOGS = "/blogs";
export const PUBLIC_BLOG_BY_SLUG = (slug) => `/blogs/${slug}`;

// ========================
// Public Categories
// ========================
export const PUBLIC_CATEGORIES = "/categories";
export const PUBLIC_CATEGORY_BY_SLUG = (slug) => `/categories/${slug}`;

// ========================
// Public Tags
// ========================
export const PUBLIC_TAGS = "/tags";
export const PUBLIC_TAG_BY_SLUG = (slug) => `/tags/${slug}`;
