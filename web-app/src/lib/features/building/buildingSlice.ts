import { createSlice } from "@reduxjs/toolkit";

type BuildingState = {
  currentXp: number;
  level: number;
};

export const xpForEachLevel = 30;

export const buildingSlice = createSlice({
  name: "building",
  initialState: {
    currentXp: 0,
    level: 1,
  },
  reducers: {
    setCurrentBuildingData: (state, action: { payload: BuildingState }) => {
      state.level = action.payload.level;
      state.currentXp = action.payload.currentXp;
    },
    increaseXpByAmount: (state, action) => {
      state.currentXp += action.payload;
      if (state.currentXp >= xpForEachLevel) {
        const newLevel = Math.min(7, state.level + 1);
        const oldLevel = state.level;
        state.level = newLevel;
        state.currentXp =
          newLevel === 7 && oldLevel === 7
            ? xpForEachLevel - 1
            : state.currentXp - xpForEachLevel;
      }
    },
  },
});

export const { setCurrentBuildingData, increaseXpByAmount } =
  buildingSlice.actions;
export default buildingSlice.reducer;
