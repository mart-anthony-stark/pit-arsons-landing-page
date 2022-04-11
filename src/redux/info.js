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
      age: null,
    },
    deliveryMethod: "",
    courier: "",
    deliveryDateTime: "",
    deliveryAddress: {
      firstname: "",
      lastname: "",
      street: "",
      brgy: "",
      city: "",
      region: "",
      country: "",
      zip_code: "",
    },
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

    setCourier: (state, action) => {
      state.courier = action.payload;
    },

    setDeliveryDateTime: (state, action) => {
      state.deliveryDateTime = action.payload;
    },

    setDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
  },
});

export const {
  editCustomer,
  setInstructions,
  setdeliveryMethod,
  setCourier,
  setDeliveryDateTime,
  setDeliveryAddress,
} = infoSlice.actions;
export default infoSlice.reducer;
