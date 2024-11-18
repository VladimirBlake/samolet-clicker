import { AppThunk } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

type UserSliceInitialState = {
  status: "idle" | "pending" | "succeeded" | "rejected";
  username: string;
  photoUrl: string;
};

const initialState: UserSliceInitialState = {
  status: "idle",
  username: "",
  photoUrl: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStateLoad: (state, action) => {
      state.username = action.payload.username;
      state.photoUrl = action.payload.photo_url;
    },
  },
});

export const { userStateLoad } = userSlice.actions;

export const fetchUserData = (): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/userData`,
        {
          method: "GET",
        }
      );
      const responseJson = await response.json();
      dispatch(userStateLoad(responseJson.userData));
    } catch (err) {
      console.log(err);
    }
  };
};

export default userSlice.reducer;
