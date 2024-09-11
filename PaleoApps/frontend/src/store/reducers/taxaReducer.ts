import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAppSettings,
  IFilterField,
  IPaginationSettings,
  Taxa,
} from "../../common/types";
interface IOccuranceState {
  taxa: Taxa[];
  taxaToDisplay;
  filterFields: IFilterField[];
  settings: IAppSettings;
}
const initialState: IOccuranceState = {
  taxa: [], // we want to store all taxa retrived from the server and then filter them based on the user's selection only displaying the filtered set but never affecting the orginal set
  taxaToDisplay: [],
  filterFields: [],
  //Each feature with a slice has it's own grid settings to apply on the result set being displayed related to that entity
  settings: {
    pagination: {
      page: 0,
      perPage: 10,
      sortBy: "taxon_no",
      sortOrder: "asc",
    }, // [TODO] this is a hack for now
  },
};
const taxaSlice = createSlice({
  name: "taxa",
  initialState,
  reducers: {
    setTaxa(state, action: PayloadAction<Taxa[]>) {
      state.taxa = action.payload;
      //We had a request to fill full resultset so make a copy for future filtering etc..
      state.taxaToDisplay = action.payload;
    },
    setTaxaToDisplay(state, action: PayloadAction<Taxa[]>) {
      state.taxaToDisplay = action.payload;
    },
    setSettings: (state, action: PayloadAction<IAppSettings>) => {
      state.settings = action.payload;
    },
    setPagination: (state, action: PayloadAction<IPaginationSettings>) => {
      state.settings.pagination = action.payload;
    },
    clearTaxaFilters(state) {
      state.filterFields = [];
    },
    addTaxaFilter(state, action: PayloadAction<IFilterField>) {
      state.filterFields.push(action.payload);
    },
    removeTaxaFilter(state, action: PayloadAction<IFilterField>) {
      state.filterFields = state.filterFields.filter(
        (filter: IFilterField) => filter.field !== action.payload.field
      );
    },

    // Add more reducers as needed
  },
});

export const {
  setTaxa,
  setTaxaToDisplay,
  clearTaxaFilters,
  addTaxaFilter,
  removeTaxaFilter,
  setSettings,
  setPagination,
} = taxaSlice.actions;
//export const selectOccurances = (state: IOccuranceState) => state.taxa;

export default taxaSlice.reducer;
