import PersonalPreview from './personal/PersonalPreview';
import EducationPreview from './education/EducationPreview';
import ExperiencePreview from './experience/ExperiencePreview';
import React from 'react';
import "../styles/Resume.css";

function Resume({ personalInfo, education, experience }) {
  return (
    <div className="resume">
      <PersonalPreview formData={personalInfo} />
      <EducationPreview education={education} />
      <ExperiencePreview experience={experience} />
    </div>
  );
}

export default Resume;
