import { BottomToolbar } from "./components/bars/bottom-toolbar";
import { TopToolbar } from "./components/bars/top-toolbar";

import { useProject, useTool } from "./state";
import "./app.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { Page } from "./components/page";
import { RightToolbar } from "./components/bars/right-toolbar";
import { ProjectsPage } from "./pages/projects";

export function App() {
  const { project, setProject } = useProject();
  const { tool: toolIndex} = useTool();

  return (
    <div className="App bg-background w-full h-full flex flex-col">
      <TopToolbar />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <Page>
            <ProjectsPage projects={[]} />
          </Page>
        </ResizablePanel>
        {toolIndex != 255 && <ResizableHandle withHandle />}
        <RightToolbar />
      </ResizablePanelGroup>
      <BottomToolbar current_project={project} />
    </div>
  );
}
