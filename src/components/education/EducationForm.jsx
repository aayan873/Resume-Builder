import React from "react";
import Input from "../Input";
import "../../styles/EducationForm.css";

const EducationForm = ({ education, setEducation })=> {
  const handleChange = (index, e) => {
    const key = e.target.getAttribute("data-key");
    const newEducation = [...education];
    newEducation[index][key] = e.target.value;
    setEducation(newEducation);
  };

  const handleRemove = (indexToRemove) => {
    const updated = education.filter((i) => i !== indexToRemove);
    setEducation(updated);
  };

  return (
    <div className="education-section">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-entry">
          <Input
            type="text"
            id={`school-${index}`}
            labelText="School"
            placeholder="Enter school name"
            value={edu.school}
            onChange={(e) => handleChange(index, e)}
            data-key="school"
          />
          <Input
            type="text"
            id={`degree-${index}`}
            labelText="Degree"
            placeholder="e.g. B.Tech Computer Science"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            data-key="degree"
          />
          <Input
            type="text"
            id={`dates-${index}`}
            labelText="Duration"
            placeholder="e.g. 2020 - 2024"
            value={edu.dates}
            onChange={(e) => handleChange(index, e)}
            data-key="dates"
          />
          <Input
            type="text"
            id={`location-${index}`}
            labelText="Location"
            placeholder="e.g. Mumbai, India"
            value={edu.location}
            onChange={(e) => handleChange(index, e)}
            data-key="location"
          />
        <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default EducationForm;
