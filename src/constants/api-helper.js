import axios from "axios";
import { store } from "@/store/store";
import { logout } from "@/store/slices/authSlice";

const BASE_URL =  "http://ees-api.ehya.com.pk/api"

const axiosApi = axios.create({
  baseURL: BASE_URL,
});

axiosApi.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error?.response?.data?.statusCode === 401 &&
      error?.response?.data?.message === "Unauthorized"
    ) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export async function get(url, config = {}) {
  return axiosApi.get(url, { ...config }).then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}

export async function postFormData(url, data, config = {}) {
  return axiosApi
    .post(url, data, {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
        ...(config.headers || {}),
      },
    })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, data, { ...config })
    .then((response) => response.data);
}

export async function putFormData(url, data, config = {}) {
  return axiosApi
    .put(url, data, {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
        ...(config.headers || {}),
      },
    })
    .then((response) => response.data);
}

export async function patch(url, data, config = {}) {
  return axiosApi
    .patch(url, data, { ...config })
    .then((response) => response.data);
}

export async function patchFormData(url, data, config = {}) {
  return axiosApi
    .patch(url, data, {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
        ...(config.headers || {}),
      },
    })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return axiosApi.delete(url, { ...config }).then((response) => response.data);
}

export default axiosApi;
