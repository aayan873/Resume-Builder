import React from 'react'
// import "./ExperiencePreview.css";
import "../../styles/ExperiencePreview.css";

const ExperiencePreview = ({experience}) => {
  return (
    <div className="experience-preview">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
            <div key={index} className="experience-item">
                <h3>{exp.company}</h3>
                <p><strong>Position:</strong> {exp.position}</p>
                <p><strong>Start Date:</strong> {exp.startDate}</p>
                <p><strong>End Date:</strong> {exp.endDate}</p>
                <p><strong>Location:</strong> {exp.location}</p>
                <p><strong>Description:</strong> {exp.description}</p>
            </div>
        ))}
    </div>
  )
}

export default ExperiencePreview
