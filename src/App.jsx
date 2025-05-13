import { useState } from "react";

import Menus from "./components/Menus";
import Project from "./components/Project";
import LargeDataChart from "./components/LargeDataChart";
import G2Charts from "./components/G2Charts";
import { projects } from "./config/projects";
import Telegram from "./pages/Telegram";
import { Spin } from "@arco-design/web-react";

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
          {/* 优化的全屏加载状态指示器 */}
          {/* {isLoading && (
            <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <Spin size="large" />
                <p className="mt-4 text-gray-600 font-medium">
                  正在加载项目资源...
                </p>
              </div>
            </div>
          )} */}
          {/* <G2Charts></G2Charts> */}
          {/* <LargeDataChart></LargeDataChart> */}
          <Project
            project={projects[activeProject]}
            setIsLoading={setIsLoading}
          />

          {/* <Telegram></Telegram> */}
        </div>
      </div>
    </>
  );
}

export default App;
