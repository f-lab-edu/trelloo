import { createSlice } from "@reduxjs/toolkit";
import { MODAL_TYPE } from "./../../utils/constants";

export interface ModalState {
  type: string;
}

const initialState: ModalState = {
  type: MODAL_TYPE.NONE,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModal: (state, action) => {
      state.type = action.payload;
    },
    closeModal: (state) => {
      state.type = MODAL_TYPE.NONE;
    },
  },
});

export const { handleModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
