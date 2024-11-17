import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCoinsByValue: (state, action) => {
      state.value += action.payload;
    },
    spendValue: (state, action) => {
      state.value -= action.payload;
    },
    setCoinsValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { incrementCoinsByValue, spendValue, setCoinsValue } =
  coinsSlice.actions;
export default coinsSlice.reducer;
