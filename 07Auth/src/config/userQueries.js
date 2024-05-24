import { api, endpoints } from "./api";

export const loginQuery = async ({ email, password }) => {
  try {
    const { data } = await api.post(endpoints.login, {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const videoListQuery = async () => {
  try {
    const { data } = await api.get(endpoints.allVideos);
    return data;
  } catch (error) {
    console.log("🚀 / videoListQuery / error:", error);
    throw error.response.data.message;
  }
};

export const tweetListQuery = async () => {
  try {
    const { data } = await api.get(endpoints.allTweets);
    return data;
  } catch (error) {
    console.log("🚀 / tweetListQuery / error:", error);
    throw error.response.data.message;
  }
};
