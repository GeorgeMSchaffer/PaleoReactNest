import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { 
  TDiversity } from "../../common/types";
interface IDiversityState {
  diversity: TDiversity[];
  diversityToDisplay: TDiversity[];
}
const initialState: IDiversityState = {
  diversity: [],
  diversityToDisplay: [],
} as IDiversityState;
//see https://redux-toolkit.js.org/tutorials/typescript for satisifies
const diversitySlice = createSlice({
  name: "diversity",
  initialState,
  reducers: {
    setDiversity(state, action: PayloadAction<TDiversity[]>) {
      console.log(`Diversity SLICE !  setDiversity - state`,state, `payload`, action.payload);
      state.diversity = action.payload;
      state.diversityToDisplay = action.payload;
    },
    
    setDiversityToDisplay(state, action: PayloadAction<TDiversity[]>) {
      state.diversityToDisplay = action.payload;
    },
    //[TODO] //Filter Methods
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
  },
});

export const { setDiversity, setDiversityToDisplay } = diversitySlice.actions;
export const selectDiversity = (state: any) => state.diversity;
export const findDiversityById = (state: any, id: number) =>
  state.diversity.find((i: any) => i.intervalNo === id);
export default diversitySlice.reducer;
