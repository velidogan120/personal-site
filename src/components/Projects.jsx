import { useLanguage } from "../hooks/useLanguage";
import { useProjects } from "../lib/services/mockApiQuery";

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
          projects
            .filter(
              (project) =>
                project.homepage && project.homepage.includes("vercel.app"),
            )
            .map((project) => (
              <article key={project.id}>
                <div className="card">
                  <div className="card-body h-100 flex flex-col">
                    <img
                      src={project.owner.avatar_url}
                      className="card-image"
                    />
                    <h3 className="h3 my-4">{project.name}</h3>

                    <p className="card-text">{project.description}</p>

                    <div className="card-tags">
                      {project.topics?.map((tag) => (
                        <span key={tag} className="button icon">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="card-links mt-auto">
                      {project.html_url && (
                        <a
                          href={project.html_url}
                          className="card-link"
                          target="_blank"
                        >
                          Github
                        </a>
                      )}
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          className="card-link"
                          target="_blank"
                        >
                          View Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))
        )}
      </div>
    </div>
  );
};

export default Projects;
