import { api, endpoints } from "./api";

export const videoListQuery = async () => {
  try {
    const { data } = await api.get(endpoints.allVideos);
    return data;
  } catch (error) {
    console.log("🚀 / videoListQuery / error:", error);
    throw error.response.data.message;
  }
};
