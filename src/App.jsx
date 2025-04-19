import { useState } from "react";

import Menus from "./components/Menus";
import Project from "./components/Project";
import LargeDataChart from "./components/LargeDataChart";
import { projects } from "./config/projects";

function App() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <>
      <div className="w-full h-full mx-0 my-auto">
        <div className="flex gap-4  pl-64">
          <Menus
            projects={projects}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
          {/* <LargeDataChart></LargeDataChart> */}
          <Project project={projects[activeProject]} />
        </div>
      </div>
    </>
  );
}

export default App;
