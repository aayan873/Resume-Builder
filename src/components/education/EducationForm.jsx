import React from "react";
import Input from "../Input";
import "../../styles/EducationForm.css";

const EducationForm = ({ education, setEducation, addEducation }) => {
  const handleChange = (index, e) => {
    const key = e.target.getAttribute("data-key");
    const newEducation = [...education];
    newEducation[index][key] = e.target.value;
    setEducation(newEducation);
  };

  const handleRemove = (indexToRemove) => {
    const updated = education.filter((_, i) => i !== indexToRemove);
    setEducation(updated);
  };
    const handleToggleCollapse = (index) => {
        const newEducation = education.map((edu, i) => ({
            ...edu, 
            isCollapsed: i === index ? !edu.isCollapsed  : true
        }));
        setEducation(newEducation);
    };

  return (
    <div className="education-section">
      <h2>Education</h2>
      {education.map((edu, index) =>
        !edu.isCollapsed ? (
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
              id={`startDate-${index}`}
              labelText="Start Date"
              placeholder="e.g. January 2020"
              value={edu.startDate}
              onChange={(e) => handleChange(index, e)}
              data-key="startDate"
            />
            <Input
              type="text"
              id={`endDate-${index}`}
              labelText="End Date"
              placeholder="e.g. December 2023"
              value={edu.endDate}
              onChange={(e) => handleChange(index, e)}
              data-key="endDate"
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
            <button onClick={() => handleToggleCollapse(index)}>
              {edu.isCollapsed ? "Expand" : "Collapse"}
            </button>
          </div>
        ) :(
          <div key={index} className="collapsed">
            <p>{edu.school} - {edu.degree}</p>
            <button onClick={() => handleToggleCollapse(index)}>
              {edu.isCollapsed ? "Expand" : "Collapse"}
            </button>
          </div>
        )
      )}
      <button onClick={addEducation}>Add Education</button>;
    </div>
  );
};

export default EducationForm;