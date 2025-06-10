import React from "react";
import "../../styles/EducationPreview.css";

function EducationInfo({ education }) {
  return (
    <div className="education-preview">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.school}</h3>
          <p>{edu.degree}</p>
          <p>{edu.dates}</p>
          <p>{edu.location}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationInfo;
