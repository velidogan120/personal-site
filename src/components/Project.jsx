const Project = ({ project }) => {
  return (
    <div>
      <article key={project.id}>
        <div className="card">
          <div className="card-body h-100 flex flex-col">
            <img src={project.owner.avatar_url} className="card-image" />
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
    </div>
  );
};

export default Project;
