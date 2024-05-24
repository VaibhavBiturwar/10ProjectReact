import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../store/store.js";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "api/v1/",
});

api.interceptors.request.use(
  (config) => {
    const { authToken } = store.getState().auth;
    if (authToken) {
      config.headers.Authorization = `Bearer Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const endpoints = {
  login: "users/login",
  //
  allVideos: "videos/getAllVideos",
  //
  allTweets: "tweets/getAllTweets",
};
