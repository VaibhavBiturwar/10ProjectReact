import { api, endpoints } from "./api";

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
