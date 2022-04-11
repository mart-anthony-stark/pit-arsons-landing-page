import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "information",
  initialState: {
    instructions: "",
    customer: {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      gender: "",
      age: 0,
    },
  },
  reducers: {
    editCustomer: (state, action) => {
      state.customer = action.payload;
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },
  },
});

export const { editCustomer, setInstructions } = infoSlice.actions;
export default infoSlice.reducer;
