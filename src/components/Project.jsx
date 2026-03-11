const Project = ({ project }) => {
  return (
    <div>
      <article key={project.id}>
        <div className="card">
          <div className="card-body h-130 flex flex-col">
            <img src={project.image} className="card-image" />
            <h3 className="h3 my-4">{project.title}</h3>

            <p className="card-text">{project.description}</p>

            <div className="card-tags">
              {project.tags &&
                project.tags.map((tag) => (
                  <span key={tag} className="button icon">
                    {tag}
                  </span>
                ))}
            </div>

            <div className="card-links mt-auto">
              {project.links && (
                <a
                  href={project.links.github}
                  className="card-link"
                  target="_blank"
                >
                  Github
                </a>
              )}
              {project.links && (
                <a
                  href={project.links.view_site}
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
    </div>
  );
};

export default Project;
