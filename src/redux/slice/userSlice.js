import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "../../tokenUtils";
import axios from "axios";

// 초기 상태 정의
const initialState = {
  token: "",
  username: "",
  password: "",
  nickname: "",
  gender: "",
  error: null,
};

// 회원가입
export const join = createAsyncThunk("user/join", async (joinData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/members/join",
      joinData
    );
    const { userName, nickName, gender } = response.data.response;
    return { userName, nickName, gender };
  } catch (error) {
    throw error;
  }
});

//로그인
export const login = createAsyncThunk("user/login", async (loginData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/members/login",
      loginData
    );
    const { accessToken } = response.data.response;
    localStorage.setItem("token", accessToken);
    return accessToken;
  } catch (error) {
    throw error;
  }
});

// 유저 정보 수정
export const updateUserData = createAsyncThunk(
  "user/update",
  async (formData) => {
    const updatedData = {
      ...formData,
      userName: formData.username,
      nickName: formData.nickname,
    };

    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/members/myPage/update",
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      const { userName, nickName, gender } = response.data;
      return { userName, nickName, gender };
    } catch (error) {
      throw error;
    }
  }
);

//유저 탈퇴
export const deleteUserData = createAsyncThunk(
  "user/delete",
  async (password) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/members/myPage/delete",
        password,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      return;
    } catch (error) {
      throw error;
    }
  }
);

// 슬라이스 생성
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.token = "";
      state.username = "";
      state.nickname = "";
      state.gender = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(join.fulfilled, (state, action) => {
        state.username = action.payload.userName;
        state.nickname = action.payload.nickName;
        state.gender = action.payload.gender;
      })
      .addCase(join.rejected, (state, action) => {
        console.log("rejected", action.error);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.token = "";
        state.username = "";
        state.nickname = "";
        state.gender = "";
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.username = action.payload.userName;
        state.nickname = action.payload.nickName;
        state.gender = action.payload.gender;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        console.log("rejected", action.error);
      })
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.username = "";
        state.nickname = "";
        state.gender = "";
        state.token = "";
      })
      .addCase(deleteUserData.rejected, (state, action) => {
        console.log("rejected", action.error);
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
