import React from 'react'
import Input from "../Input";
import "../../styles/ExperienceForm.css";

const ExperienceForm = ({ experience, setExperience, addExperience }) => {
  const handleChange = (index, e) => {
    const key = e.target.getAttribute('data-key');
    const newExperience = [...experience];
    newExperience[index][key] = e.target.value;
    setExperience(newExperience);
  };

  const handleRemove = (indexToRemove) => {
    setExperience(experience.filter((_, i) => i !== indexToRemove));
  };


    const handleToggleCollapse = (index) => {
        const newExperiences = experience.map((exp, i) => ({
            ...exp, 
            isCollapsed: i === index ? !exp.isCollapsed  : true
        }));
        setExperience(newExperiences);
    };

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      {experience.map((exp, index) =>
        !exp.isCollapsed ? (
          <div key={index} className="experience-entry">
            <Input
              type="text"
              labelText="Company"
              placeholder="Company name"
              value={exp.company}
              onChange={(e) => handleChange(index, e)}
              data-key="company"
            />
            <Input
              type="text"
              labelText="Position"
              placeholder="e.g. Software Engineer"
              value={exp.position}
              onChange={(e) => handleChange(index, e)}
              data-key="position"
            />
            <Input
              type="text"
              labelText="Start Date"
              placeholder="e.g. January 2020"
              value={exp.startDate}
              onChange={(e) => handleChange(index, e)}
              data-key="startDate"
            />
            <Input
              type="text"
              labelText="End Date"
              placeholder="e.g. December 2021"
              value={exp.endDate}
              onChange={(e) => handleChange(index, e)}
              data-key="endDate"
            />
            <Input
              type="text"
              labelText="Location"
              placeholder="e.g. New York, USA"
              value={exp.location}
              onChange={(e) => handleChange(index, e)}
              data-key="location"
            />
            <Input
              type="text"
              labelText="Description"
              placeholder="Describe your role and achievements"
              value={exp.description}
              onChange={(e) => handleChange(index, e)}
              data-key="description"
            />
            <button type="button" onClick={() => handleRemove(index)}>Remove</button>
            <button type="button" onClick={() => handleToggleCollapse(index)}>
              {exp.isCollapsed ? "Expand" : "Collapse"}
            </button>
          </div>
        ) : (
          <div key={index} className="collapsed">
            <p>{exp.company} - {exp.position}</p>
            <button type="button" onClick={() => handleToggleCollapse(index)}>
              {exp.isCollapsed ? "Expand" : "Collapse"}
            </button>
          </div>
        )
      )}
    <button onClick={addExperience}>Add Experience</button>
    </div>
  );
};

export default ExperienceForm;