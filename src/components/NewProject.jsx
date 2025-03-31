import '/src/styles/new_project.scss';

export default function NewProject() {
    return (
        <div className="create-new-project">
            <form>
                <div className="create-new-project__control-btns">
                    <button id="btn-cancel">Cancel</button>
                    <button id="btn-save">Save</button>
                </div>
                <p>
                    <label>TITLE</label>
                    <input />
                </p>
                <p>
                    <label>DESCRIPTION</label>
                    <input type="text"/>
                </p>
                <p>
                    <label>DUE DATE</label>
                    <input type="date"/>
                </p>
            </form>
        </div>
    );
}