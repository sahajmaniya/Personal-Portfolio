import * as React from "react";
import ExperienceCard from "./experience";
import companayimg1 from "../assets/img/bharatintern.png";
import companayimg2 from "../assets/img/codeinfosys.png";
import companayimg3 from "../assets/img/NTS-Logo.png";




const experiences = [
    {
        companyImage: companayimg1,
        role: "Web Developer Intern",
        companyName: "Bharat Intern",
        jobDuration:"Aug 2023 - Sep 2023",
     
    },
    {
        companyImage: companayimg2  ,
        role: "Frontend Developer Intern",
        companyName: "Code Infosys",
        jobDuration:"May 2024 - June 2024",   
    },
    {
        companyImage: companayimg3  ,
        role: "Frontend Developer",
        companyName: "Nanditech Solutions",
        jobDuration:"Jan 2025 - June 2025",   
    },

];

const ExperienceSection = () => {
    return (
        <div className="experience-section">
            {experiences.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    companyImage={experience.companyImage}
                    role={experience.role}
                    companyName={experience.companyName}
                    jobDuration={experience.jobDuration}

                />
            ))}
        </div>
    );
};

export default ExperienceSection;
