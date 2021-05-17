import React from "react";

function SkillCard(props) {
  const renderskills = props.skills.map((skill) => {
    var image =
      "https://github.com/himdhiman/portfolio/blob/master/src/components/Homepage/skills/" +
      skill.svgsrc +
      "?raw=true";
    return <img src={image} key={skill.name} id="skill-img" alt=""></img>;
  });

  return (
    <div className="ui equal width centered grid">
      <div className="ui small images">{renderskills}</div>
    </div>
  );
}

export default SkillCard;
