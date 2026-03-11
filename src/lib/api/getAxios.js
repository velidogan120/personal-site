import axios from "axios";

const getMocksApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getGitApi = axios.create({
  baseURL:
    import.meta.env.VITE_GITHUB_API_URL ||
    "https://api.github.com/users/velidogan120/repos",
  headers: {
    "Content-Type": "application/json",
  },
});

export { getMocksApi, getGitApi };
