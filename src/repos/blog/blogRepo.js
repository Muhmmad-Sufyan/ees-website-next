import {
  ADMIN_BLOGS,
  ADMIN_BLOG_DETAIL,
  PUBLIC_BLOGS,
  PUBLIC_BLOG_BY_SLUG,
} from "@/constants/endpoints";
import { get, postFormData, putFormData, del } from "@/constants/api-helper";
import { buildQuery } from "@/repos/helpers";

class BlogRepository {
  static instance;

  static getInstance() {
    if (!BlogRepository.instance) {
      BlogRepository.instance = new BlogRepository();
    }
    return BlogRepository.instance;
  }

  // Admin methods
  async getAll(params = {}) {
    return get(`${ADMIN_BLOGS}${buildQuery(params)}`);
  }

  async getById(id) {
    return get(ADMIN_BLOG_DETAIL(id));
  }

  async create(formData) {
    return postFormData(ADMIN_BLOGS, formData);
  }

  async update(id, formData) {
    return putFormData(ADMIN_BLOG_DETAIL(id), formData);
  }

  async delete(id) {
    return del(ADMIN_BLOG_DETAIL(id));
  }

  // Public methods
  async getPublicAll(params = {}) {
    return get(`${PUBLIC_BLOGS}${buildQuery(params)}`);
  }

  async getPublicBySlug(slug) {
    return get(PUBLIC_BLOG_BY_SLUG(slug));
  }
}

export const BlogRepo = BlogRepository.getInstance();
