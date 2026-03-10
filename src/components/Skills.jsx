const Skills = () => {
  return (
    <div className="container mt-30">
      <h2 className="h2 my-10">Skills</h2>
      <div className="grid gap-10 md:gap-20 xl:gap-x-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <article>
          <h3 className="h3">JavaScript</h3>
          <p className="text-xs my-7">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article>
          <h3 className="h3">React.Js</h3>
          <p className="text-xs my-7">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article>
          <h3 className="h3">Node.Js</h3>
          <p className="text-xs my-7">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Skills;
