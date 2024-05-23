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
