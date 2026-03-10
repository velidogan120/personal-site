import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
