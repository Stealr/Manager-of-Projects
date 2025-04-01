import { useRef, useId, useState } from 'react';
import Modal from "/src/components/Modal";
import '/src/styles/new_project.scss';

export default function NewProject({ changeSelected, setListProjects }) {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const dateRef = useRef(null);

    const dialog = useRef();
    const projectId = useId();
    const [newProject, setNewProject] = useState(null);

    function handleSave(event) {
        event.preventDefault();

        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const date = dateRef.current.value;

        const project = { id: projectId, title, desc, date, tasks: [] };
        setListProjects((prev) => [...prev, project]);
        setNewProject(project);
        
        // Открываем модальное окно
        dialog.current.showModal();
    }

    function handleCancel(event) {
        event.preventDefault();
        changeSelected({
            mode: "empty",
            currentProject: null
        });
    }

    function handleCloseModal() {
        dialog.current.close();
        changeSelected({
            mode: "empty",
            currentProject: null
        });
    }

    function handleEditProject() {
        dialog.current.close();
        changeSelected({
            mode: "edit",
            currentProject: newProject
        });
    }

    return (
        <div className="create-new-project">
            <Modal 
                ref={dialog} 
                title={newProject?.title || ''} 
                onClose={handleCloseModal}
                onEdit={handleEditProject}
            />
            <form onSubmit={handleSave}>
                <div className="create-new-project__control-btns">
                    <button id="btn-cancel" onClick={handleCancel}>Cancel</button>
                    <button id="btn-save" type="submit">Save</button>
                </div>
                <p>
                    <label>TITLE</label>
                    <input ref={titleRef} required />
                </p>
                <p>
                    <label>DESCRIPTION</label>
                    <input ref={descRef} type="text" />
                </p>
                <p>
                    <label>DUE DATE</label>
                    <input ref={dateRef} type="date" />
                </p>
            </form>
        </div>
    );
}