import '/src/styles/empty_state.scss';

export default function EmptyState() {
    return (
        <div className="empty-state">
            <img src="./src/assets/no-projects.png" alt="no project" />
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <button>Create a new project</button>
        </div>
    );
}