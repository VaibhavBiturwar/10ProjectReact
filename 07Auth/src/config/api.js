import axios from "axios";
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
  signup: "users/register",
  //
  allVideos: "videos/getAllVideos",
  //
  allTweets: "tweets/getAllTweets",
  likeTweet: "likes/toggleTweetLike",
  deleteTweet: "tweets/deleteTweet",
  myTweets: "tweets/getUserTweets",
  createTweet: "tweets/createTweet",
  updateTweet: "tweets/updateTweet",
  //
  editProfile: "users/updateUserDetails",
  updateAvatar: "users/updateAvatar",
  updateCoverImage: "users/updateCoverImage",
  changePassword: "users/changePassword",
};
