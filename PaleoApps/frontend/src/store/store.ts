import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import diversitySlice from "./reducers/diversityReducer";
import intervalSlice, {
  fetchIntervalsAction,
  filterIntervalsByIntervalName,
  filterIntervalsByIntervalNo,
  filterIntervalsByIntervalType,
  setIntervals,
} from "./reducers/intervalReducer";
import occuranceSlice, {
  filterOccurancesByEarlyInterval,
  filterOccurancesByGenus,
  filterOccurancesByLateInterval,
  filterOccurancesByRank,
  setOccurrences,
  setOccurrencesToDisplay,
} from "./reducers/occurrenceReducer";
import taxaSlice from "./reducers/taxaReducer";
import rootReducer, {
  setError,
  setLoading,
  setPagination,
} from "./rootReducer";

const store = configureStore({
  reducer: {
    root: rootReducer,
    diversity: diversitySlice,
    intervals: intervalSlice,
    occurances: occuranceSlice,
    taxa: taxaSlice,
  },
});

const exports = {
  ...diversitySlice,
  ...intervalSlice,
  ...taxaSlice,
  ...occuranceSlice,
  ...rootReducer,
  ...store,
};
console.log(`\r \n ------ exports ---------- \r\n`, exports);
//[TODO] Need to redo how we export out the actions and reducers this is too messy
export {
  diversitySlice,
  fetchIntervalsAction,
  filterIntervalsByIntervalName,
  filterIntervalsByIntervalNo,
  filterIntervalsByIntervalType,
  filterOccurancesByEarlyInterval,
  filterOccurancesByGenus,
  filterOccurancesByLateInterval,
  filterOccurancesByRank,
  intervalSlice,
  occuranceSlice,
  setError,
  setIntervals,
  setLoading,
  setOccurrences,
  setOccurrencesToDisplay,
  setPagination,
  taxaSlice,
};
console.log("store state", store.getState());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
