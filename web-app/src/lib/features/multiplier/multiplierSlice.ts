import { AppDispatch } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

const multiplierSlice = createSlice({
  name: "multiplier",
  initialState,
  reducers: {
    setMultiplier: (state, action) => {
      const newMultiplier = action.payload;
      state.value = newMultiplier;
    },
  },
});

export const { setMultiplier } = multiplierSlice.actions;
export const setMultiplierWithTimeout = (
  dispatch: AppDispatch,
  value: number
) => {
  dispatch(setMultiplier(value));
  setTimeout(() => {
    dispatch(setMultiplier(1));
  }, 10000);
};
export default multiplierSlice.reducer;
