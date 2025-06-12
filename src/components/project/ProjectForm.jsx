import React from 'react'
import Input from '../Input'
import "../../styles/ProjectForm.css";

function ProjectForm({ projects, setProjects, addProject }) {
    const handleChange = (e, index) => {
        const key = e.target.getAttribute("data-key");
        const newProjects = [...projects];
        newProjects[index][key] = e.target.value;
        setProjects(newProjects);
    };

    const removeProject = (index) => {
        setProjects(projects.filter((_, i) => i !== index));
    };

    const handleToggleCollapse = (index) => {
        const newProjects = projects.map((proj, i) => ({
            ...proj, 
            isCollapsed: i === index ? !proj.isCollapsed  : true
        }));
        setProjects(newProjects);
    };

    return (
        <div className="project-section">
            <h2>Projects</h2>
            {projects.map((project, index) =>
                !project.isCollapsed ? (
                    <div key={index} className="project-entry">
                        <Input
                            type="text"
                            id={`project-name-${index}`}
                            labelText="Project Name"
                            placeholder="Enter project name"
                            value={project.name}
                            onChange={(e) => handleChange(e, index)}
                            data-key="name"
                        />
                        <Input
                            type="text"
                            id={`project-description-${index}`}
                            labelText="Description"
                            placeholder="Brief description of the project"
                            value={project.description}
                            onChange={(e) => handleChange(e, index)}
                            data-key="description"
                        />
                        <Input
                            type="text"
                            id={`project-link-${index}`}
                            labelText="Project Link"
                            placeholder="URL to the project (if available)"
                            value={project.link}
                            onChange={(e) => handleChange(e, index)}
                            data-key="link"
                        />
                        <button type="button" onClick={() => removeProject(index)}>Remove</button>
                        <button type="button" onClick={() => handleToggleCollapse(index)}>
                            {project.isCollapsed ? "Expand" : "Collapse"}
                        </button>
                    </div>
                ) : (
                    <div key={index} className="collapsed">
                        <p>{project.name}</p>
                        <button type="button" onClick={() => handleToggleCollapse(index)}>
                            {project.isCollapsed ? "Expand" : "Collapse"}
                        </button>
                    </div>
                )
            )}
            <button onClick={addProject}>Add Project</button>

        </div>
    );
}

export default ProjectForm