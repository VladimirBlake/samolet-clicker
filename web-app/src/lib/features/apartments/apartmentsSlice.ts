import { AppDispatch, RootState } from "@/lib/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();

const initialState = {
  status: "initial",
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

export const fetchAllApartmentsState = createAppAsyncThunk(
  "apartments/fetchAllApartments",
  async () => {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/allApartments`,
      {
        method: "GET",
      }
    );
    const jsonData = await response.json();
    return jsonData;
  }
);

export type ApartmentsState = (typeof initialState)["1"];
export type ApartmentsInitialState = typeof initialState;

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
    builder.addCase(fetchAllApartmentsState.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllApartmentsState.fulfilled, (state, action) => {
      const newState: ApartmentsInitialState = action.payload.data.reduce(
        (a: {}, apartment: any) => {
          return {
            ...a,
            [apartment.flatNum.toString()]: {
              isRented: apartment.isRented,
              isSold: apartment.isSold,
              isUpgraded: apartment.isUpgraded,
            },
          };
        },
        { status: "loaded" }
      );
      state.status = "loaded";
      state["1"] = newState["1"];
      state["2"] = newState["2"];
      state["3"] = newState["3"];
      state["4"] = newState["4"];
      state["5"] = newState["5"];
      state["6"] = newState["6"];
      state["7"] = newState["7"];
      state["8"] = newState["8"];
    });
  },
});

export const { rentApartment, stopRent, sellApartment, upgradeApartment } =
  apartmentsSlice.actions;
export default apartmentsSlice.reducer;
