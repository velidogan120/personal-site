const Projects = () => {
  return (
    <div className="container">
      <h2 className="h2 my-10">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 mb-10">
        <div className="card">
          <div className="card-body">
            <img src="/project.jpg" className="card-image" />
            <h3 className="h3 my-4">Workintech</h3>

            <p className="card-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>

            <div className="card-tags">
              <span className="button icon">react</span>
              <span className="button icon">redux</span>
              <span className="button icon">axios</span>
            </div>

            <div className="card-links">
              <a className="card-link">Github</a>
              <a className="card-link">View Site</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src="/project.jpg" className="card-image" />
            <h3 className="h3 my-4">Random Jokes</h3>

            <p className="card-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>

            <div className="card-tags">
              <span className="button icon">react</span>
              <span className="button icon">redux</span>
              <span className="button icon">axios</span>
            </div>

            <div className="card-links">
              <a className="card-link">Github</a>
              <a className="card-link">View Site</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src="/project.jpg" className="card-image" />
            <h3 className="h3 my-4">Journey</h3>

            <p className="card-text">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>

            <div className="card-tags">
              <span className="button icon">react</span>
              <span className="button icon">redux</span>
              <span className="button icon">axios</span>
            </div>

            <div className="card-links">
              <a className="card-link">Github</a>
              <a className="card-link">View Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
