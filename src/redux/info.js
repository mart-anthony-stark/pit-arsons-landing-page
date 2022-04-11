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
    deliveryMethod: "",
  },
  reducers: {
    editCustomer: (state, action) => {
      state.customer = action.payload;
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },

    setdeliveryMethod: (state, action) => {
      state.deliveryMethod =
        action.payload === "deliver" ? "deliver" : "collect";
    },
  },
});

export const { editCustomer, setInstructions, setdeliveryMethod } =
  infoSlice.actions;
export default infoSlice.reducer;
