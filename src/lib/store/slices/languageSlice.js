import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: JSON.parse(localStorage.getItem("language")) || "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state, action) => {
      state.language =
        action.payload || (state.language === "en" ? "tr" : "en");
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
