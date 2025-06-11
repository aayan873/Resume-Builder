import "../../styles/ProjectPreview.css";


function ProjectPreview({ projects }) {
    return(
        <div className="project-preview">
            <h2>Projects</h2>
            {projects.map((proj, index) => (
                <div key={index} className="project-item">
                    <h3>{proj.name}</h3>
                    <p><strong>Description:</strong> {proj.description}</p>
                    {proj.link && <p><strong>Link:</strong> <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a></p>}
                </div>
            ))}
        </div>
    );
}

export default ProjectPreview;