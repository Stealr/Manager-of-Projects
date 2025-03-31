import { useState } from "react";

import ProjectList from "./components/ProjectList";
import EmptyState from "./components/EmptyState";
import NewProject from "./components/NewProject";
import EditProject from "./components/EditProject";
import "./styles/dashboard.scss";


function App() {
  const [selected, setSelected] = useState({
    mode: "empty", // "empty", "new", "edit"
    currentProject: null
  });
  const [listProjects, setListProjects] = useState([{
    id: "1",
    title: "testTitle",
    desc: "description",
    date: "10.04.2025",
  }]);

  function handleClickNew() {
    setSelected({
      mode: "new",
      currentProject: null
    });
  }

  function handleSelectProject(project) {
    setSelected({
      mode: "edit",
      currentProject: project
    });
  }

  return (
    <main className="dashboard">
      <ProjectList listProjects={listProjects} onClickAdd={handleClickNew} selectProject={handleSelectProject} />

      <div className={`workspace-container ${selected.mode === "empty" ? "empty" : ""}`}>
        {selected.mode === "new" ? (
          <NewProject changeSelected={setSelected} setListProjects={setListProjects} />
        ) : (selected.mode === "edit" ? (
          <EditProject project={selected.currentProject} />
        ) : (
          < EmptyState onClickAdd={handleClickNew} />
        ))}
      </div>
    </main>
  );
}

export default App;
