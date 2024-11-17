import { createSlice } from "@reduxjs/toolkit";

const multiplierSlice = createSlice({
  name: "multiplier",
  initialState: {
    value: 1,
  },
  reducers: {
    setMultiplier: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMultiplier } = multiplierSlice.actions;
export default multiplierSlice.reducer;
