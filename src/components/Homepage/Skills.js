import React from 'react';
import SkillCard from './SkillCard';

function Skills() {

    var skills = require('./SkillsDetails.json');

    return (
        <div>
            <h1 id = "heading">Skills</h1>
            <SkillCard skills = {skills.skills}/>
        </div>
    )
}

export default Skills
