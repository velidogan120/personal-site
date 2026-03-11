import { useLanguage } from "../hooks/useLanguage";
import { useProjects } from "../lib/services/mockApiQuery";
import Project from "./Project";
const Projects = () => {
  const { t } = useLanguage();
  const { data: projects = [], isLoading, isError, error } = useProjects();
  console.log("🚀 ~ Projects ~ projects:", projects);

  return (
    <div id="projects" className="container">
      <h2 className="h2 my-10">{t("projects.title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 mb-10">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error: {error?.message}</p>
        ) : (
          projects.map((project) => (
            <Project key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
