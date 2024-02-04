import { createSlice } from "@reduxjs/toolkit";
import type { TypeTaskState } from "./types";

const initialState: TypeTaskState = {
  task: {
    id: 0,
    name: "",
    description: "",
    type: 0,
    status: {
      id: 0,
      name: "",
      slug: "none",
      color_fon: "",
      color_text: "",
    },
    pub_date: "",
    source: "",
  },
  is_open_side_panel: false,
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    handleOpenSidePanel(state, actions) {
      state.task = actions.payload;
      state.is_open_side_panel = true;
    },
    handleCloseSidePanel() {
      return initialState;
    },
  },
});

export const { handleCloseSidePanel, handleOpenSidePanel } = taskSlice.actions;

export default taskSlice.reducer;
