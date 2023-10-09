import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  color: "",
};

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    changeBackgroundImage: (state, action) => {
      state.image = action.payload;
    },
    changeBackgroundColor: (state, action) => {
      state.color = action.payload;
      state.image = "";
    },
  },
});

export const { changeBackgroundImage, changeBackgroundColor } = backgroundSlice.actions;

export default backgroundSlice.reducer;
