import { createSlice } from "@reduxjs/toolkit";

const energySlice = createSlice({
  name: "energy",
  initialState: {
    value: 0,
  },
  reducers: {
    collectEnergy: (state) => {
      const newEnergy = state.value + 1;
      state.value = Math.min(5000, newEnergy);
    },
    spendEnergy: (state) => {
      state.value -= 1;
    },
    setEnergy: (state, action) => {
      state.value = action.payload;
    },
    addEnergy: (state, action) => {
      state.value = Math.min(5000, action.payload + state.value);
    },
  },
});

export const { collectEnergy, spendEnergy, setEnergy, addEnergy } =
  energySlice.actions;
export default energySlice.reducer;
