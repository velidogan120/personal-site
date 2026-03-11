import React from "react";

const Skill = ({ skill }) => {
  return (
    <div>
      <article key={skill.id}>
        <h3 className="h3">{skill.title}</h3>
        <p className="text-xs my-7">{skill.description}</p>
      </article>
    </div>
  );
};

export default Skill;
