import useTheme from "../hooks/useTheme";

const Header = () => {
  const { handleToggleTheme } = useTheme();
  return (
    <header className="container">
      <div className="flex items-center gap-2 text-sm font-medium h-15 justify-end text-gray-800 dark:text-gray-300">
        <button
          className="w-12 h-6 bg-indigo-700 rounded-full relative"
          onClick={handleToggleTheme}
        >
          <span className="absolute right-1 top-1 w-4 h-4 bg-amber-200 rounded-full"></span>
        </button>
        <span>DARK MODE</span>
        <span>|</span>
        <button className="text-sm font-bold">
          <span className="text-indigo-800">TÜRKÇE</span>
          'YE GEÇ
        </button>
      </div>
      <div className="w-full py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-purple-500 font-bold text-xl">A</span>
          </div>
        </div>

        <div className="header-links flex items-center gap-8">
          <nav className="flex gap-6 font-medium">
            <a href="#" className="hover:text-indigo-800">
              Skills
            </a>
            <a href="#" className="hover:text-indigo-800">
              Projects
            </a>
          </nav>
          <button className="button px-8 py-3 ">Hire me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
