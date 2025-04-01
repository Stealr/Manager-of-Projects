import "/src/styles/edit_project.scss"
import { useRef } from 'react';

export default function EditProject({ project, onDelete, onDeleteTask, onAddTask }) {
    const titleTaskRef = useRef();

    return (
        <div className="edit-project">
            <div className="edit-project__project-about">
                <div className="edit-project__title-delete">
                    <h1>{project.title}</h1>
                    <button onClick={() => onDelete(project.id)}>Delete</button>
                </div>
                <p className="edit-project__date">{project.date}</p>
                <p className="edit-project__desc">{project.desc}</p>
            </div>
            <hr />
            <div className="edit-project__project-tasks">
                <h2>Tasks</h2>
                <div className="edit-project__add-task">
                    <input ref={titleTaskRef}/>
                    <button onClick={() => onAddTask(project.id, titleTaskRef.current.value)}>Add Task</button>
                </div>
                <div className="edit-project__list-tasks">
                    {
                        project.tasks.length > 0 ? (
                            project.tasks.map((task, index) => (
                                <div key={`${project.id}-task${index}`} className="list-tasks__task">
                                    <div className="list-tasks__checkbox">
                                        <input type="checkbox" />
                                        <label>{task}</label>
                                    </div>
                                    <button onClick={() => onDeleteTask(project.id, index)}>Clear</button>
                                </div>
                            ))
                        ) : (
                            <div>Задач нет :(</div>
                        )
                    }

                </div>
            </div>
        </div>
    );
}