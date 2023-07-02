import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../tokenUtils";

export const createBoard = createAsyncThunk(
  "boards/createBoard",
  async ({ title, content }) => {
    const response = await axios.post(
      "/api/v1/post",
      { title, content },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response.data;
  }
);

export const getBoardList = createAsyncThunk(
  "boards/getBoardList",
  async () => {
    const response = await axios.get("/api/v1/post");
    return response.data;
  }
);

export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async (postUpdateRequest) => {
    const { id } = postUpdateRequest;
    const response = await axios.put(`/api/v1/post/${id}`, postUpdateRequest, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (postId) => {
    const response = await axios.delete(`/api/v1/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  }
);

const boardSlice = createSlice({
  name: "boards",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBoard.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(createBoard.rejected, (state, action) => {
        console.log("rejected", action.error);
      })
      .addCase(getBoardList.fulfilled, (state, action) => {
        return action.payload.reverse();
      })
      .addCase(getBoardList.rejected, (state, action) => {
        console.log("rejected", action.error);
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(updateBoard.rejected, (state, action) => {
        console.log("rejected", action.error);
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        return state.filter((post) => post.id !== action.payload.id);
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        console.log("rejected", action.error);
      });
  },
});

export default boardSlice.reducer;
