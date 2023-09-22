import axios from "axios";

// create axios instance
export const customFetch = axios.create({
  baseURL: "https://api.github.com",
});
