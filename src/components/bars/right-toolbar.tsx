import { BoxIcon, FilesIcon } from "lucide-react";
import { ResizablePanel } from "../ui/resizable";
import { ReactNode } from "react";
import { useTool } from "@/state";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Tool {
  icon: ReactNode;
  name: string;
  toolPanel?: ReactNode;
}

export const TOOLS = [
  {
    icon: <FilesIcon className="size-8" strokeWidth={1} />,
    name: "Project Files",
    toolPanel: (
      <div>
        <h1>files</h1>
      </div>
    ),
  },
  {
    icon: <BoxIcon className="size-8" strokeWidth={1} />,
    name: "Package",
    toolPanel: (
      <div>
        <h1>package</h1>
      </div>
    ),
  },
] as Tool[];

export function RightToolbar() {
  const { tool: toolIndex, setTool } = useTool();
  console.log(toolIndex);
  return (
    <TooltipProvider>
      <ResizablePanel collapsedSize={0} maxSize={20} className="border-l">
        {TOOLS[toolIndex].toolPanel}
      </ResizablePanel>
      <div className="h-full w-16 flex flex-col border-l">
        {TOOLS.map((tool, index) => (
          <Tooltip>
            <TooltipTrigger>
              <button
                className={`w-full aspect-square flex items-center justify-center ${
                  toolIndex === index && `border-r border-orange-600`
                }`}
                onClick={() => setTool(index)}
              >
                {tool.icon}
              </button>
            </TooltipTrigger>
            <TooltipContent>{tool.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
