import { useState } from 'react';
import PersonalForm from './components/personal/PersonalForm';
import PersonalPreview from './components/personal/PersonalPreview';
import EducationForm from './components/education/EducationForm.jsx';
import EducationPreview from './components/education/EducationPreview';
import ExperienceForm from './components/experience/ExperienceForm.jsx';
import ExperiencePreview from './components/experience/ExperiencePreview';
// import AddEducation from './components/education/addEducation';
import example from "./example";


function App() {
  const [personalInfo, setPersonalInfo] = useState(example.personalInfo);
  const [education, setEducation] = useState(example.sections.educations);
  const [experience, setExperience] = useState(example.sections.experiences);

  const addEducation = () => {
    setEducation([...education, { school: '', degree: '', dates: '', location: '' }]);
  }
  const addExperience = () => {
    setExperience([...education, { company: '', position: '', location: '', startDate: '' , endDate: '', description: '' }]);
  }
  return (
    <div className="app">
      <PersonalForm formData={personalInfo} setFormData={setPersonalInfo} />
      <PersonalPreview formData={personalInfo} />

      <EducationForm education={education} setEducation={setEducation} />
      <button onClick={addEducation}>Add Education</button>
      <EducationPreview education={education} />

      <ExperienceForm experience={experience} setExperience={setExperience} />
      <button onClick={addExperience}>Add Experience</button>
      <ExperiencePreview experience={experience} />

      {/* <ExperienceSection experience={experience} setExperience={setExperience} /> */}
      {/* <AddEducation educations={education} setEducations={setEducation} /> */}
    </div>
  );
}

export default App;
