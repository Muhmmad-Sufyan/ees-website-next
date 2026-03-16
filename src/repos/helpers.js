export const jsonHeaders = (token) => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  ...(token && { Authorization: `Bearer ${token}` }),
});

export const authHeaders = (token) => ({
  Accept: "application/json",
  ...(token && { Authorization: `Bearer ${token}` }),
});

export const buildQuery = (params = {}) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        value.forEach((v) => query.append(`${key}[]`, v));
      } else {
        query.append(key, value);
      }
    }
  });
  const str = query.toString();
  return str ? `?${str}` : "";
};
