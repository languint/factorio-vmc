import { Project } from "@/state";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { FolderCode } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  current_project: Project | null;
}

export function ProjectView({ current_project }: Props) {
  return (
    <div className="flex grow justify-center items-center">
      {current_project ? (
        <></>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderCode />
            </EmptyMedia>
            <EmptyTitle>No Projects Yet</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t created any projects yet. Get started by creating
              your first project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex gap-2">
              <Button>Create Project</Button>
              {/* <Button variant="outline">Import Project</Button> */}
            </div>
          </EmptyContent>
        </Empty>
      )}
    </div>
  );
}
