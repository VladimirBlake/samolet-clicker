import {
  Action,
  configureStore,
  createAsyncThunk,
  ThunkAction,
} from "@reduxjs/toolkit";
import coinsReducer from "./features/coins/coinsSlice";
import energyReducer from "./features/energy/energySlice";
import multiplierReducer from "./features/multiplier/multiplierSlice";
import buildingReducer from "./features/building/buildingSlice";
import apartmentsReducer from "./features/apartments/apartmentsSlice";
import userReducer from "./features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      coins: coinsReducer,
      energy: energyReducer,
      multiplier: multiplierReducer,
      building: buildingReducer,
      apartments: apartmentsReducer,
      user: userReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
