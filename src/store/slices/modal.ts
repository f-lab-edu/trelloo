import { createSlice } from "@reduxjs/toolkit";
import { MODAL_TYPE } from "./../../utils/constants";

export interface ModalState<TOptions = object, TProps = object> {
  type: string;
  options?: TOptions;
  props?: TProps;
}

const initialState: ModalState<object, object> = {
  type: MODAL_TYPE.NONE,
  options: {},
  props: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModal: (_, action) => {
      return action.payload;
    },
  },
});

export const { handleModal } = modalSlice.actions;

export default modalSlice.reducer;
