import React from "react";
import './skillCard.scss';

const SkillCard = ({skill}) => {
    return (
        <div className="flex skill-card">
            {skill.icon && <div className="text-2xl">{skill.icon}</div>}
            {skill.img && <img src={skill.img} className="h-7 w-7" alt=""></img>}
            <div className="text-gray-500 text-lg">{skill.name}</div>
        </div>
    );
};

export default SkillCard;