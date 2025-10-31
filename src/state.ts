import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

export interface ModInfo {
  name: string;
  version: string;
  title: string;
  author: string;
  factorio_version: string;
  dependencies: string[];
}

export interface Project {
  mod_info: ModInfo;
  path: string;
}

export function useProject() {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    invoke<Project | null>("get_project").then(setProject);

    const unlisten = listen<Project | null>("project-changed", (event) => {
      setProject(event.payload);
    });

    return () => {
      unlisten.then((f) => f());
    };
  }, []);

  const updateProject = async (proj: Project | null) => {
    setProject(proj);
    await invoke("set_project", { project: proj });
  };

  return { project, setProject: updateProject };
}

export function useTool() {
  const [tool, setTool] = useState<number>(0);

  useEffect(() => {
    invoke<number>("get_tool").then(setTool);

    const unlisten = listen<number>("tool-changed", (event) => {
      setTool(event.payload);
    });

    return () => {
      unlisten.then((f) => f());
    };
  }, []);

  const updateTool = async (tool: number) => {
    setTool(tool);
    await invoke("set_tool", { tool });
  };

  return { tool, setTool: updateTool };
}
