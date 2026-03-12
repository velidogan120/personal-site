import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import "../css/header.css";
import allLanguages from "../lib/languages.json";
const Header = () => {
  const { theme, handleToggleTheme } = useTheme();
  const { t, language, handleToggleLanguage } = useLanguage();
  return (
    <header className="container">
      <div className="flex items-center gap-2 text-sm font-medium h-15 justify-end text-gray-800 dark:text-gray-300">
        <button className="button-icon" onClick={handleToggleTheme}>
          <span className="button-circle"></span>
        </button>
        <span className="w-30 text-start">
          {theme === "dark" ? t("modes.dark") : t("modes.light")}
        </span>
        <span>|</span>
        <select
          class="appearance-none bg-transparent text-xs font-bold text-indigo-700 tracking-widest uppercase cursor-pointer focus:outline-none pr-4"
          value={language}
          onChange={(e) => handleToggleLanguage(e.target.value)}
        >
          {Object.values(allLanguages.language).map((lang) => (
            <option
              className="bg-white text-gray-700"
              key={lang.code}
              value={lang.code}
            >
              {lang.title}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-purple-500 font-bold text-xl">A</span>
          </div>
        </div>

        <div className="header-links flex items-center gap-8">
          <nav className="flex gap-6 font-medium">
            <a href="#skills" className="hover:text-indigo-800">
              {t("headers.skills")}
            </a>
            <a href="#projects" className="hover:text-indigo-800">
              {t("headers.projects")}
            </a>
          </nav>
          <a
            href="mailto:velidogan120@gmail.com"
            target="_blank"
            className="button px-8 py-3"
          >
            {t("headers.hire-me")}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
