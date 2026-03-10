import { FaHandPointRight } from "react-icons/fa";
import "../css/footer.css";
import { useLanguage } from "../hooks/useLanguage";
const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-stone-50 dark:bg-slate-950">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 pt-16 pb-20">
        <div className="flex flex-col gap-15">
          <p className="text-5xl text-gray-800 dark:text-gray-300">
            {t("footer.paragraph")}
          </p>
          <a className="flex gap-2 items-center">
            <FaHandPointRight />
            <span className="text-rose-700 underline font-medium">
              velidogan120@gmail.com
            </span>
          </a>
        </div>
        <div className="footer-links self-end justify-self-start lg:justify-self-end">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-gray-950 dark:text-gray-300">
                {t("footer.links.personal-blog")}
              </a>
            </li>
            <li>
              <a href="#" className="text-emerald-600">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="text-sky-600">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
