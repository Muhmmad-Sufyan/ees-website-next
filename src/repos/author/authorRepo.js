import {
  ADMIN_AUTHORS,
  ADMIN_AUTHOR_DETAIL,
  PUBLIC_AUTHORS,
  PUBLIC_AUTHOR_BY_SLUG,
} from "@/constants/endpoints";
import { get, postFormData, del } from "@/constants/api-helper";
import { buildQuery } from "@/repos/helpers";

class AuthorRepository {
  static instance;

  static getInstance() {
    if (!AuthorRepository.instance) {
      AuthorRepository.instance = new AuthorRepository();
    }
    return AuthorRepository.instance;
  }

  // Admin methods
  async getAll(params = {}) {
    return get(`${ADMIN_AUTHORS}${buildQuery(params)}`);
  }

  async getById(id) {
    return get(ADMIN_AUTHOR_DETAIL(id));
  }

  async create(formData) {
    return postFormData(ADMIN_AUTHORS, formData);
  }

  async update(id, formData) {
    formData.append("_method", "PUT");
    return postFormData(ADMIN_AUTHOR_DETAIL(id), formData);
  }

  async delete(id) {
    return del(ADMIN_AUTHOR_DETAIL(id));
  }

  // Public methods
  async getPublicAll(params = {}) {
    return get(`${PUBLIC_AUTHORS}${buildQuery(params)}`);
  }

  async getPublicBySlug(slug) {
    return get(PUBLIC_AUTHOR_BY_SLUG(slug));
  }
}

export const AuthorRepo = AuthorRepository.getInstance();
