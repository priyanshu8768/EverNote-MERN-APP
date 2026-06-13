import axios from "axios";

export const resolveApiBaseUrl = (env = import.meta.env) => {
  const configuredUrl = env?.VITE_API_URL?.trim().replace(/\/$/, "");
  return configuredUrl ? `${configuredUrl}/api` : "/api";
};

export const api = axios.create({
  baseURL: resolveApiBaseUrl(),
});
