import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const initialState: FilterState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setValue(
      state,
      action: PayloadAction<{ key: keyof FilterState; value: string }>
    ) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { setValue } = filterSlice.actions;
export default filterSlice.reducer;
