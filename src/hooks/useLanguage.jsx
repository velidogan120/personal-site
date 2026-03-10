import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../lib/store/slices/languageSlice";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";
import data from "../lib/data.json";
const useLanguage = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);

  const [, setLanguage] = useLocalStorage({
    key: "language",
    defaultValue: language,
  });

  useEffect(() => {
    setLanguage(language);
  }, [language, setLanguage]);

  const t = (key) => {
    const keys = key.split(".");
    let result = data[language];
    for (const k of keys) {
      if (result === undefined || result === null) return key;
      result = result[k];
    }
    return result || key;
  };
  const handleToggleLanguage = (newLanguage) => {
    dispatch(toggleLanguage(newLanguage));
  };
  return { t, language, handleToggleLanguage };
};

export { useLanguage };
