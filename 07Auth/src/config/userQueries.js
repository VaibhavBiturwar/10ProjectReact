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

export const updateAvatarQuery = async (data) => {
  try {
    const { data: response } = await api.post(endpoints.updateAvatar, data);
    return response;
  } catch (error) {
    console.log("🚀 / updateTweetQuery / error:", error);
    throw error.response.data.message;
  }
};

export const updateCoverImageQuery = async (data) => {
  try {
    const { data: response } = await api.post(endpoints.updateCoverImage, data);
    return response;
  } catch (error) {
    console.log("🚀 / updateCoverImageQuery / error:", error);
    throw error.response.data.message;
  }
};
