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
    tasks: ["Task1", "Task2"],
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

  function handleDeleteProject(projectId) {
    setListProjects((prevList => (
      prevList.filter(proj => proj.id !== projectId)
    )));

    setSelected({
      mode: "empty",
      currentProject: null
    });
  }

  function handleDeleteTask(projectId, taskIndex) {
    setListProjects((prevList) => {
      const updatedList = prevList.map((proj) => {
        if (projectId === proj.id) {
          return {
            ...proj,
            tasks: proj.tasks.filter((task, index) => index !== taskIndex)
          };
        }
        return proj;
      });

      if (selected.currentProject && selected.currentProject.id === projectId) {
        const updatedProject = updatedList.find(proj => proj.id === projectId);
        setSelected({
          ...selected,
          currentProject: updatedProject
        });
      }

      return updatedList;
    });
  }

  function handleAddTask(projectId, title) {
    setListProjects((prevList) => {
      const updatedList = prevList.map((proj) => {
        if (projectId === proj.id) {
          return {
            ...proj,
            tasks: [...proj.tasks, title]
          };
        }
        return proj;
      });

      if (selected.currentProject && selected.currentProject.id === projectId) {
        const updatedProject = updatedList.find(proj => proj.id === projectId);
        setSelected({
          ...selected,
          currentProject: updatedProject
        });
      }

      return updatedList;
    });
  }

  return (
    <main className="dashboard">

      <ProjectList listProjects={listProjects} onClickAdd={handleClickNew} selectProject={handleSelectProject} />

      <div className={`workspace-container ${selected.mode === "empty" ? "empty" : ""}`}>
        {selected.mode === "new" ? (
          <NewProject changeSelected={setSelected} setListProjects={setListProjects} />
        ) : (selected.mode === "edit" ? (
          <EditProject
            project={selected.currentProject}
            onDelete={handleDeleteProject}
            onDeleteTask={handleDeleteTask}
            onAddTask={handleAddTask} />
        ) : (
          < EmptyState onClickAdd={handleClickNew} />
        ))}
      </div>
    </main>
  );
}

export default App;
