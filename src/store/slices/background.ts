import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    changeBackground: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeBackground } = backgroundSlice.actions;

export default backgroundSlice.reducer;
