import "/src/styles/edit_project.scss"

export default function EditProject({ project }) {
    return (
        <div className="edit-project">
            <div className="edit-project__project-about">
                <div className="edit-project__title-delete">
                    <h1>{project.title}</h1>
                    <button>Delete</button>
                </div>
                <p className="edit-project__date">{project.date}</p>
                <p className="edit-project__desc">{project.desc}</p>
            </div>
            <hr />
            <div className="edit-project__project-tasks">
                <h2>Tasks</h2>
                <div className="edit-project__add-task">
                    <input />
                    <button>Add Task</button>
                </div>
                <div className="edit-project__list-tasks">
                </div>
            </div>
        </div>
    );
}