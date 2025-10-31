import { Project } from "@/state";
import { Menubar } from "../ui/menubar";
import { GripHorizontal } from "lucide-react";
import { Label } from "../ui/label";

interface Props {
  current_project: Project | null;
}

export function BottomToolbar({ current_project }: Props) {
  return (
    <Menubar className="rounded-none border-l-0 border-r-0 border-b-0 absolute bottom-0 w-full m-0 p-0 gap-4">
      <div className="bg-orange-600 h-full flex justify-center items-center px-4">
        <GripHorizontal strokeWidth={1} />
      </div>
      {current_project && (
        <Label>
          {`${current_project.mod_info.name}@${current_project.mod_info.version}`}
        </Label>
      )}
    </Menubar>
  );
}
