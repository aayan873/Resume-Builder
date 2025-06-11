import PersonalPreview from './personal/PersonalPreview';
import EducationPreview from './education/EducationPreview';
import ExperiencePreview from './experience/ExperiencePreview';
import ProjectPreview from './project/ProjectPreview';
import React from 'react';
import "../styles/Resume.css";

function Resume({ personalInfo, education, experience, projects }) {
  return (
    <div className="resume">
        <PersonalPreview formData={personalInfo} />
        <EducationPreview education={education} />
        <ExperiencePreview experience={experience} />
        <ProjectPreview projects={projects} />
    </div>
  );
}

export default Resume;
