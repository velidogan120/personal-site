import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: localStorage.getItem("theme") === "dark" ? "dark" : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDark: (state) => {
      state.dark = state.dark === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.dark);
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { toggleDark } = themeSlice.actions;

export default themeSlice.reducer;
