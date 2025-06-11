import React from 'react'
// import "./ExperiencePreview.css";
import "../../styles/ExperiencePreview.css";

const ExperiencePreview = ({experience}) => {
  return (
    <div className="experience-preview">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
            <div key={index} className="experience-item">
                <div className="dates-location">
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.location}</p>
                </div>
                <div className="others">
                    <h3>{exp.company}</h3>
                    <p><strong>Position:</strong> {exp.position}</p>
                    <p><strong>Description:</strong> {exp.description}</p>
                </div>  
            </div>
        ))}
    </div>
  )
}

export default ExperiencePreview
