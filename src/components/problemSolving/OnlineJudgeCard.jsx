import React from "react";
import './OnlineJudgeCard.scss';

const OnlineJudgeCard = ({onlineJudge}) => {
    return (
        <div className="rounded bg-[#3c5875] hover:bg-[#324c66] shadow-sm hover:shadow-lg p-4 text-center text-white">
            <div className="flex justify-center space-x-2">
                {onlineJudge.img && <img src={onlineJudge.img} alt="" className="w-7 h-7"/>}
                <h4 className="text-2xl tracking-wide judge-name">{onlineJudge.name}</h4>
            </div>
            <h3 className="text-xl tracking-tight pt-3">Username: <span className="font-bold text-[#8fc1f2]">
                <a href={onlineJudge.link} target={'_blank'} rel='noreferrer'>{onlineJudge.username}</a>
               </span>
            </h3>
            <h3 className="text-xl tracking-tight pt-3">Max. Rating: <span
                className="font-bold text-gray-200">{onlineJudge.rating}</span></h3>
        </div>
    );
};

export default OnlineJudgeCard;