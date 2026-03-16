import {
  ADMIN_CATEGORIES,
  ADMIN_CATEGORY_DETAIL,
  PUBLIC_CATEGORIES,
  PUBLIC_CATEGORY_BY_SLUG,
} from "@/constants/endpoints";
import { get, post, put, del } from "@/constants/api-helper";
import { buildQuery } from "@/repos/helpers";

class CategoryRepository {
  static instance;

  static getInstance() {
    if (!CategoryRepository.instance) {
      CategoryRepository.instance = new CategoryRepository();
    }
    return CategoryRepository.instance;
  }

  // Admin methods
  async getAll(params = {}) {
    return get(`${ADMIN_CATEGORIES}${buildQuery(params)}`);
  }

  async getById(id) {
    return get(ADMIN_CATEGORY_DETAIL(id));
  }

  async create(data) {
    return post(ADMIN_CATEGORIES, data);
  }

  async update(id, data) {
    return put(ADMIN_CATEGORY_DETAIL(id), data);
  }

  async delete(id) {
    return del(ADMIN_CATEGORY_DETAIL(id));
  }

  // Public methods
  async getPublicAll(params = {}) {
    return get(`${PUBLIC_CATEGORIES}${buildQuery(params)}`);
  }

  async getPublicBySlug(slug) {
    return get(PUBLIC_CATEGORY_BY_SLUG(slug));
  }
}

export const CategoryRepo = CategoryRepository.getInstance();
