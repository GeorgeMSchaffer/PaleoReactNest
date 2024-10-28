import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAppSettings,
  IQueryFilterField,
  TInterval,
  IPaginationSettings,
} from "../../common/types";
interface IIntervalState {
  intervals: TInterval[];
  intervalsToDisplay: TInterval[];
  loading: boolean;
  settings: IAppSettings;
  filterFields: IQueryFilterField[];

  //  pagination: IPaginationSettings;
}
const initialState: IIntervalState = {
  intervals: [],
  loading: false,
  settings: {
    pagination: {
      take: 25,
      skip: 0,
      orderBy: "intervalNo",
      orderDir: "asc",
    },
  },
  filterFields: [],
  intervalsToDisplay: [], // filtered intervals
};

// function intervalsReducer(state = initialState, action: any) {
//   switch (action.type) {
//     case "interval/setIntervals":
//       const rtn = { ...state, intervals: action.payload };
//       console.log("intervalsReducer", rtn);
//       return rtn;
//     default:
//       return state;
//   }
export const getIntervalsAction = createAction<TInterval[]>("GET_INTERVALS");
export const fetchIntervalsAction = createAction<TInterval>("FETCH_INTERVALS");
export const setIntervalsAction = createAction<TInterval[]>("SET_INTERVALS");
export const filterIntervalsByIntervalNameAction = createAction<TInterval[]>(
  "FILTER_INTERVALS_BY_INTERVAL_NAME"
);
export const filterIntervalsByIntervalNoAction = createAction<TInterval[]>(
  "FILTER_INTERVALS_BY_INTERVAL_NO"
);
export const filterIntervalsByIntervalsByTypeAction = createAction<TInterval[]>(
  "FILTER_INTERVALS_BY_INTERVAL_TYPE"
);

const intervalSlice = createSlice({
  name: "interval",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = true;
    },
    setIntervals: (state, action: PayloadAction<TInterval[]>) => {
      state.intervals = action.payload;
      state.intervalsToDisplay = action.payload;
    },
    setIntervalsToDisplay: (state, action: PayloadAction<TInterval[]>) => {
      state.intervalsToDisplay = action.payload;
    },
    setSettings: (state, action: PayloadAction<IAppSettings>) => {
      state.settings = action.payload;
    },
    setPagination: (state, action: PayloadAction<IPaginationSettings>) => {
      state.settings.pagination = action.payload;
    },
    // Add more reducers as needed

    filterIntervalsByIntervalName: (state, action: PayloadAction<string>) => {
      console.log("🚀 ~ state, action:", state, action);
      const filteredIntervals = state.intervals.filter((interval) =>
        interval.intervalName.includes(action.payload)
      );
      state.intervals = filteredIntervals;
    },
    filterIntervalsByIntervalNo: (state, action: PayloadAction<number>) => {
      const filteredIntervals = state.intervals.filter(
        (interval) => interval.intervalNo === action.payload
      );
      state.intervals = filteredIntervals;
    },
    filterIntervalsByIntervalType: (state, action: PayloadAction<string>) => {
      const filteredIntervals = state.intervals.filter(
        (interval) => interval.recordType === action.payload
      );
      state.intervals = filteredIntervals;
    },
    clearIntervalFilters(state) {
      state.filterFields = [];
    },
    addIntervalFilter(state, action: PayloadAction<IQueryFilterField>) {
      // //if there is already a filter for this field append it to the value so early_interval=XYZ,ABC
      // debugger;
      // if (state.filterFields.find((f) => f.field === action.payload.field)) {
      //   state.filterFields[action.payload.field].value.push(
      //     action.payload.value
      //   );
      // } else {
      //   state.filterFields[action.payload.field] = action.payload;
      // }

      state.filterFields = [action.payload];
    },
    removeIntervalFilter(state, action: PayloadAction<IQueryFilterField>) {
      state.filterFields = state.filterFields.filter(
        (filter: IQueryFilterField) => filter.field !== action.payload.field
      );
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
  },
});

export const {
  setIntervals,
  setLoading,
  filterIntervalsByIntervalName,
  filterIntervalsByIntervalNo,
  filterIntervalsByIntervalType,
  setIntervalsToDisplay,
  setPagination,
  setSettings,
  clearIntervalFilters,
  addIntervalFilter,
  removeIntervalFilter,
  // Add more actions as needed
} = intervalSlice.actions;
export const selectIntervals = (state: IIntervalState) => state.intervals;
export const findIntervalById = (state: IIntervalState, id: number) =>
  state.intervals.find((i) => i.intervalNo === id);
export default intervalSlice.reducer;
