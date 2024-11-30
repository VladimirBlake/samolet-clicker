import { AppThunk } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

type UserSliceInitialState = {
  status: "idle" | "pending" | "succeeded" | "rejected";
  username: string;
  photoUrl: string;
  isNew: boolean;
};

const initialState: UserSliceInitialState = {
  status: "idle",
  username: "",
  photoUrl: "",
  isNew: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStateLoad: (state, action) => {
      state.username = action.payload.username;
      state.photoUrl = action.payload.photo_url;
    },
    setIsNew: (state, action: { payload: boolean }) => {
      state.isNew = action.payload;
    },
  },
});

export const { userStateLoad, setIsNew } = userSlice.actions;

export default userSlice.reducer;
