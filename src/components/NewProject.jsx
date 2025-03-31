import { useRef, useId } from 'react';

import '/src/styles/new_project.scss';

export default function NewProject({ changeSelected, setListProjects }) {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const dateRef = useRef(null);

    const projectId = useId();

    function handleSave(event) {
        event.preventDefault();

        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const date = dateRef.current.value;

        setListProjects((prev) => [...prev, { id: projectId, title, desc, date }]);
        changeSelected({
            mode: "empty",
            currentProject: null
        });
    }
    // examplePr: {
    //     id: 1231,
    //     title: "testTitle",
    //     desc: "description",
    //     date: "10.04.2025",
    //   }

    function handleCancel(event) {
        event.preventDefault();
        changeSelected({
            mode: "empty",
            currentProject: null
        });
    }

    return (
        <div className="create-new-project">
            <form onSubmit={handleSave}>
                <div className="create-new-project__control-btns">
                    <button id="btn-cancel" onClick={handleCancel}>Cancel</button>
                    <button id="btn-save" type="submit">Save</button>
                </div>
                <p>
                    <label>TITLE</label>
                    <input ref={titleRef} />
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