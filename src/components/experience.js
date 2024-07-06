
import calanderimg from "../assets/img/calander.png";


import * as React from "react";

const ExperienceCard = ({ companyImage, role, companyName,jobDuration }) => {
    return (
        <div className="experience-card">
            <div className="experience-card-header">
                <img src={companyImage} alt={`${companyName} logo`} className="experience-card-image" />
                <div className="experience-card-details">
                    <div className="experience-card-role">{role}</div>
                    <div className="experience-card-company">{companyName}</div>
                    <div className='job-duration'> <img className='job-duration-img' src={calanderimg}/> {jobDuration}</div>
                </div>
            </div>
          
      
        </div>
    );
};

export default ExperienceCard;
