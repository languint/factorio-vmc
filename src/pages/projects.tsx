import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Project } from "@/state";
import { FolderCode } from "lucide-react";

interface Props {
  projects: Project[];
}

export function ProjectsPage({ projects }: Props) {
  return (
    <div className="w-full h-full justify-center items-center">
      {projects.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderCode strokeWidth={1} />
            </EmptyMedia>
            <EmptyTitle>No Projects Yet</EmptyTitle>
            <EmptyDescription>
              You haven't created any projects yet. Get started by creating your
              first project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex gap-2">
              <Button>Create Project</Button>
            </div>
          </EmptyContent>
        </Empty>
      ) : (
        <></>
      )}
    </div>
  );
}
