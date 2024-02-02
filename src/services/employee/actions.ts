import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { Employee } from "./slice";

export const getEmployeeByID = createAsyncThunk<
  Employee,
  string | undefined,
  { rejectValue: any }
>("employee/getEmployeeByID", async (id, { rejectWithValue }) => {
  try {
    const res = await api.getEmployeeByID(id);
    // // потом убрать
    // console.log("getEmployees() => res", res);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});