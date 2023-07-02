import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../tokenUtils";

export const createComment = createAsyncThunk(
  "comments/createComment",
  async ({ postId, content }) => {
    const response = await axios.post(
      "/api/v1/comments",
      {
        postId,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response.data;
  }
);

export const getCommentList = createAsyncThunk(
  "comments/fetchComments",
  async (postId) => {
    const response = await axios.get(`/api/v1/comments/post/${postId}`);
    return response.data;
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId) => {
    const response = await axios.delete(`/api/v1/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return commentId;
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async ({ commentId, content }) => {
    const response = await axios.put(
      `/api/v1/comments/${commentId}`,
      {
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentList.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(deleteComment.rejected, (state, action) => {
        console.log("rejected", action.error);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        return state.filter((comment) => comment.id !== action.payload);
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        const { id, content } = action.payload;
        return state.map((comment) => {
          if (comment.id === id) {
            return { ...comment, content };
          } else {
            return comment;
          }
        });
      });
  },
});
export default commentSlice.reducer;
