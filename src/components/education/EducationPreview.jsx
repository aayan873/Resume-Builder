import React from "react";
import "../../styles/EducationPreview.css";

function EducationInfo({ education }) {
  return (
    <div className="education-preview">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="dates-location">
            <p>{edu.startDate} - {edu.endDate}</p>
            <p>{edu.location}</p>
          </div>
          <div className="others">
          <h3>{edu.school}</h3>
          <p>{edu.degree}</p>
          </div>  
        </div>
      ))}
    </div>
  );
}

export default EducationInfo;
