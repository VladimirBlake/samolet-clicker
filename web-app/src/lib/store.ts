import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./features/coins/coinsSlice";
import energyReducer from "./features/energy/energySlice";
import multiplierReducer from "./features/multiplier/multiplierSlice";
import buildingReducer from "./features/building/buildingSlice";
import apartmentsReducer from "./features/apartments/apartmentsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      coins: coinsReducer,
      energy: energyReducer,
      multiplier: multiplierReducer,
      building: buildingReducer,
      apartments: apartmentsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
