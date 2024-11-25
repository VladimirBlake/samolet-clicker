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
  const time = value === 2 ? 1000 * 60 * 5 : 1000 * 60 * 10;
  dispatch(setMultiplier(value));
  setTimeout(() => {
    dispatch(setMultiplier(1));
  }, time);
};
export default multiplierSlice.reducer;
