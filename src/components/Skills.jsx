import { useLanguage } from "../hooks/useLanguage";
import { useSkills } from "../lib/services/mockApiQuery";

const Skills = () => {
  const { t, language } = useLanguage();
  const { data: skills = [], isLoading, isError } = useSkills(language);
  return (
    <div className="container mt-30" id="skills">
      <h2 className="h2 my-10">{t("titles.h2.skills")}</h2>
      <div className="grid gap-10 md:gap-20 xl:gap-x-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error: {skills.error.message}</p>
        ) : (
          skills.map((skill) => (
            <article key={skill.id}>
              <h3 className="h3">{skill.title}</h3>
              <p className="text-xs my-7">{skill.description}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default Skills;
