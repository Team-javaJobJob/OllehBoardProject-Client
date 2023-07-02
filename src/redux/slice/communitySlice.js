import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getToken } from "../../tokenUtils";

export const createCommunity = createAsyncThunk(
  "communitys/createCommunity",
  async (communityData) => {
    const formData = new FormData();
    formData.append(
      "communityCreateRequest",
      new Blob([JSON.stringify(communityData)], { type: "application/json" })
    );
    formData.append("file", communityData.image);
    const token = getToken();
    const response = await axios.post("/api/v1/communities", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);

export const getCommunity = createAsyncThunk(
  "communitys/getCommunity",
  async () => {
    const response = await axios.get("/api/v1/communities");
    return response.data;
  }
);

export const updateCommunity = createAsyncThunk(
  "communitys/updateCommunity",
  async (updatedData) => {
    const { id, ...rest } = updatedData;
    const token = getToken();
    const response = await axios.put(`/api/v1/communities/${id}`, rest, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const deleteCommunity = createAsyncThunk(
  "communitys/deleteCommunity",
  async (id) => {
    const token = getToken();
    const response = await axios.delete(`/api/v1/communities/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Delete response:", response);
    return;
  }
);

export const fetchCommunitiesByKeyword = createAsyncThunk(
  "communitys/fetchCommunitiesByKeyword",
  async (keyword) => {
    try {
      const response = await axios.get(
        `/api/v1/communities/keyword/${keyword}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
);

const communitySlice = createSlice({
  name: "community",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCommunity.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(createCommunity.rejected, (state, action) => {
        console.log("rejected", action.error);
      })
      .addCase(getCommunity.fulfilled, (state, action) => {
        console.log("Community Data:", action.payload);
        return action.payload;
      })
      .addCase(updateCommunity.fulfilled, (state, action) => {
        console.log("Community Data:", action.payload);
        return action.payload;
      })
      .addCase(deleteCommunity.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default communitySlice.reducer;
