import { useState } from "react";
import "/src/styles/project_list.scss";

export default function ProjectList({ listProjects, onClickAdd, selectProject }) {

    return (
        <div className="projects-list">
            <h2>YOUR PROJECTS</h2>
            <button onClick={onClickAdd} className="projects-list__add-btn">+ Add Project</button>
            <div className="projects-list__projects-skroll">
                {listProjects.map(project =>
                    <button className="projects-list__project-btn"
                        key={project.id}
                        onClick={() => selectProject(project)}> 
                        {project.title}
                    </button>)}
            </div>
        </div>
    );
}