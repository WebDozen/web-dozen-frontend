import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { TypeIDP, TypeStatus, TypeStatusTask } from "./types";
import { getEmployeeByID } from "../actions";

export const postIdp = createAsyncThunk<
  TypeIDP,
  { employee_id: string | number; data: {} },
  { rejectValue: unknown }
>("idp/postIdp", async (idpData, { rejectWithValue }) => {
  const { employee_id, data } = idpData;

  try {
    const res = await api.postIdp(employee_id, data);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getIdpByID = createAsyncThunk<
  TypeIDP,
  { id: string | undefined; idp_id: string | undefined },
  { rejectValue: unknown }
>("idp/getIdpByID", async (idpData, { rejectWithValue }) => {
  const { id, idp_id } = idpData;
  try {
    const res = await api.getIdpByID(id, idp_id);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const patchIdpByID = createAsyncThunk<
  TypeIDP,
  { employee_id: string | number; idp_id: string | number; data: {} },
  { rejectValue: unknown }
>("idp/patchIdpByID", async (idpData, { rejectWithValue }) => {
  const { employee_id, idp_id, data } = idpData;
  try {
    const res = await api.patchIdpByID(employee_id, idp_id, data);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const patchIdpsStatusByID = createAsyncThunk<
  TypeStatus,
  {
    employee_id: string | number;
    idp_id: string | number;
    data: { status: string };
  },
  { rejectValue: unknown }
>(
  "idp/patchIdpsStatusByID",
  async (idpsStatusData, { rejectWithValue, dispatch }) => {
    const { employee_id, idp_id, data } = idpsStatusData;
    try {
      const res = await api.patchIdpsStatusByID(employee_id, idp_id, data);
      dispatch(getEmployeeByID(`${employee_id}`));
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const patchTasksStatusByID = createAsyncThunk<
  { task_id: string | number; status: TypeStatusTask },
  {
    employee_id: string | number;
    idp_id: string | number;
    task_id: string | number;
    data: { status_slug: string };
  },
  { rejectValue: {} | unknown }
>(
  "idp/patchTasksStatusByID",
  async (tasksStatusData, { rejectWithValue, dispatch }) => {
    const { idp_id, task_id, data, employee_id } = tasksStatusData;
    try {
      const status = await api.patchTasksStatusByID(idp_id, task_id, data);
      dispatch(getEmployeeByID(`${employee_id}`));
      return { task_id, status };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
