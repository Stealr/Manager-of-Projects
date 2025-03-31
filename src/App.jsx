import { useState } from "react";

import ProjectList from "./components/ProjectList";
import EmptyState from "./components/EmptyState";
import NewProject from "./components/NewProject";
import "./styles/dashboard.scss";


function App() {
  const [isSelected, setIsSelected] = useState(true);


  return (
    <main className="dashboard">
      <ProjectList />

      <div className={`workspace-container ${isSelected ? "" : "empty"}`}>
        { isSelected ? <NewProject /> : <EmptyState />}
      </div>
    </main>
  );
}

export default App;
