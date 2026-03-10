import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./slices/themeSlice";
import LanguageReducer from "./slices/languageSlice"
export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    language: LanguageReducer
  },
});
