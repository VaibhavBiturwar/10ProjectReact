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

export const signupQuery = async (formData) => {
  try {
    const { data } = await api.post(endpoints.signup, formData);
    return data;
  } catch (error) {
    console.log("🚀 / signupQuery / error:", error);
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

export const likeTweetQuery = async (tweetId) => {
  try {
    const { data } = await api.post(endpoints.likeTweet, {
      tweetId,
    });
    return data;
  } catch (error) {
    console.log("🚀 / tweetListQuery / error:", error);
    throw error.response.data.message;
  }
};

export const editProfileQuery = async ({ email, username, fullName }) => {
  try {
    const { data } = await api.post(endpoints.editProfile, {
      email,
      username,
      fullName,
    });
    return data;
  } catch (error) {
    console.log("🚀 / editProfileQuery / error:", error);
    throw error.response.data.message;
  }
};

export const myTweetQuery = async () => {
  try {
    const { data } = await api.get(endpoints.myTweets);
    return data;
  } catch (error) {
    console.log("🚀 / myTweetQuery / error:", error);
    throw error.response.data.message;
  }
};

export const DeleteMyTweetQuery = async (id) => {
  try {
    const { data } = await api.post(endpoints.deleteTweet, { id });
    return data;
  } catch (error) {
    console.log("🚀 / DeleteMyTweetQuery / error:", error);
    throw error.response.data.message;
  }
};

export const createTweetQuery = async (data) => {
  try {
    const { data: response } = await api.post(endpoints.createTweet, data);
    return response;
  } catch (error) {
    console.log("🚀 / createTweetQuery / error:", error);
    throw error.response.data.message;
  }
};
export const updateTweetQuery = async (data) => {
  try {
    const { data: response } = await api.patch(endpoints.updateTweet, data);
    return response;
  } catch (error) {
    console.log("🚀 / updateTweetQuery / error:", error);
    throw error.response.data.message;
  }
};
