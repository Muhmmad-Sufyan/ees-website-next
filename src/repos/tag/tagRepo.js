import {
  ADMIN_TAGS,
  ADMIN_TAG_DETAIL,
  PUBLIC_TAGS,
  PUBLIC_TAG_BY_SLUG,
} from "@/constants/endpoints";
import { get, post, put, del } from "@/constants/api-helper";
import { buildQuery } from "@/repos/helpers";

class TagRepository {
  static instance;

  static getInstance() {
    if (!TagRepository.instance) {
      TagRepository.instance = new TagRepository();
    }
    return TagRepository.instance;
  }

  // Admin methods
  async getAll(params = {}) {
    return get(`${ADMIN_TAGS}${buildQuery(params)}`);
  }

  async getById(id) {
    return get(ADMIN_TAG_DETAIL(id));
  }

  async create(data) {
    return post(ADMIN_TAGS, data);
  }

  async update(id, data) {
    return put(ADMIN_TAG_DETAIL(id), data);
  }

  async delete(id) {
    return del(ADMIN_TAG_DETAIL(id));
  }

  // Public methods
  async getPublicAll(params = {}) {
    return get(`${PUBLIC_TAGS}${buildQuery(params)}`);
  }

  async getPublicBySlug(slug) {
    return get(PUBLIC_TAG_BY_SLUG(slug));
  }
}

export const TagRepo = TagRepository.getInstance();
