import { createAppAsyncThunk } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "1": {
    isRented: false,
    isSold: false,
    isUpgraded: false,
  },
  "2": {
    isRented: false,
    isSold: false,
    isUpgraded: false,
  },
  "3": {
    isRented: false,
    isSold: false,
    isUpgraded: false,
  },
  "4": {
    isRented: false,
    isSold: false,
    isUpgraded: false,
  },
  "5": {
    isRented: false,
    isSold: false,
    isUpgraded: false,
  },
  "6": {
    isRented: false,
    isSold: false,
    isUpgraded: false,
  },
  "7": {
    isRented: false,
    isSold: false,
    isUpgraded: false,
  },
  "8": {
    isRented: false,
    isSold: false,
    isUpgraded: false,
  },
};

export type ApartmentsState = (typeof initialState)["1"];

export type ApartKey = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    rentApartment: (state, action: { payload: ApartKey }) => {
      state[action.payload].isRented = true;
    },
    stopRent: (state, action: { payload: ApartKey }) => {
      state[action.payload].isRented = false;
    },
    sellApartment: (state, action: { payload: ApartKey }) => {
      state[action.payload].isSold = true;
    },
    upgradeApartment: (state, action: { payload: ApartKey }) => {
      state[action.payload].isUpgraded = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchApartmentState.fulfilled, (state, action) => {
      state[action.meta.arg] = {
        isRented: action.payload.apartmentInfo.isRented,
        isSold: action.payload.apartmentInfo.isSold,
        isUpgraded: action.payload.apartmentInfo.isUpgraded,
      };
    });
  },
});

export const fetchApartmentState = createAppAsyncThunk(
  "apartments/fetchApartment",
  async (flatNum: ApartKey) => {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/apartmentInfo?flatNum=${flatNum}`,
      {
        method: "GET",
      }
    );
    const responseJson = await response.json();
    return responseJson;
  }
);

export const { rentApartment, stopRent, sellApartment, upgradeApartment } =
  apartmentsSlice.actions;
export default apartmentsSlice.reducer;
