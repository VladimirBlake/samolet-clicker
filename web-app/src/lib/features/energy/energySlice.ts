import { createSlice } from "@reduxjs/toolkit";

const energySlice = createSlice({
  name: "energy",
  initialState: {
    status: "not loaded",
    value: 5000,
  },
  reducers: {
    collectEnergy: (state) => {
      const newEnergy = state.value + 1;
      state.value = Math.min(5000, newEnergy);
    },
    spendEnergy: (state, action) => {
      state.value -= action.payload;
    },
    setEnergy: (state, action) => {
      state.value = action.payload;
    },
    addEnergy: (state, action) => {
      state.value = Math.min(5000, action.payload + state.value);
    },
    setLoadedStatus: (state, action) => {
      state.status = "loaded";
    },
  },
});

export const {
  collectEnergy,
  spendEnergy,
  setEnergy,
  addEnergy,
  setLoadedStatus,
} = energySlice.actions;
export default energySlice.reducer;
