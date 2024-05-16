import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface ToastState {
  messages: string[];
}

const initialState: ToastState = {
  messages: [],
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    pushToast: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    popToast: (state) => {
      state.messages.splice(0, 1);
    },
  },
});

export const { pushToast, popToast } = toastSlice.actions;

export const selectToastMessages = (state: RootState) => state.toast.messages;

export default toastSlice.reducer;
