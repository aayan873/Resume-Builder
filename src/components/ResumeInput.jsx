import PersonalForm from './personal/PersonalForm';
import EducationForm from "./education/EducationForm";
import ExperienceForm from './experience/ExperienceForm';
import React from 'react';
import "../styles/ResumeInput.css";

function ResumeInput({ personalInfo, setPersonalInfo, education, setEducation, experience, setExperience, addEducation, addExperience }) {
  return (
    <div className="resume-input">
      <PersonalForm formData={personalInfo} setFormData={setPersonalInfo} />
      <EducationForm education={education} setEducation={setEducation} />

      <button onClick={addEducation}>Add Education</button>

      <ExperienceForm experience={experience} setExperience={setExperience} />
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}

export default ResumeInput;
