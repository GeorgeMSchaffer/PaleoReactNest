import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAppSettings,
  IFilterField,
  IPaginationSettings,
  Occurrence,
} from "../../common/types";
interface IOccuranceState {
  occurances: Occurrence[];
  occurancesToDisplay;
  filterFields: IFilterField[];
  settings: IAppSettings;
}
const initialState: IOccuranceState = {
  occurances: [], // we want to store all occurances retrived from the server and then filter them based on the user's selection only displaying the filtered set but never affecting the orginal set
  occurancesToDisplay: [],
  filterFields: [],
  //Each feature with a slice has it's own grid settings to apply on the result set being displayed related to that entity
  settings: {
    pagination: {
      page: 0,
      perPage: 10,
      sortBy: "occurrence_no",
      sortOrder: "asc",
    }, // [TODO] this is a hack for now
  },
};
const occuranceSlice = createSlice({
  name: "occurance",
  initialState,
  reducers: {
    setOccurrences(state, action: PayloadAction<Occurrence[]>) {
      state.occurances = action.payload;
      //We had a request to fill full resultset so make a copy for future filtering etc..
      state.occurancesToDisplay = action.payload;
    },
    setOccurrencesToDisplay(state, action: PayloadAction<Occurrence[]>) {
      state.occurancesToDisplay = action.payload;
    },
    setSettings: (state, action: PayloadAction<IAppSettings>) => {
      state.settings = action.payload;
    },
    setPagination: (state, action: PayloadAction<IPaginationSettings>) => {
      state.settings.pagination = action.payload;
    },
    filterOccurancesByGenus(state, action: PayloadAction<string>) {
      const filteredOccurances = state.occurances.filter((occurance) =>
        occurance.genus.includes(action.payload)
      );
      state.occurancesToDisplay = filteredOccurances;
    },
    filterOccurancesByRank(state, action: PayloadAction<string>) {
      const filteredOccurances = state.occurances.filter((occurance) =>
        occurance.acceptedRank.includes(action.payload)
      );
      state.occurancesToDisplay = filteredOccurances;
    },
    filterOccurancesByEarlyInterval(state, action: PayloadAction<string>) {
      const filteredOccurances = state.occurances.filter((occurance) =>
        occurance.earlyInterval.includes(action.payload)
      );
      state.occurancesToDisplay = filteredOccurances;
    },
    filterOccurancesByLateInterval(state, action: PayloadAction<string>) {
      const filteredOccurances = state.occurances.filter((occurance) =>
        occurance.lateInterval.includes(action.payload)
      );
      state.occurancesToDisplay = filteredOccurances;
    },
    clearOccurranceFilters(state) {
      state.filterFields = [];
    },
    addOccurranceFilter(state, action: PayloadAction<IFilterField>) {
      state.filterFields.push(action.payload);
    },
    removeOccurrenceFilter(state, action: PayloadAction<IFilterField>) {
      state.filterFields = state.filterFields.filter(
        (filter: IFilterField) => filter.field !== action.payload.field
      );
    },

    // Add more reducers as needed
  },
});

export const {
  setOccurrences,
  setOccurrencesToDisplay,
  filterOccurancesByGenus,
  filterOccurancesByRank,
  filterOccurancesByEarlyInterval,
  filterOccurancesByLateInterval,
  clearOccurranceFilters,
  addOccurranceFilter,
  removeOccurrenceFilter,
  setSettings,
  setPagination,
} = occuranceSlice.actions;
//export const selectOccurances = (state: IOccuranceState) => state.occurances;

export default occuranceSlice.reducer;
