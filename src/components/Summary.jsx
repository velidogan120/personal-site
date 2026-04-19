import { useLanguage } from "../hooks/useLanguage";

const Summary = () => {
  const { t } = useLanguage();
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="order-2 lg:order-1">
        <div className="flex gap-4 items-center">
          <div className="bg-indigo-800 h-0.5 w-15 md:w-30"></div>
          <h4 className="text-indigo-800">VELİ DOĞAN</h4>
        </div>
        <h1 className="font-bold text-7xl text-gray-800 my-10 dark:text-gray-50">
          {t("titles.h1.summary")}
        </h1>
        <p className="my-10">{t("summary.paragraph")}</p>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://velidogan120.github.io/PersonalSite-SCSS/"
              className="button px-7 py-3 "
            >
              {t("buttons.hire-me")}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/velidoğan/"
              className="button px-8 py-3 "
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/velidogan120"
              className="button px-8 py-3 "
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src="./veli.jpg"
          alt="VELİ DOĞAN"
          className="h-100 lg:ms-auto rounded-3xl shadow-2xl"
        ></img>
      </div>
    </div>
  );
};

export default Summary;
