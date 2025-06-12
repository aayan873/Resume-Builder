import { useState } from 'react';
import Resume from './components/Resume';
import ResumeInput from './components/ResumeInput';
// import AddEducation from './components/education/addEducation';
import example from "./example";
import './App.css';
import './styles/global.css';
import { useEffect } from 'react';
function App() {
  const [personalInfo, setPersonalInfo] = useState(() => {
  const saved = localStorage.getItem("personalInfo");
  return saved ? JSON.parse(saved) : example.personalInfo;
  });
  
  const [education, setEducation] = useState(() => {
    const saved = localStorage.getItem("education");
    return saved ? JSON.parse(saved) : example.sections.educations;
  });
  
  const [experience, setExperience] = useState(() => {
    const saved = localStorage.getItem("experience");
    return saved ? JSON.parse(saved) : example.sections.experiences;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("project");
    return saved ? JSON.parse(saved) : example.sections.projects;
  });

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

  useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(projects));
  }, [projects]);

  const resetAll = () => {
    setPersonalInfo({ fullName: "", email: "", phone: "", address: "" });
    setEducation([{ school: "", degree: "", dates: "", location: "" }]);
    setExperience([{ company: "", position: "", location: "", startDate: "", endDate: "", description: "" }]);
    setProjects([{ title: "", description: "", link: "" }]);
    // Also clear from localStorage
    localStorage.removeItem("personalInfo");
    localStorage.removeItem("education");
    localStorage.removeItem("experience");
    localStorage.removeItem("project");
  };

  const loadExample = () => {
    setPersonalInfo(example.personalInfo);
    setEducation(example.sections.educations);
    setExperience(example.sections.experiences);
    setProjects(example.sections.projects);
  };

  const handlePrint = () => {
    window.print();
  };

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
        resetAll={resetAll}
        loadExample={loadExample}
        handlePrint={handlePrint}
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
