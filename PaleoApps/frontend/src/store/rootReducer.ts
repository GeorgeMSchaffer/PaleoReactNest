import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Diversity,
  EnumMessageType,
  IAppSettings,
  IError,
  IMessage,
  Interval,
  IPaginationSettings,
  Occurrence,
  Prevalence,
  Taxa,
} from "../common/types";

// Define the state interfaces
interface RootState {
  diversity: Diversity[];
  messages: IMessage[];
  errors: IError[];
  intervals: Interval[];
  occurances: Occurrence[];
  prevalence: Prevalence[];
  status: "idle" | "loading" | "succeeded" | "failed";
  taxa: Taxa[];
  loading: boolean;
  settings: IAppSettings;
}

// Define the filters interface

// Define the initial state
const initialState: RootState = {
  taxa: [],
  prevalence: [],
  diversity: [],
  intervals: [],
  occurances: [],
  status: "idle",
  errors: [],
  loading: false,
  settings: {
    pagination: {
      page: 0,
      perPage: 10,
      sortBy: "taxonName",
      sortOrder: "asc",
    },
  }, // [TODO] this is a hack for now
  messages: [], //[TODO] display of messages and handling of them should be based on EnumMessageType only
};

// const taxaSlice = createSlice({
//   name: "taxa",
//   initialState,
//   reducers: {
//     setTaxas(state, action: PayloadAction<Taxa[]>) {
//       state.taxa = action.payload;
//     },
//   },
// });

// const occurancesSlice = createSlice({
//   name: "occurance",
//   initialState,
//   reducers: {
//     setOccurances(state, action: PayloadAction<Occurance[]>) {
//       state.occurances = action.payload;
//     },
//   },
// });

// const intervalsSlice = createSlice({
//   name: "interval",
//   initialState,
//   reducers: {
//     setIntervals(state, action: PayloadAction<Interval[]>) {
//       state.intervals = action.payload;
//     },
//   },
// });

// Create the slice
const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    // Define error handling reducer
    setError(state, action: PayloadAction<IError>) {
      action.payload.type = EnumMessageType.ERROR;
      state.errors.push(action.payload);
    },
    clearErrors(state) {
      state.errors = [];
    },
    setPagination(state, action: PayloadAction<IPaginationSettings>) {
      state.settings.pagination = action.payload;
    },
    setInfo(state, action: PayloadAction<IMessage>) {
      action.payload.type = EnumMessageType.INFO;
      state.messages.push(action.payload);
    },
    setWarning(state, action: PayloadAction<IMessage>) {
      action.payload.type = EnumMessageType.WARNING;
      state.messages.push(action.payload);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = true;
    },
    // Add more reducers as needed
  },
});

export const {
  setError,
  setInfo,
  setWarning,
  setLoading,
  clearErrors,
  setPagination,
} = rootSlice.actions;
export default rootSlice.reducer;
