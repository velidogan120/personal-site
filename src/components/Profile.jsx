import "../css/profile.css";
import { useLanguage } from "../hooks/useLanguage";

const Profile = () => {
  const { t } = useLanguage();
  return (
    <div className="container">
      <hr />
      <h2 className="h2 my-10">{t("titles.h2.profile")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
        <div className="profile">
          <h3 className="h3">{t("titles.h3.profile")}</h3>
          <dl class="divide-y divide-white/10 mt-5">
            <div class="grid grid-cols-3 gap-4">
              <dt>{t("profile.profile.birth-date-label")}</dt>
              <dd>{t("profile.profile.birth-date-value")}</dd>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <dt>{t("profile.profile.city-label")}</dt>
              <dd>{t("profile.profile.city-value")}</dd>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <dt>{t("profile.profile.education-label")}</dt>
              <dd>{t("profile.profile.education-value")}</dd>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <dt>{t("profile.profile.role")}</dt>
              <dd>{t("profile.profile.role-value")}</dd>
            </div>
          </dl>
        </div>
        <div className="xl:col-span-2">
          <h3 className="h3">{t("titles.h3.about-me")}</h3>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
