import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../tokenUtils";

export const createReply = createAsyncThunk(
  "replys/createReply",
  async ({ postId, commentId, content }) => {
    const response = await axios.post(
      "/api/replies",
      {
        postId,
        commentId,
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

export const getReply = createAsyncThunk(
  "replys/getReply",
  async (commentId) => {
    const response = await axios.get(`/api/replies/comment/${commentId}`);
    return response.data;
  }
);

export const updateReply = createAsyncThunk(
  "replys/updateReply",
  async ({ replyId, content }) => {
    const response = await axios.put(
      `/api/replies/${replyId}`,
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

export const deleteReply = createAsyncThunk(
  "replys/deleteReply",
  async (replyId) => {
    const response = await axios.delete(`/api/replies/${replyId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return replyId;
  }
);

const replySlice = createSlice({
  name: "reply",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReply.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(getReply.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteReply.rejected, (state, action) => {
        console.log("rejected", action.error);
      })
      .addCase(deleteReply.fulfilled, (state, action) => {
        return state.filter((reply) => reply.id !== action.payload);
      })
      .addCase(updateReply.fulfilled, (state, action) => {
        const { id, content } = action.payload;
        return state.map((reply) => {
          if (reply.id === id) {
            return { ...reply, content };
          } else {
            return reply;
          }
        });
      });
  },
});
export default replySlice.reducer;
