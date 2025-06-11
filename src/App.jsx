import { useState } from 'react';
import Resume from './components/Resume';
import ResumeInput from './components/ResumeInput';
// import AddEducation from './components/education/addEducation';
import example from "./example";
import './App.css';
import './styles/global.css';
function App() {
  const [personalInfo, setPersonalInfo] = useState(example.personalInfo);
  const [education, setEducation] = useState(example.sections.educations);
  const [experience, setExperience] = useState(example.sections.experiences);
  const [projects, setProjects] = useState(example.sections.projects);
  const addEducation = () => {
    setEducation([...education, { school: '', degree: '', dates: '', location: '' }]);
  }

  const addExperience = () => {
    setExperience([...experience, {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    }]);
  };

  const addProject = () => {
    setProjects([...projects, { title: '', description: '', link: '' }]);
  }

  return (
  <div className="app">
    <div className="resume-input-form">
      <ResumeInput
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
        addEducation={addEducation}
        addExperience={addExperience}
        projects={projects}
        setProjects={setProjects}
        addProject={addProject}
      />
    </div>

    <div className="resume-preview">
      <Resume
        personalInfo={personalInfo}
        education={education}
        experience={experience}
        projects={projects}
      />
    </div>
  </div>
  );
}

export default App;
