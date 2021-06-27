import axios from "axios";

export const request = async (path) => {
  try {
    const response = await axios.get(path);
    const { results } = response.data;

    return results;
  } catch (error) {
    throw error;
  }
};

export const singleRequest = async (path) => {
  try {
    const response = await axios.get(path);
    const { data } = response;
    return await data;
  } catch (error) {
    throw error;
  }
};
