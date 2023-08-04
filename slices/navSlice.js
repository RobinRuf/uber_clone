import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

// Reducer push informations into the data layer, Selectors pull information out of the data layer

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    // state is the current state of the data, while action is the ability to dispatch the current data
    // to the data layer to exchange the old information with the new one
    setOrigin: (state, action) => {
      // The information stored in the action is called 'payload'
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      // The information stored in the action is called 'payload'
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// we need to export all the actions, so we can use it outside this file
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin; // nav, because it is the name of the reducer above
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
