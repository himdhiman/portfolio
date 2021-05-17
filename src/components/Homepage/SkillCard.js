import React from "react";

function SkillCard(props) {
  const renderskills = props.skills.map((skill) => {
    var image =
      process.env.PUBLIC_URL +
      "/public/assets/Homepage/images/skills/" +
      skill.svgsrc;
    // var image =
    //   "/Portfolio-frontend-react/public/assets/Homepage/images/skills/" +
    //   skill.svgsrc;
    return <img src={image} key={skill.name} id="skill-img" alt=""></img>;
  });

  return (
    <div className="ui equal width centered grid">
      <div className="ui small images">{renderskills}</div>
    </div>
  );
}

export default SkillCard;
