import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark } from "../lib/store/slices/themeSlice";

const useTheme = () => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark === "dark");
    localStorage.setItem("theme", dark);
  }, [dark]);

  const handleToggleTheme = () => {
    dispatch(toggleDark());
  };
  return { handleToggleTheme, dark };
};

export default useTheme;
