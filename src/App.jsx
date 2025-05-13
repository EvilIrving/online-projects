import { useState } from "react";

import Menus from "./components/Menus";
import Project from "./components/Project";
import LargeDataChart from "./components/LargeDataChart";
import G2Charts from "./components/G2Charts";
import { projects } from "./config/projects";
import Telegram from "./pages/Telegram";

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="w-full h-full mx-0 my-auto text-black">
        <div className="flex gap-4  pl-64">
          <Menus
            projects={projects}
            activeProject={activeProject}
            setActiveProject={(index) => {
              setIsLoading(true);
              setActiveProject(index);
            }}
            isLoading={isLoading} // Pass isLoading to Menus
          />
          {isLoading && <div>Loading...</div>}
          {/* <G2Charts></G2Charts> */}
          {/* <LargeDataChart></LargeDataChart> */}
          <Project project={projects[activeProject]} setIsLoading={setIsLoading} />

          <Telegram></Telegram>
        </div>
      </div>
    </>
  );
}

export default App;
