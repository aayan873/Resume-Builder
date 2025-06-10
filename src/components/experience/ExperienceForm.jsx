import React from 'react'
import Input from "../Input";
import "../../styles/ExperienceForm.css";
const ExperienceForm = ({experience, setExperience}) => {
    const handleChange = (index, value) =>{
        const key = e.target.getAttribute('data-key');
        const newExperience = [...experience];
        newExperience[index][key] = value;
        setExperienceList(newExperience)
    }

    const handleRemove = (indexToRemove) => {
        setExperience(experience.filter((i) => i != indexToRemove));
    }
  return (
    <div className = "experience-section">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
            <div key = {index} className="Experience-entry">
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
                    data-key="startDates"
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
                <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
    ))}             
    </div>
  )
}

export default ExperienceForm
