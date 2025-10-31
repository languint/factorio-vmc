import { BottomToolbar } from "./components/bars/bottom-toolbar";
import { TopToolbar } from "./components/bars/top-toolbar";
import { ProjectView } from "./components/project-view";
import { useProject } from "./state";

export function App() {
  const { project, setProject } = useProject();

  return (
    <div className="App bg-background w-full h-full flex flex-col">
      <TopToolbar />
      <ProjectView current_project={project}/>
      <BottomToolbar current_project={project}/>
    </div>
  );
}
