import PersonalForm from './personal/PersonalForm';
import EducationForm from "./education/EducationForm";
import ExperienceForm from './experience/ExperienceForm';
import ProjectForm from "./project/ProjectForm";

import React from 'react';
import "../styles/ResumeInput.css";

function ResumeInput({
  personalInfo,
  setPersonalInfo,
  education,
  setEducation,
  experience,
  setExperience,
  addEducation,
  addExperience,
  projects,
  setProjects,
  addProject,
  resetAll,
  loadExample,
  handlePrint
}) {
  return (
    <div className="resume-input">
      <div className="form-buttons">
        <button onClick={resetAll}>Reset</button>
        <button onClick={loadExample}>Load Example</button>
        <button onClick={handlePrint}> Print / Save as PDF</button>
      </div>
      <PersonalForm formData={personalInfo} setFormData={setPersonalInfo} />
      <EducationForm education={education} setEducation={setEducation} addEducation={addEducation} /> 
      <ExperienceForm experience={experience} setExperience={setExperience} addExperience={addExperience} />
      <ProjectForm projects={projects} setProjects={setProjects} addProject={addProject} />
    </div>
  );
}

export default ResumeInput;
