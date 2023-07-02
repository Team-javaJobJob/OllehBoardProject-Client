import axios from 'axios';




export const savePost = async (url, post, token) => {
  try {
    const response = await axios.post(url, post, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



export const getPostList = async (url, token) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

